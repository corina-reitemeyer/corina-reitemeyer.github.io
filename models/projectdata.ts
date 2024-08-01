// models/projectdata.ts
export default interface Project {
  id: number
  projectImage: string
  headerImage: string
  projectTitle: string
  slug: string
  company: string
  role: string
  date: string
  overview: string
  objectiveGoals: string[]
  background: string
  backgroundImages?: string[]
  designProcess: {
    research: string
    definingProblem: string
    ideation: string
    prototyping: string
    feedback?: string
    designProcessImages?: string[]
  }
  softwareDevelopment?: {
    techStack?: string
    architecture?: string
    developmentProcess?: string
    integration?: string
    softwareDevelopmentImages?: string[]
  }
  solutionImplementation: {
    designDecisions: string
    codingProcesses?: string
    accessibilityUsability: string
    testing?: string
    deployment?: string
    challengesFaced: string
  }
  lessonsLearned: {
    designInsights: string
    technicalInsights?: string
    improvements: string
  }
  keyTakeaways: {
    summary: string
    demonstrationSkills: string
  }
  finalImage?: string
  githubLink?: string
  deployedSiteLink?: string
  bestAwardsSiteLink?: string
}
