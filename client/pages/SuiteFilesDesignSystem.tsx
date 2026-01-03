import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const SuiteFilesDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="From rebrand to rapid growth — evolving the design system."
        company="SuiteFiles"
        project="Design System"
        imageSrc="/images/product/suitefiles-design-system-hero.webp"
        scope="The design system had been started by a previous lead, but with a major rebrand underway and the product growing fast, it needed to evolve. I took ownership of its next phase — updating it to match the new brand, expanding the component library, and making sure it could support a rapidly growing product. In parallel, I worked with developers to build out the system in code, keeping design and engineering in sync. The result was a stronger, more flexible design system that kept the brand consistent while letting teams move faster without losing quality."
        involvement=" Senior Product Designer - Led the evolution of the design system, integrating the new brand and collaborating across design and engineering teams."
        team="Worked with product designers, frontend engineers, and product stakeholders to evolve the design system alongside active feature development."
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
        sections={[
          {
            subtitle: 'From Brand Rollout to Scalable Evolution',
            body: 'I started by auditing the existing system to spot gaps, overlaps, and opportunities to grow. I focused first on the most critical components, balancing immediate product needs with long-term scalability. To integrate the new brand, I updated components and guidelines so the identity worked consistently across different contexts. I also evolved the system so it could support future products — creating consistent patterns that could scale across the portfolio. At the same time, I partnered with engineers to expand the coded library — aligning names, behaviours, and documentation so design and development stayed in sync. By working iteratively, I kept teams shipping features while steadily maturing the system into a stable, brand-aligned foundation.',
          },
          {
            subtitle: 'Tradeoffs and constraints',
            body: 'The biggest risk was trying to perfect the system upfront. A clean-slate rebuild would have delayed product delivery and reduced trust in the system. I chose to optimise for adoption and continuity instead, evolving the system in place and letting real product needs guide its growth.',
          },
        ]}
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
            title: 'Led the Design System Evolution',
            description:
              'Took ownership of an early-stage system and grew it into a stable foundation that could scale across products.',
          },
          {
            title: 'Integrated the New Brand',
            description:
              'Adapted the updated identity into the design system, ensuring consistent visuals across the product.',
          },
          {
            title: 'Expanded the Component Library',
            description:
              'Designed and documented new components to keep pace with rapid product growth.',
          },
          {
            title: 'Improved Design–Engineering Collaboration',
            description:
              'Partnered with engineers to mature the system in code, keeping design and development in sync.',
          },
        ]}
      />

      {/* Reflections Section */}
      <section
        className="relative z-0 flex min-h-[90vh]
    w-full items-center overflow-hidden bg-[#08003B] text-white"
      >
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/images/portfolio/reflections-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="container relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-2xl text-left">
            <h2 className="text-3xl font-extrabold">Reflections & Learnings</h2>

            <div className="mt-8 space-y-6 text-white/70">
              <p>
                This project reinforced that design systems are living products,
                not static libraries. Trying to “finish” the system would have
                slowed teams down at the moment they needed speed most.
              </p>
              <p>
                Working through a rebrand while the product was actively growing
                taught me the value of evolving systems incrementally —
                prioritising the most critical components first and letting the
                system mature alongside real product work.
              </p>
              <p>
                Partnering closely with engineers also reshaped how I think
                about design systems: alignment on naming, behaviour, and
                documentation matters as much as visual consistency. The system
                is now actively used and continues to evolve as the product
                scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '🎨',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Color Bucket',
            iconNode: null,
            title: 'Brand Consistency',
            description:
              'Rolled out the new brand across products through the design system.',
          },
          {
            icon: '⚡',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Zap',
            iconNode: null,
            title: 'Faster Product Delivery',
            description:
              'Reusable components helped teams ship features more quickly.',
          },
          {
            icon: '✅',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconNode: null,
            title: 'Improved Quality and Trust',
            description:
              'Consistent patterns reduced design drift and built user confidence.',
          },
          {
            icon: '🤝',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconNode: null,
            title: 'Stronger Design–Dev Alignment',
            description:
              'Working in parallel with engineers reduced friction and kept design and code in sync.',
          },
          {
            icon: '🛠️',
            iconSrc: '/icons/puzzle.svg',
            iconAlt: 'Puzzle',
            iconNode: null,
            title: 'Scalable Foundation',
            description:
              'Established a flexible system ready to support current and future products.',
          },
        ]}
      />
    </div>
  )
}

export default SuiteFilesDesignSystem
