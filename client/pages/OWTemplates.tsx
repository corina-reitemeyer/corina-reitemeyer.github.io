import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsCompactSection from '../components/casestudy/DualLaptopsCompactSection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
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
        project={{
          id: 1,
          projectTitle: 'Templates',
          slug: 'ow-templates',
          projectSubtitle: 'Streamlining Workflows with Ready-Made Studies.',
          overview: `Optimal Workshop Templates is a collection of pre-built templates designed to streamline the user research and information architecture processes. The MVP product aims to educate users on best practices while accelerating setup times for both novice and experienced users of Optimal Workshop's tools.`,
          objectiveGoals: [
            'Create pre-built templates that demonstrate best practices in user research and information architecture.',
            'Enhance user learning by providing well-documented templates that guide users through effective techniques.',
            'Speed up the setup process for experienced users by offering customisable templates that reduce the need for manual configuration.',
            'Ensure templates are versatile and can be adapted to various project needs, from simple to complex.',
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
        backgroundImage="/images/OW-Squiggles.webp" // ✅ Background separate
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="First Phase Research"
        description="As part of the first phase of research, I joined the team while two projects were already underway. My initial focus was on understanding the core challenges and opportunities within the product. Through a detailed exploration of IA use cases and customer value perceptions, I identified key insights that informed the direction of the templates project."
        variant="threeColumns"
        subtitleColor="ow"
        threeColumnData={[
          {
            title: 'IA Use Cases',
            description:
              'Identified the types of user research projects customers were conducting or needed support with. These insights directly informed the template use cases and the types of studies needed to ensure the templates were practical and relevant for customer workflows.',
          },
          {
            title: 'Value of Customer',
            description:
              'Revealed critical opportunities and pain points within the product, including challenges with perceived value. Customers often felt a disconnect between what they were paying for and the value they received, highlighting a need for better alignment with their expectations.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="During the discovery phase, I identified the primary users as professionals working in products, marketing, and related areas such as UX design, research, content strategy, and information architecture. By analysing their goals, challenges, and workflows, I consolidated these insights into detailed user personas and journey flowcharts to ensure the app meets their needs effectively."
        principles={[
          {
            number: 1,
            title: 'User Research Skills',
            description:
              'Catering to both newcomers learning the fundamentals of research and seasoned experts refining their processes, the app ensures usability for a wide range of expertise levels.',
          },
          {
            number: 2,
            title: 'Software Proficiency',
            description:
              'Designed to support users with varying levels of familiarity with the tool, from those just getting started to long-term users seeking advanced features and optimizations.',
          },
        ]}
        backgroundColor="#FFEAA1"
        subtitleColor="ow"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the research practitioners back?"
        subtitleColor="ow"
        description="Through the discovery phase, we identified key barriers that research practitioners face in their workflows. Some practitioners struggle with where to begin, while others are locked into rigid ways of working that limit flexibility. Additionally, many only engage with single studies instead of leveraging multiple studies together for more comprehensive and actionable insights. These insights emphasise the need for tools and strategies that support both novice and experienced practitioners in achieving more effective research outcomes."
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
        description="We identified key opportunities to streamline research workflows, improve accessibility to insights, and increase adoption of standardised research templates among teams. Our team also established key metrics to track adoption, efficiency, and impact after the MVP launch, ensuring data-driven improvements."
        kpis={[
          {
            value: '< 10',
            description: 'Days a project gets created',
          },
          {
            value: '3+',
            description: 'Months to retain customers',
          },
          {
            value: '20%',
            description: 'improved Launched Study Rate',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Goals & Strategy"
        subtitleColor="ow"
        title="Principles"
        description="These principles were crafted to tackle the specific challenges users face when working with templates in a flexible, multi-study research setting. By emphasising simplicity, adaptability, and intuitive organisation, the goal is to help users seamlessly navigate, learn, and apply the tools to enhance their workflows and achieve better outcomes."
        principles={[
          {
            number: 1,
            title: 'User-Centred Simplicity',
            description:
              'Simplicity to enhance users being able to learn the tools in a multi-study format.',
          },
          {
            number: 2,
            title: 'Flexibility and Adaptibility',
            description:
              'Allow the MVP to grow and evolve as we learn more about how users use the templates in practice.',
          },
          {
            number: 3,
            title: 'Discoverability',
            description:
              'Help users find the right template quickly and efficiently.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="ow"
        title="Template features in other products"
        description="To better understand how to support practitioners effectively, I analysed competitors and similar tools commonly used in daily workflows, such as productivity apps, project management platforms, and design tools. This analysis provided insights into how workflows and best practices are introduced and adopted by their customer base, informing the design of a system that aligns with user expectations and enhances their experience."
        image={{
          src: '/images/process/ow/ow-competitors.webp',
          alt: 'Analysis of dance libraries',
        }}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flow"
        description="User flows were carefully designed to visualize how practitioners interact with templates, ensuring an intuitive and efficient experience. These flows highlight key touchpoints, from discovering templates to integrating them into their workflows, addressing usability challenges and promoting seamless navigation. By focusing on accessibility and logical structure, the flows support users in maximizing the value of the templates."
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
        description="These wireframes were designed to integrate a new feature into a legacy product, balancing user needs with technical constraints. A key challenge was accounting for existing areas built with different frameworks, requiring thoughtful planning to ensure the new component could be seamlessly added without necessitating a complete rebuild of the page. This delicate process involved careful consideration of both usability and development feasibility."
        image={{
          src: '/images/process/ow/ow-wireframes.webp',
          alt: 'Wireframes for user interaction',
        }}
      />

      {/* Dual Laptop Compact Section */}
      <DualLaptopsCompactSection
        laptops={[
          {
            src: '/images/product/ow-duallaptop-compact-2.webp',
            alt: 'Compact View of Feature A',
          },
          {
            src: '/images/product/ow-duallaptop-compact-1.webp',
            alt: 'Compact View of Feature B',
          },
        ]}
        backgroundColor="#FFEAA1"
        backgroundImage="/images/OW-Squiggles.webp"
      />

      {/* Research Section */}
      <ResearchSection
        title="A/B Testing"
        subtitle="Second-Phase Research"
        subtitleColor="ow"
        description="We launched the MVP feature to a small subgroup of users. This included 6 use cases for multi-study project templates, and for testing purposes, also single studies from each project to see what users prefer to use."
        result="Customers gravitated towards the multi-study templates with an increased user adaption rate. But the launched-study rate per customer remained unchanged."
        imageSrc="/images/process/ow/ow-abtesting.webp"
        imageAlt="Mockup of research process"
        backgroundColor="#E6F8FF"
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="User Interviews & Click Testing"
        subtitleColor="ow"
        title="How Practicioners used the templates"
        description="High-traction data revealed that the template placement successfully captured user curiosity and attention. However, our insights uncovered a key limitation: the MVP feature lacked the granularity and flexibility users needed to adapt templates to their specific research methods. Instead, users often used templates as inspiration before creating their own customised projects. This highlighted the need for more versatile and user-driven template options in future iterations. Through user research, we identified three main ways practitioners engaged with templates."
        principles={[
          {
            number: 1,
            description:
              'For guidance and recommendations to support their work.',
          },
          {
            number: 2,
            description: 'To enable a quick setup and save time.',
          },
          {
            number: 3,
            description:
              'As a tool for seniors to recommend best practices to juniors.',
          },
        ]}
        reversedLayout={false}
      />

      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Contributed to research initiative',
            description:
              'Allow the wider company to learn insights around how customer education can be implemented.',
          },
          {
            title: 'Owning the first IA-focused feature',
            description:
              'Designed the company’s first IA-focused feature after the new product strategy was introduced.',
          },
          {
            title: 'New Study details feature',
            description:
              'Practitioners now had a way to document the purpose and requirements of studies.',
          },
          {
            title: 'Increased customer retention',
            description:
              'There was an increase in users sticking around for longer than previously, due to users utilizing multi-studies.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Templates as a standalone feature are not the one solution to all product challenges.',
          'They do however give you great insights in how customers use your product!',
          'Different users get different benefits out of them.',
        ]}
      />
    </div>
  )
}

export default OWTemplates
