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
          overview: `Optimal Workshop Templates is a collection of pre-built templates designed to streamline user research and information architecture workflows. The MVP was developed to educate users on best practices while reducing setup time, catering to both novice and experienced researchers using Optimal Workshop's tools.`,
          objectiveGoals: [
            'Provide pre-built templates that demonstrate best practices in user research and information architecture.',
            'Enhance user learning with well-documented templates that guide users through effective techniques.',
            'Speed up the setup process by offering customisable templates that reduce manual configuration for experienced users.',
            'Ensure versatility by designing templates that adapt to a wide range of project needs, from simple studies to complex research initiatives.',
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
        description="When I joined the team, two research projects were already underway. While I didn’t lead these initiatives, they provided valuable insights that helped me quickly get up to speed on the product, its users, and business goals. During this phase, my focus was on understanding core challenges and opportunities within the product. By exploring IA use cases and customer value perceptions, I identified key insights that shaped the direction of the Templates project. This early research accelerated my onboarding and allowed me to make informed design decisions as the project progressed."
        variant="threeColumns"
        subtitleColor="ow"
        threeColumnData={[
          {
            title: 'IA Use Cases',
            description:
              'One research initiative focused on identifying the types of user research projects customers were conducting or needed support with. These insights later shaped the template use cases, ensuring that the studies offered were practical, relevant, and aligned with real customer workflows.',
          },
          {
            title: 'Value of Customer',
            description:
              'The second initiative examined how customers perceived the product’s value, uncovering critical opportunities and pain points. Many users felt a disconnect between what they were paying for and the benefits they received, highlighting a need for better alignment between product value, pricing, and user expectations. This research accelerated my onboarding and provided a strong foundation for the Templates project, allowing me to make informed design decisions as the project progressed.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="During the discovery phase, research identified the primary users as professionals working in product, marketing, and related fields, including UX designers, researchers, content strategists, and information architects. The findings also revealed insights into how practitioners approached Information Architecture — whether consciously or not. To deepen my understanding of how users set up their studies and the challenges they faced, I consolidated these insights into detailed journey flowcharts, mapping their workflows and identifying key pain points. Understanding these differences was critical in shaping the experience, ensuring that both new and experienced users could navigate the tool efficiently."
        principles={[
          {
            number: 1,
            title: 'User Research Skills',
            description:
              'Users range from beginners learning the fundamentals of research to experienced professionals refining their methodologies. The product needed to accommodate both groups, ensuring accessibility for newcomers while providing depth and flexibility for advanced users.',
          },
          {
            number: 2,
            title: 'Software Proficiency',
            description:
              'Users also varied in their familiarity with the tool—some were just getting started, while others were long-term users looking for advanced features and optimisations. The challenge was to create an experience that supported onboarding while allowing experienced users to work efficiently.',
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
        description="During the discovery phase, we identified key barriers that research practitioners face in their workflows. Some practitioners struggle with where to begin, lacking structured guidance, while others are locked into rigid ways of working, making it difficult to adapt or experiment with new methods. Additionally, many practitioners only engage with single studies, rather than leveraging multiple research methods together to generate more comprehensive and actionable insights. These findings highlight the need for tools and strategies that support both novice and experienced practitioners, enabling more flexible, scalable, and effective research workflows."
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
        description="We identified key opportunities to streamline research workflows, improve accessibility to insights, and increase the adoption of standardised research templates across teams. By addressing these challenges, we aimed to make research more efficient and scalable, ensuring both novice and experienced practitioners could benefit. Prior to my involvement, the Product Owner and Information Architect had already explored the idea of templates at a high level, framing it within the broader business goals, which aligned with the findings in the research. Building on their initial vision, I further refined the approach—translating it into a structured, user-centered design that aligned with both product strategy and user needs. To measure success, our team established key metrics to track adoption, efficiency, and impact after the MVP launch:"
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
        title="Principles"
        description="These principles were crafted to address the specific challenges users face when working with templates in a flexible, multi-study research setting. By emphasising simplicity, adaptability, and intuitive organisation, the goal is to help users seamlessly navigate, learn, and apply the tools to enhance their workflows and achieve better research outcomes."
        principles={[
          {
            number: 1,
            title: 'User-Centred Simplicity',
            description:
              'Making research tools easy to learn and apply. Simplicity ensures that users can quickly grasp the tools and integrate them into a multi-study workflow without unnecessary friction.',
          },
          {
            number: 2,
            title: 'Flexibility and Adaptibility',
            description:
              'Designing for growth and iteration. The MVP was built with scalability in mind, allowing the system to evolve as we gain insights into how users interact with templates in practice.',
          },
          {
            number: 3,
            title: 'Discoverability',
            description:
              'Helping users find the right template efficiently. Ensuring that users can quickly locate and select the best template for their research needs—reducing setup time and improving usability.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="ow"
        title="Template features in other products"
        description="To better understand how to support research practitioners effectively, I conducted a competitive analysis of similar tools commonly used in daily workflows, including productivity apps, project management platforms, and design tools. This analysis provided key insights into how workflows and best practices are introduced and adopted by users. By examining how other products guide, educate, and streamline user onboarding, I was able to design a system that aligns with user expectations while enhancing their experience within our platform."
        image={{
          src: '/images/process/ow/ow-competitors.webp',
          alt: 'Analysis of dance libraries',
        }}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flow"
        description="User flows were carefully designed to map how practitioners interact with templates, ensuring an intuitive and efficient experience. These flows outline key touchpoints—from discovering templates to integrating them into their workflows—addressing usability challenges and promoting seamless navigation. By focusing on accessibility, logical structure, and ease of use, the flows support users in maximising the value of templates while maintaining flexibility for different research approaches."
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
        description="These wireframes were designed to integrate a new feature into a legacy product, balancing user needs with technical constraints. A key challenge was ensuring that the new component could be seamlessly added without disrupting existing functionality—especially given that different sections of the product were built on multiple frameworks. To overcome this, the wireframing process required thoughtful planning and collaboration with engineering to ensure that the design was both user-friendly and technically feasible. The goal was to introduce new functionality without requiring a complete page rebuild, maintaining efficiency while improving usability."
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
        title="A/B Testing"
        subtitle="Second-Phase Research"
        subtitleColor="ow"
        description="To validate the impact of the MVP, we launched the feature to a small subgroup of users, testing six multi-study project templates alongside single-study versions from each project. This allowed us to assess user preference and adoption behaviour. The findings highlighted the need to further investigate usage patterns and refine strategies to drive deeper engagement with launched studies."
        result="Users gravitated toward multi-study templates, leading to an increased adoption rate. However, the launched-study rate per customer remained unchanged, indicating that while users embraced the templates, it did not immediately translate into more studies being conducted."
        imageSrc="/images/process/ow/ow-abtesting.webp"
        imageAlt="Mockup of research process"
        backgroundColor="#E6F8FF"
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="User Interviews & Click Testing"
        subtitleColor="ow"
        title="How Practicioners used the templates"
        description="High-traction data confirmed that the template placement effectively captured user curiosity and engagement. However, our insights revealed a key limitation: while users found the templates valuable, the MVP lacked the granularity and flexibility needed to fully align with their specific research methods. Rather than using templates as-is, many practitioners treated them as a starting point for inspiration, later customizing their own projects. This highlighted an opportunity to develop more adaptable, user-driven template options in future iterations. Through user research, we identified three primary ways practitioners engaged with templates:"
        principles={[
          {
            number: 1,
            description:
              'Users referenced templates as learning resources, helping them structure their research with best practices in mind.',
          },
          {
            number: 2,
            description:
              'Practitioners used templates to streamline project setup, reducing manual work and repetitive configurations. However, challenges emerged: limited flexibility prevented full customisation, many used templates as inspiration rather than direct tools, and contextual gaps left users needing more guidance to adapt templates to different methodologies. These insights underscored the need for more adaptable, user-driven solutions in future iterations.',
          },
          {
            number: 3,
            description:
              'Senior researchers leveraged templates as recommendations for junior colleagues, ensuring alignment with established research methodologies.',
          },
        ]}
        reversedLayout={false}
      />

      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Contributed to research initiative:',
            description:
              'Helped the company gain key insights on how customer education can be effectively implemented.',
          },
          {
            title: 'Owning the first IA-focused feature:',
            description:
              'Designed the company’s first IA-focused feature following the introduction of the new product strategy to be an industry leader in the Information Architecture space.',
          },
          {
            title: 'New Study details feature:',
            description:
              'Provided practitioners with a dedicated space to document the purpose and requirements of their studies.',
          },
          {
            title: 'Increased customer retention:',
            description:
              'Users engaged with multi-study workflows, leading to a measurable increase in retention.',
          },
          {
            title: 'Iterative Product Thinking:',
            description:
              'Identified gaps in flexibility and engagement, influencing future iterations of the feature.',
          },
          {
            title: ' Data-Informed Decision Making:',
            description:
              'Used research insights and A/B testing to refine the MVP and drive user adoption strategies.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Templates are not a one-size-fits-all solution – While valuable, they do not solve all product challenges on their own.',
          'Templates provide deep insights into user behavior – Observing how practitioners engage with them reveals broader patterns in product usage and needs.',
          'Different users derive different benefits – Novices use templates for guidance, while experienced practitioners adapt them to fit their workflows.',
          'Adoption doesn’t always mean engagement – While multi-study templates increased retention, they didn’t directly impact study launch rates, highlighting the need for further refinement to drive deeper usage.',
          'Flexibility & customisation are key – Users need more control over templates to fully integrate them into their workflows.',
        ]}
      />
    </div>
  )
}

export default OWTemplates
