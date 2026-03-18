import { useId } from 'react'
import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

export default function SuiteFilesDesignSystem() {
  const reflectionsId = useId()

  return (
    <>
      <CaseStudyNavy
        intro="The brand was still being defined, but the product wasn't waiting."
        company="SuiteFiles"
        project="Design System"
        imageSrc="/images/product/suitefiles-design-system-hero.webp"
        imageAlt="SuiteFiles design system hero"
        scope="A design system existed when I joined, started by a previous design lead and functional enough for where the product was at the time. But the product wasn't staying still. A major rebrand was underway, the team was growing, and features were shipping faster than the system could keep up with. The challenge was that the brand guidelines were being developed alongside the redesign and there was no finished bible to implement from. I had to stress-test the brand inside real product context, flag where it wasn't working, and feed that back to the brand consultant who was still shaping it. Building the system and defining the brand inside the product were happening simultaneously. My approach throughout was simple: don't try to complete the system upfront. Let real design needs surface what's required, build what's proven itself, and keep documenting. A system that grows with the product is more useful than a perfect one nobody's waiting for."
        involvement="Senior Product Designer — took ownership of the design system evolution, stress-tested the brand in product, and partnered closely with engineering to keep design and code in sync."
        team="Worked within a cross-functional team of frontend engineers and product stakeholders. Collaborated closely with the brand consultant who was developing the visual identity in parallel, feeding back where guidelines needed refinement based on real product application. Developer involvement shifted over time as the team grew and priorities changed, which shaped how the system needed to be documented and communicated to stay useful across different working styles."
        meta={{
          date: '2025',
          type: 'Design System',
          specialisation: 'Startup, SaaS (B2B), Document management',
        }}
      />

      <ImageStrip
        images={[
          {
            id: 'sfds-desktop-examples',
            src: '/images/product/sfds-desktop-examples.webp',
            alt: 'Desktop examples of the product after rebranding',
            caption: 'The system applied in the product - desktop',
          },
          {
            id: 'sfds-component-diagram',
            src: '/images/product/sfds-component-product-diagram.webp',
            alt: 'Diagram of example components used in the design system',
            caption: 'Example of components applied in the product',
          },
          {
            id: 'sfds-components',
            src: '/images/product/sfds-components.webp',
            alt: 'Selected component sets in Figma library',
            caption: 'Selected component sets in Figma Library',
          },
          {
            id: 'sfds-brandtokens',
            src: '/images/product/sfds-brandtokens.webp',
            alt: 'Brand assets and token system in Figma',
            caption: 'Brand assets and token system in Figma',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Outcomes"
        outcomes={[
          {
            id: 'brand-consistency',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Colour bucket',
            iconEmoji: '🎨',
            title: 'Brand Applied Consistently',
            description:
              'The rebrand rolled out through the system rather than component by component, ensuring visual consistency without requiring every designer to interpret the guidelines independently.',
          },
          {
            id: 'faster-delivery',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Bolt',
            iconEmoji: '⚡',
            title: 'Teams Kept Shipping',
            description:
              'By evolving the system iteratively rather than rebuilding from scratch, product development never stopped. The system grew alongside delivery, not ahead of it.',
          },
          {
            id: 'quality-trust',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconEmoji: '✅',
            title: 'Reduced Design Drift',
            description:
              'Consistent patterns and documented components meant less interpretation, fewer inconsistencies, and a more cohesive product experience as the team scaled.',
          },
          {
            id: 'design-dev-alignment',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconEmoji: '🤝',
            title: 'Shared Design and Dev Language',
            description:
              'Aligned component naming, behaviour, and documentation meant engineers could work from the system confidently, reducing back-and-forth and keeping design and code in sync.',
          },
          {
            id: 'scalable-foundation',
            iconSrc: '/icons/puzzle.svg',
            iconAlt: 'Puzzle',
            iconEmoji: '🛠️',
            title: 'A Foundation Ready to Scale',
            description:
              'Foundational components were established first, giving every new pattern something solid to inherit from as the product and team continued to grow.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            id: 'process-brand-rollout',
            subtitle: 'From moving target to scalable foundation',
            body: 'I started with an audit. Not to plan a full rebuild, but to understand where the system was already breaking down under the weight of a faster-moving product. The harder problem was that the brand guidelines were still being developed alongside the redesign. Rather than wait, I tested the brand directly in product context, worked closely with the brand designer to flag where the identity was not holding up, and kept a running record of areas that needed revisiting as the guidelines matured. One of the frontend engineers and I jumped on a call and mapped out how changes could be introduced through updated semantics and tokens in Figma, and how newly created and updated components could be rolled out on an ongoing basis. I started with foundational components first — buttons, toggles, checkboxes — then used those brand-aligned foundations to evolve more complex patterns and introduce new elements. Building from the ground up meant every new component had something solid to inherit from.',
          },
          {
            id: 'process-philosophy',
            subtitle: 'Let the product lead the system',
            body: "The guiding principle throughout: don't try to finish the system before the product needs it. Let real design work surface what's required, build what's proven itself, and keep documenting. A system that grows with the product is more useful than a perfect one nobody is waiting for.",
          },
        ]}
        images={[
          {
            id: 'sfds-brand-application',
            src: '/images/process/sfds-brand-application.webp',
            alt: 'Before and after of the signing wizard design after the design system rebrand update',
            caption:
              'Before / After of the product after the design system rebrand update',
          },
        ]}
      />

      <AchievementsSection
        title="Constraints & Trade-offs"
        achievements={[
          {
            id: 'constraint-moving-brand',
            title: "Building from a brand that wasn't finished yet",
            description:
              'The brand guidelines were being developed alongside the redesign, not before it. There was no finished reference to implement from, which meant testing the identity in real product context and feeding gaps back to the brand designer while simultaneously building the system.',
          },
          {
            id: 'constraint-tailwind',
            title: 'The system had to live inside Tailwind',
            description:
              'Working within an existing Tailwind library meant some design decisions had to bend to technical feasibility. Achieving alignment on component naming, behaviour, and documentation became as critical as the visual consistency itself.',
          },
          {
            id: 'constraint-developer-silos',
            title: 'Developer buy-in shifted over time',
            description:
              'Early developer collaboration on implementation was strong. As the team grew and time pressure increased, that alignment broke down and silos formed. The system had to be documented well enough to work without a conversation in real time.',
          },
          {
            id: 'constraint-pace',
            title: 'The product always moved faster than the system',
            description:
              'By the time there was space to update anything, there were already eight new components waiting. Trying to keep pace meant accepting the system would never be complete and designing principles around that reality rather than fighting it.',
          },
        ]}
      />
      <section
        aria-labelledby={reflectionsId}
        className="relative z-0 flex min-h-[90vh] w-full items-center overflow-hidden bg-[#08003B] text-white"
      >
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/images/portfolio/reflections-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        <div className="container relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-2xl text-left">
            <img
              src="/images/portfolio/lightbulb-icon.svg"
              alt=""
              aria-hidden="true"
              className="mb-6 h-20 w-20 opacity-80"
            />

            <h2 id={reflectionsId} className="text-3xl font-bold">
              Reflections & Learnings
            </h2>

            <div className="mt-8 space-y-6 text-slate-300">
              <p>
                This project was different from building a design system from
                scratch. I inherited foundations someone else had established,
                which meant understanding the reasoning behind existing
                decisions before changing anything. Evolving a system
                responsibly is a different challenge to starting fresh, you have
                to bring the existing work forward, not replace it.
              </p>
              <p>
                It reshaped how I think about system ownership. A system that
                tries to be complete before the product needs it will always
                lose. The more useful question is: what does the product need
                right now, and what foundation does that require?
              </p>
              <p>
                Working through a live rebrand also showed me that brand and
                system work are not sequential — they inform each other. Some of
                the best brand refinements came from stress-testing guidelines
                in real product context, not from a style guide review.
              </p>
              <p>
                Alignment with engineering on naming, behaviour, and
                documentation turned out to matter as much as visual
                consistency. The system only works if everyone can navigate it
                without asking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
