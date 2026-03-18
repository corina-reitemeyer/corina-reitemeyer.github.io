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
        overview="SuiteFiles is a document management and e-signing platform built for accounting professionals. When I joined the team, the entire product was in the midst of a platform migration and redesign project, starting with the e-signing platform. Alongside improvements highlighted by user research and modernisation of UX patterns, the company was beginning to explore AI as a strategic direction."
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
            caption: 'Final shipped AI summary experience (mobile).',
          },
          {
            id: 'sfai-desktop-anatomy',
            src: '/images/product/sfai-desktop-panel-anatomy.webp',
            alt: 'Desktop screen showing AI summariser feature anatomy',
            caption: 'Feature anatomy and key components.',
          },
          {
            id: 'sfai-desktop-slides',
            src: '/images/product/sfai-desktop-slides.webp',
            alt: 'Desktop screens showing AI summary feature',
            caption: 'Final shipped AI summary experience (desktop).',
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
                text: "Senders were filling the gap outside the product — through emails, calls, and briefings — because the product wasn't helping enough at the moment that mattered most.",
                bold: true,
              },
            ],
          },
          {
            id: 'challenge-ai',
            heading:
              'Introducing AI into a high-stakes, trust-sensitive workflow',
            body: [
              'AI summarisation had real potential to help — but in a legal and financial context, a poorly designed AI feature could do more harm than good.',
              {
                text: "The challenge wasn't just building an AI feature. It was building one that users could trust, that didn't remove accountability, and that could be shipped responsibly without formal user research.",
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
              'Before opening Figma, I defined three human-AI principles to guide every decision: transparency, editability, and user agency. Rather than treating AI as an add-on, I designed it as a supporting layer — automation where it helped, human judgment where it mattered.',
              'This gave the team a framework to evaluate design decisions against, and ensured the feature stayed grounded in responsible implementation even as constraints changed.',
            ],
            image: {
              id: 'sfai-principles',
              src: '/images/process/sfai-ai-principles.webp',
              alt: 'Diagram showing three human-AI design principles',
              caption: 'Human-AI design principles guiding the feature.',
            },
          },
          {
            id: 'approach-engineers',
            heading: 'Working within model constraints',
            body: [
              "I worked closely with engineers to understand what the model could and couldn't do. That shaped what we could ship immediately and what needed more exploration.",
              'Understanding the technical constraints early meant design decisions were grounded in reality — not aspirational features that would hit a wall at implementation.',
            ],
            image: {
              id: 'sfai-userflow',
              src: '/images/process/sfai-userflow-recipient.webp',
              alt: 'Workflow comparison with and without AI summariser',
              caption:
                'Before/after workflow showing reduced recipient friction.',
            },
          },
          {
            id: 'approach-research-mitigation',
            heading: 'Mitigating the lack of research',
            body: [
              "Without formal user research, I needed another way to ground design decisions in real user expectations. I looked at comparable products and established AI patterns to understand what users would likely bring to the experience — applying Jakob's Law: users spend most of their time on other products, so their mental model is shaped by those experiences.",
              "This meant auditing how other tools handled AI-generated content — things like awareness indicators, feedback mechanisms, copy to clipboard, and disclaimer copy. Even if we couldn't ship all of those patterns at v1, understanding the expected language and conventions helped ensure the feature felt familiar and trustworthy rather than foreign.",
              'It also gave me a defensible rationale for design decisions in the absence of primary research — grounded in established conventions rather than assumption.',
            ],
          },
          {
            id: 'approach-disclaimer',
            heading:
              'Designing the disclaimer as a guardrail, not an afterthought',
            body: [
              'In a legal and financial context, AI summaries could easily be mistaken for authoritative. I added a clear in-context disclaimer to signal that output should be treated as a starting point and reviewed critically.',
              "A feedback mechanism was part of the original intent — but wasn't feasible for the first release. That constraint pushed me toward the disclaimer instead. A constraint that removed one solution and surfaced a better one.",
            ],
          },
          {
            id: 'approach-v1',
            heading: 'Shipping a deliberate, limited v1',
            body: [
              'Summary generation was limited to recipients only at launch due to technical constraints. That created an uneven value exchange — acknowledged as a real risk, but managed by prioritising the most critical issue first.',
              "The first phase was designed to be expandable without compromising the trust we'd built. Start small, make intent visible, earn trust before scaling.",
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
            title: 'Designed without a research safety net',
            description:
              'No formal user research existed to validate whether AI summaries would resonate or raise concerns with financial professionals. I defined three human-AI principles upfront — transparency, editability, and user agency — and used them as the decision-making framework throughout.',
          },
          {
            id: 'lost-feature-to-feasibility',
            title: 'Lost a key feature to feasibility',
            description:
              "A feedback mechanism for flagging inaccurate summaries was part of the original intent but wasn't feasible for the first release. That constraint pushed me toward the in-context disclaimer instead — a constraint that removed one solution and surfaced a better one.",
          },
          {
            id: 'shipped-with-uneven-value',
            title: 'Shipped with uneven value by design',
            description:
              'Summary generation was limited to recipients only at launch, meaning the person already under pressure to sign was also generating context. I acknowledged the risk, prioritised recipient interpretation in a high-stakes legal workflow, and designed for expansion later without compromising trust.',
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
            title: 'Faster Deal Cycles',
            description:
              'AI-powered summaries streamlined multi-document requests, reducing time-to-sign.',
          },
          {
            id: 'recipient-confidence',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconEmoji: '✅',
            title: 'Greater Recipient Confidence',
            description:
              'Clear summaries gave recipients instant understanding of what they were signing.',
          },
          {
            id: 'ai-differentiation',
            iconSrc: '/icons/sparkle.svg',
            iconAlt: 'AI Sparkle',
            iconEmoji: '🤖',
            title: 'AI-First Differentiation',
            description:
              'Positioned the product competitively with practical, human-centered AI.',
          },
        ]}
      />

      {/* 7. Takeaways */}
      <Takeaways
        paragraphs={[
          "This project reinforced that good AI design isn't about making systems feel smarter. It's about helping people feel more confident in the decisions they're making.",
          'Taking a step back and working closely with engineers helped clarify where AI genuinely added value, and where it risked removing accountability in a high-stakes workflow.',
          'Shipping this feature strengthened my belief in restraint, clear guardrails, and honest communication with users. It also shaped how I now approach AI work more broadly: start small, make intent visible, and earn trust before scaling.',
        ]}
      />
    </>
  )
}
