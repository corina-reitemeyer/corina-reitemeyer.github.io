import AchievementsSection from '../components/casestudy/Achievements'
import BackgroundSection from '../components/casestudy/Background'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import Ideation from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import LessonsLearnedSection from '../components/casestudy/LessonsLearned'
import OverlappingImagesSection from '../components/casestudy/OverlappingImagesSection'
import PrimaryUsersSection from '../components/casestudy/PrimaryUsers'
import PrinciplesSection from '../components/casestudy/PrinciplesSection'
import TwoRowsImagesSection from '../components/casestudy/TwoRowsImagesSection'
import UserFlow from '../components/casestudy/UserFlowSection'
import WireframesSection from '../components/casestudy/WireframesSection'

const MOEDesignSystem = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        project={{
          id: 1,
          projectTitle: 'Design System',
          slug: 'moe-design-system',
          projectSubtitle: 'Building Consistency and Efficiency Across Teams',
          overview:
            'The Ministry of Education Design System was developed to address the need for a consistent, accessible, and efficient design framework following the rapid creation of a website during the COVID-19 lockdown. This design system includes a comprehensive component library and design guidelines aimed at ensuring uniformity and adherence to accessibility standards across digital platforms.',
          objectiveGoals: [
            'Create a unified design system to ensure consistency across web platforms for the Ministry of Education.',
            'Develop a component library that includes the most commonly used design elements, adhering to accessibility and usability standards.',
            'Provide clear design guidelines and documentation to support future development and maintenance.',
            'Facilitate quicker and more efficient website development by offering reusable components and standardised design patterns.',
          ],
          role: 'Senior UI/UX Designer',
          company: 'Ministry of Education (New Zealand)',
          date: '2020 - 2022',
          projectImage: '/images/portfolio/moe-design-system-cover.webp',
          headerImage: '/images/banner-images/moe-design-system.webp',
        }}
      />

      {/* Overlapping ImagesSection */}
      <OverlappingImagesSection
        images={[
          {
            src: '/images/product/moe-design-system-right.webp',
            alt: 'Top Image',
          },
          {
            src: '/images/product/moe-design-system-left.webp',
            alt: 'Bottom Image',
          },
        ]}
      />
      {/* Discovery Section */}
      <DiscoverySection
        subtitle="DISCOVERY"
        title="Understanding User Needs"
        description="In the discovery phase, we focused on understanding the diverse needs and challenges faced by key stakeholders involved in the design and development process. Through team interviews, project retrospectives, and vendor feedback analysis, we uncovered pain points in workflows, collaboration, and implementation. These insights informed the foundation of the design system, ensuring it addressed the unique requirements of internal teams and external collaborators, ultimately streamlining processes and improving consistency across projects."
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Team Interviews',
            description:
              'Understanding needs and process pain-points for individual roles in the team.',
          },
          {
            title: 'Project Retro',
            description:
              'Highlighted challenges of building the ‘Learning from Home’ website.',
          },
          {
            title: 'Vendor Feedback',
            description:
              'Analysed feedback that third-party designers/developers left us after completing projects for the Ministry.',
          },
        ]}
      />

      {/* Background Section */}
      <BackgroundSection
        subtitle="DISCOVERY"
        title="Learning from Home"
        date="Website | 2020 - 2021"
        description="During the COVID-19 pandemic, my team was tasked with delivering the 'Learning from Home' website as part of an emergency response. I initiated the Design System project due to the learnings we had from Learning from Home, bringing a fresh perspective to our existing processes. The fast-paced nature of the project and tight deadlines exposed significant pain points, particularly the lack of a cohesive design system and streamlined workflows for design and development. These challenges underscored the need for consistency, scalability, and efficiency, which ultimately informed the foundation for our design system."
        imageSrc="/images/process/moe-designsystem/moe-learningfromhome.webp"
        imageAlt="Mockup of Learning from Home website"
        subtitleColor={'moe'}
      />
      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="DISCOVERY"
        title="Primary Users"
        description="Our primary users—designers, developers, and web advisors—needed a centralised, up-to-date design system that ensures consistency, accessibility, and seamless collaboration across projects, while secondary users like third-party vendors and the brand team required onboarding resources and tools to maintain visual and functional alignment."
        principles={[
          {
            number: 1,
            title: 'Designers',
            description:
              'Create designs that are user-centric, accessible, and visually appealing.',
          },
          {
            number: 2,
            title: 'Developers',
            description: 'Build, test, and maintain websites and applications.',
          },
          {
            number: 3,
            title: 'Web Advisors',
            description:
              'Act as a bridge between the technical and non-technical stakeholders.',
          },
        ]}
        backgroundColor="#90AEFF"
        subtitleColor="moe"
        reversedLayout={false}
      />
      {/* Insights Section */}
      <InsightsSection
        subtitle="DISCOVERY"
        title="What is holding the team back?"
        description="During our research for the design system initiative, we uncovered critical issues that impacted both internal teams and end users. I interviewed several teammembers from different disciplinary teams (Development, Design, Product Managment, Business Analysis, Web Advisors) to get an in-depth understanding of the critical pain-points and opportunities in our process and workflow. These insights shed light on how inconsistent design patterns, interfaces, and interaction methods negatively affected usability, scalability, and overall team productivity. Addressing these bottlenecks was crucial for creating a unified and efficient design system."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Public users (Teachers, students, schools) encounter varying interfaces and interactions across different parts of the product.',
            highlights: ['varying interfaces', 'interactions'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Users experience difficulties navigating or interacting with the product due to inconsistent design elements and patterns.',
            highlights: ['navigating or interacting'],
          },
        ]}
        subtitleColor={'moe'}
      />

      <Ideation
        title="IDEATION"
        subtitle="PROCESS PAINPOINTS"
        description="The team faced significant challenges that hindered productivity and consistency, particularly under the pressure of tight deadlines. Developers struggled with unclear workflows, resulting in wasted time and inefficiencies, while designers frequently had to correct vendor-delivered work without clear standards or documentation to guide them. These issues created a cycle of uncertainty and inconsistency, making it difficult to deliver cohesive, high-quality results in a fast-paced environment."
        points={[
          {
            title: 'Developers',
            description:
              'Developers frequently needed quick access to materials and resources. The lack of centralized documentation and a mobile-first design approach made it challenging for them to efficiently navigate the tools they relied on, leading to wasted time and inefficiencies.',
          },
          {
            title: 'Designers',
            description:
              'Designers often had to correct work produced by vendors, relying on their intuition and judgment due to the absence of clear guidelines or reference material. This created additional work and made it difficult to ensure a consistent design across all outputs.',
          },
        ]}
        titleColor="moe"
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="GOALS & STRATEGY"
        title="Principles"
        description="These principles were established to address the challenges faced by teams when working on a fast-paced, large-scale design system project. By prioritising consistency, scalability, and user-centered efficiency, these principles ensure the design system supports cohesive collaboration, streamlines workflows, and provides a flexible foundation for future growth. They empower both designers and developers to build faster, more reliably, and with greater confidence."
        principles={[
          {
            number: 1,
            title: 'Consistency with Flexibility',
            description:
              'Consistency is the backbone of any design system, ensuring visual and interaction patterns are predictable across the product. At the same time, flexibility is vital to accommodate unique needs of different teams or projects, allowing for creative freedom within defined guidelines.',
          },
          {
            number: 2,
            title: 'Scalability & Future-proofing',
            description:
              'The design system is built with scalability in mind, enabling it to grow as the organisation’s needs evolve. By creating modular components and reusable patterns, the system can adapt to new features, technologies, and tools without requiring a complete overhaul.',
          },
          {
            number: 3,
            title: 'User-centric Efficiency',
            description:
              'Efficiency is key to enabling teams to work faster and deliver high-quality outcomes. The design system simplifies handoffs between designers and developers, minimizes redundancies, and ensures that all teams have the resources they need to deliver exceptional user experiences.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'moe'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="EXPLORATION"
        title="Design Systems in the wild"
        description="To inform the development of our design system, I conducted secondary research into existing systems, with a focus on NZ/AUS government design systems. While these provided valuable insights into components, patterns, and guidance, they didn’t align with our brand guidelines or specific use cases. Recognizing this gap, I involved all primary users in the process through regular discussions, progress updates, and workshops. These sessions allowed the team to analyse existing components and patterns, assess their alignment with our design strategy, and provide feedback to ensure the system met their needs while addressing potential risks and benefits."
        image={{
          src: '/images/process/moe-designsystem/moe-design-system-competitors.webp',
          alt: 'Analysis of design systems',
        }}
        subtitleColor={'moe'}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="EXPLORATION"
        title="Sitemap"
        description="The sitemap provides a comprehensive overview of the design system website's structure, ensuring clear navigation and accessibility for all users. It outlines key sections, such as component libraries, patterns, and documentation, enabling designers, developers, and other stakeholders to quickly find the resources they need while maintaining consistency across projects."
        images={[
          {
            path: '/images/process/moe-designsystem/moe-design-system-sitemap.webp',
            tabName: 'Beginner Userflow',
            caption: `The design system website sitemap visually maps out the site's structure, detailing how components, patterns, and documentation are organized for seamless navigation and usability.`,
          },
        ]}
        overheadTitleColor={'moe'}
      />
      <WireframesSection
        subtitle="REFINEMENT"
        title="Wireframes"
        description="The wireframing process for the design system website focused on creating a user-friendly structure that prioritised clarity and accessibility. By mapping out key sections like component libraries, patterns, and documentation, the wireframes ensured seamless navigation for designers, developers, and stakeholders. This iterative process allowed us to refine layouts, address user needs, and align the design with the project's overall strategy."
        image={{
          src: '/images/process/moe-designsystem/moe-design-system-wireframes.webp',
          alt: 'Analysis of dance libraries',
        }}
        subtitleColor={'moe'}
      />
      <TwoRowsImagesSection
        desktopImage={{
          src: '/images/product/moe-ds-desktop-allscreens.webp', // Replace with your combined desktop image path
          alt: 'Combined desktop images',
        }}
        bottomRowImages={[
          {
            src: '/images/product/moe-ds-mobile-menu.webp',
            alt: 'Mobile Image 1',
          },
          {
            src: '/images/product/moe-ds-mobile-hpg.webp',
            alt: 'Mobile Image 2',
          },
          {
            src: '/images/product/moe-ds-mobile-content.webp',
            alt: 'Mobile Image 3',
          },
        ]}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Created the agencies first design system:',
            description:
              'Took the initiative to learn about how to establish one, created buy-in for it’s usage across the agency.',
          },
          {
            title: 'Enhanced Team Collaboration:',
            description:
              'Facilitated improved collaboration between designers and engineers.',
          },
          {
            title: 'Effective Vendor & Stakeholder Engagement:',
            description:
              'Enhanced communication with stakeholders and third-parties by providing a concrete reference for design decisions.',
          },
          {
            title: 'Elevated Design Standards:',
            description:
              'Raised the overall design standards within the organisation.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Design systems only work if everyone is using it.',
          'There needs to be a process and criteria.',
          'There are right and wrong ways to document.',
          '40% reduction in design & development time.',
        ]}
      />
    </div>
  )
}

export default MOEDesignSystem
