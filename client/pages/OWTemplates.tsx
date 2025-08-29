import CaseStudyNavy from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const OWTemplates = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Making research setup effortless with pre-built, customisable templates."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/case-hero.jpg"
        scope="Research setup was slow and inconsistent, frustrating teams and delaying insights—raising churn risk when learnings arrived too late to act on. Meanwhile, the product already supported diverse study types, including Information Architecture testing, but most users were unaware of this potential. I designed the first iteration of the templates feature to solve both problems: pre-built, customisable study combinations that made setup intuitive while surfacing the full breadth of research methods. The work drew on user research, cross-functional collaboration with PMs and engineers, and iterative design to balance flexibility with speed. The result enabled researchers at all levels to launch studies faster, explore methods with confidence, and generate richer insights—while advancing the company’s shift toward an IA-focused product strategy."
        involvement="Product design, research collaborator"
        meta={{
          date: '2023',
          type: 'Product Design, SaaS Product (B2B)',
          specialisation: 'Growth design',
        }}
      />

      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '⚡',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Zap',
            iconNode: null,
            title: '20% faster setup',
            description:
              'Pre-built, customisable templates cut time to configure studies—freeing researchers to spend more time analysing insights, not fiddling with setup.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'More multi-study use',
            description:
              'Practitioners combined methods more often for deeper insight—driving higher-quality outputs for teams and more product stickiness.',
          },
          {
            icon: '🚀',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            iconNode: null,
            title: 'Lower barrier to entry',
            description:
              'Onboarding eased for novices while staying fast for experts—reducing drop-off at a critical early stage of adoption.',
          },
          {
            icon: '🧭',
            iconSrc: '/icons/compass.svg',
            iconAlt: 'Compass',
            iconNode: null,
            title: 'First IA-focused feature',
            description:
              'Pioneered an IA-led templates MVP that shaped product direction—cementing OW’s position as an IA leader in the market.',
          },
          {
            icon: '🔁',
            iconSrc: '/icons/cycle.svg',
            iconAlt: 'Cycle',
            iconNode: null,
            title: 'Retention lift',
            description:
              'Template adoption correlated with higher customer retention post-launch—key for improving CLTV and reducing sales pressure.',
          },
        ]}
      />
    </div>
  )
}

export default OWTemplates
