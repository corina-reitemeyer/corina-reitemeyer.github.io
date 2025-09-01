import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const SuiteFilesAISummary = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Bringing clarity and efficiency to multi-document signing through AI-driven summarisation."
        company="SuiteFiles"
        project="AI Summaries"
        imageSrc="/images/portfolio/suitefiles-ai-summary-cover.png"
        scope="Lengthy, multi-document signing requests created friction—recipients struggled to understand what they were signing, while senders had to provide context separately through emails or briefings, leaving it disconnected from the documents themselves. But what if GenAI could take the heavy lifting, leaving users to do what matters most—signing and preparing documents? I led the strategy and redesign of this feature by shaping the AI approach from a UX perspective—defining how it should behave within the workflow and ensuring users retained transparency and control. The result was an AI-powered summarisation tool that streamlined the signing process: recipients could quickly grasp context, and senders could personalise summaries without starting from scratch. Beyond this feature, the work set a model for the company’s AI-first direction, influencing how AI is integrated across the product."
        involvement="Feature design lead, UX strategy for AI integration, cross-functional partner"
        meta={{
          date: '2025',
          type: 'SaaS Proaduct (B2B), Product Design',
          specialisation: 'Generative AI, product feature',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/sfai-mobile.png',
            alt: 'Mobile screens showing AI Summarizer feature',
            caption: 'Mobile screens of the AI Summarizer',
          },
          {
            src: '/images/product/sfai-desktop-panel-anatomy.png',
            alt: 'a desktop screen with components pointing towards it with arrows',
            caption: 'Anatomy of the feature',
          },
          {
            src: '/images/product/sfai-desktop-slides.png',
            alt: 'two desktop screens showing the parts of the ai summarizer',
            caption: 'Signing wizard from the recipient view - desktop',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From UX Principles to AI-Driven Strategy"
        body="I approached the feature by reframing the problem at a system level: how could AI reduce friction in the signing journey while preserving trust and control? I defined the human–AI interaction principles—transparency, editability, and user agency—that guided every design decision. Rather than treating AI as an add-on, I positioned it as a strategic layer in the workflow, prototyping and testing interaction models that balanced automation with human judgment. The process established a model for responsible, user-centred AI that the company continues to build on."
        images={[
          {
            src: '/images/process/sfai-userflow-recipient.png',
            alt: 'useflow diagram showing recipient flow comparison with and without feature',
            caption: 'Userflow of recipient using AI summarizer.',
          },
        ]}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Defined Human-AI Interaction Principles',
            description:
              'Set the UX strategy for how AI should behave within the signing workflow, ensuring transparency, editability, and user trust.',
          },
          {
            title: 'Designed a New AI-Powered Feature',
            description:
              'Created the AI feature in form of a document summarizer in the product, enabling senders and recipients to work more efficiently with multi-document requests.',
          },
          {
            title: 'Improved Efficiency and Clarity Across the Signing Flow',
            description:
              'Enabled senders to adapt AI-generated summaries instead of drafting from scratch, while giving recipients quick, clear context for lengthy, multi-document requests—all within the signing experience.',
          },
          {
            title: 'Influenced AI-First Product Strategy',
            description:
              'Delivered a feature that became a reference point for the company’s AI-first approach, guiding future AI-driven design.',
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
              'AI summaries reduced time-to-sign by streamlining long, multi-document requests.',
          },
          {
            icon: '✅',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconNode: null,
            title: 'Greater Recipient Confidence',
            description:
              'Clear, AI-powered summaries helped recipients understand documents at a glance.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'Improved adoption on new document signing platform',
            description:
              'Lowered workflow friction encouraged wider use of signing features.',
          },
          {
            icon: '🤖',
            iconSrc: '/icons/sparkle.svg',
            iconAlt: 'AI Sparkle',
            iconNode: null,
            title: 'AI-First Differentiation',
            description:
              'Positioned the product competitively by showcasing practical, human-centered AI.',
          },
        ]}
      />
    </div>
  )
}

export default SuiteFilesAISummary
