import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const SuiteFilesDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Evolving a design system to integrate the startup's new branding and enable faster product scaling."
        company="SuiteFiles"
        project="Design System"
        imageSrc="/images/product/suitefiles-design-system-hero.webp"
        scope="The early beginnings of a design system had been initiated by a previous lead, but with a major rebrand underway and the product scaling quickly, it needed to evolve. I took ownership of the system’s next phase—updating it to align with the new brand, expanding its component library, and ensuring it could support a rapidly growing product. In parallel, I partnered with developers to build out the codebase, closing the gap between design and engineering. The result was a more robust, scalable design system that balanced brand consistency with product velocity, enabling teams to move faster without sacrificing quality."
        involvement="Design system lead, brand integration, cross-functional partner"
        meta={{
          date: '2025',
          type: 'Design System',
          specialisation: 'Startup, SaaS (B2B), Document management',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/sfds-desktop-examples.webp',
            alt: 'desktop examples of the product after the rebranding',
            caption: 'The system applied in the product - desktop',
          },
          {
            src: '/images/product/sfds-component-product-diagram.webp',
            alt: 'Diagram of exemplar components used in the design',
            caption: 'Example of components applied in the product',
          },
          {
            src: '/images/product/sfds-components.webp',
            alt: 'Placeholder 1',
            caption: 'The design system components in Figma',
          },
          {
            src: '/images/product/sfds-brandtokens.webp',
            alt: 'Placeholder 2',
            caption: 'Brand assets and token system in Figma',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From Brand Rollout to Scalable Evolution"
        body="I began by auditing the existing system to identify gaps, redundancies, and opportunities for scale. I prioritised the most critical components to expand first, balancing immediate product needs with long-term scalability. To integrate the new brand, I translated updated visual guidelines into systemised tokens and components—ensuring the identity worked consistently across multiple use cases. In parallel, I partnered with engineers to evolve the coded library, aligning naming, behaviours, and documentation so that design and development remained in sync. By approaching the work iteratively, I was able to keep teams shipping features while steadily maturing the system into a stable, brand-aligned foundation."
        images={[
          {
            src: '/images/process/sfds-brand-application.webp',
            alt: 'Before and after of the signing wizard design',
            caption:
              'Before / After of the product after the design system rebrand update',
          },
        ]}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Design System Leadership',
            description:
              'Took ownership of an early-stage system and drove its evolution into a robust, scalable foundation.',
          },
          {
            title: 'Brand Integration',
            description:
              'Adapted and embedded the new brand identity directly into the design system, ensuring visual consistency across the product.',
          },
          {
            title: 'Expanded Component Library',
            description:
              'Designed and documented new components to keep pace with rapid product growth and feature demands.',
          },
          {
            title: 'Cross-Functional Collaboration',
            description:
              'Partnered closely with engineers to mature the codebase in parallel, maintaining alignment between design and development.',
          },
        ]}
      />

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '🎨',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Color Bucket',
            iconNode: null,
            title: 'Brand Consistency at Scale',
            description:
              'Rolled out the new brand seamlessly across the product ecosystem via the design system.',
          },
          {
            icon: '⚡',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Zap',
            iconNode: null,
            title: 'Faster Product Delivery',
            description:
              'Expanded reusable components enabled teams to ship new features more quickly.',
          },
          {
            icon: '✅',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconNode: null,
            title: 'Improved Quality and Trust',
            description:
              'Consistent patterns reduced UI drift and boosted user confidence in the product.',
          },
          {
            icon: '🤝',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconNode: null,
            title: 'Stronger Design–Dev Alignment',
            description:
              'Parallel build with engineers reduced friction and ensured system parity in code.',
          },
          {
            icon: '🛠️',
            iconSrc: '/icons/puzzle.svg',
            iconAlt: 'Puzzle',
            iconNode: null,
            title: 'Scalable Foundation',
            description:
              'Established a design system flexible enough to evolve with future product needs.',
          },
        ]}
      />
    </div>
  )
}

export default SuiteFilesDesignSystem
