import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsCompactSection from '../components/casestudy/DualLaptopsCompactSection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import OpportunitySpace from '../components/casestudy/OpportunitySpace'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/PrinciplesSection'
import ResearchSection from '../components/casestudy/ResearchSection'
import UserFlow from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const OWTemplates = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        hook="Setting up research shouldn’t be a barrier to insights. The right study combinations can unlock richer findings, but without guidance, researchers risk wasted effort and incomplete data."
        project={{
          id: 1,
          projectTitle: 'Streamlining Workflows with Ready-Made Studies',
          slug: 'ow-templates',
          projectSubtitle: 'Optimal Workshop Templates',
          overview: `Optimal Workshop Templates is a collection of pre-built templates designed to streamline user research and information architecture workflows. The MVP was developed to reduce setup time, guide researchers in selecting effective study combinations, and educate users on best practices. By simplifying setup and promoting smarter research strategies, the system ensures both novice and experienced researchers can gather more meaningful, actionable insights.`,
          objectiveGoals: [
            'Provide pre-built templates that showcase best practices in user research and information architecture.',
            'Enhance user learning with well-documented templates that guide users through effective research techniques.',
            'Speed up the setup process by offering customisable templates that reduce manual configuration for experienced users.',
            'Ensure versatility by designing templates that adapt to a wide range of project needs, from quick studies to complex research initiatives.',
          ],
          role: 'Product Designer',
          company: 'Optimal Workshop',
          date: 'August 2023 - June 2024',
          projectImage: '/images/portfolio/ow-templates-cover.webp',
          headerImage: '/images/banner-images/ow-templates.webp',
        }}
      />

      <DualLaptopsSection
        laptopsImage="/images/product/ow-duallaptop-2.webp" // ✅ One image for both laptops
        backgroundColor="#FFEAA1"
        backgroundImage="/images/product/ow-squiggles-1.webp" // ✅ Background separate
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="First Phase Research"
        description="When I joined the team, two research projects were already in progress. While I didn’t lead these initiatives, they provided critical insights into user needs, pain points, and business goals, allowing me to ramp up quickly. This research helped shape the Templates project, ensuring it addressed real user challenges and improved the research experience. By analysing IA use cases and customer value perceptions, I identified key opportunities to enhance usability, refine template offerings, and align the system with actual research workflows. These early insights not only accelerated my onboarding but also shaped key design decisions, ensuring the Templates project was grounded in real user needs and contributed to a more effective research process."
        variant="threeColumns"
        subtitleColor="ow"
        threeColumnData={[
          {
            title: 'IA Use Cases',
            description:
              'One research initiative focused on how customers conducted user research and where they needed support. These insights directly informed the template structure, ensuring the offerings were relevant, actionable, and seamlessly integrated into research workflows—reducing setup time and improving study effectiveness.',
          },
          {
            title: 'Value of Customer',
            description:
              'The second study examined how users perceived the product’s value, surfacing gaps between cost and expected benefits. Many users struggled to see how the product met their needs, highlighting the need for clearer value communication and improved feature alignment. This understanding helped refine the Templates project to better support user goals.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users: Designing for Different Skill Levels"
        description="Not all researchers work the same way—but the right system should support them all. During the discovery phase, research identified product, marketing, and UX professionals—including UX designers, researchers, content strategists, and information architects—as the primary users. While their backgrounds varied, the findings uncovered a key insight: users approached Information Architecture in different ways—sometimes without even realising it. To bridge these gaps, I mapped detailed journey flowcharts, visualising how different users set up studies, where they faced challenges, and what improvements could streamline their workflows. This ensured both beginners and experienced users could navigate the tool efficiently without friction."
        principles={[
          {
            number: 1,
            title: 'User Research Skills',
            description:
              'Users ranged from beginners learning research fundamentals to experienced professionals refining their methodologies. The product needed to be intuitive for newcomers while providing depth and flexibility for advanced users.',
          },
          {
            number: 2,
            title: 'Software Proficiency',
            description:
              'Users also varied in familiarity with the tool—some were just starting out, while others were long-term users seeking advanced features and optimisations. The challenge was to design an experience that supported smooth onboarding without slowing down experienced users.',
          },
        ]}
        backgroundColor="#FFEAA1"
        subtitleColor="ow"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What’s Holding Research Practitioners Back?"
        subtitleColor="ow"
        description="Great research starts with the right approach—but many practitioners struggle to set up studies that truly drive impact. During the discovery phase, we identified key barriers limiting research effectiveness. Some practitioners struggle with where to begin, lacking structured guidance. Others are locked into rigid workflows, making it difficult to adapt or experiment with new methods. Additionally, many practitioners rely on single studies rather than combining multiple research methods, limiting the depth of their insights. These findings highlight the need for tools and strategies that empower both novice and experienced researchers—enabling more flexible, scalable, and effective workflows.

"
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description: `Research Practicioners have either their own set way of working, or they do not know where to start.`,
            highlights: [`do not know where to start`],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Research Practitioners only stick around for 1 Study, instead of using multiple studies together to get more effective insights.',
            highlights: ['stick around for 1 Study'],
          },
        ]}
      />

      {/* Opportunity Space Section */}
      <OpportunitySpace
        subtitle="Opportunity Space"
        title="Defining the Problem and Opportunities"
        subtitleColor="ow"
        description="Making research more efficient starts with removing friction—both in workflows and accessibility to insights. We identified key opportunities to streamline research workflows, improve access to insights, and increase adoption of standardised research templates across teams. Addressing these challenges meant creating a more efficient, scalable system that benefited both novice and experienced practitioners. Prior to my involvement, the Product Owner and Information Architect had already explored templates at a high level, aligning them with broader business goals. Building on their initial vision, I refined the approach—translating it into a structured, user-centered design that balanced product strategy with real user needs. To measure success, our team established key metrics to track adoption, efficiency, and impact after the MVP launch."
        kpis={[
          {
            value: '< 10',
            description: 'Days to create a project',
          },
          {
            value: '3+',
            description: 'Months to retain customers',
          },
          {
            value: '20%',
            description: 'increased Launched Study Rate',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Goals & Strategy"
        subtitleColor="ow"
        title="Guiding Principles"
        description="Creating an effective research workflow isn’t just about providing templates—it’s about making them intuitive, adaptable, and easy to discover. These principles were designed to eliminate friction, support flexibility, and help users seamlessly integrate templates into their research process, ensuring both novice and experienced practitioners can work efficiently."
        principles={[
          {
            number: 1,
            title: 'User-Centred Simplicity',
            description:
              'Making research tools easy to learn and apply. A simple, intuitive experience ensures users can grasp the tools quickly and integrate them into a multi-study workflow—without friction.',
          },
          {
            number: 2,
            title: 'Flexibility and Adaptibility',
            description:
              'Designing for growth and iteration. The MVP was built for scalability, allowing the system to evolve as we gain insights into real user interactions with templates.',
          },
          {
            number: 3,
            title: 'Discoverability',
            description:
              'Helping users find the right template effortlessly. Clear organisation ensures users can quickly locate, select, and apply the best template for their research—reducing setup time and improving usability.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="ow"
        title="Template features in other products"
        description="How do the best tools introduce and integrate templates seamlessly into user workflows? To better support research practitioners, I conducted a competitive analysis of similar tools commonly used in daily workflows—spanning productivity apps, project management platforms, and design tools. This research revealed how top products guide, educate, and streamline user onboarding, offering valuable insights into workflow adoption and best practices. By analysing these platforms, I recognised familiar patterns—such as library pages, overviews, and preview features—which shape user expectations when interacting with templates."
        image={{
          src: '/images/process/ow/ow-competitors.webp',
          alt: 'Analysis of dance libraries',
        }}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flow"
        description="A well-designed user flow ensures templates aren’t just available—they’re seamlessly integrated into research workflows. To create an intuitive, efficient experience, I designed user flows that mapped key touchpoints—from discovering templates to incorporating them effortlessly into research. My goal was to keep interactions simple and fast, ensuring users could access and apply templates without unnecessary steps or friction. By focusing on accessibility, logical structure, and ease of use, these flows help practitioners maximise the value of templates, streamline research, and adapt to different methodologies with flexibility."
        images={[
          {
            path: '/images/process/ow/ow-sitemap.webp',
            caption:
              'The MVP user flow highlights the step-by-step process users follow to access and implement templates effectively. It ensures a logical progression and simplifies complex actions, providing a smooth experience for both first-time and returning users.',
            tabName: 'Template - Userflow',
          },
        ]}
        overheadTitleColor={'ow'}
      />

      {/* Wireframes Section */}
      <WireframesSection
        subtitle="Refinement"
        subtitleColor="ow"
        title="Wireframes"
        description="Integrating new functionality into a legacy product requires more than just design—it demands strategic problem-solving. These wireframes were designed to seamlessly introduce a new feature while balancing user needs and technical constraints. A key challenge was ensuring the new component fit within an existing system built on multiple frameworks—without disrupting functionality.

To address this, I worked closely with engineering to ensure the design was user-friendly, technically feasible, and adaptable without requiring a full page rebuild. While I leveraged existing componentry wherever possible to maintain efficiency, I also identified areas where improvements were necessary—such as introducing a new layout version for the modal that didn’t previously exist. This approach allowed us to validate the feature’s success while ensuring a scalable foundation for future iterations."
        image={{
          src: '/images/process/ow/ow-wireframes.webp',
          alt: 'Wireframes for user interaction',
        }}
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
        description="Do multi-study templates encourage more research, or just easier setup? We put it to the test. To validate the MVP’s impact, we launched the feature to a small subgroup of users, testing six multi-study project templates against their single-study counterparts. This experiment helped us assess user preferences and adoption behavior, revealing key insights into engagement."
        result="Users gravitated toward multi-study templates, leading to higher adoption rates. However, the number of launched studies per customer remained unchanged, suggesting that while templates streamlined setup, they didn’t immediately drive an increase in research activity. These findings highlighted the need to further investigate usage patterns and refine engagement strategies to encourage deeper adoption."
        imageSrc="/images/Lightbulb.webp"
        imageAlt="Mockup of research process"
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="User Interviews & Click Testing"
        subtitleColor="ow"
        title="How Practicioners used the templates"
        description="Engagement was high—but were templates truly meeting users’ needs? After observing strong interest in templates during A/B testing, we wanted to understand how users interacted with them in real workflows. Partnering with a User Researcher, we launched a survey to uncover who was using templates, why, and whether they were easy to find. Insights from customer support and feedback channels further shaped our investigation."
        descriptionSecondary="Follow-up interviews and usability tasks revealed that while users saw value in templates, they rarely used them as-is. Instead, most treated them as inspiration, adapting them to better fit their specific research methods. The findings showed that rigidity limited adoption, reinforcing the need for more flexible, customisable templates. Through this research, we identified three primary ways practitioners engaged with templates:"
        principles={[
          {
            number: 1,
            description:
              'Learning Resource – Users referenced templates as structured guidance, using best practices to inform, rather than dictate, their approach.',
          },
          {
            number: 2,
            description:
              'Project Setup Tool – Practitioners streamlined setup with templates but found limited flexibility frustrating—many preferred to customise their own projects rather than rely on pre-defined structures. Some struggled with contextual gaps, needing more guidance to tailor templates to different methodologies.',
          },
          {
            number: 3,
            description:
              'Mentorship & Standardisation – Senior researchers recommended templates to junior colleagues, using them to establish consistent research practices across teams.',
          },
        ]}
        reversedLayout={false}
      />

      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            title: 'Shaping Customer Education Strategy',
            description:
              'Contributed to a research initiative that helped the company gain key insights into effective customer education implementation.',
          },
          {
            title: 'Pioneering the First IA-Focused Feature',
            description:
              'Designed the company’s first IA-focused feature, aligning with the new product strategy to position the company as an industry leader in Information Architecture.',
          },
          {
            title: 'Enhancing Study Documentation',
            description:
              'Developed the New Study Details feature, providing practitioners with a dedicated space to document study purpose and requirements.',
          },
          {
            title: 'Boosting Customer Retention',
            description:
              'Users engaged with multi-study workflows, leading to a measurable increase in retention.',
          },
          {
            title: 'Driving Iterative Product Thinking',
            description:
              'Identified gaps in flexibility and engagement, directly influencing future iterations of the feature.',
          },
          {
            title: 'Leveraging Data for Impact',
            description:
              'Used research insights and A/B testing to refine the MVP and drive user adoption strategies.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          {
            heading: 'Templates Are a Starting Point, Not a Complete Solution',
            description:
              'While templates add value, they don’t solve all research challenges on their own. Users need flexibility to tailor them to their unique workflows.',
          },
          {
            heading: 'Templates Reveal Deeper User Behavior Patterns',
            description:
              'Observing how practitioners engage with templates provided valuable insights into broader product usage, pain points, and workflow needs.',
          },
          {
            heading: 'Different Users, Different Needs',
            description:
              'Novices rely on templates for guidance and structure, while experienced practitioners see them as inspiration—customising them to fit their approach.',
          },
          {
            heading: 'Adoption Doesn’t Equal Engagement',
            description:
              'Multi-study templates increased retention, but study launch rates remained unchanged—indicating that ease of setup alone isn’t enough to drive deeper research engagement.',
          },
          {
            heading: 'Flexibility & Customisation Drive Adoption',
            description:
              'Users need more control over templates to seamlessly integrate them into their research process, highlighting the need for adaptable, user-driven solutions.',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Impact & Iterations"
        outcomes={[
          {
            icon: '⚡',
            title: '20% Faster Study Setup',
            description:
              'Reduced time spent configuring research studies by offering pre-built templates.',
          },
          {
            icon: '📈',
            title: 'Increased Multi-Study Adoption',
            description:
              'Encouraged practitioners to use multiple studies together for richer insights.',
          },
          {
            icon: '🔄',
            title: 'Refined Customisation Options',
            description:
              'Iterated on templates to better match different research methodologies and practitioner workflows.',
          },
          {
            icon: '🛠️',
            title: 'Lower Barrier to Entry',
            description:
              'Simplified research setup for both new and experienced practitioners, reducing friction in the learning process.',
          },
        ]}
      />
    </div>
  )
}

export default OWTemplates
