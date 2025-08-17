import AchievementsSection from '../components/casestudy/Achievements'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsCompactSection from '../components/casestudy/DualLaptopsCompactSection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import ResearchSection from '../components/casestudy/ResearchSection'

const OWTemplates = () => {
  return (
    <div>
      <Hero
        hook="Setting up research should be fast and intuitive. Ready-made study templates help teams start smarter and uncover richer insights."
        project={{
          id: 1,
          projectTitle: 'Streamlining Research with Ready-Made Studies',
          slug: 'ow-templates',
          projectSubtitle: 'Optimal Workshop Templates',
          overview:
            'I designed the Templates MVP to cut setup time and guide better research. Pre-built, customisable study combinations helped new and experienced researchers work faster and gather more actionable insights—critical because wasted setup time meant slower learnings and higher risk of churn.',
          role: 'Product Designer',
          company: 'Optimal Workshop',
          date: 'Aug 2023 – Jun 2024',
          projectImage: '/images/portfolio/ow-templates-cover.webp',
          headerImage: '/images/banner-images/ow-templates.webp',
        }}
      />

      <DualLaptopsSection
        laptopsImage="/images/product/ow-duallaptop-2.webp"
        backgroundColor="#FFEAA1"
        backgroundImage="/images/product/ow-squiggles-1.webp"
      />

      <DiscoverySection
        subtitle="Discovery"
        title="Discovery & Insights"
        description="Two studies were already in motion when I joined. I leveraged them to ground the Templates MVP in evidence and focus on the biggest blockers to effective research."
        variant="threeColumns"
        subtitleColor="ow"
        threeColumnData={[
          {
            title: 'Start point & rigidity',
            description:
              'Many lacked a clear starting point or were locked into rigid workflows—slowing setup and momentum. This risked low adoption because teams struggled to get value early.',
          },
          {
            title: 'Single-study mindset',
            description:
              'Most ran one study at a time, missing the richer insights from multi-method approaches. This limited both research quality and product stickiness.',
          },
          {
            title: 'Evidence-led focus',
            description:
              'IA use cases + customer value analysis shaped template structure, messaging, and usability priorities—ensuring we solved problems tied directly to user pain and business retention.',
          },
        ]}
      />

      {/* Dual Laptop Compact Section */}
      <DualLaptopsCompactSection
        laptopsImage="/images/product/ow-duallaptop-1.webp" // Single dual laptop image
        backgroundColor="#FFEAA1"
        backgroundImage="/images/product/ow-squiggles-1.webp" // Background vector image
      />

      {/* Research Section */}
      <ResearchSection
        title="A/B Testing the MVP"
        subtitle="Second-Phase Research"
        subtitleColor="ow"
        description="We tested six multi-study templates against single-study counterparts to validate impact."
        result="Multi-study templates saw higher adoption, but study launches per customer didn’t rise—great for setup speed, not yet more research. This validated our bet that better guidance increases engagement, but also showed where we’d need to nudge long-term behavior change."
        imageSrc="/images/Lightbulb.webp"
        imageAlt="A/B testing summary"
      />

      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '⚡',
            title: '20% faster setup',
            description:
              'Pre-built, customisable templates cut time to configure studies—freeing researchers to spend more time analysing insights, not fiddling with setup.',
          },
          {
            icon: '📈',
            title: 'More multi-study use',
            description:
              'Practitioners combined methods more often for deeper insight—driving higher-quality outputs for teams and more product stickiness.',
          },
          {
            icon: '🛠️',
            title: 'Lower barrier to entry',
            description:
              'Onboarding eased for novices while staying fast for experts—reducing drop-off at a critical early stage of adoption.',
          },
          {
            icon: '🧭',
            title: 'First IA-focused feature',
            description:
              'Pioneered an IA-led templates MVP that shaped product direction—cementing OW’s position as an IA leader in the market.',
          },
          {
            icon: '🔁',
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
