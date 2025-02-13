import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import Ideation from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import MobileScreensShowcase from '../components/casestudy/MobileShowCase'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrincipleSection from '../components/casestudy/PrinciplesSection'
import ThreeScreensSection from '../components/casestudy/ThreeMobile'
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
          projectSubtitle:
            'A personal library and progress tracker for Latin dancers.',
          overview:
            'Ritmo is an interactive app designed to help dancers organize, review, and track their progress on Latin dance moves. Through video tutorials and step-by-step guides, it supports dancers looking to practice between live classes and reinforce what they’ve learned.',
          objectiveGoals: [
            'Design an intuitive, easy-to-use interface that encourages engagement.',
            'Develop a structured dance move library that breaks down steps clearly for different skill levels.',
            'Make navigation and search effortless so users can quickly find the moves they need.',
            'Incorporate feedback from dancers to refine and improve the experience.',
            'Ensure instructions cater to both lead and follow dancers.',
          ],
          role: 'UI/UX Designer & Full Stack Web Developer',
          company: 'Personal Project',
          date: 'July 2024 - present',
          projectImage: '/images/portfolio/ritmo-cover.webp',
          headerImage: '/images/banner-images/ritmo-banner.webp',
          githubLink:
            'https://github.com/corina-reitemeyer/ritmo-dance-library',
        }}
      />

      {/* Three Mobile Showcase */}
      <ThreeScreensSection
        screensImage="/images/product/ritmo-threemobiles.webp"
        backgroundImage="/images/product/ritmo-circle.webp"
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="Interviews & Observations"
        description="During dance practicas and socials, I noticed a common challenge: leads often struggle to recall and recreate specific moves. They usually describe them based on a distinctive feature rather than the official name.

Since most Latin dance moves are named in Spanish, New Zealand-based students often have difficulty searching for them online—even if they remember the correct name. This creates a barrier to self-learning outside of classes.

To dig deeper, I spoke with students and teachers across different skill levels and backgrounds to understand the challenges they face and identify common patterns.

