import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const SuiteFilesAISummary = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Making multi-document signing faster and clearer with AI."
        company="SuiteFiles"
        project="AI Summaries"
        imageSrc="/images/portfolio/suitefiles-ai-summary-cover.webp"
        scope="The challenge wasn’t signing multiple documents — it was understanding them quickly. In a B2B document management platform for accountants and financial professionals, recipients struggled to grasp what they were signing, while senders had to explain context separately through emails or briefings. I led the strategy and design, defining where AI should — and should not — fit into the workflow. The result was an AI-powered summarisation tool that improved clarity without removing user accountability, and became a blueprint for the company’s AI-first direction."
        involvement="Senior Product Designer - Led feature strategy and end-to-end UX design for the company’s first AI capability."
        team="Worked within a cross-functional product team including product management, frontend and backend engineers, and internal stakeholders responsible for risk and rollout. I partnered closely with engineering to align on feasibility and AI constraints."
        meta={{
          date: '2025',
          type: 'SaaS Product (B2B)',
          specialisation: 'Product Design, Generative AI',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/sfai-mobile.webp',
            alt: 'Mobile screens showing AI Summarizer feature',
            caption: 'Final shipped AI summary experience (mobile).',
          },
          {
            src: '/images/product/sfai-desktop-panel-anatomy.webp',
            alt: 'Desktop screen showing AI summariser anatomy',
            caption: 'Feature anatomy and key components.',
          },
          {
            src: '/images/product/sfai-desktop-slides.webp',
            alt: 'Desktop screens showing AI summary feature',
            caption: 'Final shipped AI summary experience (desktop).',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            subtitle: 'From UX principles to responsible AI',
            body: 'I reframed the problem at a system level: how could AI reduce friction in signing while preserving trust and control? To guide decisions, I defined three human–AI principles: transparency, editability, and user agency. Rather than treating AI as an add-on, I positioned it as a strategic layer in the workflow — balancing automation with human judgment. I worked closely with engineers, who best understood the AI model’s capabilities and limits. Their insight shaped what we could do immediately, what we couldn’t, and what we might enable in the future. This collaboration ensured the design was both ambitious and technically grounded. Working in a lean startup environment, I focused on clarity over complexity, shipping a simple, responsible first release that users could trust. This set a model for how AI would be integrated across the product moving forward.',
          },
          {
            subtitle: 'Designing for real constraints',
            body: 'I intentionally ruled out fully automated summaries without review. Working closely with engineers, I focused on a simple, responsible first release that users could trust.',
          },
        ]}
        images={[
          {
            src: '/images/process/sfai-userflow-recipient.webp',
            alt: 'Workflow comparison with and without AI summariser',
            caption:
              'Before/after workflow showing reduced recipient friction.',
          },
          {
            src: '/images/process/sfai-ai-principles.webp',
            alt: 'Diagram showing three human-AI principles',
            caption: 'Human–AI design principles guiding the feature.',
          },
        ]}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Defined Human–AI Interaction Principles',
            description:
              'Set UX guardrails for using AI in high-risk signing workflows.',
          },
          {
            title: 'Led the Company’s First AI Feature',
            description:
              'Designed an AI summarisation feature that improved clarity across multi-document requests.',
          },
          {
            title: 'Shaped AI-First Product Direction',
            description:
              'Established a reusable model for how AI is integrated across the product.',
          },
        ]}
      />

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '⚡',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Zap',
            iconNode: null,
            title: 'Faster Deal Cycles',
            description:
              'AI-powered summaries streamlined multi-document requests, reducing time-to-sign.',
          },
          {
            icon: '✅',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconNode: null,
            title: 'Greater Recipient Confidence',
            description:
              'Clear summaries gave recipients instant understanding of what they were signing.',
          },
          {
            icon: '🤖',
            iconSrc: '/icons/sparkle.svg',
            iconAlt: 'AI Sparkle',
            iconNode: null,
            title: 'AI-First Differentiation',
            description:
              'Positioned the product competitively with practical, human-centered AI.',
          },
        ]}
      />

      <section className="relative w-full overflow-hidden border-white/10 text-white">
        {/* Radial gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(85% 85% at 50% 50%, rgba(59, 30, 157, 0.35), rgba(8, 8, 42, 0.9) 50%)',
          }}
        />

        {/* Content */}
        <div className="container relative mx-auto mb-20 max-w-6xl px-6 sm:my-28 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold">Reflections & Learnings</h2>

            <div className="mt-8 space-y-6 text-white/70">
              <p>
                This project reminded me that designing AI isn’t about making
                systems feel smarter — it’s about making people feel more
                confident in their decisions.
              </p>
              <p>
                Early on, I was tempted to push further toward automation.
                Slowing down and working closely with engineers helped clarify
                where AI added real value, and where it risked removing
                accountability in a high-stakes workflow.
              </p>
              <p>
                Shipping this feature reinforced the importance of restraint,
                clear guardrails, and honest communication with users. It also
                shaped how I now approach AI work: start small, make intent
                visible, and earn trust before scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuiteFilesAISummary
