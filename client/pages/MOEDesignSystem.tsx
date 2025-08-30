import AchievementsSection from '../components/casestudy/Achievements'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const MOEDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="From crisis website to best-practice framework—defining design standards at scale."
        company="Ministry of Education"
        project="Design System"
        imageSrc="/images/product/moe-designsystem-hero.png"
        scope="When the Ministry of Education rushed out a critical COVID-19 website without a design system, the result was inconsistency, accessibility gaps, and scalability issues. I led the creation of the organisation’s first design system—conducting product audits and internal interviews, then iteratively implementing reusable components and WCAG-compliant guidelines. Collaborating with designers, engineers, and web advisors, I drove alignment and streamlined workflows across teams. The system established organisation-wide best practices, reduced design debt, and set a new standard for accessibility and scalability—becoming the foundation for how digital products are now designed and built across 50+ platforms."
        involvement="Design system lead, product design lead, cross-functional partner"
        meta={{
          date: '2020 - 2021',
          type: 'Design System, Website',
          specialisation: 'Govtech, Edtech',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 1',
          },
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 2',
          },
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 3',
          },
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 4',
          },
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 5',
          },
          {
            src: '/images/product/moe-designsystem-hero.png',
            alt: 'Placeholder 6',
          },
        ]}
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
            iconSrc: '/icons/rocket.svg',
            iconAlt: 'Rocket',
            iconNode: null,
            title: '40% Faster Dev/Design Time',
            description: 'Standardised components reduced redundant work.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'Increased Adoption',
            description:
              'Teams actively used the system across 50+ sites, new and existing products.',
          },
          {
            icon: '⏳',
            iconSrc: '/icons/speedometer.svg',
            iconAlt: 'Speed',
            iconNode: null,
            title: 'Reduced Design Debt',
            description: 'Standardised patterns simplified workflows.',
          },
          {
            icon: '📖',
            iconSrc: '/icons/book.svg',
            iconAlt: 'Book',
            iconNode: null,
            title: 'Improved Documentation',
            description:
              'Updated guidance to reflect real-world developer needs.',
          },
          {
            icon: '🎨',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Color Bucket',
            iconNode: null,
            title: 'Consistent User Experience',
            description:
              'Unified visual language reduced usability issues and boosted trust in digital platforms.',
          },
          {
            icon: '🤝',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconNode: null,
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
