import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const OWTemplates = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Research made easy with customisable templates."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/product/optimal-case-study-hero.webp"
        scope="Research setup was often slow and inconsistent, frustrating teams and delaying insights. This meant findings sometimes came too late to act on. At the same time, the product already supported many types of studies — like Information Architecture (IA) testing, a way to check how people understand structure and navigation — but most users didn’t realise this was possible. I designed the first version of the templates feature to solve both problems: ready-made, customisable study setups that made starting easier and showed the full range of research methods. It also encouraged researchers to try combining studies, moving beyond single methods to get stronger results. The work drew on user research, close collaboration with product owners and engineers, and iterative design to balance flexibility with speed. The result: researchers at all levels could launch studies faster, explore methods with confidence, and generate richer insights — while also guiding the product toward a stronger focus on IA."
        involvement="Led product design of the feature and collaborated with researchers to inform and validate the solution"
        meta={{
          date: '2023',
          type: 'Product Design, SaaS Product (B2B)',
          specialisation: 'Growth design',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/ow-desktop-1.webp',
            alt: 'Two laptops showing the template library and overview modal',
            caption: 'Desktop — template library and overview modal.',
          },
          {
            src: '/images/product/ow-desktop-2.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'Template library accessed from core workflows, with study details for added context.',
          },
          {
            src: '/images/product/ow-template-types.webp',
            alt: 'Six templates with their study types',
            caption:
              'First iteration: six multi-study templates supporting IA-focused research.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From Experiment to Scalable Feature"
        body="What if setting up research could be faster and easier? Using insights from ongoing projects, I designed the first version of multi-study research templates to tackle common setup challenges. Because this was the first project under the new strategy, I treated it as an experiment — focusing on a design that could grow over time while keeping engineering effort low until we proved user value. After launch, I worked with a researcher to see how the first six templates fit into real workflows. We found positives (teams using them for inspiration and trying new combinations) and gaps (missing content, limited features). These findings guided improvements to both content and features in the next release. This iterative, evidence-driven process turned templates into a repeatable feature that sped up setup and fit the product’s bigger direction."
        images={[
          {
            src: '/images/process/ow-userflow.webp',
            alt: 'An interaction map how a user can access and use the templates inside the product',
            caption:
              'Interaction map showing how users access and use templates.',
          },
          {
            src: '/images/process/ow-fulllibrary-future.webp',
            alt: 'Two screens showing slightly different iterations of a fullpage library design',
            caption:
              'Explorations — blue-sky concepts for future template evolution.',
          },
          {
            src: '/images/process/ow-wireframes.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'First release included six templates, designed with scalability in mind.',
          },
        ]}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Shaped the Templates Strategy',
            description:
              'Defined how ready-made templates could streamline research setup, guiding the feature from concept to delivery.',
          },
          {
            title: 'Improved Efficiency and Confidence',
            description:
              'Helped teams set up studies faster and uncover richer insights by reducing setup time and making methods easier to find.',
          },
          {
            title: 'Aligned with Product Strategy Shift',
            description:
              'Made templates a key part of the company’s new focus on Information Architecture.',
          },
          {
            title: 'Designed the First Multi-Study Templates Feature',
            description:
              'Created pre-built, customisable study combinations that made setup intuitive while surfacing a broader range of methods.',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '⚡',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Zap',
            iconNode: null,
            title: '20% faster setup',
            description:
              'Pre-built, customisable templates cut setup time, letting researchers focus on insights instead of configuration.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'More multi-study use',
            description:
              'Teams combined methods more often, leading to deeper insights and stronger outcomes.',
          },
          {
            icon: '🚀',
            iconSrc: '/icons/rocket.svg',
            iconAlt: 'Rocket',
            iconNode: null,
            title: 'Lower barrier to entry',
            description:
              'Onboarding became easier for beginners while staying efficient for experts — reducing drop-off at a critical early stage.',
          },
          {
            icon: '🧭',
            iconSrc: '/icons/compass.svg',
            iconAlt: 'Compass',
            iconNode: null,
            title: 'First IA-focused feature',
            description:
              'Introduced the first IA-led templates, setting the direction for future product growth.',
          },
          {
            icon: '🔁',
            iconSrc: '/icons/cycle.svg',
            iconAlt: 'Cycle',
            iconNode: null,
            title: 'Retention lift',
            description:
              'After launch, more customers stayed with the product — boosting long-term value and easing pressure on new sales.',
          },
        ]}
      />
    </div>
  )
}

export default OWTemplates
