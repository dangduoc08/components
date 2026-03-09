import { setRequestLocale } from "next-intl/server";

import { JobPostForm } from "@/components/blocks/job-post-form";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <JobPostForm />;
}
