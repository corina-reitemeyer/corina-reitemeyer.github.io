import CaseStudyNavy from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const OWTemplates = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Establishing, designing, and documenting digital brand guidelines and a design system…"
        company="Company"
        project="Project"
        imageSrc="/images/case-hero.jpg"
        scope="Microsoft To-Do is the easiest way to get stuff done…"
        involvement="Product design, system architecture, prototyping"
        meta={{ date: '2025', type: 'Product Design', specialisation: 'AI' }}
      />

      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '⚡',
            title: '20% faster setup',
            description:
              'Pre-built, customisable templates cut time to configure studies—freeing researchers to spend more time analysing insights, not fiddling with setup.',
          },
          {
            icon: '📈',
            title: 'More multi-study use',
            description:
              'Practitioners combined methods more often for deeper insight—driving higher-quality outputs for teams and more product stickiness.',
          },
          {
            icon: '🛠️',
            title: 'Lower barrier to entry',
            description:
              'Onboarding eased for novices while staying fast for experts—reducing drop-off at a critical early stage of adoption.',
          },
          {
            icon: '🧭',
            title: 'First IA-focused feature',
            description:
              'Pioneered an IA-led templates MVP that shaped product direction—cementing OW’s position as an IA leader in the market.',
          },
          {
            icon: '🔁',
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
