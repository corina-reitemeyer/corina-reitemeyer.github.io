import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import { useId } from 'react'

export default function MOEDesignSystem() {
  const reflectionsId = useId()

  return (
    <>
      <CaseStudyNavy
        intro="From a COVID crisis site to shared design standards across 100+ platforms."
        company="Ministry of Education"
        project="Design System"
        imageSrc="/images/product/moe-designsystem-hero.webp"
        imageAlt="Ministry of Education design system hero"
        scope="The rushed launch of a critical COVID-19 website exposed what happened when speed came without structure. Inconsistent design, accessibility failures, and no shared standards across a sprawling network of sites. The problem wasn't one website, it was an entire organisation building digital products without a common language. I led the creation of the organisation's first design system. Not as a post-crisis cleanup, but as a genuine attempt to change how over 100 digital platforms were designed and built going forward. That meant bringing together designers, engineers, content teams, web advisors, and feedback provided by external vendors — each with their own tools, philosophies, and constraints — and finding standards everyone could actually adopt. Accessibility wasn't an add-on. In a government context with mandatory WCAG compliance, it was the foundation everything else was built on."
        involvement="Senior UX/UI Designer — led the research, design, and establishment of the organisation's first design system, including the component library and the design system website."
        team="Worked across a large, distributed organisation — internal designers, engineers, content teams, web advisors, and external vendors, each with their own tools, brand constraints, and ways of working."
        meta={{
          date: '2020 - 2021',
          type: 'Design System, Website',
          specialisation: 'Government, Education',
        }}
      />

      <ImageStrip
        images={[
          {
            id: 'moe-desktop-screens',
            src: '/images/product/moe-desktop-screens.webp',
            alt: 'Three screen mockups of the design system website',
            caption:
              'Desktop screens — components, case studies, and guidance pages.',
          },
          {
            id: 'moe-mobile-screens',
            src: '/images/product/moe-mobile-screens.webp',
            alt: 'Design system website on mobile',
            caption: 'Mobile screens — design system website.',
          },
          {
            id: 'moe-responsive',
            src: '/images/product/moe-responsive.webp',
            alt: 'Design system website showing responsive layouts',
            caption: 'Responsive designs — from mobile to large desktop.',
          },
          {
            id: 'moe-components',
            src: '/images/product/moe-components-example.webp',
            alt: 'Component guidelines in Adobe XD',
            caption: 'Component guidelines in Adobe XD.',
          },
          {
            id: 'moe-brand-assets',
            src: '/images/product/moe-brand-assets.webp',
            alt: 'Brand assets and tokens in Adobe XD',
            caption: 'Brand assets and tokens in Adobe XD.',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Outcomes"
        outcomes={[
          {
            id: 'faster-delivery',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Bolt',
            iconEmoji: '⚡',
            title: 'Faster Design and Development',
            description:
              'Teams reported significantly faster delivery after adoption — with one estimate putting time savings at around 40% for design and development work.',
          },
          {
            id: 'broad-adoption',
            iconSrc: '/icons/puzzle.svg',
            iconAlt: 'Puzzle',
            iconEmoji: '🛠️',
            title: 'Adopted Across 100+ Platforms',
            description:
              'The system was applied across new builds and existing products, surviving a rebrand and continuing to evolve after my departure.',
          },
          {
            id: 'accessibility',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconEmoji: '✅',
            title: 'Accessibility Embedded at Scale',
            description:
              'WCAG-aligned components and guidelines were applied consistently across government platforms, reducing accessibility issues that had been repeated across sites.',
          },
          {
            id: 'vendor-alignment',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconEmoji: '🤝',
            title: 'Vendors and Internal Teams Aligned',
            description:
              'Shared standards gave external vendors and internal teams a common reference point, reducing inconsistency and rework across a complex multi-team environment.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            id: 'process-research',
            subtitle: 'Starting with the organisation, not the components',
            body: 'Before designing anything, I mapped existing sites, revisted feedback provided by external vendors, and conducted staff interviews to understand where teams were actually struggling. The problem was not just visual inconsistency, it was duplicated effort, unclear handoff, and accessibility issues being repeated across new builds because there was no shared reference point. That research shaped everything that followed. Components were workshopped and agreed collaboratively rather than handed down or decided by one person, which meant teams felt ownership over the system from the start.',
          },
          {
            id: 'process-building',
            subtitle: 'Building for adoption, not perfection',
            body: 'I designed the design system website from scratch and established the component library and documentation in parallel. The priority was pragmatic, easy-to-adopt patterns — not a fully polished system that would take months to ship. Accessibility was embedded from the foundation up, aligned with mandatory WCAG standards, rather than added at the end. The system needed to work across 100+ sites with different brand styles and external vendors, so flexibility within structure was the core design challenge throughout.',
          },
        ]}
        images={[
          {
            id: 'moe-sitemap',
            src: '/images/process/moe-sitemap.webp',
            alt: 'Sitemap of the design system website',
            caption:
              'Design system sitemap — balancing guidance with case studies.',
          },
          {
            id: 'moe-wireframe',
            src: '/images/process/moe-desktop-wireframe.webp',
            alt: 'Low fidelity wireframes progressing to final designs',
            caption: 'From wireframe to final designs.',
          },
        ]}
      />

      <AchievementsSection
        title="Constraints & Trade-offs"
        achievements={[
          {
            id: 'constraint-engineers',
            title: 'Engineers with conflicting implementation philosophies',
            description:
              'The engineering team had different views on how components should be built and structured. Getting alignment required patience, compromise, and finding common ground between design intent and technical preference — without diluting the system in the process.',
          },
          {
            id: 'constraint-vendors',
            title: 'Aligning external vendors to shared standards',
            description:
              'With 100+ sites involving multiple external vendors at different stages and projects, each had their own tools, brand interpretations, and ways of working. Mandatory accessibility legislation and brand regulations provided the clearest framework for alignment where general guidance was not enough. A selected works section also allowed for guided inspiration sites, rather than them finding outdated platforms on their own.',
          },
          {
            id: 'constraint-adoption',
            title: 'Designing for adoption across a sprawling organisation',
            description:
              'A system that teams could not pick up quickly would not get used. Pragmatic, easy-to-adopt patterns were prioritised over a perfect system — because the biggest risk was not imperfection, it was irrelevance.',
          },
          {
            id: 'constraint-scope',
            title: 'Scope that kept growing',
            description:
              'The system started as a response to one crisis site and grew to cover 50+ platforms. Keeping the system flexible enough to accommodate different brand styles while structured enough to create real consistency was a constant balancing act.',
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
              <div className="mt-8 space-y-6 text-slate-300">
                <p>
                  This was the project that taught me the difference between
                  designing a system and designing for adoption. In a large
                  organisation under pressure, a beautiful system nobody uses is
                  worthless. The patterns had to be clear enough to pick up
                  without a workshop, flexible enough to work across different
                  brands, and grounded enough in accessibility law to survive
                  stakeholder pushback.
                </p>
                <p>
                  Working in a government context also changed how I think about
                  accessibility. It stopped being a compliance checklist and
                  became the strongest design argument in the room. When the law
                  requires it, the conversation shifts from "should we" to "how
                  do we" — and that is a much more productive place to work
                  from.
                </p>
                <p>
                  The system is still used across 100+ platforms after my
                  departure. That is the metric I am most proud of. Not the
                  components, not the documentation — the fact that teams kept
                  using it without me there to advocate for it. It survived a
                  rebrand, the launch of new services, and the retirement of
                  others. That is what a design system that was built for
                  adoption looks like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
