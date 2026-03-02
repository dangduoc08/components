"use client";

import { Calendar, ChevronDown, CircleDollarSign, Coins } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { LOCATIONS, ROLES, SKILLS, WORKING_SCHEDULES } from "./constants";

const EMPLOYMENT_TYPE_KEYS = [
  "fullTime",
  "partTime",
  "onDemand",
  "negotiable",
] as const;

const EXPERIENCE_LEVEL_KEYS = [
  "noExperience",
  "oneYearExp",
  "twoYearExp",
  "threeYearPlusExp",
] as const;

const SALARY_TYPE_KEYS = ["hourly", "custom"] as const;

const BENEFIT_KEYS = [
  "freeParking",
  "bonusCommission",
  "travel",
  "deviceSupport",
  "healthCare",
  "training",
  "healthInsurance",
  "retirementPlans",
  "paidTimeOff",
  "flexibleWorkSchedule",
] as const;

export function JobCreateProperties() {
  const t = useTranslations("job");
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSalaryType, setSelectedSalaryType] = useState("hourly");

  return (
    <div className="rounded-xl border border-border/50 bg-card">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6"
      >
        <div className="text-left">
          <h2 className="text-base font-semibold">{t("properties")}</h2>
          <p className="text-sm text-muted-foreground">
            {t("propertiesDescription")}
          </p>
        </div>
        <ChevronDown
          className={`size-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-6 px-6 pb-6">
          <div className="flex flex-col gap-3">
            <Label className="font-semibold">{t("employmentType")}</Label>
            <div className="flex flex-wrap items-center gap-4">
              {EMPLOYMENT_TYPE_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <Checkbox id={`employment-${key}`} />
                  <Label
                    htmlFor={`employment-${key}`}
                    className="text-sm font-normal"
                  >
                    {t(key)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label className="font-semibold">{t("experience")}</Label>
            <RadioGroup
              defaultValue="oneYearExp"
              className="flex flex-wrap gap-4"
            >
              {EXPERIENCE_LEVEL_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <RadioGroupItem value={key} id={`experience-${key}`} />
                  <Label
                    htmlFor={`experience-${key}`}
                    className="text-sm font-normal"
                  >
                    {t(key)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">{t("role")}</Label>
            <Select defaultValue="CTO">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">{t("skills")}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t("skillsPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                {SKILLS.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">{t("workingSchedule")}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t("schedulePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                {WORKING_SCHEDULES.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">{t("locations")}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t("locationsPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">{t("expired")}</Label>
            <div className="relative">
              <Input type="text" placeholder={t("datePlaceholder")} />
              <Calendar className="absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Label className="font-semibold">{t("salary")}</Label>

            <div className="grid grid-cols-2 gap-3">
              {SALARY_TYPE_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedSalaryType(key)}
                  className={`flex flex-col items-center gap-2 rounded-lg border py-4 text-sm transition-colors ${
                    selectedSalaryType === key
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  {key === "hourly" ? (
                    <CircleDollarSign className="size-5" />
                  ) : (
                    <Coins className="size-5" />
                  )}
                  {t(key)}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                $
              </span>
              <Input placeholder="0.00" className="pl-6" />
            </div>

            <div className="flex items-center gap-2">
              <Switch id="salary-negotiable" />
              <Label
                htmlFor="salary-negotiable"
                className="text-sm font-normal"
              >
                {t("salaryNegotiable")}
              </Label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label className="font-semibold">{t("benefits")}</Label>
            <div className="grid grid-cols-2 gap-3">
              {BENEFIT_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <Checkbox id={`benefit-${key}`} />
                  <Label
                    htmlFor={`benefit-${key}`}
                    className="text-sm font-normal"
                  >
                    {t(key)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
