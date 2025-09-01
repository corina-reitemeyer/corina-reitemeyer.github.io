import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const OWTemplates = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Making research setup effortless with pre-built, customisable templates."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/product/optimal-case-study-hero.webp"
        scope="Research setup was slow and inconsistent, frustrating teams and delaying insights—raising churn risk when learnings arrived too late to act on. Meanwhile, the product already supported diverse study types, including Information Architecture testing, but most users were unaware of this potential. I designed the first iteration of the templates feature to solve both problems: pre-built, customisable study combinations that made setup intuitive while surfacing the full breadth of research methods. The work drew on user research, cross-functional collaboration with PMs and engineers, and iterative design to balance flexibility with speed. The result enabled researchers at all levels to launch studies faster, explore methods with confidence, and generate richer insights—while advancing the company’s shift toward an IA-focused product strategy."
        involvement="Product design, research collaborator"
        meta={{
          date: '2023',
          type: 'Product Design, SaaS Product (B2B)',
          specialisation: 'Growth design, product feature',
        }}
      />

      <ImageStrip
        images={[
          {
            src: '/images/product/ow-desktop-1.webp',
            alt: 'Two laptops showing the template library and overview modal',
            caption: 'Desktop - template library and overview modal.',
          },
          {
            src: '/images/product/ow-desktop-2.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'Users can access the library from their usual workflows. Details add more context for the study.',
          },
          {
            src: '/images/product/ow-template-types.webp',
            alt: 'Six templates with their study types',
            caption:
              'Tbhe first iteration had six variation of multi-study templates, which aided users in conducting IA focused research.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        subtitle="From Experiment to Scalable Feature"
        body="What if setting up research could be faster and more intuitive? I shaped the first iteration of our multi-study research templates by drawing on insights from in-flight projects, ensuring the feature addressed real, recurring setup pain points. As the first workstream under the new product strategy, I approached it as an experiment—prioritising scalability while limiting engineering investment until user value was proven. After launch, I partnered with a researcher to evaluate how the first six templates fit into user workflows, uncovering positives such as teams using them for inspiration as well as shortcomings like gaps in content. These insights guided refinements to both content and functionality for the next iteration. This iterative, evidence-driven process established templates as a scalable feature that accelerated setup and aligned with the broader product vision."
        images={[
          {
            src: '/images/process/ow-userflow.webp',
            alt: 'An interaction map how a user can access and use the templates inside the product',
            caption:
              'An interaction map how users can access and use the templates inside the product.',
          },
          {
            src: '/images/process/ow-fulllibrary-future.webp',
            alt: 'Two screens showing slightly different iterations of a fullpage library design',
            caption:
              'Snippets of blue sky thinking of what it could be in the future.',
          },
          {
            src: '/images/process/ow-wireframes.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'Even if we just had 6 templates to start with, scalability was a main concern for the first iteration of the design.',
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
              'Defined how ready-made templates could streamline research setup, guiding the first iteration of the feature from concept to delivery.',
          },
          {
            title: 'Improved Research Efficiency and Confidence',
            description:
              'Enabled teams to launch studies faster and uncover richer insights by reducing wasted setup time and making methods more discoverable.',
          },
          {
            title: 'Supported Product Strategy Shift',
            description:
              'Aligned the feature with the company’s focus on Information Architecture testing, helping reposition the product for growth.',
          },
          {
            title: 'Designed the First Multi-Study Templates Feature',
            description:
              'Created pre-built, customisable study combinations that made setup intuitive while surfacing the full range of research methods.',
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
              'Pre-built, customisable templates cut time to configure studies—freeing researchers to spend more time analysing insights, not fiddling with setup.',
          },
          {
            icon: '📈',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconNode: null,
            title: 'More multi-study use',
            description:
              'Practitioners combined methods more often for deeper insight—driving higher-quality outputs for teams and more product stickiness.',
          },
          {
            icon: '🚀',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            iconNode: null,
            title: 'Lower barrier to entry',
            description:
              'Onboarding eased for novices while staying fast for experts—reducing drop-off at a critical early stage of adoption.',
          },
          {
            icon: '🧭',
            iconSrc: '/icons/compass.svg',
            iconAlt: 'Compass',
            iconNode: null,
            title: 'First IA-focused feature',
            description:
              'Pioneered an IA-led templates MVP that shaped product direction—cementing OW’s position as an IA leader in the market.',
          },
          {
            icon: '🔁',
            iconSrc: '/icons/cycle.svg',
            iconAlt: 'Cycle',
            iconNode: null,
            title: 'Retention lift',
            description:
              'Template adoption correlated with higher customer retention post-launch—key for improving CLTV and reducing sales pressure.',
          },
        ]}
      />
    </div>
  )
}

export default OWTemplates
