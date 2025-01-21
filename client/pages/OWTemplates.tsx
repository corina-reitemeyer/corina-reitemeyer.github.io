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
import PrincipleSection from '../components/casestudy/PrinciplesSection'
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
          overview:
            'Optimal Workshop Templates is a collection of pre-built templates designed to streamline the user research and information architecture processes. The MVP product aims to educate users on best practices while accelerating setup times for both novice and experienced users of Optimal Workshops tools.',
          objectiveGoals: [
            'Provide a centralized library for dance moves.',
            'Facilitate intuitive navigation for beginners and advanced users.',
          ],
          role: 'Product Designer',
          company: 'Optimal Workshop',
          date: '2024',
          projectImage: '/images/portfolio/ow-templates-cover.png',
          headerImage: '/images/banner-images/ow-templates.png',
        }}
      />
      {/* DualLaptop Section */}
      <DualLaptopsSection
        laptops={[
          {
            src: '/images/product/ow-duallaptop-1.png',
            alt: 'User Dashboard View',
          },
          {
            src: '/images/product/ow-duallaptop-2.png',
            alt: 'Community Interaction View',
          },
        ]}
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Project Discovery"
        title="Understanding User Needs"
        description="We conducted a comprehensive user research phase to identify pain points and opportunities for improvement."
        variant="tabbed"
        subtitleColor="ritmo"
        tabbedImages={[
          {
            path: '/images/process/UX Persona - Beginner.png',
            tabName: 'Persona - Beginner',
            caption: 'Key findings from interviews with dancers.',
          },
          {
            path: '/images/process/UX Persona - Improvers.png',
            tabName: 'Persona - Improvers',
            caption: 'Observed behaviors and patterns.',
          },
          {
            path: '/images/process/UX Persona - Intermediate.png',
            tabName: 'Persona - Intermediate',
            caption: 'Survey results summarized.',
          },
          {
            path: '/images/process/UX Persona - Instructor.png',
            tabName: 'Persona - Instructor',
            caption: 'Survey results summarized.',
          },
        ]}
      />
      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="As I am frequently surrounded by dancers, I conducted semi-informal interviews with a few students in the community as well as fellow instructors, who shared their experiences with me. I consolidated their goals, needs, and pain points into detailed user personas and created user journey flowcharts."
        principles={[
          {
            number: 1,
            title: 'Students',
            description:
              'Create designs that are user-centric, accessible, and visually appealing.',
          },
          {
            number: 2,
            title: 'Teachers',
            description: 'Build, test, and maintain websites and applications.',
          },
          {
            number: 3,
            title: 'Social Dancers',
            description:
              'Act as a bridge between the technical and non-technical stakeholders.',
          },
        ]}
        backgroundColor="#9EEEFF" // Blue background for "Discovery"
        subtitleColor="#40B0C8" // Subtitle color matching "Ritmo"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the dance students back?"
        description="Here are key insights derived from our research."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Students and teachers I spoke with consistently expressed the need for a reliable source of truth.',
            highlights: ['reliable', 'source of truth'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Students from varying experience backgrounds need tailored information.',
            highlights: ['tailored'],
          },
        ]}
      />

      <OpportunitySpace
        subtitle="Opportunity Space"
        title="Defining the Problem and Opportunities"
        description="We identified opportunities to simplify practice workflows, enhance progress tracking, and foster community interactions among musicians."
        kpis={[
          {
            value: '25%',
            description: 'Increase user retention through community features.',
          },
          {
            value: '90%',
            description:
              'Achieve a user satisfaction rate in usability testing.',
          },
          {
            value: '95%',
            description:
              'Enable users to track daily practice sessions accurately.',
          },
        ]}
      />

      {/* Principles Section */}
      <PrincipleSection
        subtitle="Goals & Strategy"
        title="Principles"
        description="These principles were established to address the unique challenges faced by students and instructors in a dynamic learning environment. Accessibility ensures the app remains practical and valuable in real-world settings, such as during lessons or prácticas."
        principles={[
          {
            number: 1,
            title: 'Accessibility and Usability First',
            description:
              'Ensures the app remains accessible and valuable in dynamic learning environments.',
          },
          {
            number: 2,
            title: 'Support for Active Learning',
            description:
              'Tools that help users retain and apply knowledge effectively.',
          },
          {
            number: 3,
            title: 'Scalability and Flexibility',
            description:
              'Provides a foundation for future features and content expansions.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Dance Libraries Analysis"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems. This included analyzing their structure, key features, and content strategies to identify best practices and gaps."
        image={{
          src: '/images/process/ow/ow-competitors.png',
          alt: 'Analysis of dance libraries',
        }}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flows"
        description="Detailed user flows improve illustrations for usability and accessibility."
        images={[
          {
            path: '/images/process/ow/ow-sitemap.png',
            caption: 'This is the beginner flow.',
            tabName: 'Beginner',
          },
        ]}
      />

      <WireframesSection
        subtitle="Refinement"
        title="Wireframes"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems. This included analyzing their structure, key features, and content strategies to identify best practices and gaps."
        image={{
          src: '/images/process/ow/ow-wireframes.png',
          alt: 'Analysis of dance libraries',
        }}
      />

      <DualLaptopsCompactSection
        laptops={[
          {
            src: '/images/product/ow-duallaptop-compact-2.png',
            alt: 'Compact View of Feature A',
          },
          {
            src: '/images/product/ow-duallaptop-compact-1.png',
            alt: 'Compact View of Feature B',
          },
        ]}
      />

      <ResearchSection
        title="A/B Testing"
        subtitle="Second-Phase Research"
        description="We launched the MVP feature to a small subgroup of users.   This included 6 use cases for multi-study project templates, and for testing purposes, also single studies from each project to see what users prefer to use. "
        result="Customers gravitated towards the multi-study templates with an increased user adoption rate."
        imageSrc="/images/process/ow/ow-abtesting.png"
        imageAlt="Mockup of research process"
        backgroundColor="#E6F8FF"
      />

      {/* Principles Section */}
      <PrincipleSection
        subtitle="User Interviews & Click Testing"
        title="HOW PRACTITIONERS USED THE TEMPLATES"
        description="High-traction data revealed that the template placement successfully captured user curiosity and attention. However, our insights uncovered a key limitation: the MVP feature lacked the granularity and flexibility users needed to adapt templates to their specific research methods. Instead, users often used templates as inspiration before creating their own customised projects. This highlighted the need for more versatile and user-driven template options in future iterations. Through user research, we identified three main ways practitioners engaged with templates:"
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

      {/* Achievements Section */}
      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Contributed to research initiative:',
            description:
              'Allow the wider company to learn insights around how customer education can be implemented.',
          },
          {
            title: 'Owning the first IA-focused feature:',
            description:
              'Designed the company’s first IA-focused feature after the new product strategy was introduced.',
          },
          {
            title: 'New Study details feature:',
            description:
              'Practitioners now had a way to document the purpose and requirements of studies.',
          },
          {
            title: 'Increased customer retention:',
            description:
              'There was an increase in users sticking around for longer than previously, due to users utilizing multi-studies.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Iterative testing uncovered critical pain points early.',
          'Accessibility compliance enhanced usability for all users.',
          'User feedback refined the final designs.',
        ]}
      />
    </div>
  )
}

export default OWTemplates
