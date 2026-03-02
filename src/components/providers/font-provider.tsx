"use client";

import { useEffect } from "react";

interface IFontProviderProps {
  children: React.ReactNode;
  variables: string[];
}

function FontProvider({ children, variables }: IFontProviderProps) {
  useEffect(() => {
    document.documentElement.classList.add(...variables);
    return () => {
      document.documentElement.classList.remove(...variables);
    };
  }, [variables]);

  return <>{children}</>;
}

export { FontProvider };
