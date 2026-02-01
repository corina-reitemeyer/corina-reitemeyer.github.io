import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const OWTemplates = () => {
  return (
    <div>
      <CaseStudyNavy
        intro="Making research easier with customisable templates."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/product/optimal-case-study-hero.webp"
        scope="Setting up research studies was often slow and inconsistent. Teams spent too much time getting started, and insights sometimes arrived too late to influence decisions. At the same time, the product already supported a wide range of study types, including Information Architecture (IA) testing, but many users weren’t aware these options existed or how to use them effectively. I designed the first version of the templates feature to address both problems. The goal was to make starting research easier while also surfacing the full range of methods the product supported. I created ready-made, customisable study setups that reduced setup time and helped researchers understand what was possible. The feature also encouraged teams to combine methods, moving beyond single-study approaches to generate stronger insights. The work was informed by user research and close collaboration with product owners and engineers, and evolved through iterative design to balance speed with flexibility. The result was a feature that helped researchers at all levels launch studies faster, explore methods with confidence, and produce richer insights. It also nudged the product toward a stronger and more intentional focus on IA."
        involvement="Product Designer - Led the product design of the feature and collaborated closely with researchers to inform and validate the solution."
        team="Worked with product managers, engineers, and UX researchers to design, test, and refine the templates feature."
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

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            subtitle: 'From experiment to scalable feature',
            body: 'I started by asking a simple question: what if setting up research could be faster and easier? Drawing on insights from ongoing projects, I designed the first version of multi-study research templates to address the most common setup challenges. Because this was the first project under a new product strategy, I treated it deliberately as an experiment. The focus was on proving user value first, with a design that could grow over time while keeping initial engineering effort low. After launch, I worked closely with a researcher to observe how the first six templates were used in real workflows. We saw clear positives, such as teams using templates for inspiration and experimenting with new combinations of methods. We also identified gaps, including missing content and limited functionality. These insights directly informed improvements to both the templates themselves and the surrounding features in the next release. This iterative, evidence-led approach helped turn templates into a repeatable feature that reduced setup time and aligned with the product’s broader direction.',
          },
          {
            subtitle: 'Balancing guidance without rigidity',
            body: 'The main risk was either over-prescribing or under-prescribing research workflows. Templates that were too rigid would frustrate experienced researchers, while too much flexibility would fail to reduce setup friction for those with less confidence. I focused on creating adaptable starting points that provided enough structure to help people get moving, without locking them into a single way of working. This approach supported researchers with different levels of experience and allowed the team to learn how templates were actually used, informing where deeper customisation would add the most value in the next iteration. The trade-off was launching a lightweight first version. In hindsight, this left complete beginners with less guidance than they needed. However, those gaps proved valuable. Treating the initial release as a soft experiment helped reveal where users struggled and how templates fit into day-to-day workflows, directly shaping the next iteration of the feature.',
          },
        ]}
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

      {/* Reflections Section */}
      <section className="relative z-0 flex min-h-[90vh] w-full items-center overflow-hidden bg-[#08003B] text-white">
        {/* Background */}
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/images/portfolio/reflections-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="container relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          {/* Aligned content block */}
          <div className="mx-auto max-w-2xl text-left">
            {/* Icon */}
            <img
              src="/images/portfolio/lightbulb-icon.svg"
              alt=""
              aria-hidden="true"
              className="mb-6 h-20 w-20 opacity-80"
            />

            {/* Heading */}
            <h2 className="text-3xl font-bold">Reflections & Learnings</h2>

            {/* Body */}
            <div className="mt-8 space-y-6 text-white/70">
              <p>
                This project reinforced that good research tools don’t just
                enable methods, they help people learn how to use them well.
                Making teams faster wasn’t only about pre-filled setups. It
                required surfacing possibilities and guiding better decisions
                without being prescriptive.
              </p>
              <p>
                Designing the templates feature sharpened how I think about
                scaffolding in product design. Providing just enough structure
                helped build confidence, while still leaving room for expertise
                and experimentation. It also highlighted how product features
                can gently shift behaviour, in this case encouraging more
                connected research practices instead of relying on single
                methods.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  )
}

export default OWTemplates
