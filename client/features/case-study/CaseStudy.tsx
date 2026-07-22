import { useParams, useLocation, Link } from 'react-router-dom'
import OWTemplates from './OWTemplates'
import MOEDesignSystem from './MOEDesignSystem'
import SuiteFilesDesignSystem from './SuiteFilesDesignSystem'
import SuiteFilesAISummary from './SuiteFilesAISummary'
import BuildingAdaptiveTeams from './BuildingAdaptiveTeams'
import { ROUTES } from '../../lib/routes'

export default function CaseStudy() {
  const { slug } = useParams()
  const location = useLocation()
  const backToProjectsPath = location.pathname.startsWith(
    ROUTES.learningExperience,
  )
    ? '/playground'
    : ROUTES.digitalProducts

  const renderCaseStudy = () => {
    switch (slug) {
      case 'suitefiles-ai-summary':
        return <SuiteFilesAISummary />
      case 'ow-templates':
        return <OWTemplates />
      case 'moe-design-system':
        return <MOEDesignSystem />
      case 'suitefiles-design-system':
        return <SuiteFilesDesignSystem />
      case 'building-adaptive-teams':
        return <BuildingAdaptiveTeams />
      default:
        return (
          <section className="bg-ink flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <h1 className="text-paper text-4xl font-bold">
              Case study not found
            </h1>
            <p className="text-paper-muted mt-4">
              {"The page you're looking for doesn't exist or has been moved."}
            </p>
            <Link
              to={backToProjectsPath}
              className="bg-paper text-ink hover:bg-teal-mist mt-8 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Back to projects
            </Link>
          </section>
        )
    }
  }

  return renderCaseStudy()
}
