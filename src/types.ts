export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  externalUrl?: string;
  caseStudyAvailable: boolean;
}

export interface KeyDecision {
  title: string;
  problem: string;
  alternativesConsidered: string;
  chosenApproach: string;
  rationale: string;
  tradeOffs: string;
}

export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientOrOrg: string;
  role: string;
  collaborators: string;
  timeline: string;
  status: string;
  platform: string;
  heroImage: string;
  heroCaption: string;
  technologies: string[];

  // 1. Overview & Context
  overview: string;
  contextAndProblem: {
    lead: string;
    paragraphs: string[];
    operationalNeeds: string[];
  };

  // 2. Goals & Discovery
  goalsAndRequirements: {
    primaryGoal: string;
    functionalRequirements: string[];
    constraints: string[];
  };
  discoveryAndResearch: {
    method: string;
    findings: string[];
    unansweredQuestions: string[];
  };

  // 3. Information Architecture & User Flows
  informationArchitecture: {
    description: string;
    flows: {
      stage: string;
      action: string;
      outcome: string;
    }[];
  };

  // 4. Key Design Decisions
  keyDecisions: KeyDecision[];

  // 5. Visual Design System
  visualDesignSystem: {
    description: string;
    tokens: {
      label: string;
      value: string;
      usage: string;
    }[];
    accessibilityNotes: string;
  };

  // 6. Technical Implementation
  technicalImplementation: {
    architectureSummary: string;
    stackDetails: {
      title: string;
      detail: string;
    }[];
    implementationChallenges: string[];
  };

  // 7. Final Solution & Visual Tour
  finalSolution: {
    title: string;
    caption: string;
    image: string;
    bulletPoints: string[];
  }[];

  // 8. Challenges & Trade-offs
  challengesAndTradeoffs: {
    challenge: string;
    compromise: string;
    resolution: string;
  }[];

  // 9. Outcomes & Validation
  outcomesAndValidation: {
    delivered: string[];
    verifiedResults: string[];
    unmeasuredAspects: string[];
  };

  // 10. Reflection & Next Steps
  reflectionAndNextSteps: {
    learnings: string[];
    plannedRoadmap: string[];
  };

  nextProjectSlug?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  tags?: string[];
}

export interface InterfaceScreen {
  id: string;
  title: string;
  project: string;
  aspect: string;
  description: string;
  image: string;
}
