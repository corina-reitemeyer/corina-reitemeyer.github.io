import CaseStudyNavy from '../components/casestudy/Hero'
import ChallengeSection from '../components/casestudy/Challenge'
import ApproachSection from '../components/casestudy/ApproachSection'
import AchievementsSection from '../components/casestudy/Achievements'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import Takeaways from '../components/casestudy/Takeaways'

export default function SuiteFilesAISummary() {
  return (
    <>
      {/* 1. Hero — hook + cover image + meta + scope + highlights */}
      <CaseStudyNavy
        intro="Making multi-document signing faster and clearer with AI."
        company="SuiteFiles"
        project="AI Summaries"
        imageSrc="/images/portfolio/suitefiles-ai-summary-cover.webp"
        imageAlt="SuiteFiles AI Summaries feature hero"
        overview="SuiteFiles is a document management and e-signing platform built for accounting professionals. The product was in the midst of a platform migration and redesign when the company began exploring AI as a strategic direction. I was given end-to-end ownership of the AI summarisation feature, from defining the approach to shipping the first version, within a cross-functional product team."
        involvement="Led feature strategy and end-to-end UX/UI design for the company's first AI capability."
        meta={[
          { label: 'Domain', value: 'SaaS (B2B)' },
          { label: 'Year', value: '2025' },
          { label: 'My Role', value: 'Senior Product Designer' },
          {
            label: 'Team',
            value: 'PM, Frontend & Backend Engineers, Risk Stakeholders',
          },
        ]}
      />

      {/* 2. Final designs */}
      <ImageStrip
        images={[
          {
            id: 'sfai-mobile',
            src: '/images/product/sfai-mobile.webp',
            alt: 'Mobile screens showing AI summariser feature',
            caption:
              'The summary panel on mobile — designed to sit within the signing flow without interrupting it.',
          },
          {
            id: 'sfai-desktop-slides',
            src: '/images/product/sfai-desktop-slides.webp',
            alt: 'Desktop screens showing AI summary feature',
            caption:
              'The full desktop experience in a multi-document signing request.',
          },
          {
            id: 'sfai-desktop-anatomy',
            src: '/images/product/sfai-desktop-panel-anatomy.webp',
            alt: 'Desktop screen showing AI summariser feature anatomy',
            caption:
              'Feature anatomy — showing the transparency indicators, disclaimer, and user controls.',
          },
        ]}
      />

      {/* 3. Challenge */}
      <ChallengeSection
        challenges={[
          {
            id: 'challenge-understanding',
            heading:
              'Recipients struggled to understand what they were signing',
            body: [
              'In a platform used by accountants and financial professionals, signing requests often involved multiple lengthy documents. Recipients had no way to quickly grasp what they were agreeing to.',
              {
                text: "Senders were compensating outside the product: through emails, calls, and briefings, because the product wasn't helping enough at the moment that mattered most.",
                bold: true,
              },
            ],
          },
          {
            id: 'challenge-ai',
            heading:
              'AI could help — but in the wrong hands, it could also mislead',
            body: [
              'In a legal and financial context, an AI summary that feels authoritative can be more dangerous than no summary at all. Recipients could easily mistake generated output for verified fact.',
              {
                text: "The real challenge wasn't building an AI feature. It was building one that improved understanding without removing accountability and doing it without formal user research to validate the approach.",
                bold: true,
              },
            ],
          },
        ]}
      />

      {/* 4. Approach */}
      <ApproachSection
        items={[
          {
            id: 'approach-principles',
            heading: 'Principles before pixels',
            body: [
              'Before opening Figma, I defined three human-AI principles to guide every decision: transparency, editability, and user agency. Rather than treating AI as an add-on, I designed it as a supporting layer: automation where it helped, human judgment where it mattered.',
              'Having a framework meant design decisions could be evaluated against something concrete, not just instinct, and gave the team a shared language for trade-offs as constraints changed.',
            ],
            images: [
              {
                id: 'sfai-principles',
                src: '/images/process/sfai-ai-principles.webp',
                alt: 'Diagram showing three human-AI design principles',
                caption:
                  'Human-AI design principles defined before any design work began.',
              },
            ],
          },
          {
            id: 'approach-research-mitigation',
            heading: 'Finding signal without formal research',
            body: [
              "Research wasn't always an option, whether due to limited participant availability or time constraints. So I found signal elsewhere. I audited existing AI summarisation tools and competing e-signing platforms to understand established conventions and what users would likely expect.",
              "I also worked with customer success and sales to understand what they were hearing. That surfaced something important: accountants are curious about AI but not always tech-literate, and there was real anxiety about trusting AI output in a legal context. That insight directly shaped the settings toggle, so customers who weren't yet comfortable with AI could opt out entirely. User agency wasn't just a principle on a diagram. It became a feature.",
            ],
            images: [
              {
                id: 'sfai-competitors',
                src: '/images/process/sf-ai-summariser-competitors.webp',
                alt: 'Screenshots of competitor AI summarisation tools and e-signing platforms reviewed during research',
                caption:
                  'Exploring competitor and comparable products, understanding established AI conventions before designing.',
              },
            ],
          },
          {
            id: 'approach-constraints',
            heading: 'Designing alongside a moving target',
            body: [
              'The AI model was being finalised in parallel with the design work, which meant consistent check-ins with engineers to test whether ideas were feasible as the model evolved.',
              "The prompt that drove the summaries wasn't right initially. After sales tested an early version with prospects, their feedback helped refine it significantly - lean feedback loop that replaced what formal user testing would have given us.",
            ],
          },
          {
            id: 'approach-placement',
            heading: 'Finding the right moment in the flow',
            body: [
              "We landed on surfacing the summary during the document review step, when the user is already in the document and considering what they're about to sign. That's the moment where a summary has the most value and the least friction.",
              'The third-party PDF platform introduced technical constraints that kept the implementation simple for v1, which reinforced the decision to focus on clarity and trust rather than feature depth.',
            ],
            images: [
              {
                id: 'sfai-userflow',
                src: '/images/process/sfai-userflow-recipient.webp',
                alt: 'Workflow comparison with and without AI summariser',
                caption:
                  'Before and after workflow — showing where AI reduced friction in the signing journey.',
              },
            ],
          },
          {
            id: 'approach-disclaimer',
            heading:
              'Designing the disclaimer as a guardrail, not an afterthought',
            body: [
              'In a legal and financial context, AI output that feels authoritative is a liability. I added a clear in-context disclaimer to signal that summaries should be treated as a starting point — reviewed critically, not accepted at face value.',
              "The feedback mechanism I originally intended didn't make it to v1. Losing it pushed me toward the disclaimer as the primary trust signal, a constraint that removed one solution and surfaced a better one.",
            ],
          },
          {
            id: 'approach-v1',
            heading: 'Shipping a deliberate, limited v1',
            body: [
              'Summary generation was limited to recipients only at launch: a known trade-off, managed by prioritising the most critical problem first: recipients interpreting AI output incorrectly in a high-stakes workflow.',
              'The first phase was designed to be expandable without requiring a rebuild, so trust could be earned incrementally rather than promised upfront.',
            ],
          },
        ]}
      />

      {/* 5. Constraints & Trade-offs */}
      <AchievementsSection
        title="Constraints & Trade-offs"
        achievements={[
          {
            id: 'no-research-safety-net',
            title: 'No direct access to users',
            description:
              "Customer success and sales conversations provided useful signal, but they're not a substitute for talking directly to recipients. Some assumptions about user behaviour remained untested at launch.",
          },
          {
            id: 'lost-feature-to-feasibility',
            title: 'Lost a feedback mechanism to feasibility',
            description:
              "A way for recipients to flag inaccurate summaries didn't make v1. The disclaimer compensated, but a feedback loop would have given the team real data on model accuracy over time. It was scoped for the next sprint.",
          },
          {
            id: 'shipped-with-uneven-value',
            title: 'Uneven value at launch',
            description:
              'Limiting summary generation to recipients only created an imbalance. The person already under pressure to sign was also generating context. It was a known trade-off, with sender-side generation scoped for the next sprint.',
          },
        ]}
      />

      {/* 6. Product Outcomes */}
      <KeyOutcomes
        title="Results"
        outcomes={[
          {
            id: 'faster-deals',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Bolt',
            iconEmoji: '⚡',
            title: 'Reduced friction at signing',
            description:
              'Recipients could understand what they were signing without needing external context from senders, keeping the workflow inside the product where it belongs.',
          },
          {
            id: 'recipient-confidence',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconEmoji: '✅',
            title: 'Trust built into the experience',
            description:
              'Transparency indicators, in-context disclaimers, and an opt-out setting on the document senders end, gave users control over how they engaged with AI feature, rather than having it imposed on them.',
          },
          {
            id: 'ai-differentiation',
            iconSrc: '/icons/sparkle.svg',
            iconAlt: 'AI Sparkle',
            iconEmoji: '🤖',
            title: 'A foundation for future AI work',
            description:
              'The principles and patterns established in this feature became the reference point for how AI would be approached across the product going forward.',
          },
        ]}
      />

      {/* 7. Takeaways */}
      <Takeaways
        paragraphs={[
          "This project reinforced that good AI design isn't about making systems feel smarter. It's about helping people feel more confident in the decisions they're making.",
          "Working closely with engineers throughout, who were familar with the model, was what made responsible shipping possible. It surfaced the model's real limitations early enough to design with them, rather than discovering them after decisions had already been made.",
          'Designing for trust in a high-stakes context is less about what you add and more about what you are willing to hold back. Whilst not flashy, the restraint in this feature (the opt-out, the disclaimer, the limited v1) was intentional. It shaped how I think about responsible design more broadly.',
        ]}
      />
    </>
  )
}
