import type { Metadata } from "next";
import { Inter, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Providers } from "@/components/providers";
import { FontProvider } from "@/components/providers/font-provider";
import { routing } from "@/i18n/routing";
import { getThemes } from "@/lib/themes";
import "../globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      <body>
        <FontProvider
          variables={[
            fontSans.variable,
            fontSerif.variable,
            fontMono.variable,
            "antialiased",
          ]}
        >
          <Providers locale={locale} messages={messages} themes={themes}>
            {children}
          </Providers>
        </FontProvider>
      </body>
    </html>
  );
}
