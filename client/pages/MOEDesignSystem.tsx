import AchievementsSection from '../components/casestudy/Achievements'
import CaseStudyNavy from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const MOEDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Establishing, designing, and documenting digital brand guidelines and a design system…"
        company="Company"
        project="Project"
        imageSrc="/images/product/moe-ds-desktop-allscreens.webp"
        scope="Microsoft To-Do is the easiest way to get stuff done…"
        involvement="Product design, system architecture, prototyping"
        meta={{ date: '2025', type: 'Product Design', specialisation: 'AI' }}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Built the Organisation’s First Design System',
            description:
              'Led research, definition, and implementation of the first-ever design system, securing buy-in and adoption across teams at scale.',
          },
          {
            title: 'Elevated Accessibility Standards',
            description:
              'Embedded WCAG compliance into the system, reducing risk and ensuring more inclusive digital services.',
          },
          {
            title: 'Enhanced Cross-Team Collaboration',
            description:
              'Streamlined workflows between designers and engineers, cutting friction in design-to-dev handoff.',
          },
          {
            title: 'Raised Design Standards Across 50+ Products',
            description:
              'Brought consistency and scalability to an ecosystem of websites, shaping long-term digital strategy.',
          },
        ]}
      />

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '🚀',
            title: '40% Faster Dev/Design Time',
            description: 'Standardised components reduced redundant work.',
          },
          {
            icon: '📈',
            title: 'Increased Adoption',
            description:
              'Teams actively used the system across 50+ sites, new and existing products.',
          },
          {
            icon: '⏳',
            title: 'Reduced Design Debt',
            description: 'Standardised patterns simplified workflows.',
          },
          {
            icon: '📖',
            title: 'Improved Documentation',
            description:
              'Updated guidance to reflect real-world developer needs.',
          },
          {
            icon: '🎨',
            title: 'Consistent User Experience',
            description:
              'Unified visual language reduced usability issues and boosted trust in digital platforms.',
          },
          {
            icon: '🤝',
            title: 'Better Vendor Alignment',
            description:
              'Clear standards made it easier for external teams to deliver consistent work.',
          },
        ]}
      />
    </div>
  )
}

export default MOEDesignSystem
