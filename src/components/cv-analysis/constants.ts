import type { TAnalysisResult, TTargetJob, TUploadedFile } from "./types";

const MOCK_TARGET_JOB: TTargetJob = {
  id: "#JOB-2024-88",
  title: "Senior Frontend Developer (React)",
  tags: ["Remote", "Full-time"],
};

const MOCK_UPLOADED_FILE: TUploadedFile = {
  name: "Nguyen_Van_An_CV.pdf",
  size: "2.4 MB",
  uploadedAt: "Uploaded just now",
};

const MOCK_ANALYSIS_RESULT: TAnalysisResult = {
  matchScore: 85,
  fitLevel: "strong",
  fitSummary: "recommendedForInterview",
  fitDescription: "strongFitDescription",
  skillScores: [
    { label: "technical", candidateScore: 90, jobAvgScore: 70 },
    { label: "experience", candidateScore: 80, jobAvgScore: 65 },
    { label: "education", candidateScore: 70, jobAvgScore: 60 },
    { label: "softSkills", candidateScore: 60, jobAvgScore: 55 },
    { label: "language", candidateScore: 85, jobAvgScore: 50 },
    { label: "culture", candidateScore: 75, jobAvgScore: 60 },
  ],
  strengths: [
    "strengthReactTypescript",
    "strengthEnglish",
    "strengthLeadership",
  ],
  gaps: ["gapSalary", "gapCloud"],
};

const TARGET_JOBS: TTargetJob[] = [
  {
    id: "#JOB-2024-88",
    title: "Senior Frontend Developer (React)",
    tags: ["Remote", "Full-time"],
  },
  {
    id: "#JOB-2024-87",
    title: "Full Stack Engineer",
    tags: ["On-site", "Full-time"],
  },
  {
    id: "#JOB-2024-86",
    title: "UI/UX Designer",
    tags: ["Remote", "Part-time"],
  },
];

export {
  MOCK_ANALYSIS_RESULT,
  MOCK_TARGET_JOB,
  MOCK_UPLOADED_FILE,
  TARGET_JOBS,
};
