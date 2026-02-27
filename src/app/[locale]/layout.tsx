import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Providers } from "@/components/providers";
import { DEFAULT_THEME } from "@/components/providers/constants";
import { routing } from "@/i18n/routing";
import { getThemes } from "@/lib/themes";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owlky — AI-Powered HR Platform",
  description: "Hire smarter with AI that works like your best recruiter",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const themes = getThemes();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          id="theme-stylesheet"
          rel="stylesheet"
          href={`/themes/${DEFAULT_THEME}.css`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themes={themes}>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
