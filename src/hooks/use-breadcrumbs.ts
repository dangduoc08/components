import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import type { IBreadcrumbItem } from "./interfaces";

function formatSegmentLabel(segment: string): string {
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function useBreadcrumbs(): IBreadcrumbItem[] {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("breadcrumb");

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const segments = pathWithoutLocale.split("/").filter(Boolean);

  return segments.map((segment, index) => {
    let label: string;
    try {
      label = t(segment as never);
    } catch {
      label = formatSegmentLabel(segment);
    }

    return {
      label,
      href: `/${locale}/${segments.slice(0, index + 1).join("/")}`,
      isLast: index === segments.length - 1,
    };
  });
}

export { useBreadcrumbs };
