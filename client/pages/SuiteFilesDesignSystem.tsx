import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const SuiteFilesDesignSystem = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Evolving a design system through rebrand and rapid growth."
        company="SuiteFiles"
        project="Design System"
        imageSrc="/images/product/suitefiles-design-system-hero.webp"
        scope="The design system had been started earlier by a previous design lead. When a major rebrand began and the product started growing quickly, it became clear the system needed to evolve. Components no longer fully reflected the new brand, and the system wasn’t keeping pace with active product development. I took ownership of the next phase of the design system. I updated it to align with the new brand, expanded the component library to support current product needs, and ensured it could scale as the product continued to grow. In parallel, I worked closely with developers to build and refine the system in code, keeping design and engineering aligned. The result was a more flexible and reliable design system that maintained brand consistency while enabling teams to move faster without compromising quality."
        involvement="Senior Product Designer - Led the evolution of the design system, integrating the new brand and collaborating closely across design and engineering."
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
            body: 'I began by auditing the existing system to understand where it was helping us as a team and where it was starting to break down because the product evolved beyond the original foundations. I prioritised the most critical components first, balancing immediate product needs with the longer-term goal of scalability. To integrate the new brand, I updated components and guidelines so the identity applied consistently across different contexts. At the same time, I evolved the system to support future products by establishing patterns that could scale across the wider portfolio. In parallel, I worked closely with engineers to expand the coded library. We aligned component names, behaviours, and documentation so design and development stayed in sync. By taking an iterative approach, teams could continue shipping features while the system steadily matured into a stable, brand-aligned foundation.',
          },
          {
            subtitle: 'Tradeoffs and constraints',
            body: 'The biggest risk was trying to perfect the system upfront. A clean-slate rebuild would have slowed product delivery and reduced trust at a time when teams needed momentum. Instead, I focused on adoption and continuity, evolving the system in place and allowing real product needs to guide its growth over time.',
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
      <section className="relative z-0 flex min-h-[90vh] w-full items-center overflow-hidden bg-[#08003B] text-white">
        {/* Background */}
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
          {/* Aligned content block */}
          <div className="mx-auto max-w-2xl text-left">
            {/* Icon */}
            <img
              src="/images/portfolio/lightbulb-icon.svg"
              alt=""
              aria-hidden="true"
              className="mb-6 h-20 w-20 opacity-80"
            />

            {/* Heading */}
            <h2 className="text-3xl font-bold">Reflections & Learnings</h2>

            <div className="mt-8 space-y-6 text-white/70">
              <p>
                This project reinforced that design systems are living products,
                not static libraries. Trying to “finish” the system would have
                slowed teams down at the moment they needed speed most.
              </p>
              <p>
                Working through a rebrand while the product was actively growing
                highlighted the value of evolving systems incrementally.
                Prioritising the most critical components first allowed the
                system to mature alongside real product work, rather than
                becoming a blocker to delivery.
              </p>
              <p>
                Partnering closely with engineers also reshaped how I think
                about design systems. Alignment on naming, behaviour, and
                documentation proved just as important as visual consistency.
                The system is now actively used and continues to evolve as the
                product scales.
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
