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
        hook="What happens when a government website is built in record time during a crisis—without a design system? Inconsistencies, accessibility issues, and scalability challenges quickly follow. That’s exactly what happened during the COVID-19 lockdown. I stepped in to create a structured, scalable design system that brought clarity, efficiency, and accessibility to the Ministry of Education’s digital platforms."
        project={{
          id: 1,
          projectTitle: 'Building Consistency and Efficiency Across Teams',
          slug: 'moe-design-system',
          projectSubtitle: 'Ministry of Education Design System',
          overview:
            'The Ministry of Education Design System was developed to establish consistency, accessibility, and efficiency across digital platforms. After the rapid launch of a critical website during the lockdown, it became clear that a more structured framework was needed to support future development. The solution: a comprehensive design system with a robust component library and detailed design guidelines—ensuring uniformity while adhering to accessibility and usability standards.',
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
        description="How do you build a government website under extreme time pressure — without sacrificing usability? During the COVID-19 pandemic, my team launched the Learning from Home website as part of an emergency response. Tight deadlines exposed critical challenges—most notably, the lack of a cohesive design system and streamlined workflows. Recognising these gaps, I initiated the Design System project, working closely with designers, developers, and web advisors to create a scalable framework. This system improved consistency, accessibility, and efficiency — ensuring future projects had the right tools from the start."
        imageSrc="/images/process/moe-designsystem/moe-learningfromhome.webp"
        imageAlt="Mockup of Learning from Home website"
        subtitleColor={'moe'}
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="Understanding User Needs"
        description="To build a design system that truly supported teams, I collaborated with key stakeholders through interviews, project retrospectives, and vendor feedback analysis. These discussions revealed critical workflow, collaboration, and implementation challenges that impacted efficiency and consistency across projects. By co-designing solutions with the team, we ensured the system addressed both internal and external needs—streamlining processes and improving alignment across teams.

"
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Team Interviews',
            description:
              'I worked closely with designers, developers, and content strategists to uncover workflow challenges and role-specific pain points.',
          },
          {
            title: 'Project Retro',
            description:
              'We analysed lessons learned from building the Learning from Home website, identifying scalability and efficiency gaps.',
          },
          {
            title: 'Vendor Feedback',
            description:
              'By reviewing insights from third-party designers and developers, we addressed collaboration and implementation challenges, ensuring external teams could seamlessly align with the new system.',
          },
        ]}
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Who needs the Design System?"
        description="A design system is only as effective as the teams using it. So, who were we designing for? To support 50+ websites and a growing ecosystem, the design system needed to streamline workflows, reduce inefficiencies, and empower teams to work smarter. By collaborating with designers, developers, and web advisors, I built a system with the team that made their work faster, more consistent, and more accessible—allowing them to focus on what mattered most."
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
        title="Insights: What’s Slowing the Team Down?"
        description="Without a structured system, every new project felt like starting from scratch. Through team-wide collaboration, we uncovered critical roadblocks that slowed teams down, led to inconsistencies, and hurt the user experience across the Ministry’s digital platforms. Designers, developers, and leadership agreed—a lack of a scalable, structured design system was creating friction at every stage. To understand the full impact, we gathered research insights on how these challenges affected day-to-day workflows:"
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
        subtitle="Painpoints: Where Work Kept Breaking Down"
        description="Without clear workflows or documentation, teams spent more time fixing mistakes than moving forward. As a team, we pinpointed major challenges that slowed down productivity, introduced inconsistencies, and made scaling difficult—especially under tight deadlines. Developers struggled with unclear workflows, while designers had no standardised way to review or guide vendor work. The result? A cycle of rework and misalignment that made it nearly impossible to deliver cohesive, high-quality results at speed."
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
        title="Guiding Principles: Building for Scale, Speed, and Usability"
        description="A design system is only as strong as the principles guiding it. These core principles were built to address real-world challenges in a fast-paced, large-scale environment—ensuring consistency, scalability, and efficiency. By prioritising adaptability and seamless collaboration, the system empowers teams to work faster, reduce friction, and build with confidence—now and in the future."
        principles={[
          {
            number: 1,
            title: 'Consistency with Flexibility',
            description:
              'Predictable, yet adaptable. Consistency is the backbone of any design system, keeping visual and interaction patterns cohesive. At the same time, flexibility allows teams to tailor solutions to project needs—without compromising usability or design integrity.',
          },
          {
            number: 2,
            title: 'Scalability & Adaptability',
            description:
              'Designed to grow. The system evolves with the organisation, supporting new features and technologies without requiring a complete overhaul. Modular components and reusable patterns ensure long-term sustainability, allowing teams to scale without breaking workflows.',
          },
          {
            number: 3,
            title: 'User-centric Efficiency',
            description:
              'Less friction, more innovation. A structured design system reduces redundancies, speeds up workflows, and enables teams to focus on designing great experiences instead of reinventing components. Streamlined handoffs between designers and developers ensure smoother collaboration and higher-quality outcomes.',
          },
        ]}
        reversedLayout={true} // Switches the layout order
        subtitleColor={'moe'}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        title="Design Systems in the Wild: Learning from Others, Tailoring for Ours"
        description="Great design systems don’t start from scratch—they build on what works and adapt to real needs. To inform our approach, I researched NZ/AUS government design systems, gaining insights into components, patterns, and best practices. While useful, they didn’t fully align with our brand or specific use cases. By combining industry best practices with user-driven insights, I built a system together with the team that was tailored to our needs and workflows. Through discussions, progress updates, and workshops, the team:"
        bulletPoints={[
          'Analysed existing components and patterns – Assessed relevance to our needs and identified what to adopt or adapt.',
          'Evaluated alignment with our design strategy – Pinpointed gaps and areas requiring customisation.',
          'Provided feedback on risks and benefits – Ensured the system remained practical, scalable, and user-driven.',
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
        title="Sitemap: Making the Design System Easy to Use"
        description="Finding the right guidelines shouldn’t feel like searching for a needle in a haystack. The sitemap ensures clear navigation and accessibility, allowing designers, developers, and stakeholders to quickly find key resources like component libraries, patterns, and documentation—without wasted time. To improve alignment and adoption, a dedicated Case Studies section highlights real-world implementations, ensuring third-party vendors and external teams follow best practices instead of outdated patterns. By reducing misalignment and guesswork, this section streamlines onboarding, minimises rework, and accelerates adoption across teams."
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
        title="Wireframes: Designing for Clarity & Scalability"
        description="I designed the wireframes to create a clear, scalable structure for the design system website, ensuring intuitive navigation and seamless adoption for designers, developers, and stakeholders. Building on team research and process insights, I structured the site around component libraries, patterns, and documentation—minimising friction in workflows. Through iterative feedback sessions, I refined layouts to align with usability, accessibility, and workflow efficiency. The result? A scalable, easy-to-maintain framework that supports evolving needs, improves team efficiency, and drives long-term adoption."
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
        title="Key Achievements"
        achievements={[
          {
            title: 'Built the Organisation’s First Design System',
            description:
              'Led the research, definition, and implementation of the first-ever design system, securing buy-in and driving adoption across teams at scale.',
          },
          {
            title: 'Enhanced Cross-Team Collaboration',
            description:
              'Bridged the gap between designers and engineers, streamlining workflows and reducing inefficiencies in the design-to-development process.',
          },
          {
            title: 'Improved Stakeholder & Vendor Alignment',
            description:
              'Introduced a centralised design reference, improving communication with stakeholders and third-party vendors—ensuring consistency and reducing misalignment.',
          },
          {
            title: 'Elevated Design Standards Across 50+ Digital Products',
            description:
              'Raised usability, accessibility, and consistency standards, shaping a more cohesive and scalable design approach across the organisation.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned from the Project"
        lessons={[
          {
            heading: 'Adoption Fuels Success',
            description:
              'A design system is only effective when teams actively use it—securing buy-in and clear implementation processes is essential.',
          },
          {
            heading: 'Governance Keeps It Scalable',
            description:
              'Without clear contribution guidelines and governance, a design system can quickly become unmanageable. Structure ensures long-term maintainability.',
          },
          {
            heading: 'Documentation Enables Adoption',
            description:
              'Good documentation isn’t just about writing things down—it must be structured, accessible, and actionable to help teams apply the system correctly.',
          },
          {
            heading: 'Iteration is Non-Negotiable',
            description:
              'A design system isn’t a one-and-done project. Continuous refinement based on real-world usage keeps it relevant and effective.',
          },
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
