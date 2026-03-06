import { Plus } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JobCard } from "@/components/blocks/job-card";
import { Button } from "@/components/ui/button";
import { H4, Small } from "@/components/ui/typography";

const JOBS = [
  {
    id: "1",
    logoUrl: "/next.svg",
    logoAlt: "Samsung",
    title: "Senior Frontend Engineer",
    postedAt: "04 Mar 2026",
    candidateCount: 12,
    experience: "No experience",
    workType: "Full-time",
    salary: "Negotiable",
    level: "CEO",
  },
  {
    id: "2",
    logoUrl: "/next.svg",
    logoAlt: "Facebook",
    title: "Product Designer",
    postedAt: "03 Mar 2026",
    candidateCount: 8,
    experience: "2+ years",
    workType: "Full-time",
    salary: "$3,000",
    level: "Manager",
  },
  {
    id: "3",
    logoUrl: "/next.svg",
    logoAlt: "Samsung",
    title: "Backend Engineer",
    postedAt: "01 Mar 2026",
    candidateCount: 5,
    experience: "3+ years",
    workType: "Part-time",
    salary: "Negotiable",
    level: "Senior",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("jobs");

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <H4>{t("title")}</H4>
        <Button size="lg">
          <Plus />
          <Small>{t("postNewJob")}</Small>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:flex-wrap">
        {JOBS.map((job) => (
          <JobCard
            key={job.id}
            logoUrl={job.logoUrl}
            logoAlt={job.logoAlt}
            title={job.title}
            postedAtLabel={`${t("postedAt")}: ${job.postedAt}`}
            candidateCount={job.candidateCount}
            candidatesLabel={t("candidates")}
            experience={job.experience}
            workType={job.workType}
            salary={job.salary}
            level={job.level}
            detailsLabel={t("details")}
            editLabel={t("edit")}
            removeLabel={t("remove")}
          />
        ))}
      </div>
    </div>
  );
}
