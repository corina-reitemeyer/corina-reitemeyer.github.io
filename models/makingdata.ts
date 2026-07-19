export type MakingStatus = 'live' | 'wip' | 'shelved'
export type MakingCoverVariant = 'systems' | 'interfaces' | 'prototypes' | 'learning'

export default interface Making {
  id: number
  title: string
  description: string
  category: string
  status: MakingStatus
  year: string
  href?: string
  image?: string
  coverWord?: string
  coverVariant?: MakingCoverVariant
  note?: string
}
