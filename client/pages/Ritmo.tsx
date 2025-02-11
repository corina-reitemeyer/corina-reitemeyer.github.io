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
            'A personal library and progress tracker for latin dancers.',
          overview:
            'Ritmo is an interactive app designed to help users learn and practice Latin dance moves through video tutorials and step-by-step guides, complementary to going to live classes.',
          objectiveGoals: [
            'Create an engaging user interface.',
            'Develop a centralised comprehensive dance move library that is easy to understand for different skill levels.',
            'Facilitate easy navigation and search functionality.',
            'Incorporate user feedback for continuous improvement.',
            'Provide instructions for follower and leads dancers.',
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
        description="During dance practicas or socials, I often encounter leads asking about specific moves they’re trying to recall and recreate. Typically, they provide a vague description focusing on a key feature that distinguishes the move. Since most of the moves are named in Spanish, it can be challenging for New Zealand-based students to locate them online, even if they remember the original name."
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
              'Learn and master skills, track progress, and build confidence in their dancing journey. They can range from absolute beginners to veterans of the community.',
          },
          {
            number: 2,
            title: 'Teachers',
            description:
              'They share knowledge and experience, streamline lesson planning, and foster student growth. Ranges from trainees to senior instructors.',
          },
          {
            number: 3,
            title: 'Social Dancers',
            description:
              'Social Dancers connect, explore, and thrive in vibrant dance communities. They can be at different levels, but are not regular students.',
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
        description="Through in-depth interviews with students, teachers, and social dancers, I uncovered key insights into their unique needs and challenges. Students crave tools to track progress, reference moves that they are learning, and build confidence as they develop their skills. Teachers need efficient ways to plan lessons, share knowledge, and foster meaningful growth for their students. Social dancers desire platforms that help them connect, explore, and thrive in dynamic dance communities. These insights guide Ritmo's design, ensuring a user-focused experience that empowers every dancer's journey."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Students and teachers I spoke with consistently expressed the need for a reliable "source of truth" they could refer back to',
            highlights: ['reliable "source of truth"'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Students from varying experience background need more or less tailored information for moves.',
            highlights: ['more or less tailored'],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Instructors highlighted the value of a solution that would help them plan their curriculum and review notes on explaining techniques.',
            highlights: ['plan their curriculum'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Newer teachers need, despite years of dancing and relying on muscle memory, a way of articulating what they were doing in terms of moves and techniques. ',
            highlights: ['a way of articulating'],
          },
          {
            id: 5,
            title: 'Insight #5',
            description:
              'A need for cohesive and organised resources due to several different naming conventions, which can mean different moves depending where you are taught.',
            highlights: ['cohesive and organised'],
          },
          {
            id: 6,
            title: 'Insight #6',
            description:
              'Moves are often in Spanish, non-Spanish speakers either mishear the calls or cannot remember them, which does not help when they are trying to look them up online.',
            highlights: ['mishear the calls or cannot', 'remember'],
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
        titleColor={'ritmo'}
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
              'Prioritising accessibility ensures that the app is easy to navigate and effective for all users, regardless of their tech proficiency or physical abilities. Usability focuses on intuitive design that supports seamless interactions during real-world scenarios like lessons, prácticas, or on-the-go learning. This principle ensures no user is left behind and that the app consistently enhances their experience without adding complexity.',
          },
          {
            number: 2,
            title: 'Support for Active Learning',
            description:
              'Active learning is at the heart of skill mastery. This principle emphasizes tools and features designed to engage users in hands-on practice, encourage retention through interactive feedback, and foster real-world application of learned techniques. By supporting active learning, the app empowers users to deepen their understanding and build lasting confidence.',
          },
          {
            number: 3,
            title: 'Scalability and Flexibility',
            description:
              'A dynamic learning environment demands a system that grows with its users. This principle focuses on creating a robust foundation that accommodates future expansions, whether adding new features, incorporating user-generated content, or adapting to evolving needs. Scalability ensures long-term sustainability, while flexibility allows the app to remain relevant in a constantly changing ecosystem.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'ritmo'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Dance Libraries Analysis"
        description="To understand the landscape of existing resources for dance enthusiasts, I conducted a detailed competitive analysis of similar platforms. While some offered extensive dance libraries, only one included Cuban Salsa content—a significant gap for this niche. Additionally, many platforms lacked intuitive search engines and specific filtering options, making it difficult for users to find the exact moves they were looking for. These findings highlighted opportunities for Ritmo to provide a more focused, user-friendly, and comprehensive solution tailored to the needs of Cuban Salsa dancers and instructors."
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
        description="User flows are meticulously crafted to ensure a seamless experience for every type of user, from beginners to advanced dancers and instructors. By mapping out detailed journeys, I address the unique needs and challenges of each group, promoting usability and accessibility at every step. These flows not only enhance user engagement but also ensure the app’s design aligns with real-world scenarios, providing an intuitive and effective solution for learning and teaching."
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
              'A tailored flow for users with some experience, emphasizing skill refinement, progress tracking, and advanced practice opportunities to bridge the gap to mastery.',
          },
          {
            path: '/images/process/ritmo/javier-userjourney.webp',
            tabName: 'Advanced Userflow',
            caption:
              'A detailed path for experienced users, enabling them to explore high-level techniques, personalize their practice, and achieve their specific goals efficiently.',
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
        description="The wireframes served as a crucial step in translating research insights into a tangible design. By focusing on simplicity and user-centered functionality, the wireframes outlined the app's core structure and navigation, ensuring an intuitive experience for students, instructors, and social dancers. Each screen was thoughtfully designed to prioritise accessibility, effective filtering, and seamless content discovery—addressing gaps identified in the competitive analysis and discovery phase. These wireframes provided a solid foundation for refining the app’s usability and aligning it with the needs of Cuban Salsa enthusiasts."
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
          'Iterative testing uncovered critical pain points early.',
          'Collaborative research fostered alignment between user needs and design priorities.',
          'Understanding niche user needs, like those of Cuban Salsa dancers, highlighted the importance of targeted solutions.',
          'Streamlining navigation improved content discoverability and reduced user frustration.',
          'Addressing gaps in competitive platforms underscored Ritmo’s unique value proposition.',
          'Scalability prepared the app for future growth and new feature integration.',
          'Leveraging real-world scenarios during testing enhanced the app’s practicality for users.',
        ]}
      />
    </div>
  )
}

export default Ritmo
