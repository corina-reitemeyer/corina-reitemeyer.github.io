import { useCaseStagedChrome } from './useCaseStagedChrome'
import { ROUTES } from '../../lib/routes'
import CaseStagedHero from './components/CaseStagedHero'
import CaseStagedSplit from './components/CaseStagedSplit'
import CaseStagedStory from './components/CaseStagedStory'
import CaseStagedAdjacentNav from './components/CaseStagedAdjacentNav'

export default function SuiteFilesDesignSystem() {
  useCaseStagedChrome()

  return (
    <>
      <CaseStagedHero
        backHref={ROUTES.digitalProducts}
        meta="Case study · SuiteFiles · 2025"
        title="The brand was still being defined, but the product wasn't waiting."
      />

      <CaseStagedSplit
        railTitle="Evolving an inherited design system while a rebrand moved underneath it."
        railLede="Inherited, evolved, and scaled the design system, stress-tested the brand in product, and partnered closely with engineering to keep design and code in sync."
        aboutParagraphs={[
          "SuiteFiles is a document management and e-signing platform built for accounting professionals. When I joined, a design system existed, started by a previous design lead and functional enough for where the product was at the time. But the product wasn't staying still. A major rebrand was underway, the team was changing and growing, and features were shipping faster than the system could keep up with.",
          "I moved on to a new role a few months into this work. The audit was done and the foundational components were rebuilt under the new brand, but most of the product was still unmigrated when I left. This case study reflects that: where the system stood at handoff, not a finished rollout.",
        ]}
        meta={[
          { label: 'Domain', value: 'SaaS (B2B)' },
          { label: 'Timeline', value: 'A few months, ongoing at handoff' },
          { label: 'My Role', value: 'Senior Product Designer' },
          {
            label: 'Team',
            value:
              'Frontend Engineers, Brand Consultant, Design and Product Stakeholders',
          },
        ]}
        panels={[
          {
            id: 'overview-full',
            grid: 'full',
            images: [
              {
                id: 'suitefiles-design-system-hero',
                src: '/images/product/suitefiles-design-system-hero.webp',
                alt: 'Figma workspace showing SuiteFiles design system components and tokens',
                caption:
                  'The new brand and component patterns, as they were rebuilt into the design system.',
              },
            ],
          },
          {
            id: 'overview-full-2',
            grid: 'full',
            images: [
              {
                id: 'sfds-component-diagram',
                src: '/images/product/sfds-component-product-diagram.webp',
                alt: 'Diagram of example components used in the design system',
                caption: 'Components mapped to real product context.',
              },
            ],
          },
          {
            id: 'overview-full-3',
            grid: 'full',
            images: [
              {
                id: 'sfds-components',
                src: '/images/product/sfds-components.webp',
                alt: 'Selected component sets in Figma library',
                caption: 'Selected component sets in the Figma library.',
              },
            ],
          },
          {
            id: 'overview-full-4',
            grid: 'full',
            images: [
              {
                id: 'sfds-brandtokens',
                src: '/images/product/sfds-brandtokens.webp',
                alt: 'Brand assets and token system in Figma',
                caption:
                  'Variables in Figma showing brand colours, typography, spacing, and more.',
              },
            ],
          },
        ]}
      />

      <CaseStagedStory
        category="The Problem"
        title="Three pressures at once"
        itemsLayout="grid"
        items={[
          {
            title: 'Inheriting a system mid-rebrand without a full handover',
            description: [
              'The designer who built the foundations and worked with the brand consultant had left. I inherited their decisions without always knowing the reasoning behind them.',
              {
                bold: true,
                text: 'Evolving a system responsibly means understanding why things are the way they are before changing them. That takes longer than starting from scratch, and it requires a different kind of judgement.',
              },
            ],
          },
          {
            title: 'Building with a brand that was still being defined',
            description: [
              'The brand guidelines were being developed alongside the redesign, not before it. There was no finished reference to implement from.',
              {
                bold: true,
                text: 'Every component decision was being made against a moving target. The system had to be built while the brand was still being shaped, which meant testing the identity in real product context and feeding gaps back to the brand consultant simultaneously.',
              },
            ],
          },
          {
            title: 'A product moving faster than any system could keep up with',
            description: [
              'Features were shipping constantly. By the time there was space to update anything, there were already new components waiting.',
              {
                bold: true,
                text: "The risk wasn't falling behind, it was letting the gap between the designed system and shipped product grow wide enough that the system stopped being useful.",
              },
            ],
          },
        ]}
      />

      <CaseStagedStory
        category="The Approach"
        title="Starting with an audit, not a rebuild"
        body={[
          'My first move was to map what existed, not to plan a full rebuild, but to understand where the inherited system was breaking down and why. That meant reading the decisions made before I arrived, not overwriting them.',
          'Foundational components first (buttons, toggles, checkboxes) because everything else inherits from them. Getting those right under the new brand meant every more complex pattern that followed had something solid to build on.',
        ]}
      />

      <CaseStagedStory
        title="Stress-testing the brand in product"
        body={[
          "Because the brand guidelines weren't finished, I treated the product as a testing ground, validating whether brand decisions held up in a real interface, not just a style guide.",
          "I kept a running record of gaps and fed those back to the brand consultant. That loop went both ways: some brand decisions came back stronger because they'd been tested in product first. And when the brand wasn't applied as intended, revisions had to be made quickly to keep the system and product aligned.",
        ]}
        image={{
          src: '/images/process/sfds-brand-application.webp',
          alt: 'Before and after of the signing wizard after the design system rebrand update',
          caption:
            'Before and after, the signing wizard before and after the design system rebrand update.',
        }}
      />

      <CaseStagedStory
        title="Designing for what comes next"
        itemsLayout="grid"
        items={[
          {
            title: 'Keeping design and engineering in sync',
            description: [
              'Early on, one of the frontend engineers and I mapped out how changes would be introduced, through updated tokens and semantics in Figma, rolling out new and updated components on an ongoing basis.',
              'As the team grew and priorities shifted, direct collaboration became harder. The documentation had to fill the gap, specific enough that engineers could implement confidently without needing intent explained every time.',
            ],
          },
          {
            title: "Designing for a team that didn't exist yet",
            description: [
              "As the sole designer, the system needed to be clear enough that a new designer could onboard quickly and contribute confidently without reverse-engineering decisions I'd already made.",
              'That meant documenting not just what components did, but why they were built that way. The reasoning behind a decision is often more valuable than the decision itself.',
            ],
          },
          {
            title: 'Let the product lead the system',
            description: [
              "The guiding principle throughout: don't try to finish the system before the product needs it. Let real design work surface what's required, build what's proven itself, and keep documenting.",
              'Each iteration of the product tells you what the system actually needs next. A system that grows with the product is more useful than a perfect one nobody is waiting for.',
            ],
          },
        ]}
      />

      <CaseStagedStory
        title="What the documentation actually looked like"
        body={[
          "Every component page followed the same shape: anatomy, interactive states, and the rules governing edge cases, laid out next to a live, restrained example. The pagination component below shows the pattern: default, selected, hover, and disabled states spelled out, along with the truncation rules for when the page count grows past what's visible.",
          "Specific enough that an engineer could implement it without needing intent explained in a meeting first.",
        ]}
        image={{
          src: '/images/process/sfds-guidelines.webp',
          alt: 'Figma guidelines page for the Pagination component, showing its anatomy, interactive states, and truncation rules next to a live example',
          caption:
            "A component guidelines page in Figma: anatomy, interactive states, and truncation rules, documented next to a live example.",
        }}
      />

      <CaseStagedStory
        category="The Outcome"
        title="Constraints & trade-offs"
        items={[
          {
            title: 'One designer, two jobs',
            description:
              'System work had to happen alongside feature delivery, not instead of it. Some components got documented thoroughly. Others got shipped and documented later.',
          },
          {
            title: 'The system had to live inside Tailwind',
            description:
              'Working within an existing Tailwind library meant some design decisions had to bend to technical feasibility. Component naming, behaviour, and documentation alignment became as critical as visual consistency.',
          },
          {
            title: 'Developer buy-in shifted over time',
            description:
              'Early collaboration was strong. As the team grew and time pressure increased, silos formed. The system had to be documented well enough to work without a real-time conversation.',
          },
          {
            title: 'The product always moved faster than the system',
            description:
              'By the time there was space to update anything, there were already new components waiting. Accepting that the system would never be complete, and designing around that reality, was the only viable approach.',
          },
        ]}
      />

      <CaseStagedStory
        title="Where it stood at handoff"
        itemsLayout="grid"
        spacingBottom="loose"
        items={[
          {
            title: 'Foundational components rebuilt',
            description:
              'Buttons, toggles, checkboxes, and the other base patterns everything else inherits from, shipped under the new brand.',
          },
          {
            title: 'A brand-to-product feedback loop',
            description:
              'Established with the brand consultant, catching mismatches between guidelines and real product before they shipped, not after.',
          },
          {
            title: 'Documentation engineers could use',
            description:
              'Specific enough to implement without a meeting, and repeatable, whoever wrote the next component page could follow the same shape.',
          },
          {
            title: 'Most of the product still unmigrated',
            description:
              "The product was still shipping faster than the system could keep pace with when I left. Stated plainly here rather than glossed over: this was a foundation handed off mid-build, not a finished rollout.",
          },
        ]}
      />

      <CaseStagedStory
        variant="outcome"
        title="Reflections"
        body={[
          "Inheriting a system mid-rebrand taught me that evolving someone else's work responsibly takes longer than starting fresh, but produces better outcomes. You have to understand why things are the way they are before you change them.",
          'Brand and system work are not sequential, they inform each other. Some of the best brand refinements in this project came from stress-testing guidelines in product, not from a style guide review.',
          "I moved on before this one was finished, which turned \"designing for a team that didn't exist yet\" into something more literal than I expected. The documentation I wrote for a designer who hadn't been hired was, in the end, read by whoever picked this up after me.",
          {
            bold: true,
            text: "Being the sole designer on a system changes how you write documentation. You stop writing for yourself and start writing for someone you haven't met yet.",
          },
        ]}
      />

      <CaseStagedAdjacentNav
        previous={{
          href: `${ROUTES.digitalProduct}/suitefiles-ai-summary`,
          company: 'SuiteFiles',
          label: 'An AI summary feature for a document signing platform',
        }}
        next={{
          href: `${ROUTES.digitalProduct}/moe-design-system`,
          company: 'Ministry of Education',
          label: 'The first design system for a government education organisation',
        }}
      />
    </>
  )
}
