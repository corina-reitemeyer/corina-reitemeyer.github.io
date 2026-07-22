export default interface Project {
  id: number
  projectImage: string
  /** Alternative crop for WorkIndex's active-project preview panel, where
   *  the original hero image's dimensions don't crop well. Falls back to
   *  projectImage when omitted. */
  previewImage?: string
  projectTitle: string
  /** Short, scannable label for list views (e.g. WorkIndex), as opposed to the
   *  fuller descriptive projectTitle used in the grid view. */
  shortTitle: string
  slug: string
  company?: string
}
