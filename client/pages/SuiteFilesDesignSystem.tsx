import { useCaseStagedChrome } from '../lib/useCaseStagedChrome'
import { ROUTES } from '../lib/routes'
import CaseStagedHero from '../components/casestudy-staged/CaseStagedHero'
import CaseStagedSplit from '../components/casestudy-staged/CaseStagedSplit'
import CaseStagedStory from '../components/casestudy-staged/CaseStagedStory'
import CaseStagedAdjacentNav from '../components/casestudy-staged/CaseStagedAdjacentNav'

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
        ]}
        meta={[
          { label: 'Domain', value: 'SaaS (B2B)' },
          { label: 'Year', value: '2025' },
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
            tone: 'slate',
            grid: 'full',
            images: [
              {
                id: 'sfds-desktop-examples',
                src: '/images/product/sfds-desktop-examples.webp',
                alt: 'Desktop examples of the product after rebranding',
                caption:
                  'The new brand and component patterns applied consistently across the product through the design system.',
              },
            ],
          },
          {
            id: 'overview-pair',
            tone: 'slate',
            grid: 'pair',
            images: [
              {
                id: 'sfds-component-diagram',
                src: '/images/product/sfds-component-product-diagram.webp',
                alt: 'Diagram of example components used in the design system',
                caption: 'Components mapped to real product context.',
              },
              {
                id: 'sfds-components',
                src: '/images/product/sfds-components.webp',
                alt: 'Selected component sets in Figma library',
                caption: 'Selected component sets in the Figma library.',
              },
            ],
          },
          {
            id: 'overview-full-2',
            tone: 'slate',
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
        title="Inheriting a system mid-rebrand without a full handover"
        body={[
          'The designer who built the foundations and worked with the brand consultant had left. I inherited their decisions without always knowing the reasoning behind them.',
          {
            bold: true,
            text: 'Evolving a system responsibly means understanding why things are the way they are before changing them. That takes longer than starting from scratch, and it requires a different kind of judgment.',
          },
        ]}
      />

      <CaseStagedStory
        title="Building with a brand that was still being defined"
        body={[
          'The brand guidelines were being developed alongside the redesign, not before it. There was no finished reference to implement from.',
          {
            bold: true,
            text: 'Every component decision was being made against a moving target. The system had to be built while the brand was still being shaped, which meant testing the identity in real product context and feeding gaps back to the brand consultant simultaneously.',
          },
        ]}
      />

      <CaseStagedStory
        title="A product moving faster than any system could keep up with"
        body={[
          'Features were shipping constantly. By the time there was space to update anything, there were already new components waiting.',
          {
            bold: true,
            text: "The risk wasn't falling behind, it was letting the gap between the designed system and shipped product grow wide enough that the system stopped being useful.",
          },
        ]}
      />

      <CaseStagedStory
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
        title="Keeping design and engineering in sync"
        body={[
          'Early on, one of the frontend engineers and I mapped out how changes would be introduced, through updated tokens and semantics in Figma, rolling out new and updated components on an ongoing basis.',
          'As the team grew and priorities shifted, direct collaboration became harder. The documentation had to fill the gap, specific enough that engineers could implement confidently without needing intent explained every time.',
        ]}
      />

      <CaseStagedStory
        title="Designing for a team that didn't exist yet"
        body={[
          "As the sole designer, the system needed to be clear enough that a new designer could onboard quickly and contribute confidently without reverse-engineering decisions I'd already made.",
          'That meant documenting not just what components did, but why they were built that way. The reasoning behind a decision is often more valuable than the decision itself.',
        ]}
      />

      <CaseStagedStory
        title="Let the product lead the system"
        body={[
          "The guiding principle throughout: don't try to finish the system before the product needs it. Let real design work surface what's required, build what's proven itself, and keep documenting.",
          'Each iteration of the product tells you what the system actually needs next. A system that grows with the product is more useful than a perfect one nobody is waiting for.',
        ]}
      />

      <CaseStagedStory
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
        title="Results"
        itemsLayout="grid"
        items={[
          {
            title: 'Brand applied consistently',
            description:
              'The rebrand rolled out through the system rather than component by component, ensuring visual consistency without requiring anyone to interpret the guidelines independently each time.',
          },
          {
            title: 'Delivery kept moving',
            description:
              'By evolving the system iteratively rather than rebuilding from scratch, product development never stopped. The system grew alongside delivery, not ahead of it.',
          },
          {
            title: 'Shared design and dev language',
            description:
              'Aligned component naming, behaviour, and documentation meant engineers could implement components confidently, reducing back-and-forth and keeping design and code in sync.',
          },
          {
            title: 'A foundation ready to scale',
            description:
              'Foundational components established first meant every new pattern had something solid to inherit from, including for designers who joined after the system was in place.',
          },
        ]}
      />

      <CaseStagedStory
        variant="outcome"
        title="Reflections"
        body={[
          "Inheriting a system mid-rebrand taught me that evolving someone else's work responsibly takes longer than starting fresh, but produces better outcomes. You have to understand why things are the way they are before you change them.",
          'Brand and system work are not sequential, they inform each other. Some of the best brand refinements in this project came from stress-testing guidelines in product, not from a style guide review.',
          {
            bold: true,
            text: "Being the sole designer on a system changes how you write documentation. You stop writing for yourself and start writing for someone you haven't met yet.",
          },
        ]}
      />

      <CaseStagedAdjacentNav
        previous={{
          href: `${ROUTES.digitalProduct}/suitefiles-ai-summary`,
          label:
            "Helping recipients understand what they're signing, with a little help from AI.",
        }}
        next={{
          href: `${ROUTES.digitalProduct}/moe-design-system`,
          label:
            'Building the first design system for a government organisation, used across 50+ platforms.',
        }}
      />
    </>
  )
}
