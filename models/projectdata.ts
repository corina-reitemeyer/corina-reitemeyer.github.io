// models/projectdata.ts
import { ImageData } from './imagedata.ts'

export default interface Project {
  id: number
  projectImage: string
  headerImage: string
  projectTitle: string
  slug: string
  company?: string
  role: string
  date: string
  overview: string
  objectiveGoals: string[]
  background: {
    text: string
    backgroundImages?: ImageData[] // Optional array of images for the background section
  }
  designProcess: {
    research: string
    researchImages?: ImageData[]
    definingProblem: string
    definingProblemImages?: ImageData[]
    ideation: string
    ideationImages?: ImageData[]
    prototyping: string
    prototypingImages?: ImageData[]
    feedback?: string
    feedbackImages?: ImageData[]
  }
  softwareDevelopment?: {
    techStack?: string
    techStackImages?: ImageData[]
    architecture?: string
    architectureImages?: ImageData[]
    developmentProcess?: string
    developmentProcessImages?: ImageData[]
    integration?: string
    integrationImages?: ImageData[]
  }
  solutionImplementation: {
    designDecisions: string
    designDecisionsImages?: ImageData[]
    codingProcesses?: string
    codingProcessesImages?: ImageData[]
    accessibilityUsability: string
    accessibilityUsabilityImages?: ImageData[]
    testing?: string
    testingImages?: ImageData[]
    deployment?: string
    deploymentImages?: ImageData[]
    challengesFaced: string
    challengesFacedImages?: ImageData[]
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
