import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const MOEDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="From COVID crisis site to scaling design standards across 50+ platforms."
        company="Ministry of Education"
        project="Design System"
        imageSrc="/images/product/moe-designsystem-hero.webp"
        scope="The rushed launch of a critical COVID-19 website revealed cracks in the process — inconsistent design, accessibility issues, and a lack of shared standards. I led the creation of the Ministry of Education’s first design system to address these gaps. I began with product audits and staff interviews, then built reusable components and accessibility guidelines based on WCAG standards. Working with designers, engineers, and web advisors, I aligned teams and streamlined workflows. The system reduced design problems, improved accessibility, and created a shared set of standards for all future projects — now used across 50+ digital platforms."
        involvement="Design system and product design lead"
        meta={{
          date: '2020 - 2021',
          type: 'Design System, Website',
          specialisation: 'Govtech, Edtech',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/moe-desktop-screens.webp',
            alt: 'three screen mockups of the design system website',
            caption:
              'Desktop screens — components, case studies, and guidance pages.',
          },
          {
            src: '/images/product/moe-mobile-screens.webp',
            alt: 'Design system website - mobile',
            caption: 'Mobile screens — design system website.',
          },
          {
            src: '/images/product/moe-responsive.webp',
            alt: 'Design system website - responsive',
            caption: 'Responsive designs — from mobile to large desktop.',
          },
          {
            src: '/images/product/moe-components-example.webp',
            alt: 'Figma / Adobe XD components',
            caption: 'Component guidelines in Adobe XD.',
          },
          {
            src: '/images/product/moe-brand-assets.webp',
            alt: 'Figma / Adobe XD brand assets',
            caption: 'Brand assets and tokens in Adobe XD.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From Exploration to System Alignment"
        body="I defined the design system by mapping existing sites, reviewing competitors, and guiding the evolution from wireframes to final components. The components themselves were agreed through facilitated workshops, while I designed the website from scratch and set up the design tokens in our design tool. A key challenge was aligning our internal web team and external vendors across more than 100 sites, each with its own brand style. I made sure the system struck the right balance — flexible enough for variation, but structured enough to bring consistency through shared patterns and components."
        images={[
          {
            src: '/images/process/moe-sitemap.webp',
            alt: 'The sitemap of the Design System website',
            caption:
              'Design system sitemap — balancing guidance with case studies.',
          },
          {
            src: '/images/process/moe-desktop-wireframe.webp',
            alt: 'Screens from low fidelity wireframes, adding more detail to a full design',
            caption: 'From wireframe to final designs.',
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
              'Led research, workshops, and implementation to create a shared system, securing adoption across teams.',
          },
          {
            title: 'Ensured Application of Accessibility Standards',
            description:
              'Embedded WCAG compliance into the system, ensuring consistent application and more inclusive services.',
          },
          {
            title: 'Improved Collaboration',
            description:
              'Streamlined workflows between designers and engineers, making handoff smoother and faster.',
          },
          {
            title: 'Set Standards Across 50+ Products',
            description:
              'Brought consistency and scalability to dozens of websites, shaping the organisation’s long-term digital strategy.',
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
            description:
              'Standardised components cut duplicate work and sped up delivery.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'Broad System Use',
            description:
              'Teams applied the system across 50+ sites, both new builds and existing products.',
          },
          {
            icon: '⏳',
            iconSrc: '/icons/speedometer.svg',
            iconAlt: 'Speed',
            iconNode: null,
            title: 'Simpler Workflows',
            description:
              'Shared patterns reduced rework and made design processes easier.',
          },
          {
            icon: '📖',
            iconSrc: '/icons/book.svg',
            iconAlt: 'Book',
            iconNode: null,
            title: 'Clearer Documentation',
            description:
              'Guidelines were updated to reflect real developer needs.',
          },
          {
            icon: '🎨',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Color Bucket',
            iconNode: null,
            title: 'Consistent User Experience',
            description:
              'A unified visual language reduced usability issues and built trust in digital platforms.',
          },
          {
            icon: '🤝',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconNode: null,
            title: 'Better Vendor Alignment',
            description:
              'Clear standards helped external teams deliver consistent work.',
          },
        ]}
      />
    </div>
  )
}

export default MOEDesignSystem
