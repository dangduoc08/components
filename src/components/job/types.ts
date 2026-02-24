type TEmploymentType = "Full-time" | "Part-time" | "On demand";

type TExperienceLevel =
  | "No experience"
  | "1 year exp"
  | "2 year exp"
  | "3+ year exp";

type TJob = {
  id: string;
  title: string;
  companyLogo: string;
  postedDate: Date;
  candidateCount: number;
  experienceLevel: TExperienceLevel;
  employmentType: TEmploymentType;
  salary: string;
  role: string;
};

type TJobDetail = TJob & {
  description: string;
  responsibilities: string[];
  whyYouLove: string[];
  skills: string[];
  benefits: string[];
  expirationDate: Date;
  isPublished: boolean;
  company: TCompany;
};

type TCompany = {
  name: string;
  logo: string;
  address: string;
  phone: string;
};

export type { TCompany, TEmploymentType, TExperienceLevel, TJob, TJobDetail };
