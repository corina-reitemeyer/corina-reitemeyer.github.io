import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import OpportunitySpace from '../components/casestudy/OpportunitySpace'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/PrinciplesSection'
import SimpleTextSection from '../components/casestudy/SimpleTextSection'
import TwoRowsImagesSection from '../components/casestudy/TwoRowsImagesSection'
import UserFlow from '../components/casestudy/UserFlowSection'
import VisualDesignSection from '../components/casestudy/VisualDesignSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const MOENceaWebsite = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        project={{
          id: 1,
          projectTitle: 'Design System',
          slug: 'moe-design-system',
          projectSubtitle: 'Your Latin Dance Library',
          overview: 'This is an awesome project overview.',
          objectiveGoals: [
            'Provide a centralized library for dance moves.',
            'Facilitate intuitive navigation for beginners and advanced users.',
          ],
          role: 'UI/UX Designer & Developer',
          company: 'Personal Project',
          date: '2024',
          projectImage: '/images/ritmo-thumbnail.png', // Add this line
          headerImage: '/images/banner-images/moe-design-system.png',
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
        subtitle="Project Discovery"
        title="Understanding User Needs"
        description="We conducted a comprehensive user research phase to identify pain points and opportunities for improvement."
        variant="tabbed"
        subtitleColor="moe"
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

      <SimpleTextSection text={'hello'} />

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
        backgroundColor="#90AEFF"
        subtitleColor="moe"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the dance students back?"
        subtitleColor="moe"
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
        subtitleColor="moe"
        description="We identified opportunities to simplify practice workflows, enhance progress tracking, and foster community interactions among musicians."
        kpis={[
          {
            value: '25%',
            description: 'Increase user retention through community features.',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Goals & Strategy"
        subtitleColor="moe"
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
        subtitleColor="moe"
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
        overheadTitleColor={'moe'}
      />

      {/* Wireframes Section */}
      <WireframesSection
        subtitle="Refinement"
        subtitleColor="moe"
        title="Wireframes"
        description="We ensured our design system met industry standards through detailed research and testing."
        image={{
          src: '/images/process/ow/ow-wireframes.png',
          alt: 'Wireframes for user interaction',
        }}
      />
      {/* VisualDesign Section */}
      <VisualDesignSection
        subtitle="Refinement"
        title="Visual Design"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems. This included analyzing their structure, key features, and content strategies to identify best practices and gaps."
        images={[
          { src: '/path-to-top-image.jpg', alt: 'Top Image Description' },
          { src: '/path-to-bottom-image.jpg', alt: 'Bottom Image Description' },
        ]}
        subtitleColor={'moe'}
      />

      {/* TwoRowsImages Section */}
      <TwoRowsImagesSection
        desktopImage={{
          src: '/images/product/moe-ds-desktop-allscreens.png',
          alt: 'Combined desktop images',
        }}
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

export default MOENceaWebsite
