export default interface Project {
  id: number
  projectImage: string
  projectTitle: string
  /** Short, scannable label for list views (e.g. WorkIndex), as opposed to the
   *  fuller descriptive projectTitle used in the grid view. */
  shortTitle: string
  slug: string
  company?: string
}
