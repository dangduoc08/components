"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { H4, Muted, Small } from "@/components/ui/typography";

interface IJobPostFormState {
  jobTitle: string;
  description: string;
  workType: string;
  level: string;
  experience: string;
  salary: string;
  openings: string;
  deadline: string;
  status: string;
}

const INITIAL_STATE: IJobPostFormState = {
  jobTitle: "",
  description: "",
  workType: "",
  level: "",
  experience: "",
  salary: "",
  openings: "1",
  deadline: "",
  status: "open",
};

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>
        <Small>{label}</Small>
      </Label>
      {children}
    </div>
  );
}

function JobPostForm() {
  const t = useTranslations("postJob");
  const locale = useLocale();
  const router = useRouter();
  const [formState, setFormState] = useState<IJobPostFormState>(INITIAL_STATE);

  function updateField(field: keyof IJobPostFormState, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    router.push(`/${locale}/dashboard/jobs`);
  }

  function handleCancel() {
    router.push(`/${locale}/dashboard/jobs`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-6">
      <H4>{t("title")}</H4>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 rounded-xl border p-6">
          <Muted>{t("sectionBasicInfo")}</Muted>

          <FieldGroup label={t("jobTitle")}>
            <Input
              placeholder={t("jobTitlePlaceholder")}
              value={formState.jobTitle}
              onChange={(e) => updateField("jobTitle", e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup label={t("description")}>
            <Textarea
              placeholder={t("descriptionPlaceholder")}
              value={formState.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={6}
              required
            />
          </FieldGroup>
        </div>

        <div className="flex flex-col gap-6 rounded-xl border p-6">
          <Muted>{t("sectionDetails")}</Muted>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FieldGroup label={t("workType")}>
              <Select
                value={formState.workType}
                onValueChange={(value) => updateField("workType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("selectPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">
                    {t("workTypeOptions.fullTime")}
                  </SelectItem>
                  <SelectItem value="part-time">
                    {t("workTypeOptions.partTime")}
                  </SelectItem>
                  <SelectItem value="remote">
                    {t("workTypeOptions.remote")}
                  </SelectItem>
                  <SelectItem value="hybrid">
                    {t("workTypeOptions.hybrid")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldGroup>

            <FieldGroup label={t("level")}>
              <Select
                value={formState.level}
                onValueChange={(value) => updateField("level", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("selectPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intern">
                    {t("levelOptions.intern")}
                  </SelectItem>
                  <SelectItem value="junior">
                    {t("levelOptions.junior")}
                  </SelectItem>
                  <SelectItem value="senior">
                    {t("levelOptions.senior")}
                  </SelectItem>
                  <SelectItem value="manager">
                    {t("levelOptions.manager")}
                  </SelectItem>
                  <SelectItem value="director">
                    {t("levelOptions.director")}
                  </SelectItem>
                  <SelectItem value="ceo">{t("levelOptions.ceo")}</SelectItem>
                </SelectContent>
              </Select>
            </FieldGroup>

            <FieldGroup label={t("experience")}>
              <Input
                placeholder={t("experiencePlaceholder")}
                value={formState.experience}
                onChange={(e) => updateField("experience", e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label={t("salary")}>
              <Input
                placeholder={t("salaryPlaceholder")}
                value={formState.salary}
                onChange={(e) => updateField("salary", e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label={t("openings")}>
              <Input
                type="number"
                min="1"
                value={formState.openings}
                onChange={(e) => updateField("openings", e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label={t("deadline")}>
              <Input
                type="date"
                value={formState.deadline}
                onChange={(e) => updateField("deadline", e.target.value)}
              />
            </FieldGroup>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-xl border p-6">
          <Muted>{t("sectionSettings")}</Muted>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FieldGroup label={t("status")}>
              <Select
                value={formState.status}
                onValueChange={(value) => updateField("status", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">
                    {t("statusOptions.open")}
                  </SelectItem>
                  <SelectItem value="closed">
                    {t("statusOptions.closed")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FieldGroup>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleCancel}
        >
          <Small>{t("cancel")}</Small>
        </Button>
        <Button type="submit" size="lg">
          <Small>{t("submit")}</Small>
        </Button>
      </div>
    </form>
  );
}

export { JobPostForm };
