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
              'Having a framework meant design decisions could be evaluated against something concrete, not just instinct. It also gave the team a shared language for discussing trade-offs as constraints changed throughout the project.',
            ],
            image: {
              id: 'sfai-principles',
              src: '/images/process/sfai-ai-principles.webp',
              alt: 'Diagram showing three human-AI design principles',
              caption:
                'Human-AI design principles defined before any design work began.',
            },
          },
          {
            id: 'approach-research-mitigation',
            heading: 'Finding signal without formal research',
            body: [
              "Research wasn't always an option, whether due to limited participant availability or time constraints. So I found signal elsewhere. I audited existing AI summarisation tools and competing e-signing platforms to understand established conventions and what users would likely expect based on products they already used.",
              'I also worked with customer success and sales to understand what they were hearing from customers and prospects. That surfaced something important: accountants are curious about AI but not always tech-literate, and there was real anxiety about trusting AI output in a legal context.',
              "That insight directly shaped one of the key design decisions: adding a settings toggle so customers who weren't yet comfortable with AI could opt out entirely. User agency wasn't just a principle on a diagram. It became a feature.",
            ],
          },
          {
            id: 'approach-constraints',
            heading: 'Designing alongside a moving target',
            body: [
              'The AI model was being finalised in parallel with the design work. That meant consistent check-ins with engineers. Mainly to inform and test whether ideas were technically feasible as the model evolved.',
              "The prompt that drove the summaries wasn't quite right initially. After sales tested an early version with a few prospects, the feedback helped refine the prompt significantly. It was a lean feedback loop that replaced what formal user testing would have given us: imperfect, but grounded in real reactions from real people in the target audience.",
            ],
            image: {
              id: 'sfai-userflow',
              src: '/images/process/sfai-userflow-recipient.webp',
              alt: 'Workflow comparison with and without AI summariser',
              caption:
                'Before and after workflow — showing where AI reduced friction in the signing journey.',
            },
          },
          {
            id: 'approach-placement',
            heading: 'Finding the right moment in the flow',
            body: [
              "One of the key interaction decisions was where in the signing wizard the feature would live. Too early and it disrupts the flow before the user is oriented. Too late and it's missed entirely.",
              "We landed on surfacing it during the document review step: when the user is already in the document and considering what they're about to sign. That's the moment where a summary has the most value and the least friction.",
              'The third-party PDF platform introduced its own technical constraints. We had to keep the implementation simple for v1, which reinforced the decision to focus on clarity and trust rather than feature depth.',
            ],
          },
          {
            id: 'approach-v1',
            heading: 'Shipping a deliberate, limited v1',
            body: [
              'Summary generation was limited to recipients only at launch. A technical constraint that created an uneven value exchange. The person already under pressure to review and sign was also doing the work of generating context.',
              'I acknowledged that as a real risk but prioritised the more critical problem first: recipients interpreting AI output incorrectly in a high-stakes workflow. The first phase was designed to be expandable without requiring a rebuild, so trust could be earned incrementally rather than promised upfront. We also communicated with document senders / customers up front that the feature was in an early testing phase.',
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
              "Customer success and sales conversations provided useful signal, but they're not a substitute for talking directly to recipients — the people actually doing the signing. That gap meant some assumptions about user behaviour remained untested at launch.",
          },
          {
            id: 'lost-feature-to-feasibility',
            title: 'Lost a feedback mechanism to feasibility',
            description:
              "A way for recipients to flag inaccurate or misleading summaries was part of the original intent but didn't make v1. The disclaimer compensated, but a feedback loop would have given the team real data on model accuracy over time. It was scoped for the next sprint to ensure it made it into the intended design.",
          },
          {
            id: 'shipped-with-uneven-value',
            title: 'Uneven value at launch',
            description:
              'Limiting summary generation to recipients only created an imbalance — the person already under pressure to sign was also generating the context. It was a known trade-off, managed by prioritising the most critical risk first and designing for expansion in the next iteration.',
          },
        ]}
      />

      {/* 6. Product Outcomes */}
      <KeyOutcomes
        title="Product Outcomes"
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
          "Working closely with engineers from the start — not just at handoff — was what made responsible shipping possible. It surfaced the model's real limitations early enough to design with them, rather than discovering them after decisions had already been made.",
          'Designing for trust in a high-stakes context is less about what you add and more about what you are willing to hold back. Whilst not flashy, the restraint in this feature (the opt-out, the disclaimer, the limited v1) was intentional. It shaped how I think about responsible design more broadly.',
        ]}
      />
    </>
  )
}
