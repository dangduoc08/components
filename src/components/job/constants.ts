import type { TJob, TJobDetail } from "./types";

const MOCK_JOBS: TJob[] = [
  {
    id: "1",
    title: "Software Engineer",
    companyLogo: "/logos/northface.svg",
    postedDate: new Date("2026-02-23"),
    candidateCount: 12,
    experienceLevel: "No experience",
    employmentType: "Full-time",
    salary: "Negotiable",
    role: "CEO",
  },
  {
    id: "2",
    title: "Marketing Manager",
    companyLogo: "/logos/grabient.svg",
    postedDate: new Date("2026-02-22"),
    candidateCount: 12,
    experienceLevel: "1 year exp",
    employmentType: "Part-time",
    salary: "Negotiable",
    role: "CTO",
  },
  {
    id: "3",
    title: "Data Scientist",
    companyLogo: "/logos/wix.svg",
    postedDate: new Date("2026-02-21"),
    candidateCount: 12,
    experienceLevel: "2 year exp",
    employmentType: "On demand",
    salary: "Negotiable",
    role: "Project Coordinator",
  },
  {
    id: "4",
    title: "Product Designer",
    companyLogo: "/logos/northface.svg",
    postedDate: new Date("2026-02-20"),
    candidateCount: 8,
    experienceLevel: "3+ year exp",
    employmentType: "Full-time",
    salary: "Negotiable",
    role: "Lead Designer",
  },
  {
    id: "5",
    title: "Frontend Developer",
    companyLogo: "/logos/grabient.svg",
    postedDate: new Date("2026-02-19"),
    candidateCount: 15,
    experienceLevel: "1 year exp",
    employmentType: "Full-time",
    salary: "Negotiable",
    role: "Tech Lead",
  },
  {
    id: "6",
    title: "HR Specialist",
    companyLogo: "/logos/wix.svg",
    postedDate: new Date("2026-02-18"),
    candidateCount: 6,
    experienceLevel: "No experience",
    employmentType: "Part-time",
    salary: "Negotiable",
    role: "HR Manager",
  },
];

const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "On demand",
  "Negotiable",
] as const;

const EXPERIENCE_LEVELS = [
  "No experience",
  "1 year exp",
  "2 year exp",
  "> 3 year exp",
] as const;

const ROLES = [
  "CEO",
  "CTO",
  "CFO",
  "COO",
  "Project Coordinator",
  "Lead Designer",
  "Tech Lead",
  "HR Manager",
] as const;

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "Go",
  "SQL",
  "AWS",
  "Docker",
  "Figma",
] as const;

const WORKING_SCHEDULES = [
  "Morning shift",
  "Afternoon shift",
  "Night shift",
  "Flexible",
  "Remote",
] as const;

const LOCATIONS = [
  "Ho Chi Minh City",
  "Hanoi",
  "Da Nang",
  "Remote",
  "Singapore",
  "Tokyo",
] as const;

const MOCK_JOB_DETAIL: TJobDetail = {
  id: "2",
  title: "Marketing Manager",
  companyLogo: "/logos/grabient.svg",
  postedDate: new Date("2026-02-22"),
  candidateCount: 12,
  experienceLevel: "1 year exp",
  employmentType: "Full-time",
  salary: "$35,000 - $45,000",
  role: "Marketing Manager",
  isPublished: true,
  expirationDate: new Date("2026-04-20"),
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  responsibilities: [
    "Working with agency partners to develop social media content and campaigns",
    "Manage and coordinate all marketing activities and materials",
    "Lead the execution of marketing programs from start to finish",
    "Analyze market trends and recommend changes to marketing strategies",
    "Prepare and monitor the marketing budget on a quarterly and annual basis",
    "Oversee the company's marketing strategy and campaigns",
  ],
  whyYouLove: [
    "Working in an exciting and dynamic environment",
    "An attractive and competitive salary and benefits package",
    "Opportunities for professional development and career advancement",
    "A creative and collaborative team environment",
  ],
  skills: ["UI", "UX", "Html", "CSS", "JavaScript"],
  benefits: ["Free parking", "Bonus commission", "Travel"],
  company: {
    name: "Gleichner, Mueller and Tromp",
    logo: "/logos/grabient.svg",
    address: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    phone: "(229) 555-0109",
  },
};

const SALARY_TYPES = ["Hourly", "Custom"] as const;

const BENEFITS = [
  "Free parking",
  "Bonus commission",
  "Travel",
  "Device support",
  "Health care",
  "Training",
  "Health insurance",
  "Retirement plans",
  "Paid time off",
  "Flexible work schedule",
] as const;

export {
  BENEFITS,
  EMPLOYMENT_TYPES,
  EXPERIENCE_LEVELS,
  LOCATIONS,
  MOCK_JOB_DETAIL,
  MOCK_JOBS,
  ROLES,
  SALARY_TYPES,
  SKILLS,
  WORKING_SCHEDULES,
};
