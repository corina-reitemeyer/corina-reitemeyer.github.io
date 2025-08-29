import AchievementsSection from '../components/casestudy/Achievements'
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
        imageSrc="/images/product/moe-ds-desktop-allscreens.webp"
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
            src: 'https://picsum.photos/600/400?random=1',
            alt: 'Placeholder 1',
          },
          {
            src: 'https://picsum.photos/500/600?random=2',
            alt: 'Placeholder 2',
          },
          {
            src: 'https://picsum.photos/700/500?random=3',
            alt: 'Placeholder 3',
          },
          {
            src: 'https://picsum.photos/600/600?random=4',
            alt: 'Placeholder 4',
          },
          {
            src: 'https://picsum.photos/800/500?random=5',
            alt: 'Placeholder 5',
          },
          {
            src: 'https://picsum.photos/500/500?random=6',
            alt: 'Placeholder 6',
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
