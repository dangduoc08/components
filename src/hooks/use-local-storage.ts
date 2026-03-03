"use client";

import * as React from "react";

interface IUseLocalStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: IUseLocalStorageOptions<T> = {},
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const { initializeWithValue = true } = options;

  const resolveInitialValue = (): T =>
    initialValue instanceof Function ? initialValue() : initialValue;

  const serialize = (value: T): string =>
    options.serializer ? options.serializer(value) : JSON.stringify(value);

  const deserialize = (raw: string): T => {
    if (options.deserializer) return options.deserializer(raw);
    if (raw === "undefined") return undefined as unknown as T;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return resolveInitialValue();
    }
  };

  const readValue = (): T => {
    if (IS_SERVER) return resolveInitialValue();
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserialize(raw) : resolveInitialValue();
    } catch {
      return resolveInitialValue();
    }
  };

  const [storedValue, setStoredValue] = React.useState<T>(() =>
    initializeWithValue ? readValue() : resolveInitialValue(),
  );

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    if (IS_SERVER) return;
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, serialize(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent("local-storage", { key }));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    if (IS_SERVER) return;
    window.localStorage.removeItem(key);
    setStoredValue(resolveInitialValue());
    window.dispatchEvent(new StorageEvent("local-storage", { key }));
  };

  const readValueRef = React.useRef(readValue);
  readValueRef.current = readValue;

  const prevKeyRef = React.useRef(key);
  if (prevKeyRef.current !== key) {
    prevKeyRef.current = key;
    setStoredValue(readValue());
  }

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key && event.key !== key) return;
      setStoredValue(readValueRef.current());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(
      "local-storage",
      handleStorageChange as EventListener,
    );

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "local-storage",
        handleStorageChange as EventListener,
      );
    };
  }, [key]);

  return [storedValue, setValue, removeValue];
}

export type { IUseLocalStorageOptions };
