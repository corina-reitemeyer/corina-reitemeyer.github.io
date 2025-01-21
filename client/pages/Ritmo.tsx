import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import IdeationSection from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import MobileScreensShowcase from '../components/casestudy/MobileShowCase'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/Principles'
import TabbedImageViewer from '../components/casestudy/TabbedImageViewer'
import ThreeMobile from '../components/casestudy/ThreeMobile'
import UserflowsSection from '../components/casestudy/UserFlowSection'
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
          headerImage: '/images/case-study-1-banner.png',
        }}
      />

      {/* Three Mobile Showcase */}
      <ThreeMobile
        screens={[
          { src: '/images/mobile-screen-1.png', alt: 'Mobile Screen 1' },
          { src: '/images/mobile-screen-2.png', alt: 'Mobile Screen 2' },
          { src: '/images/mobile-screen-3.png', alt: 'Mobile Screen 3' },
        ]}
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery Phase"
        title="Understanding User Needs"
        description="We started with user research to uncover the key pain points and desires of our target audience."
        imageSrc="/images/discovery.png"
        imageAlt="Discovery Image"
      />

      {/* Tabbed Image Viewer */}
      <TabbedImageViewer
        images={[
          {
            path: '/images/image1.png',
            tabName: 'Tab 1',
            caption: 'This is the caption for image 1.',
          },
          {
            path: '/images/image2.png',
            tabName: 'Tab 2',
            caption: 'This is the caption for image 2.',
          },
          {
            path: '/images/image3.png',
            tabName: 'Tab 3',
            caption: 'This is the caption for image 3.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        title="Primary Users"
        subtitle="Who Are We Designing For?"
        cards={[
          {
            title: 'Students',
            description:
              'Beginner and intermediate students looking to improve their skills.',
          },
          {
            title: 'Instructors',
            description:
              'Teachers seeking to provide structured lessons for students.',
          },
          {
            title: 'Social Dancers',
            description:
              'Experienced dancers practicing advanced moves at socials.',
          },
        ]}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="User Research Insights"
        title="Key Takeaways from Research"
        description="We identified key insights from user interviews to guide the design process."
        insights={[
          {
            id: 1,
            title: 'Ease of Use',
            description:
              'Users value intuitive navigation and clear instructions.',
          },
          {
            id: 2,
            title: 'Accessibility',
            description:
              'Ensuring accessibility features, such as font size adjustments, improves the overall experience.',
          },
        ]}
      />

      {/* Ideation Section */}
      <IdeationSection
        title="Ideation"
        subtitle="Ideating Based on Research"
        description="We brainstormed features and solutions that address core user needs."
        cards={[
          {
            title: 'Quick Search',
            description:
              'Provide a fast, descriptive search option to locate resources easily.',
          },
          {
            title: 'Progress Tracking',
            description:
              'Incorporate a progress tracker to encourage consistent usage.',
          },
          {
            title: 'Community Features',
            description:
              'Add a feature for users to share tips and experiences.',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Guiding Design Principles"
        title="Core Values Driving the Solution"
        description="These principles formed the foundation of our design and development decisions."
        principles={[
          {
            number: 1,
            title: 'User-Centered Design',
            description:
              'Prioritize user needs and ensure designs are easy to use.',
          },
          {
            number: 2,
            title: 'Accessibility First',
            description:
              'Ensure compliance with accessibility standards for inclusivity.',
          },
          {
            number: 3,
            title: 'Scalable Architecture',
            description: 'Design a solution that can grow with future needs.',
          },
        ]}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Competitor Analysis"
        title="Market Research"
        description="We analyzed existing tools in the market to identify gaps and opportunities."
        images={[
          { src: '/images/competitor-1.png', alt: 'Competitor 1 Analysis' },
          { src: '/images/competitor-2.png', alt: 'Competitor 2 Analysis' },
        ]}
      />

      {/* User Flows Section */}
      <UserflowsSection
        title="User Flows"
        description="Detailed user flow diagrams illustrate navigation paths."
        userflows={[
          {
            type: 'tabbed',
            tabbedImages: [
              {
                path: '/images/userflow-beginner.png',
                caption: 'User flow for beginner users.',
              },
              {
                path: '/images/userflow-advanced.png',
                caption: 'User flow for advanced users.',
              },
            ],
          },
        ]}
      />

      {/* Wireframes Section */}
      <WireframesSection
        subtitle="Visualizing the Concept"
        title="Low-Fidelity Wireframes"
        description="Initial wireframes helped visualize the core functionality and layout of the app."
        images={[
          { src: '/images/wireframe-1.png', alt: 'Wireframe 1' },
          { src: '/images/wireframe-2.png', alt: 'Wireframe 2' },
        ]}
      />

      {/* Mobile Screens Showcase */}
      <MobileScreensShowcase
        title="Final Mobile Designs"
        description="Showcasing the final mobile screens highlighting the app’s features."
        screens={[
          { src: '/images/mobile-screen-1.png', alt: 'Home Screen' },
          { src: '/images/mobile-screen-2.png', alt: 'Search Screen' },
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

export default Ritmo
