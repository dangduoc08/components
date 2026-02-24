type TSkillScore = {
  label: string;
  candidateScore: number;
  jobAvgScore: number;
};

type TAnalysisResult = {
  matchScore: number;
  fitLevel: "strong" | "moderate" | "weak";
  fitSummary: string;
  fitDescription: string;
  skillScores: TSkillScore[];
  strengths: string[];
  gaps: string[];
};

type TUploadedFile = {
  name: string;
  size: string;
  uploadedAt: string;
};

type TTargetJob = {
  id: string;
  title: string;
  tags: string[];
};

export type { TAnalysisResult, TSkillScore, TTargetJob, TUploadedFile };
