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
            'Templates is a collection of pre-built templates designed to streamline the user research and information architecture processes. The MVP product aims to educate users on best practices while accelerating setup times for both novice and experienced users of Optimal Workshops tools.',
          objectiveGoals: [
            'Provide a centralized library for dance moves.',
            'Facilitate intuitive navigation for beginners and advanced users.',
          ],
          role: 'Product Designer',
          company: 'OW',
          date: '2024',
          projectImage: '/images/portfolio/ow-templates-cover.png',
          headerImage: '/images/banner-images/ow-templates.png',
        }}
      />

      {/* Dual Laptop Section */}
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
        subtitle="Discovery"
        title="Understanding User Needs"
        description="We conducted a comprehensive user research phase to identify pain points and opportunities for improvement."
        variant="tabbed"
        subtitleColor="ow"
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
        ]}
        backgroundColor="#FFEAA1"
        subtitleColor="ow"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the dance students back?"
        subtitleColor="ow"
        description="Here are key insights derived from our research."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Students and teachers I spoke with consistently expressed the need for a reliable source of truth.',
            highlights: ['reliable', 'source of truth'],
          },
        ]}
      />

      {/* Opportunity Space Section */}
      <OpportunitySpace
        subtitle="Opportunity Space"
        title="Defining the Problem and Opportunities"
        subtitleColor="ow"
        description="We identified opportunities to simplify practice workflows, enhance progress tracking, and foster community interactions among musicians."
        kpis={[
          {
            value: '25%',
            description: 'Increase user retention through community features.',
          },
        ]}
      />

      {/* Principles Section */}
      <PrincipleSection
        subtitle="Goals & Strategy"
        subtitleColor="ow"
        title="Principles"
        description="These principles were established to address the unique challenges faced by students and instructors in a dynamic learning environment."
        principles={[
          {
            number: 1,
            title: 'Accessibility and Usability First',
            description:
              'Ensures the app remains accessible and valuable in dynamic learning environments.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="ow"
        title="Dance Libraries Analysis"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems."
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
        overheadTitleColor={'ow'}
      />

      {/* Wireframes Section */}
      <WireframesSection
        subtitle="Refinement"
        subtitleColor="ow"
        title="Wireframes"
        description="We ensured our design system met industry standards through detailed research and testing."
        image={{
          src: '/images/process/ow/ow-wireframes.png',
          alt: 'Wireframes for user interaction',
        }}
      />

      {/* Dual Laptop Compact Section */}
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

      {/* Research Section */}
      <ResearchSection
        title="A/B Testing"
        subtitle="Second-Phase Research"
        subtitleColor="ow"
        description="We launched the MVP feature to a small subgroup of users. This included 6 use cases for multi-study project templates."
        result="Customers gravitated towards the multi-study templates with an increased user adoption rate."
        imageSrc="/images/process/ow/ow-abtesting.png"
        imageAlt="Mockup of research process"
        backgroundColor="#E6F8FF"
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
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={['Iterative testing uncovered critical pain points early.']}
      />
    </div>
  )
}

export default OWTemplates
