import { useParams } from 'react-router-dom'
import OWTemplates from './OWTemplates.tsx'
import MOEDesignSystem from './MOEDesignSystem.tsx'
import SuiteFilesDesignSystem from './SuiteFilesDesignSystem.tsx'
import SuiteFilesAISummary from './SuiteFilesAISummary.tsx'

const CaseStudy = () => {
  const { slug } = useParams()
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
      return <div>404: Case study not found</div>
  }
}

export default CaseStudy
