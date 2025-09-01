import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
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
            src: '/images/product/moe-desktop-screens.png',
            alt: 'three screen mockups of the design system website',
            caption:
              'Selection of desktop screens of the design system website - component, case study, and guidance page',
          },
          {
            src: '/images/product/moe-mobile-screens.png',
            alt: 'Design system website - mobile',
            caption: 'Selection of mobile screens of the design system website',
          },
          {
            src: '/images/product/moe-responsive.png',
            alt: 'Design system website - responsive',
            caption:
              'Designs include responsive sizes from mobile to large desktop',
          },
          {
            src: '/images/product/moe-components-example.png',
            alt: 'Figma / Adobe XD components',
            caption: 'Component guidelines in Adobe XD',
          },
          {
            src: '/images/product/moe-brand-assets.png',
            alt: 'Figma / Adobe XD brand assets',
            caption: 'Brand assets and tokens Adobe XD',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From Exploration to System Alignment"
        body="I led the definition of the system by mapping the ecosystem, reviewing competitors, and guiding the evolution from wireframes to final components. A central challenge was aligning both our internal web team and external vendors across 100+ sites, each with its own brand nuances. I ensured the system struck the right balance—flexible enough to support variation, but structured enough to drive consistency through shared patterns and components."
        images={[
          {
            src: '/images/process/moe-sitemap.png',
            alt: 'The sitemap of the Design System website',
            caption:
              'The sitemap of the Design System website - balancing guidance with case studies',
          },
          {
            src: '/images/process/moe-desktop-wireframe.png',
            alt: 'Screens from low fidelity wireframes, adding more detail to a full design',
            caption: 'From wireframe to final design',
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
