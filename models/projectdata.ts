// models/projectdata.ts
export default interface Project {
  id: number
  projectImage: string
  projectTitle: string
  projectSubtitle: string
  slug: string
  company?: string
  role: string
  date: string
  overview: string
  objectiveGoals: string
  deployedSiteLink: string
  bestAwardsSiteLink: string
  headerImage: string
  githubLink: string
}
