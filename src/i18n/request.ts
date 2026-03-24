import { cookies } from "next/headers";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const cookieStore = await cookies();
  const timeZone = cookieStore.get("timezone")?.value ?? "Asia/Ho_Chi_Minh";

  return {
    locale,
    timeZone,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
