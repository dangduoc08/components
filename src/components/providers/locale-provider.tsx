"use client";

import { NextIntlClientProvider } from "next-intl";
import { type ComponentProps, useEffect } from "react";
import { SETTINGS_STORAGE_KEY } from "./constants";
import type { TSettings } from "./types";

type TNextIntlProps = ComponentProps<typeof NextIntlClientProvider>;

interface ILocaleProviderProps {
  children: React.ReactNode;
  locale: string;
  messages: TNextIntlProps["messages"];
  timeZone: string;
}

function LocaleProvider({
  children,
  locale,
  messages,
  timeZone,
}: ILocaleProviderProps) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      const settings = raw ? (JSON.parse(raw) as Partial<TSettings>) : {};
      localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify({ ...settings, locale }),
      );
    } catch {}
  }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}

export { LocaleProvider };