"
        variant="tabbed"
        subtitleColor="ritmo"
        tabbedImages={[
          {
            path: '/images/process/ritmo/UX Persona - Beginner.webp',
            tabName: 'Persona - Beginner',
          },
          {
            path: '/images/process/ritmo/UX Persona - Improvers.webp',
            tabName: 'Persona - Improvers',
          },
          {
            path: '/images/process/ritmo/UX Persona - Intermediate.webp',
            tabName: 'Persona - Intermediate',
          },
          {
            path: '/images/process/ritmo/UX Persona - Instructor.webp',
            tabName: 'Persona - Instructor',
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
              'Students aim to develop their skills, track their improvement, and gain confidence in their dancing journey. They range from absolute beginners to seasoned community members.',
          },
          {
            number: 2,
            title: 'Teachers',
            description:
              'Teachers focus on helping students progress, structuring lessons efficiently, and adapting their teaching to different skill levels. This group includes trainee instructors to senior teachers.',
          },
          {
            number: 3,
            title: 'Social Dancers',
            description:
              'Social dancers are not regular students but are engaged in the social dance scene. They value connection, exploration, and the freedom to develop their skills at their own pace.',
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
        description="Through in-depth interviews with students, teachers, and social dancers, I uncovered key barriers that impact their learning and growth. Students struggle to track progress and reference moves because there’s no structured way to log their practice outside of class. Teachers need more efficient ways to plan lessons and share knowledge, as current methods rely on fragmented resources. Social dancers seek ways to stay engaged with the community, but without regular classes, it’s harder to stay connected and keep improving. These insights shape Ritmo’s design, ensuring it provides practical, user-focused solutions that empower every dancer’s journey."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Students and teachers I spoke with consistently expressed the need for a reliable "source of truth" they could reference when needed.',
            highlights: ['reliable "source of truth"'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Students at different experience levels require varying degrees of detail when learning moves.',
            highlights: ['varying degrees of detail'],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Instructors emphasised the value of a tool that helps them plan their curriculum and review notes on explaining techniques.',
            highlights: ['plan their curriculum'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Despite years of experience, newer teachers often struggle to articulate movements and techniques they perform instinctively through muscle memory.',
            highlights: ['articulate movements', 'techniques'],
          },
          {
            id: 5,
            title: 'Insight #5',
            description:
              'There is a need for cohesive, organised resources due to inconsistent naming conventions, where the same move can have different names depending on where it was learned.',
            highlights: ['cohesive, organised resources'],
          },
          {
            id: 6,
            title: 'Insight #6',
            description:
              'Many moves are named in Spanish, making it difficult for non-Spanish speakers to accurately hear, remember, and search for them online.',
            highlights: [
              'accurately hear',
              'remember',
              'search for them online',
            ],
          },
        ]}
        subtitleColor={'ritmo'}
      />

      {/* Ideation Section */}
      <Ideation
        title="Discovery"
        subtitle="Ideating Based on Insights"
        description="Based on my findings and observations, I brainstormed features to address the key challenges faced by students and instructors, particularly the lack of accessible tools during classes and prácticas."
        points={[
          {
            title: 'Quick Access',
            description:
              'Students often needed fast access to learning materials, making save functionality and a mobile-first design essential for usability.',
          },
          {
            title: 'Visual Material',
            description:
              'A structured video library was proposed to help users reference and review moves easily, reducing reliance on memory alone.',
          },
          {
            title: 'Descriptive Search',
            description:
              'Since users struggled to recall move names in class, a descriptive search feature was introduced to allow lookups based on key characteristics.',
          },
        ]}
        titleColor={'ritmo'}
      />

      {/* Principles Section */}
      <PrincipleSection
        subtitle="Goals & Strategy"
        title="Principles"
        description="These principles were established to address the unique challenges faced by students and instructors in a dynamic learning environment. They ensure the app remains practical, intuitive, and adaptable—whether in lessons, prácticas, or self-paced practice."
        principles={[
          {
            number: 1,
            title: 'Accessibility & Usability First',
            description:
              'Prioritising accessibility ensures the app is easy to navigate and effective for all users, regardless of their tech proficiency or physical abilities. Usability focuses on intuitive interactions that support real-world scenarios, like lessons, prácticas, or on-the-go learning. The goal is to enhance the user experience without adding complexity—ensuring no dancer is left behind.',
          },
          {
            number: 2,
            title: 'Support for Active Learning',
            description:
              'Encouraging hands-on practice for better retention. Active learning is at the heart of skill mastery. This principle emphasises features that engage users in real practice, reinforce learning through interactive feedback, and support the real-world application of techniques. By designing for active participation, the app helps users develop confidence and long-term proficiency.',
          },
          {
            number: 3,
            title: 'Scalability & Flexibility',
            description:
              'A dynamic learning environment demands a product that adapts to evolving needs. This principle focuses on creating a robust, future-ready foundation, allowing for new features, user-generated content, and expanding functionality over time. Scalability ensures long-term sustainability, while flexibility keeps the app relevant in an ever-changing ecosystem.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'ritmo'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Dance Libraries Analysis"
        description="To understand the existing landscape of resources available to dance enthusiasts, I conducted a detailed competitive analysis of similar platforms. While some offered extensive dance libraries, only one included Cuban Salsa content—highlighting a significant gap in the market. Beyond content limitations, many platforms lacked intuitive search functionality and effective filtering options, making it difficult for users to find specific moves. These findings revealed key opportunities for Ritmo to deliver a more focused, user-friendly, and comprehensive solution, specifically tailored to the needs of Cuban Salsa dancers and instructors."
        image={{
          src: '/images/process/ritmo/ritmo-competitors.webp',
          alt: 'Analysis of dance libraries',
        }}
        subtitleColor={'ritmo'}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flows"
        description="User flows are carefully designed to create a seamless experience for every type of dancer—from beginners to advanced students and instructors. By mapping out detailed user journeys, I ensure that the app accommodates different learning styles, skill levels, and real-world use cases. These flows help address key usability and accessibility challenges, making it easier for users to navigate, engage with content, and achieve their goals efficiently. They also ensure that Ritmo’s design supports real-world learning and teaching scenarios, creating an intuitive, structured experience."
        images={[
          {
            path: '/images/process/ritmo/sofia-userjourney.webp',
            tabName: 'Beginner Userflow',
            caption:
              'A streamlined journey designed to guide new users through their first steps, focusing on onboarding, learning fundamental skills, and building confidence with intuitive support at every stage',
          },
          {
            path: '/images/process/ritmo/mark-userjourney.webp',
            tabName: 'Intermediate Userflow',
            caption:
              'A tailored flow for users with some experience, emphasising skill refinement, progress tracking, and advanced practice opportunities to bridge the gap to mastery.',
          },
          {
            path: '/images/process/ritmo/javier-userjourney.webp',
            tabName: 'Advanced Userflow',
            caption:
              'A detailed path for experienced users, enabling them to explore high-level techniques, personalise their practice, and achieve their specific goals efficiently.',
          },
          {
            path: '/images/process/ritmo/carla-userjourney.webp',
            tabName: 'Instructor Userflow',
            caption:
              'A comprehensive journey for instructors, integrating lesson planning, student management, and feedback tools to streamline teaching and elevate the learning experience',
          },
          {
            path: '/images/process/ritmo/ritmo-mvp-technical-journeymap.webp',
            tabName: 'Technical Journey Map',
            caption:
              'A high-level overview of the app’s technical flow, showcasing key system interactions and backend processes to ensure a smooth and robust user experience across all features.',
          },
        ]}
        overheadTitleColor={'ritmo'}
      />

      <WireframesSection
        subtitle="Refinement"
        title="Wireframes"
        description="Wireframes were a crucial step in translating research insights into a tangible design. Focusing on simplicity and user-centered functionality, they defined the app’s core structure and navigation, ensuring an intuitive experience for students, instructors, and social dancers. Each screen was thoughtfully designed to prioritise accessibility, effective filtering, and seamless content discovery—directly addressing the gaps identified in the competitive analysis and discovery phase. These wireframes provided a strong foundation for refining the app’s usability and aligning it with the needs of Cuban Salsa enthusiasts."
        image={{
          src: '/images/process/ritmo/ritmo-wireframes.webp',
          alt: 'Analysis of dance libraries',
        }}
        subtitleColor={'ritmo'}
      />

      {/* Mobile Screens Showcase */}
      <MobileScreensShowcase
        image={{
          src: '/images/process/ritmo/ritmo-showcase.webp',
          alt: 'Showcase of mobile screens',
        }}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Early testing uncovered critical pain points, allowing for quick iterations and refinements',
          'Regular conversations with users ensured alignment between user needs and design priorities.',
          'Understanding niche user needs—like those of Cuban Salsa dancers—reinforced the value of targeted solutions.',
          'Streamlined navigation improved content discovery, reducing frustration and enhancing usability.',
          'Addressing gaps in competitive platforms solidified Ritmo’s unique value proposition.',
          'Scalability was built into the design, preparing the app for future growth and feature expansion (more dance styles, moves etc).',
          'Testing in real-world scenarios ensured that the app is practical and valuable for users.',
        ]}
      />
    </div>
  )
}

export default Ritmo
