import { useId } from 'react'
import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

export default function SuiteFilesAISummary() {
  const reflectionsId = useId()

  return (
    <>
      <CaseStudyNavy
        intro="Making multi-document signing faster and clearer with AI."
        company="SuiteFiles"
        project="AI Summaries"
        imageSrc="/images/portfolio/suitefiles-ai-summary-cover.webp"
        imageAlt="SuiteFiles AI Summaries feature hero"
        scope="The real challenge wasn't signing multiple documents. It was helping people understand them. In a B2B document management platform used by accountants and financial professionals, their recipients often struggled to grasp what they were being asked to sign. Senders filled the gap outside the product — through emails, calls, briefings. The product wasn't broken. It just wasn't helping enough at the moment that mattered most especially when signing request involved multiple lengthy documents. I led strategy and design for the company's first AI feature: a summarisation tool that improved clarity at the point of signing, without removing human responsibility from the process."
        involvement="Senior Product Designer - Led feature strategy and end-to-end UX/UI design for the company's first AI capability."
        team="Worked within a cross-functional product team including product management, frontend and backend engineers, and internal stakeholders responsible for risk and rollout. I partnered closely with engineers to align on feasibility, model constraints, and what AI should and should not automate in the flow."
        meta={{
          date: '2025',
          type: 'SaaS Product (B2B)',
          specialisation: 'Product Design, Generative AI',
        }}
      />

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

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            id: 'process-principles',
            subtitle: 'From UX principles to responsible AI',
            body: "I stepped back and looked at the problem as a system. The question wasn't how to add AI to signing, it was how AI could reduce friction without undermining trust or control. Recipients could be anyone: a retiree, a small business owner, someone signing on behalf of a family member. Designing for the wide range of digital literacy and legal understanding made responsible AI not a nice-to-have, but the only viable approach. To guide every decision, I defined three human-AI principles upfront: transparency, editability, and user agency. Rather than treating AI as an add-on, I designed it as a supporting layer in the workflow. Automation where it helped, human judgment where it mattered. I worked closely with engineers to understand the model's capabilities and limits, which shaped what we could ship immediately and what needed more exploration. We shipped a first phase that users could trust and it became the reference point for how AI would be designed across the product going forward.",
          },
          {
            id: 'process-future',
            subtitle: 'What we saw coming next',
            body: "Two things stayed with me after launch. The first was hallucination risk: AI summaries in a legal context carry a real risk of inaccurate or misleading output. The disclaimer aimed to address a possible over-reliance at v1 from the recipients end, but a more robust solution would require flagging low-confidence summaries or human review before delivery. The second was sender-generated summaries. Senders already know what's in the documents, and giving them the option to generate and review a summary on behalf of recipients would reduce hallucination risk, solve the uneven value problem from launch, and keep a human in the loop at the most critical point.",
          },
        ]}
        images={[
          {
            id: 'sfai-userflow',
            src: '/images/process/sfai-userflow-recipient.webp',
            alt: 'Workflow comparison with and without AI summariser',
            caption:
              'Before/after workflow showing reduced recipient friction.',
          },
          {
            id: 'sfai-principles',
            src: '/images/process/sfai-ai-principles.webp',
            alt: 'Diagram showing three human-AI design principles',
            caption: 'Human–AI design principles guiding the feature.',
          },
        ]}
      />

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
                {
                  "This project reinforced that good AI design isn't about making systems feel smarter. It's about helping people feel more confident in the decisions they're making."
                }
              </p>
              <p>
                {
                  'Taking a step back and working closely with engineers helped clarify where AI genuinely added value, and where it risked removing accountability in a high-stakes workflow.'
                }
              </p>
              <p>
                {
                  'Shipping this feature strengthened my belief in restraint, clear guardrails, and honest communication with users. It also shaped how I now approach AI work more broadly: start small, make intent visible, and earn trust before scaling.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
