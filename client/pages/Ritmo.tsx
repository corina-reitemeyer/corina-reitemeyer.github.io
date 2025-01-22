import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import Ideation from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import MobileScreensShowcase from '../components/casestudy/MobileShowCase'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrincipleSection from '../components/casestudy/PrinciplesSection'
import ThreeMobile from '../components/casestudy/ThreeMobile'
import UserFlow from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const Ritmo = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        project={{
          id: 1,
          projectTitle: 'Ritmo',
          slug: 'ritmo',
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
          headerImage: '/images/banner-images/ritmo-banner.png',
        }}
      />

      {/* Three Mobile Showcase */}
      <ThreeMobile
        screens={[
          {
            src: '/images/product/ritmo-mobile-1.png',
            alt: 'Ritmo Library Screen',
          },
          {
            src: '/images/product/ritmo-mobile-2.png',
            alt: 'Ritmo Homepage Screen',
          },
          {
            src: '/images/product/ritmo-mobile-3.png',
            alt: 'Ritmo Moves Screen',
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
        subtitleColor="ritmo"
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
        subtitleColor={'ritmo'}
      />

      {/* Ideation Section */}
      <Ideation
        title="Discovery"
        subtitle="Ideating Based on Insights"
        description="Based on my findings and observations, I brainstormed features to address key challenges faced by students and instructors, such as the lack of accessible tools during classes or prácticas."
        points={[
          {
            title: 'Quick Access',
            description:
              'Students frequently needed quick access to materials, making save functionality and mobile-first design essential for usability.',
          },
          {
            title: 'Visual Material',
            description:
              'A video library was proposed to provide structured guidance, allowing users to reference and review material without relying on memory alone.',
          },
          {
            title: 'Descriptive Search',
            description:
              'Users struggled to recall move names in classes, so a descriptive search was proposed for easier lookup based on key characteristics.',
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
        subtitleColor={'ritmo'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Dance Libraries Analysis"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems. This included analyzing their structure, key features, and content strategies to identify best practices and gaps."
        image={{
          src: '/images/process/ritmo-competitors.png',
          alt: 'Analysis of dance libraries',
        }}
        subtitleColor={'ritmo'}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flows"
        description="Detailed user flows improve illustrations for usability and accessibility."
        images={[
          {
            path: '/images/process/sofia-userjourney.png',
            tabName: 'Beginner Userflow',
            caption: 'This is the beginner flow.',
          },
          {
            path: '/images/process/mark-userjourney.png',
            tabName: 'Intermediate Userflow',
            caption: 'This is the intermediate flow.',
          },
          {
            path: '/images/process/javier-userjourney.png',
            tabName: 'Advanced Userflow',
            caption: 'This is the advanced flow.',
          },
          {
            path: '/images/process/carla-userjourney.png',
            tabName: 'Instructor Userflow',
            caption: 'This is the advanced flow.',
          },
          {
            path: '/images/process/ritmo-mvp-technical-journey map.png',
            tabName: 'Technical Journey Map',
            caption: 'This is the advanced flow.',
          },
        ]}
        overheadTitleColor={'ritmo'}
      />

      <WireframesSection
        subtitle="Refinement"
        title="Wireframes"
        description="To ensure our design system met industry standards and organizational needs, I conducted thorough research on existing government and private sector design systems. This included analyzing their structure, key features, and content strategies to identify best practices and gaps."
        image={{
          src: '/images/process/ritmo-wireframes.png',
          alt: 'Analysis of dance libraries',
        }}
        subtitleColor={'ritmo'}
      />

      {/* Mobile Screens Showcase */}
      <MobileScreensShowcase
        image={{
          src: '/images/process/ritmo-showcase.png',
          alt: 'Showcase of mobile screens',
        }}
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

export default Ritmo
