type MakingStatus = 'live' | 'wip' | 'shelved'

export default interface MakingProject {
  id: number
  title: string
  description: string
  category: string
  status: MakingStatus
  year: string
  href?: string
  image: string
  note?: string
}
