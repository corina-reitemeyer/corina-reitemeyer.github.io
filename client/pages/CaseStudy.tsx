import { useParams, Link } from 'react-router-dom'
import OWTemplates from './OWTemplates'
import MOEDesignSystem from './MOEDesignSystem'
import SuiteFilesDesignSystem from './SuiteFilesDesignSystem'
import SuiteFilesAISummary from './SuiteFilesAISummary'
import ScrollToTopButton from '../components/casestudy/ScrollToTopButton'

export default function CaseStudy() {
  const { slug } = useParams()

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
      default:
        return (
          <section className="flex min-h-screen flex-col items-center justify-center bg-[#08082a] px-6 text-center">
            <h1 className="text-4xl font-bold text-white">
              Case study not found
            </h1>
            <p className="mt-4 text-slate-300">
              {"The page you're looking for doesn't exist or has been moved."}
            </p>
            <Link
              to="/projects"
              className="mt-8 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#08082a] transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08082a]"
            >
              Back to projects
            </Link>
          </section>
        )
    }
  }

  return (
    <>
      {renderCaseStudy()}
      <ScrollToTopButton />
    </>
  )
}
