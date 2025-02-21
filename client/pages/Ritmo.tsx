import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import Ideation from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
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
        hook="Imagine a dance app that remembers your moves better than you do."
        project={{
          id: 1,
          projectTitle:
            'A personal library and progress tracker for Latin dancers',
          slug: 'ritmo',
          projectSubtitle: 'Ritmo - Latin Dance Move Library',
          overview:
            'Ritmo is an interactive app designed to help Latin dancers organize, review, and track their progress on dance moves. Whether refining technique, reinforcing lessons, or practicing between live classes, Ritmo provides step-by-step guides and video tutorials to support dancers at every level.',
          objectiveGoals: [
            'Create an intuitive, easy-to-use interface that encourages dancers to stay engaged and motivated.',
            'Develop a structured dance move library, breaking down steps clearly for different skill levels.',
            'Streamline navigation and search, allowing users to quickly find and review moves when they need them.',
            'Integrate dancer feedback to refine and enhance the experience based on real-world usage.',
            'Ensure inclusive instructions for both lead and follow dancers, making learning accessible for all roles.',
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
        description="How do you practice when you can’t remember the name of the move?

During dance practicas and socials, I noticed a common challenge: leads often struggle to recall and recreate specific moves. Instead of using official names, they typically describe moves based on a distinctive feature, making it harder to search for them later.

Adding to this challenge, most Latin dance moves are named in Spanish, which can be a barrier for New Zealand-based students—even when they remember the correct name. This limits self-learning outside of class and makes online searchability difficult.

To dig deeper, I conducted interviews with students and teachers across different skill levels and backgrounds. These conversations helped uncover common pain points and patterns, shaping Ritmo’s approach to organising and labeling dance moves for better recall and accessibility.

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
        title="Primary Users: From Newcomers to Pros"
        description="Being actively involved in the dance community, I conducted semi-informal interviews with students, instructors, and social dancers to gain deeper insights into their goals, challenges, and motivations. By consolidating their feedback into detailed user personas and journey flowcharts, I identified key user groups and their unique needs:"
        principles={[
          {
            number: 1,
            title: 'Students',
            description:
              'Seeking skill development, progress tracking, and confidence-building in their dance journey. This group ranges from absolute beginners to seasoned community members looking to refine their technique.',
          },
          {
            number: 2,
            title: 'Teachers',
            description:
              'Focused on helping students progress, structuring lessons efficiently, and adapting instruction to different skill levels. This group includes trainee instructors to senior teachers who shape the learning experience.',
          },
          {
            number: 3,
            title: 'Social Dancers',
            description:
              'Not regular students but actively engaged in the social dance scene. They prioritise connection, exploration, and the freedom to improve at their own pace outside of structured lessons.',
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
        description="Learning doesn’t stop when class ends, but without the right tools, progress stalls. Through in-depth interviews with students, teachers, and social dancers, I uncovered key barriers that make it difficult for them to improve outside of class. Students struggle to track progress and reference moves, as there’s no structured way to log their practice. Teachers rely on fragmented resources, making lesson planning and knowledge-sharing inefficient. Social dancers lack ways to stay engaged with the community, making it harder to stay connected and keep improving without regular classes. These insights shaped Ritmo’s design, ensuring it delivers practical, user-focused solutions that empower every dancer’s journey."
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
        description="Bridging the gap between learning and practice with smarter tools.

Drawing from my findings and observations, I brainstormed features to tackle the biggest pain points faced by students and instructors—particularly the lack of accessible tools during classes and prácticas."
        points={[
          {
            title: 'Quick Access',
            description:
              'Students needed fast access to learning materials, making save functionality and a mobile-first design essential for usability.',
          },
          {
            title: 'Visual Material',
            description:
              'A structured video library was proposed to help users reference and review moves easily, reducing their reliance on memory alone.',
          },
          {
            title: 'Descriptive Search',
            description:
              'Since users struggled to recall move names in class, a descriptive search feature was introduced, allowing lookups based on key characteristics instead of official names.',
          },
        ]}
        titleColor={'ritmo'}
      />

      {/* Principles Section */}
      <PrincipleSection
        subtitle="Goals & Strategy"
        title="Guiding Principles"
        description="These principles were established to address the unique challenges faced by students and instructors. They ensure the app remains practical, intuitive, and adaptable, supporting dancers whether in lessons, prácticas, or self-paced practice."
        principles={[
          {
            number: 1,
            title: 'Accessibility & Usability First',
            description:
              'A dance app should be easy to navigate and effective for all users, regardless of tech proficiency or physical abilities. This principle ensures intuitive interactions that support real-world scenarios—from lessons to prácticas and on-the-go learning. The goal is to enhance the experience without adding complexity, making sure no dancer is left behind.',
          },
          {
            number: 2,
            title: 'Active Learning & Retention',
            description:
              'Dance is learned by doing. Hands-on practice leads to better retention, so the app prioritises features that engage users in real practice, provide interactive feedback, and support the real-world application of techniques. By designing for active participation, Ritmo helps dancers build confidence and long-term proficiency.',
          },
          {
            number: 3,
            title: 'Scalability & Flexibility',
            description:
              'A dynamic learning environment requires a product that adapts to evolving needs. This principle focuses on building a future-ready foundation, allowing for new features, user-generated content, and expanded functionality over time. Scalability ensures long-term sustainability, while flexibility keeps the app relevant in an ever-changing dance ecosystem.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'ritmo'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Dance Libraries Analysis"
        description="The right tools for Cuban Salsa dancers are hard to find—so I set out to identify why.

To understand the existing landscape of dance resources, I conducted a detailed competitive analysis of similar platforms. While some offered extensive dance libraries, only one included Cuban Salsa content—highlighting a significant gap in the market.

Beyond content limitations, many platforms lacked intuitive search functionality and effective filtering, making it difficult for users to find specific moves. These findings revealed key opportunities for Ritmo to stand out by delivering a focused, user-friendly, and comprehensive solution, specifically tailored to the needs of Cuban Salsa dancers and instructors."
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
        description="Ritmo’s user flows are carefully designed to create a seamless experience for every type of dancer—from beginners to advanced students and instructors. By mapping out detailed user journeys, I ensured the app accommodates different learning styles, skill levels, and real-world use cases.

These flows address key usability and accessibility challenges, making it easier for users to navigate, engage with content, and track their progress efficiently. They also ensure Ritmo supports real-world learning and teaching scenarios, creating an intuitive, structured experience that helps dancers build skills with confidence."
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
        description="Wireframes were a crucial step in translating research insights into a tangible design. Focusing on simplicity and user-centered functionality, they shaped the app’s core structure and navigation, ensuring an intuitive experience for students, instructors, and social dancers.

Each screen was thoughtfully designed to prioritise accessibility, intuitive filtering, and seamless content discovery—directly addressing gaps identified in the competitive analysis and discovery phase. These wireframes provided a strong foundation for refining the app’s usability and aligning it with the needs of Cuban Salsa enthusiasts, ensuring the experience felt smooth, natural, and purpose-driven."
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
        backgroundImage="/images/product/ritmo-circle.webp"
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          {
            heading: 'Early Testing Drives Smarter Design',
            description:
              'User testing uncovered critical pain points early in the process, enabling quick iterations and refinements that improved usability.',
          },
          {
            heading: 'User Conversations Ensure the Right Focus',
            description:
              'Regular engagement with dancers kept the design aligned with real user needs, ensuring features were practical and valuable.',
          },
          {
            heading: 'Niche Needs Require Tailored Solutions',
            description:
              'Designing for Cuban Salsa dancers highlighted the importance of targeted solutions that address specific learning challenges.',
          },
          {
            heading: 'Intuitive Navigation Transforms User Experience',
            description:
              'Streamlined navigation improved content discovery, reducing frustration and making it easier for dancers to find what they need.',
          },
          {
            heading: 'Competitive Gaps Create Unique Opportunities',
            description:
              'By addressing gaps in existing platforms, Ritmo established a distinct value proposition that set it apart in the market.',
          },
          {
            heading: 'Scalability Future-Proofs the Product',
            description:
              'The design was built with flexibility in mind, allowing for easy expansion into more dance styles, moves, and features.',
          },
          {
            heading: 'Real-World Testing Validates Practicality',
            description:
              'Testing in real dance settings confirmed that the app supports real-world learning and enhances skill development.',
          },
        ]}
      />

      <KeyOutcomes
        title="Expected Product Impact & Iterations"
        outcomes={[
          {
            icon: '🔍',
            title: 'Improved Searchability',
            description:
              'Enable dancers to find moves easily, even if they don’t know the exact name.',
          },
          {
            icon: '📈',
            title: 'Increased Engagement',
            description:
              'Encourage regular practice with personalised tracking and structured lessons.',
          },
          {
            icon: '🎥',
            title: 'Enhanced Learning Experience',
            description:
              'Provide clear video tutorials and instructions for both leads and followers.',
          },
          {
            icon: '🔄',
            title: 'Iterative Refinements',
            description:
              'Continuously test and adapt the UX based on dancer feedback and usage data.',
          },
        ]}
      />
    </div>
  )
}

export default Ritmo
