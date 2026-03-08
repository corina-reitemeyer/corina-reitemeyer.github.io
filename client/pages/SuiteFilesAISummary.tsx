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
        scope="The real challenge wasn't signing multiple documents. It was helping people understand them quickly. In a B2B document management platform used by accountants and financial professionals, recipients often struggled to grasp what they were being asked to sign. Senders filled the gaps by explaining context through emails or briefings, outside the product. I led the strategy and design to introduce AI in a way that supported understanding without removing responsibility. The outcome was an AI-powered summarisation feature that improved clarity at the point of signing, while keeping users in control. This work also set the foundation for how AI would be approached across the product going forward."
        involvement="Senior Product Designer - Led feature strategy and end-to-end UX/UI design for the company's first AI capability."
        team="Worked within a cross-functional product team including product management, frontend and backend engineers, and internal stakeholders responsible for risk and rollout. I partnered closely with engineers to align on feasibility, model constraints, and what AI should and should not automate."
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
        title="Product Impact"
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
            body: "I stepped back and looked at the problem as a system. The question wasn't how to add AI to signing, but how AI could reduce friction without undermining trust or control. To guide decisions, I defined three human–AI principles: transparency, editability, and user agency. Instead of treating AI as an add-on, I designed it as a supporting layer in the workflow. Automation was used where it helped, and human judgment stayed in the loop where it mattered. I worked closely with engineers to understand the model's capabilities and limits, which helped clarify what we could ship immediately and what needed more exploration. This collaboration kept the work grounded while still pushing the product forward. In a lean startup environment, I prioritised clarity over complexity. We shipped a first phase release that users could trust, and it became a reference point for how AI would be designed across the product.",
          },
          {
            id: 'process-constraints',
            subtitle: 'Designing for real constraints',
            body: 'At launch, summary creation was limited to recipients due to time and technical constraints. This introduced a risk of uneven value: the effort of generating context sat with the person already reviewing and signing, while senders saw less immediate benefit from the feature. To address the more critical risk, I focused on how recipients interpret AI output. In a legal and financial workflow, summaries can easily be mistaken for authoritative. I added a clear, in-context disclaimer to signal that AI output should be treated as a starting point and reviewed with a critical eye. This reinforced accountability and reduced the risk of over-reliance at the point of signing. This approach made it possible to ship a responsible first version within constraints, while leaving room to expand capability later without undermining trust.',
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

      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            id: 'ai-principles',
            title: 'Defined Human–AI Interaction Principles',
            description:
              'Set UX guardrails for using AI in high-risk signing workflows.',
          },
          {
            id: 'first-ai-feature',
            title: "Led the Company's First AI Feature",
            description:
              'Designed an AI summarisation feature that improved clarity across multi-document requests.',
          },
          {
            id: 'ai-direction',
            title: 'Shaped AI-First Product Direction',
            description:
              'Established a reusable model for how AI is integrated across the product.',
          },
        ]}
      />
    </>
  )
}
