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
        scope="The challenge wasn’t signing multiple documents — it was understanding them quickly. Recipients struggled to grasp what they were signing, while senders had to explain context separately through emails or briefings — disconnected from the documents. What if AI could handle the heavy lifting, while people focused on signing and preparing documents? I led the strategy and design, defining how AI should fit into the workflow — keeping users in control and ensuring transparency. The result: an AI-powered summarisation tool that streamlined signing. Recipients quickly grasped context, and senders could personalise summaries without starting from scratch. Beyond this feature, the work also became a blueprint for the company’s AI-first direction, shaping how AI is integrated across the product."
        involvement="Led feature design and UX strategy for AI integration, working closely with cross-functional partners."
        meta={{
          date: '2025',
          type: 'SaaS Product (B2B), Product Design',
          specialisation: 'Generative AI',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/sfai-mobile.webp',
            alt: 'Mobile screens showing AI Summarizer feature',
            caption: 'Mobile screens of the AI Summarizer.',
          },
          {
            src: '/images/product/sfai-desktop-panel-anatomy.webp',
            alt: 'a desktop screen with components pointing towards it with arrows',
            caption: 'Anatomy of the feature.',
          },
          {
            src: '/images/product/sfai-desktop-slides.webp',
            alt: 'two desktop screens showing the parts of the ai summarizer',
            caption: 'Desktop screens of the AI summary feature.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From UX Principles to AI-Driven Strategy"
        body="I reframed the problem at a system level: how could AI reduce friction in signing while preserving trust and control? To guide decisions, I defined three human–AI principles: transparency, editability, and user agency. Rather than treating AI as an add-on, I positioned it as a strategic layer in the workflow — balancing automation with human judgment. I worked closely with engineers, who best understood the AI model’s capabilities and limits. Their insight shaped what we could do immediately, what we couldn’t, and what we might enable in the future. This collaboration ensured the design was both ambitious and technically grounded. Working in a lean startup environment, I focused on clarity over complexity, shipping a simple, responsible first release that users could trust. This set a model for how AI would be integrated across the product moving forward."
        images={[
          {
            src: '/images/process/sfai-userflow-recipient.webp',
            alt: 'useflow diagram showing recipient flow comparison with and without feature',
            caption:
              'Workflow comparison — recipient pain points without summarizer.',
          },
          {
            src: '/images/process/sfai-ai-principles.webp',
            alt: 'Triangle diagram showing the three main principles that informed the design.',
            caption: 'Design principles — faster signing, user in control.',
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
              'Set the UX strategy for AI in the signing workflow, ensuring transparency, editability, and user trust.',
          },
          {
            title: 'Led the design of the products first AI feature',
            description:
              'Created a document summarisation feature that helped senders and recipients handle multi-document requests more efficiently.',
          },
          {
            title: 'Shaped AI-First Product Strategy',
            description:
              'Delivered a feature that became a blueprint for the company’s AI-first approach, influencing future product design.',
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
    </div>
  )
}

export default SuiteFilesAISummary
