import { useCaseStagedChrome } from './useCaseStagedChrome'
import { ROUTES } from '../../lib/routes'
import CaseStagedHero from './components/CaseStagedHero'
import CaseStagedSplit from './components/CaseStagedSplit'
import CaseStagedStory from './components/CaseStagedStory'
import CaseStagedAdjacentNav from './components/CaseStagedAdjacentNav'

export default function SuiteFilesAISummary() {
  useCaseStagedChrome()

  return (
    <>
      <CaseStagedHero
        backHref={ROUTES.digitalProducts}
        meta="Case study · SuiteFiles · 2025"
        title="Trust, built into every AI summary."
      />

      <CaseStagedSplit
        railTitle="Making multi-document signing faster and clearer with AI."
        railLede="Led feature strategy and end-to-end UX/UI design for the company's first AI capability."
        aboutParagraphs={[
          'SuiteFiles is a document management and e-signing platform built for accounting professionals. The product was in the midst of a platform migration and redesign when the company began exploring AI as a strategic direction. I was given end-to-end ownership of the AI summarisation feature, from defining the approach to shipping the first version, within a cross-functional product team.',
        ]}
        meta={[
          { label: 'Domain', value: 'SaaS (B2B)' },
          { label: 'Year', value: '2025' },
          { label: 'My Role', value: 'Senior Product Designer' },
          {
            label: 'Team',
            value: 'PM, Fullstack engineers, risk stakeholders',
          },
        ]}
        panels={[
          {
            id: 'overview-full',
            grid: 'full',
            images: [
              {
                id: 'suitefiles-ai-summary-cover',
                src: '/images/portfolio/product/suitefiles-ai-summary-cover.webp',
                alt: 'AI summary panel shown on desktop and mobile in a signing request',
                caption:
                  'The full desktop experience in a multi-document signing request.',
              },
            ],
          },
          {
            id: 'overview-full-2',
            grid: 'full',
            images: [
              {
                id: 'sfai-mobile',
                src: '/images/product/sfai-mobile.webp',
                alt: 'Mobile screens showing the AI summariser feature',
                caption:
                  'The summary panel on mobile, designed to sit within the signing flow without interrupting it.',
              },
            ],
          },
          {
            id: 'overview-full-3',
            grid: 'full',
            images: [
              {
                id: 'sfai-desktop-anatomy',
                src: '/images/product/sfai-desktop-panel-anatomy.webp',
                alt: 'Desktop screen showing the AI summariser feature anatomy',
                caption:
                  'Feature anatomy: the transparency indicators, disclaimer, and user controls.',
              },
            ],
          },
        ]}
      />

      <CaseStagedStory
        category="The Problem"
        title="The problem, from two angles"
        itemsLayout="grid"
        items={[
          {
            title: 'Recipients struggled to understand what they were signing',
            description: [
              'In a platform used by accountants and financial professionals, signing requests often involved multiple lengthy documents. Recipients had no way to quickly grasp what they were agreeing to.',
              {
                bold: true,
                text: "Senders were compensating outside the product: through emails, calls, and briefings, because the product wasn't helping enough at the moment that mattered most.",
              },
            ],
          },
          {
            title: 'AI could help, but in the wrong hands, it could also mislead',
            description: [
              'In a legal and financial context, an AI summary that feels authoritative can be more dangerous than no summary at all. Recipients could easily mistake generated output for verified fact.',
              {
                bold: true,
                text: "The real challenge wasn't building an AI feature. It was building one that improved understanding without removing accountability, and doing it without formal user research to validate the approach.",
              },
            ],
          },
        ]}
      />

      <CaseStagedStory
        category="The Approach"
        title="Principles before pixels"
        body={[
          'Before opening Figma, I defined three human-AI principles to guide every decision: transparency, editability, and user agency. Rather than treating AI as an add-on, I designed it as a supporting layer: automation where it helped, human judgment where it mattered.',
          'Having a framework meant design decisions could be evaluated against something concrete, not just instinct, and gave the team a shared language for trade-offs as constraints changed.',
        ]}
        image={{
          src: '/images/process/sfai-ai-principles.webp',
          alt: 'Diagram showing three human-AI design principles',
          caption: 'Human-AI design principles defined before any design work began.',
        }}
      />

      <CaseStagedStory
        title="Finding signal without formal research"
        body={[
          "Research wasn't always an option, whether due to limited participant availability or time constraints. So I found signal elsewhere. I audited existing AI summarisation tools and competing e-signing platforms to understand established conventions and what users would likely expect.",
          "I also worked with customer success and sales to understand what they were hearing. That surfaced something important: accountants are curious about AI but not always tech-literate, and there was real anxiety about trusting AI output in a legal context. That insight directly shaped the settings toggle, so customers who weren't yet comfortable with AI could opt out entirely. User agency wasn't just a principle on a diagram. It became a feature.",
        ]}
        image={{
          src: '/images/process/sf-ai-summariser-competitors.webp',
          alt: 'Screenshots of competitor AI summarisation tools and e-signing platforms reviewed during research',
          caption:
            'Exploring competitor and comparable products, understanding established AI conventions before designing.',
        }}
      />

      <CaseStagedStory
        title="Designing alongside a moving target"
        body={[
          'The AI model was being finalised in parallel with the design work, which meant consistent check-ins with engineers to test whether ideas were feasible as the model evolved.',
          "The prompt that drove the summaries wasn't right initially. After sales tested an early version with prospects, their feedback helped refine it significantly: a lean feedback loop that replaced what formal user testing would have given us.",
        ]}
      />

      <CaseStagedStory
        title="Finding the right moment in the flow"
        body={[
          "We landed on surfacing the summary during the document review step, when the user is already in the document and considering what they're about to sign. That's the moment where a summary has the most value and the least friction.",
          'The third-party PDF platform introduced technical constraints that kept the implementation simple for v1, which reinforced the decision to focus on clarity and trust rather than feature depth.',
        ]}
        image={{
          src: '/images/process/sfai-userflow-recipient.webp',
          alt: 'Workflow comparison with and without the AI summariser',
          caption:
            'Before and after workflow: where AI reduced friction in the signing journey.',
        }}
      />

      <CaseStagedStory
        title="What made it into v1"
        itemsLayout="grid"
        items={[
          {
            title: 'Designing the disclaimer as a guardrail, not an afterthought',
            description: [
              'In a legal and financial context, AI output that feels authoritative is a liability. I added a clear in-context disclaimer to signal that summaries should be treated as a starting point: reviewed critically, not accepted at face value.',
              "The feedback mechanism I originally intended didn't make it to v1. Losing it pushed me toward the disclaimer as the primary trust signal, a constraint that removed one solution and surfaced a better one.",
            ],
          },
          {
            title: 'Shipping a deliberate, limited v1',
            description: [
              'Summary generation was limited to recipients only at launch: a known trade-off, managed by prioritising the most critical problem first: recipients interpreting AI output incorrectly in a high-stakes workflow.',
              'The first phase was designed to be expandable without requiring a rebuild, so trust could be earned incrementally rather than promised upfront.',
            ],
          },
        ]}
      />

      <CaseStagedStory
        category="The Outcome"
        title="Constraints & trade-offs"
        items={[
          {
            title: 'No direct access to users',
            description:
              "Customer success and sales conversations provided useful signal, but they're not a substitute for talking directly to recipients. Some assumptions about user behaviour remained untested at launch.",
          },
          {
            title: 'Lost a feedback mechanism to feasibility',
            description:
              "A way for recipients to flag inaccurate summaries didn't make v1. The disclaimer compensated, but a feedback loop would have given the team real data on model accuracy over time. It was scoped for the next sprint.",
          },
          {
            title: 'Uneven value at launch',
            description:
              'Limiting summary generation to recipients only created an imbalance. The person already under pressure to sign was also generating context. It was a known trade-off, with sender-side generation scoped for the next sprint.',
          },
        ]}
      />

      <CaseStagedStory
        title="Results"
        itemsLayout="grid"
        items={[
          {
            title: 'Reduced friction at signing',
            description:
              'Recipients could understand what they were signing without needing external context from senders, keeping the workflow inside the product where it belongs.',
          },
          {
            title: 'Trust built into the experience',
            description:
              "Transparency indicators, in-context disclaimers, and an opt-out setting on the document sender's end gave users control over how they engaged with the AI feature, rather than having it imposed on them.",
          },
          {
            title: 'A foundation for future AI work',
            description:
              'The principles and patterns established in this feature became the reference point for how AI would be approached across the product going forward.',
          },
        ]}
      />

      <CaseStagedStory
        variant="outcome"
        title="Reflections"
        body={[
          "This project reinforced that good AI design isn't about making systems feel smarter. It's about helping people feel more confident in the decisions they're making.",
          "Working closely with engineers throughout, who were familiar with the model, was what made responsible shipping possible. It surfaced the model's real limitations early enough to design with them, rather than discovering them after decisions had already been made.",
          {
            bold: true,
            text: 'Designing for trust in a high-stakes context is less about what you add and more about what you are willing to hold back. Whilst not flashy, the restraint in this feature (the opt-out, the disclaimer, the limited v1) was intentional. It shaped how I think about responsible design more broadly.',
          },
        ]}
      />

      <CaseStagedAdjacentNav
        previous={{
          href: `${ROUTES.digitalProduct}/ow-templates`,
          label:
            "Helping researchers start studies faster, and discover methods they didn't know existed.",
        }}
        next={{
          href: `${ROUTES.digitalProduct}/suitefiles-design-system`,
          label:
            'A live rebrand. A fast-moving product. One design system that had to keep up with both.',
        }}
      />
    </>
  )
}
