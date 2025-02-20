import AchievementsSection from '../components/casestudy/Achievements'
import BackgroundSection from '../components/casestudy/Background'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import Ideation from '../components/casestudy/IdeationSection'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
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
          projectTitle: 'Building Consistency and Efficiency Across Teams',
          slug: 'moe-design-system',
          projectSubtitle: 'Ministry of Education Design System',
          overview:
            'The Ministry of Education Design System was developed to establish consistency, accessibility, and efficiency across digital platforms. Following the rapid creation of a website during the COVID-19 lockdown, it became clear that a structured, scalable design framework was needed to support future development. This design system includes a comprehensive component library and detailed design guidelines, ensuring uniformity while adhering to accessibility and usability standards.',
          objectiveGoals: [
            'Establish a Unified Design System – Create a framework that ensures visual and functional consistency across the Ministry’s digital platforms.',
            'Develop a Comprehensive Component Library – Build a collection of commonly used design elements, adhering to strict accessibility and usability standards.',
            'Provide Clear Guidelines & Documentation – Support teams with structured design documentation to ensure long-term adoption and maintainability.',
            'Streamline Website Development – Enable quicker and more efficient digital product delivery through reusable components and standardised patterns.',
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
        productImage="/images/product/moe-ds-overlap.webp"
        backgroundColor="#90AEFF"
        backgroundImage="/images/product/moe-designsystem-triangle1.webp"
      />

      {/* Background Section */}
      <BackgroundSection
        subtitle="Discovery"
        title="Learning from Home"
        date="Website | 2020 - 2021"
        description="During the COVID-19 pandemic, my team was tasked with delivering the ‘Learning from Home’ website as part of an emergency response initiative. The fast-paced nature of the project and tight deadlines exposed critical challenges, particularly the lack of a cohesive design system and streamlined workflows for design and development. Recognising these pain points, I initiated the Design System project and worked closely with designers, developers, and web advisors to identify gaps and create a scalable, structured framework. By collaborating across disciplines, we shaped a system that improved consistency, accessibility, and efficiency, ensuring future projects had the tools they needed from the start.

"
        imageSrc="/images/process/moe-designsystem/moe-learningfromhome.webp"
        imageAlt="Mockup of Learning from Home website"
        subtitleColor={'moe'}
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="Understanding User Needs"
        description="To ensure the design system was aligned with real team needs, I collaborated with key stakeholders through team interviews, project retrospectives, and vendor feedback analysis. These discussions helped us pinpoint pain points, uncover opportunities, and shape the system together—creating alignment across both team members and leadership. Through this process, we identified challenges in workflows, collaboration, and implementation that impacted efficiency and consistency across projects. By co-designing solutions with the team, we ensured the system addressed the unique needs of internal teams and external collaborators—ultimately streamlining processes and improving consistency across digital platforms.

"
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Team Interviews',
            description:
              'I worked closely with designers, developers, and content strategists to understand their workflow challenges and role-specific pain points.',
          },
          {
            title: 'Project Retro',
            description:
              'Together with the team, we analysed lessons learned from building the ‘Learning from Home’ website, surfacing scalability and efficiency challenges.',
          },
          {
            title: 'Vendor Feedback',
            description:
              'By reviewing insights from third-party designers and developers, we identified pain points in implementation and collaboration, ensuring external teams could align with the new system.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="I worked closely with the team to identify designers, developers, and web advisors as the primary users of the design system. While I led the initiative, we collaborated as a team to define workflows, prioritise needs, and ensure a solution that worked across disciplines. With 50+ websites to manage, we needed a centralised, up-to-date system that provided clear documentation and scalable components. By working together, we created a framework that reduced unnecessary rework and improved cross-team collaboration."
        principles={[
          {
            number: 1,
            title: 'Designers',
            description:
              'I worked with designers to ensure the system enabled them to create user-centric, accessible, and visually cohesive designs that aligned across all platforms.',
          },
          {
            number: 2,
            title: 'Developers',
            description:
              'I collaborated with developers to ensure the system was easy to implement, scalable, and compliant with accessibility standards across 50+ websites.',
          },
          {
            number: 3,
            title: 'Web Advisors',
            description:
              'I worked closely with web advisors to ensure the system supported accessibility compliance, content management, and IT training, making it easier for them to guide business units and maintain structured, accessible content.',
          },
        ]}
        backgroundColor="#90AEFF"
        subtitleColor="moe"
        reversedLayout={false}
      />
      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the team back?"
        description="Through team-wide collaboration, we uncovered critical roadblocks that impacted team efficiency, scalability, and user experience across the Ministry’s digital platforms. By working closely with designers, developers, and leadership, we made a case for a structured, scalable design system that would eliminate these challenges and improve workflows across teams. Without a unified design system, teams faced:"
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Designers and developers across 100+ websites were forced to recreate UI components due to the lack of a standardised design system.',
            highlights: [
              'recreate UI components',
              'lack of a standardised design',
              'system',
            ],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Inconsistent design patterns and interaction methods resulted in usability issues, making it harder for end users to navigate digital platforms.',
            highlights: ['inconsistent design patterns', 'usability issues'],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Scalability challenges arose as teams struggled to adapt existing designs for new projects, leading to inefficiencies and delays.',
            highlights: ['scalability challenges', 'inefficiencies and delays'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Ensuring WCAG compliance was difficult without a centralised system, increasing the risk of accessibility issues across digital products.',
            highlights: ['WCAG compliance', 'accessibility issues'],
          },
          {
            id: 5,
            title: 'Insight #5',
            description:
              'Without clear documentation or guidelines, third-party vendors and external teams faced alignment issues, resulting in inconsistent implementation.',
            highlights: ['Without clear documentation', 'alignment issues'],
          },
        ]}
        subtitleColor={'moe'}
      />

      <Ideation
        title="Ideation"
        subtitle="Process Painpoints"
        description="As a team, we identified key challenges that hindered productivity, consistency, and efficiency, particularly under tight deadlines. Developers struggled with unclear workflows, while designers frequently had to correct vendor-delivered work without clear standards or documentation to guide them. These inefficiencies created a cycle of rework and inconsistency, making it difficult to deliver cohesive, high-quality results in a fast-paced environment."
        points={[
          {
            title: 'Developers',
            description:
              'Developers needed quick access to materials and resources, but without centralised documentation, they wasted valuable time navigating outdated or fragmented tools.',
          },
          {
            title: 'Designers',
            description:
              'Designers frequently corrected vendor-produced work and other in-house designers work, relying on intuition rather than clear guidelines. This led to inconsistencies and additional effort across projects.',
          },
        ]}
        titleColor="moe"
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Goals & Strategy"
        title="Principles"
        description="These principles were established to tackle the challenges of working on a fast-paced, large-scale design system, ensuring that teams can collaborate effectively, streamline workflows, and build with confidence. By prioritising consistency, scalability, and user-centric efficiency, the system enables both designers and developers to work faster and more reliably while maintaining a flexible foundation for future growth."
        principles={[
          {
            number: 1,
            title: 'Consistency with Flexibility',
            description:
              'Predictable yet adaptable – Consistency is the backbone of any design system, ensuring that visual and interaction patterns remain cohesive across all platforms. At the same time, flexibility allows teams to tailor solutions to unique project needs without compromising on usability or design integrity.',
          },
          {
            number: 2,
            title: 'Scalability & Adaptability',
            description:
              'The system is designed to grow with the organisation, supporting new features, technologies, and tools without requiring a complete overhaul. Modular components and reusable patterns ensure long-term sustainability, enabling teams to adapt without breaking the system.',
          },
          {
            number: 3,
            title: 'User-centric Efficiency',
            description:
              'A well-structured design system reduces friction, enabling teams to work faster and focus on innovation instead of reinventing components. Streamlined handoffs between designers and developers minimise redundancies, ensuring teams have the resources and guidelines needed to deliver exceptional user experiences.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'moe'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Design Systems in the Wild"
        description="To inform the development of our design system, I conducted secondary research into existing systems, particularly those used in NZ/AUS government sectors. While these provided valuable insights into components, patterns, and best practices, they didn’t fully align with our brand guidelines or specific use cases. Recognising this gap, I ensured primary users were actively involved throughout the process. Through regular discussions, progress updates, and workshops, the team:"
        bulletPoints={[
          'Analysed existing components and patterns, assessing their relevance to our needs.',
          'Evaluated alignment with our design strategy, identifying areas for adaptation.',
          'Provided feedback on risks and benefits, ensuring the system remained practical, scalable, and user-driven.',
        ]}
        image={{
          src: '/images/process/moe-designsystem/moe-design-system-competitors.webp',
          alt: 'Analysis of design systems',
        }}
        subtitleColor="moe"
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="Sitemap"
        description="The sitemap provides a clear, structured overview of the design system website, ensuring easy navigation and accessibility for all users. It includes key sections such as component libraries, patterns, and documentation, allowing designers, developers, and stakeholders to quickly find the resources they need while maintaining consistency across projects. To improve alignment across teams, a dedicated Case Studies section highlights real-world implementations of the design system. This ensures that third-party vendors and external teams reference up-to-date, best-practice examples, rather than relying on legacy products with outdated design patterns. By reducing misalignment and guesswork, this section helps streamline onboarding, minimise rework, and improve adoption across distributed teams.

"
        images={[
          {
            path: '/images/process/moe-designsystem/moe-design-system-sitemap.webp',
            tabName: 'Beginner Userflow',
            caption: `The design system website sitemap visually maps out the site's structure, detailing how components, patterns, and documentation are organised for seamless navigation and usability.`,
          },
        ]}
        overheadTitleColor={'moe'}
      />
      <WireframesSection
        subtitle="Refinement"
        title="Wireframes"
        description="I designed the wireframes to establish a clear, scalable structure for the design system website, making it easy for designers, developers, and stakeholders to find and apply the right resources. Building on team research and process insights, I structured the site around component libraries, patterns, and documentation, ensuring intuitive navigation and reducing friction in adoption. Working closely with the team, I refined layouts through iterative feedback sessions, aligning the system with usability, accessibility, and workflow efficiency. The wireframes played a key role in shaping the site’s structure, ensuring it was scalable, easy to maintain, and adaptable to evolving needs. This collaborative approach helped create a solid foundation that improved both team efficiency and long-term system adoption."
        image={{
          src: '/images/process/moe-designsystem/moe-design-system-wireframes.webp',
          alt: 'Wireframes of Design system site',
        }}
        subtitleColor={'moe'}
      />
      <TwoRowsImagesSection
        desktopImage={{
          src: '/images/product/moe-ds-desktop-allscreens.webp',
          alt: 'Design System three desktop screens',
        }}
        bottomRowImages={[
          {
            src: '/images/product/moe-ds-mobiles.webp',
            alt: 'Left Mobile Image',
          },
        ]}
        backgroundColor="#90AEFF"
        topBackgroundImage="/images/product/moe-triangles-2.webp"
        bottomBackgroundImage="/images/product/moe-triangles-3.webp"
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Established the Organisations’s First Design System:',
            description:
              'I took the initiative to research, define, and implement the organisation’s first design system, securing buy-in across teams and ensuring adoption at scale.',
          },
          {
            title: 'Improved Team Collaboration:',
            description:
              'I facilitated closer collaboration between designers and engineers, streamlining workflows and reducing inefficiencies in the design-to-development process.',
          },
          {
            title: 'Strengthened Vendor & Stakeholder Engagement:',
            description:
              'By introducing a centralised design reference, I improved communication with stakeholders and third-party vendors, ensuring alignment on design decisions and reducing inconsistencies.',
          },
          {
            title: 'Elevated Design Standards:',
            description:
              'I raised design standards across the organisation, improving consistency, usability, and accessibility across 50+ digital products.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Adoption Is Key - A design system is only effective when teams actively use it — securing buy-in and clear implementation processes is essential.',
          'Process & Criteria Matter - Defining clear contribution guidelines and governance ensures the system remains scalable and maintainable.',
          'Documentation Drives Success - Good documentation is more than just writing things down—structured, accessible documentation helps teams adopt and apply the system correctly.',
          'Scaling a design system requires ongoing iteration — not just initial setup but continuous refinement based on real-world usage.',
        ]}
      />
      <KeyOutcomes
        title="Product Impact & Iterations"
        outcomes={[
          {
            icon: '🚀',
            title: '40% Faster Dev/Design Time',
            description: 'Standardised components reduced redundant work.',
          },
          {
            icon: '📈',
            title: 'Increased Adoption',
            description:
              'Teams actively used the system across 50+ sites, new and existing products.',
          },
          {
            icon: '⏳',
            title: 'Reduced Design Debt',
            description: 'Standardised patterns simplified workflows.',
          },
          {
            icon: '📖',
            title: 'Improved Documentation',
            description:
              'Updated guidance to reflect real-world developer needs.',
          },
        ]}
      />
    </div>
  )
}

export default MOEDesignSystem
