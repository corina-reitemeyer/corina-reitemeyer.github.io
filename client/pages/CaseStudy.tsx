import { useParams } from 'react-router-dom'
import OWTemplates from './OWTemplates.tsx'
import MOEDesignSystem from './MOEDesignSystem.tsx'
import MOENceaWebsite from './MOENceaWebsite.tsx'

const CaseStudy = () => {
  const { slug } = useParams()
  switch (slug) {
    case 'ow-templates':
      return <OWTemplates />
    case 'moe-design-system':
      return <MOEDesignSystem />
    case 'moe-ncea-website':
      return <MOENceaWebsite />
    default:
      return <div>404: Case study not found</div>
  }
}

export default CaseStudy
