import { useCaseStagedChrome } from './useCaseStagedChrome'
import { ROUTES } from '../../lib/routes'
import CaseStagedHero from './components/CaseStagedHero'
import CaseStagedSplit from './components/CaseStagedSplit'
import CaseStagedStory from './components/CaseStagedStory'
import CaseStagedAdjacentNav from './components/CaseStagedAdjacentNav'

export default function MOEDesignSystem() {
  useCaseStagedChrome()

  return (
    <>
      <CaseStagedHero
        backHref={ROUTES.digitalProducts}
        meta="Case study · Ministry of Education · 2020–2021"
        title="From a COVID crisis site to shared design standards across 50+ platforms."
      />

      <CaseStagedSplit
        railTitle="Turning a rushed crisis site into the organisation's first design system."
        railLede="Led the 0→1 establishment of the organisation's first design system end-to-end, including the creation of the component library in Adobe XD and the design system website."
        aboutParagraphs={[
          "The Ministry of Education is one of New Zealand's largest government organisations, responsible for digital services spanning early childhood through to secondary education. When a critical COVID-19 website was rushed to launch, it exposed what happened when speed came without structure: inconsistent design, accessibility failures, and no shared standards across a sprawling network of sites. I was brought in as a contractor and later added to the team as a Senior UX/UI Designer, where I continued to lead the creation of the organisation's first design system.",
        ]}
        meta={[
          { label: 'Domain', value: 'Government & Education' },
          { label: 'Year', value: '2020–2021' },
          { label: 'My Role', value: 'Senior UX/UI Designer' },
          {
            label: 'Team',
            value:
              'Designers, Engineers, Content Teams, Web Advisors, External Vendors',
          },
        ]}
        panels={[
          {
            id: 'overview-full',
            tone: 'moss',
            grid: 'full',
            images: [
              {
                id: 'moe-desktop-screens',
                src: '/images/product/moe-desktop-screens.webp',
                alt: 'Three screen mockups of the design system website',
                caption:
                  'The design system website, built from scratch to house components, guidance, and case studies in one place.',
              },
            ],
          },
          {
            id: 'overview-pair-1',
            tone: 'moss',
            grid: 'pair',
            images: [
              {
                id: 'moe-mobile-screens',
                src: '/images/product/moe-mobile-screens.webp',
                alt: 'Design system website on mobile',
                caption:
                  'Mobile experience, the system was designed to be accessible and usable across all devices.',
              },
              {
                id: 'moe-responsive',
                src: '/images/product/moe-responsive.webp',
                alt: 'Design system website showing responsive layouts',
                caption: 'Responsive layouts, from mobile to large desktop.',
              },
            ],
          },
          {
            id: 'overview-pair-2',
            tone: 'moss',
            grid: 'pair',
            images: [
              {
                id: 'moe-components',
                src: '/images/product/moe-components-example.webp',
                alt: 'Component guidelines in Adobe XD',
                caption:
                  'Component guidelines, each documented with usage rules and accessibility notes.',
              },
              {
                id: 'moe-brand-assets',
                src: '/images/product/moe-brand-assets.webp',
                alt: 'Brand assets and tokens in Adobe XD',
                caption:
                  'Brand assets and tokens, the foundation every component was built on.',
              },
            ],
          },
        ]}
      />

      <CaseStagedStory
        title="A crisis site exposed a systemic problem"
        body={[
          "The COVID-19 website wasn't the problem, it was the symptom that exposed the pain points the team had been experiencing for a long time. The rushed launch revealed that the organisation had no shared design language, no accessibility baked into the components or designs from the get-go, and no way to prevent the same issues from appearing on the next site.",
          {
            bold: true,
            text: "The real challenge wasn't fixing one website. It was changing how an entire organisation built digital products, across 50+ platforms, multiple internal teams, and external vendors all working independently.",
          },
        ]}
      />

      <CaseStagedStory
        title="Accessibility wasn't optional, but it wasn't happening without its hurdles"
        body={[
          'Government digital services in New Zealand are required to meet WCAG standards. Despite that, accessibility issues were being repeated across new builds because there was no shared reference point. This caused longer testing and fixing periods before we could launch a site to the public.',
          {
            bold: true,
            text: 'The design system had to make accessibility the default, not an afterthought. It had to be clear enough that external vendors with no prior context could implement it correctly.',
          },
        ]}
      />

      <CaseStagedStory
        title="A system nobody uses is not a system"
        body={[
          'The organisation had designers, engineers, content teams, and external vendors all working independently across several sites. Getting them to adopt a shared standard meant the system had to feel like a tool that made their job easier, not another thing to learn.',
          {
            bold: true,
            text: "The biggest risk wasn't building the wrong components. It was building something too polished to feel practical, and watching teams quietly go back to doing whatever they were doing before.",
          },
        ]}
      />

      <CaseStagedStory
        title="Starting with the organisation, not the components"
        body={[
          'Before designing anything, I mapped existing sites, reviewed feedback from external vendors, and conducted staff interviews to understand where teams were actually struggling.',
          "The problem wasn't just visual inconsistency: it was duplicated effort, unclear handoff, and accessibility issues repeating across builds because there was no shared reference. Understanding that shaped what the system needed to solve.",
        ]}
      />

      <CaseStagedStory
        title="Building ownership through collaboration"
        body={[
          'Components were workshopped and agreed collaboratively, not handed down or decided by one person. Sessions with designers, engineers, and content teams surfaced what each group actually needed from the system.',
          'The collaborative process was slower than designing in isolation. But teams felt ownership over what was built, which made adoption significantly easier.',
        ]}
      />

      <CaseStagedStory
        title="Designing the information architecture of the system itself"
        body={[
          'The design system website needed its own IA, a structure that worked for very different audiences. Internal designers and engineers needed quick access to components and usage guidelines. External vendors needed enough context to implement correctly without a handover document. Other government agencies needed to understand the standards without any prior knowledge of the organisation.',
          'The sitemap shaped how content was organised before a single page was designed, ensuring the system was as navigable as the products it was meant to improve.',
        ]}
        image={{
          src: '/images/process/moe-sitemap.webp',
          alt: 'Sitemap of the design system website',
          caption:
            'Sitemap, organising the design system website for multiple audiences before designing it.',
        }}
      />

      <CaseStagedStory
        title="Accessibility as the foundation, not a feature"
        body={[
          'Rather than adding accessibility at the end, I embedded WCAG compliance into the component library from the start. Every component was built to meet the standard by default, so teams using the system would be compliant without having to think about it.',
          'In a government context, mandatory accessibility legislation also became the strongest argument for adoption. When the law requires it, the conversation shifts from "should we" to "how do we," which is a much more productive place to work from.',
        ]}
      />

      <CaseStagedStory
        title="Creating standards that worked across vendors"
        body={[
          'With 50+ sites involving multiple external vendors, each with their own tools and brand interpretations, the system had to be flexible enough to accommodate variation while structured enough to create real consistency.',
          'Mandatory accessibility legislation and brand regulations became the strongest arguments for adoption where general guidance wasn\'t enough, shifting the conversation from "should we follow this" to "how do we follow this."',
        ]}
      />

      <CaseStagedStory
        title="Making the system public, not just internal"
        body={[
          'Rather than keeping guidelines inside Adobe XD or a knowledge platform only internal teams could access, I designed and built a public-facing design system website. That decision was deliberate: external vendors, the branding team, and third-party agencies all needed access without requiring an internal login or a handover document.',
          'Making it visible to other government agencies also meant that if collaboration happened across organisations, the standards were already available. A design system locked behind an intranet is only as useful as the people who can reach it.',
        ]}
        image={{
          src: '/images/process/moe-desktop-wireframe.webp',
          alt: 'Low fidelity wireframes progressing to final designs',
          caption:
            'From early wireframes to final designs, the design system website built from scratch.',
        }}
      />

      <CaseStagedStory
        title="Constraints & trade-offs"
        items={[
          {
            title: 'Engineers with conflicting implementation philosophies',
            description:
              'The engineering team had different views on how components should be built. Getting alignment required patience and compromise, finding common ground between design intent and technical preference without diluting the system.',
          },
          {
            title: 'Vendors working to their own standards',
            description:
              'External vendors had their own tools, brand interpretations, and ways of working built up over years. Getting them to adopt shared standards meant the system had to be compelling enough to change established habits.',
          },
          {
            title: 'Adoption was never guaranteed',
            description:
              'A system only works if people use it. In a large organisation with competing priorities, the risk of the system being ignored was real, which shaped every decision about how it was documented, presented, and rolled out.',
          },
          {
            title: '50+ existing sites, all needing to be updated',
            description:
              "The system wasn't being adopted by new projects only, it had to be retrofitted across existing and upcoming platforms, each with their own brand styles, content structures, and levels of technical debt. Consistency and transparent communication had to be introduced from the get go without breaking what was already live.",
          },
        ]}
      />

      <CaseStagedStory
        title="Results"
        itemsLayout="grid"
        items={[
          {
            title: 'Faster design and development',
            description:
              'Teams reported significantly faster delivery after adoption, with one estimate putting time savings at around 40% for design and development work.',
          },
          {
            title: 'A public standard',
            description:
              'Making the system publicly accessible meant external vendors, the branding team, and other government agencies could reference and apply the standards without requiring an internal login or handover document.',
          },
          {
            title: 'Accessibility embedded at scale',
            description:
              'WCAG-aligned components and guidelines applied consistently across government platforms, reducing accessibility issues that had been repeated across sites.',
          },
          {
            title: 'Vendors and internal teams aligned',
            description:
              'Shared standards gave external vendors and internal teams a common reference point, reducing inconsistency and rework across a complex multi-team environment.',
          },
        ]}
      />

      <CaseStagedStory
        variant="outcome"
        title="Reflections"
        body={[
          'This was the project that taught me the difference between designing a system and designing for adoption. A beautiful system nobody uses is worthless. The patterns had to be clear enough to pick up without a workshop, flexible enough to work across different brands, and grounded enough in accessibility law to survive stakeholder pushback.',
          'Working in a government context changed how I think about accessibility. It stopped being a compliance checklist and became the strongest design argument in the room. When the law requires it, the conversation shifts from "should we" to "how do we."',
          {
            bold: true,
            text: 'The system is still used across multiple platforms within the education portfolio after my departure. Not because it was perfect, but because it was built for the people who had to use it. That is what designing for adoption actually looks like.',
          },
        ]}
      />

      <CaseStagedAdjacentNav
        previous={{
          href: `${ROUTES.digitalProduct}/suitefiles-design-system`,
          label:
            'A live rebrand. A fast-moving product. One design system that had to keep up with both.',
        }}
        next={{
          href: `${ROUTES.digitalProduct}/ow-templates`,
          label:
            "Helping researchers start studies faster, and discover methods they didn't know existed.",
        }}
      />
    </>
  )
}
