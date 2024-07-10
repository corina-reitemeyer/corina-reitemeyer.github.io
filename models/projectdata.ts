// This data structure is for the CaseStudy component

interface Project {
  headerImage: string
  projectTitle: string
  company: string
  role: string
  date: string
  overview: string
  objectiveGoals: string
  background: string
  designProcess: {
    research: string
    definingProblem: string
    ideation: string
    prototyping: string
    feedback?: string // Optional property
  }
  softwareDevelopment: {
    techStack: string
    architecture: string
    developmentProcess: string
    integration: string
  }
  solutionImplementation: {
    designDecisions: string
    codingProcesses: string
    accessibilityUsability: string
    testing: string
    deployment: string
    challengesFaced: string
  }
  lessonsLearned: {
    designInsights: string
    technicalInsights: string
    improvements: string
  }
  keyTakeaways: {
    summary: string
    demonstrationSkills: string
  }
  githubLink: string
  deployedSiteLink: string
}
