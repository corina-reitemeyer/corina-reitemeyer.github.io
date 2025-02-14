import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
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
          projectTitle: 'NCEA Education',
          slug: 'moe-ncea-website',
          projectSubtitle:
            'Resources and Guidance for the NCEA Assessment Standards.',
          overview:
            'I co-led the UX design for the NCEA Website project, working closely with educators, policy teams, and developers from the early discovery phase through to delivery. I was involved in workshops with the business unit, collaborating on content strategy and shaping the platform from the ground up. My focus was on designing a clear, accessible, and user-friendly platform that simplified navigation and improved access to crucial assessment standards, subject materials, and updates.',
          objectiveGoals: [
            'Inform & Educate – Ensure the platform provides clear, accessible, and up-to-date information on NCEA changes, including timelines, resources, and key updates for teachers, students, and parents.',
            'Engage Stakeholders – Design an interactive experience that encourages feedback and transparency, ensuring educators and the wider community feel involved in the transition process.',
            'Streamline Access to Resources – Develop a centralised hub for learning materials, guides, and support tools, tailored for different user groups to ease the transition to the new NCEA framework.',
            'Ensure Accessibility & Usability – Follow WCAG web accessibility standards to ensure the platform is fully usable by all users, including those with disabilities.',
          ],
          role: 'UI/UX Designer',
          company: 'Ministry of Education',
          date: '2019 - 2021',
          projectImage: '/images/portfolio/moe-ncea-cover.webp',
          headerImage: '/images/banner-images/moe-ncea.webp',
        }}
      />

      {/* Dual Laptop Section */}
      <DualLaptopsSection
        laptopsImage="/images/product/moe-ncea-duallaptop.webp" // ✅ One image for both laptops
        backgroundColor="#90AEFF"
        backgroundImage="/images/product/moe-ncea-triangles-1.webp" // ✅ Background separate
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="Teacher workshops and it's challenges"
        description="Due to business constraints, conducting direct research with teachers was not feasible, as maintaining the relationship between the business and educators was a priority. Instead, I worked within these constraints by leveraging observational research—attending focus groups and workshops led by advisors working on the assessment standards. While I wasn’t able to directly engage, these sessions provided valuable insights into teachers’ needs, concerns, and workflows. The team and I used a multi-faceted approach which allowed us to gather meaningful insights while respecting business constraints, ensuring the platform was designed with a data-driven understanding of teachers' needs."
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Website Analytics',
            description:
              'Identifying behavioral patterns and areas of friction in resource discovery.',
          },
          {
            title: 'Competitor Analysis',
            description:
              'Evaluating external platforms teachers previously relied on for assessment materials.',
          },
        ]}
      />

      <SimpleTextSection
        text={
          'The NCEA Website was developed in response to the NCEA Change Programme, which launched in 2019 as part of a wider effort to digitise resources and centralize access to updated assessment standards. This initiative aimed to provide a single point of access for teachers to find new assessment criteria, newly introduced subjects, and supporting materials—simplifying what had previously been a fragmented process. From the start, it was clear that this website would become the Ministry’s primary communication channel between NCEA teachers and public servants responsible for curriculum development. Ensuring the platform was structured, accessible, and scalable was critical to supporting both immediate needs and long-term digital transformation efforts.'
        }
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="The NCEA Change Programme website needed to serve two core user groups—NCEA teachers and Ministry staff, including ex-teachers responsible for creating the new resources. I worked to balance the needs of both, ensuring the platform functioned as a bridge between curriculum development and classroom implementation. By collaborating with both groups, I ensured the platform effectively supported content creation, resource distribution, and ease of use for educators, facilitating a smoother transition to the new framework."
        principles={[
          {
            number: 1,
            title: 'NCEA Teachers',
            description:
              'Teachers needed accessible, user-friendly resources to efficiently implement curriculum changes in their classrooms. Ensuring clear navigation, structured content, and practical guidance was critical to their success.',
          },
          {
            number: 2,
            title: 'Ministry Staff',
            description:
              'Ministry staff required tools to develop, update, and manage resources that aligned with the new NCEA standards. The website needed to support their content workflows while maintaining accessibility and consistency for teachers.',
          },
        ]}
        backgroundColor="#90AEFF"
        subtitleColor="moe"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the teachers and Ministry staff back?"
        subtitleColor="moe"
        description="Through teacher and staff feedback, validated by the business's ongoing Feedback Programme, as well as insights from workshops and focus groups, we identified key challenges affecting both groups. While their needs varied, both required a structured, efficient system to effectively implement NCEA changes. By correlating multiple research sources, we ensured our findings were data-driven, representative, and actionable, allowing us to design a solution that directly addressed the pain points and workflows of educators and ministry staff."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Teachers need a centralised platform with clear and accessible resources to efficiently implement curriculum changes.',
            highlights: [
              'centralised platform',
              'clear and accessible resources',
            ],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Frequent curriculum updates require a more transparent and structured system to keep teachers aligned with evolving standards.',
            highlights: [
              'transparent and structured',
              'system',
              'evolving standards',
            ],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Teachers rely on real-world examples and practical application to effectively integrate new standards into their classrooms.',
            highlights: ['real-world examples', 'practical application'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Ministry staff need streamlined workflows and collaboration tools to efficiently develop, manage, and distribute NCEA resources.',
            highlights: ['streamlined workflows', 'collaboration tools'],
          },
        ]}
      />
      {/* Opportunity Space Section */}
      <OpportunitySpace
        subtitle="Opportunity Space"
        title="Defining the Problem and Opportunities"
        subtitleColor="moe"
        description="TAt the start of the project, we established key performance indicators (KPIs) to measure the website’s success in providing accessible resources, timely updates, and increased engagement. However, as the NCEA Change Programme evolved over three years, I worked with the team to reassess and refine these KPIs, ensuring they aligned with shifting priorities and emerging challenges. By continuously iterating on our success metrics, we ensured that the website remained effective, relevant, and responsive to the needs of both teachers and Ministry staff."
        kpis={[
          {
            value: '60%',
            description:
              'of teachers download or interact with at least one resource within their first visit.',
          },
          {
            value: '70%',
            description:
              'of teachers report that resources are clear and easy to navigate.',
          },
          {
            value: '30%',
            description:
              'increase in repeat visits from teachers and Ministry staff within the first 6–12 months.',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="Goals & Strategy"
        subtitleColor="moe"
        title="Principles"
        description="Built a flexible, reusable component system that streamlined development while allowing for customisation to meet specific user and project needs. These design principles were essential in tackling the unique challenges of the NCEA Change Programme website. Consistency created a cohesive experience as users navigated between resources, while accessibility ensured equitable access for all. Modularity allowed for scalability and adaptability, making it easier to support ongoing curriculum updates and evolving user needs."
        principles={[
          {
            number: 1,
            title: 'Consistency',
            description:
              'Maintaining a unified visual language and structure across all pages and components ensured a seamless, professional user experience, reinforcing clarity and trust.',
          },
          {
            number: 2,
            title: 'Accessibility',
            description:
              'Designed with inclusivity at the core, adhering to WCAG standards to ensure the platform is fully usable for all teachers and staff, including those with disabilities.',
          },
          {
            number: 3,
            title: 'Modularity',
            description:
              'Built a flexible, reusable component system that streamlined development while allowing for customisation to meet specific user and project needs.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="moe"
        title="Previous NCEA resources and guidelines"
        description="To better understand how teachers currently access NCEA standards and resources, I analysed existing platforms frequently used by educators. This research highlighted gaps in discoverability, accessibility, and content structure, shaping the approach for a more intuitive, efficient, and user-friendly platform tailored to teachers' needs. This included:."
        image={{
          src: '/images/process/moe-ncea/moe-ncea-competitor.webp',
          alt: 'TKI and NZQA are two of the most widely used official websites for NCEA standards prior to the NCEA Education website',
        }}
        bulletPoints={[
          'Comparing navigation structures to identify usability challenges.',
          'Reviewing content clarity to assess how effectively resources were communicated.',
          'Examining engagement patterns to understand how teachers interacted with materials.',
        ]}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flows"
        description="I designed the NCEA website sitemap to provide a clear, intuitive structure, ensuring teachers and Ministry staff could easily navigate key resources. The information architecture incorporated both the Māori and English curriculums, organising content to respect and support both languages while maintaining accessibility. To improve usability, the sitemap prioritized key areas such as curriculum updates, teaching materials, and support tools, ensuring that educators could quickly find relevant information. By structuring content effectively, the website reduced friction in content discovery, making it easier for users to access the latest resources and guidance. This structured approach streamlined navigation, improved accessibility, and created a more seamless user experience across the platform."
        images={[
          {
            path: '/images/process/moe-ncea/ncea-sitemap.webp',
            caption:
              'The sitemap includes the Information Architecture for both the NZ Curriculum, Te Marautanga o Aotearoa, and NCEA Change Programme related content.',
            tabName: 'NCEA Website - Sitemap',
          },
        ]}
        overheadTitleColor={'moe'}
      />

      {/* Wireframes Section */}
      <WireframesSection
        subtitle="REFINEMENT"
        subtitleColor="moe"
        title="Wireframes"
        description="TThe wireframing process for the NCEA Change Programme website was a collaborative and iterative effort, involving multiple designers working together to address the complexities of a large-scale platform. Given the scope and evolving nature of the project, the content strategy and wireframes were developed in parallel, rather than following a strict linear process. This dynamic approach allowed design and content to influence each other, ensuring the final product was not only visually cohesive but also content-rich. By continuously refining layouts based on real user needs, we created a structure that supported clarity, accessibility, and seamless navigation, making it easier for educators to find and apply the latest NCEA resources."
        image={{
          src: '/images/process/moe-ncea/ncea-website-wireframes.webp',
          alt: 'Mid-fidelity wireframes of the recent changes and news pages',
        }}
      />
      {/* VisualDesign Section */}
      <VisualDesignSection
        subtitle="Refinement"
        title="Visual Design"
        description="The visual design for the NCEA Change Programme website was developed in close collaboration with the in-house branding team to maintain consistency with organisational guidelines. However, given the unique requirements of the project, we frequently adjusted colors and sourced images ourselves to ensure the visuals effectively supported both content and functionality. The design process was led by the lead designer, while I contributed to refining the user experience and accessibility of visual elements, ensuring the final design was on-brand, user-friendly, and optimised for educators navigating complex curriculum changes."
        descriptionSecond="A key focus of the visual design was ensuring that the platform honored both the New Zealand English curriculum and Te Mātauranga o Aoteraoa curriculum. Our team worked hand in hand with the branding team, content developers, and cultural advisors to integrate visual elements that reflected the values and structure of each curriculum. This included thoughtful use of typography, color, and imagery to maintain cultural integrity while ensuring readability and usability. By embedding these considerations into the design, we created an inclusive experience that respected cultural identity and diverse learning needs, ensuring the website served all educators effectively."
        images={[
          {
            src: '/images/process/moe-ncea/ncea-website-visualdesign-1.webp',
            alt: 'NCEA Mega menus - English and Maori Version',
          },
          {
            src: '/images/process/moe-ncea/moe-ncea-visual-design-2.webp',
            alt: 'Banners with different Brand Colours depending on Subjectmatter',
          },
        ]}
        subtitleColor={'moe'}
      />

      {/* TwoRowsImages Section */}
      <TwoRowsImagesSection
        desktopImage={{
          src: '/images/product/moe-ncea-desktop.webp',
          alt: 'NCEA three desktop screens',
        }}
        backgroundColor="#90AEFF"
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Empowered Stakeholder Engagement',
            description: `Fostered strong relationships with in-house teams, content developers, and branding experts by driving open communication and collaboration. This enabled teams to better understand and utilize design system principles, ensuring long-term alignment and adoption.`,
          },
          {
            title: 'Efficient Problem-Solving',
            description:
              'Adapted to challenges such as asynchronous content and wireframe development, turning them into opportunities for cross-team innovation. By allowing design and content to inform each other, we created a more flexible, iterative workflow that improved efficiency and coherence.',
          },
          {
            title: 'Streamlined Teacher Support',
            description:
              'Designed a visually cohesive, intuitive platform that enabled NCEA teachers to easily navigate resources and implement curriculum changes. This improved their ability to adapt to new standards quickly, reducing friction in the transition process.',
          },
          {
            title: 'Expanding My Leadership Role',
            description:
              'While the Lead Designer had primary responsibility, this project provided me with early exposure to leadership opportunities. I played a key role in supporting the business unit, helping them understand their needs, co-facilitating content strategy workshops, and consulting on Information Architecture. I also helped visualise content placement, ensuring it was structured for clarity and usability within the website.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'Flexibility Drives Innovation – The asynchronous nature of content and design development reinforced the importance of adaptive workflows, allowing for creativity and problem-solving in unexpected ways.',
          'Collaboration Bridges Standards & Needs – Close collaboration with the branding team and lead designer emphasised the value of regular communication to balance organisational standards with project-specific requirements, ensuring alignment without sacrificing usability.',
          'Iterative Feedback Strengthens Outcomes – Engaging in collaborative, multi-stage design iterations created opportunities for continuous refinement, leading to a more polished, effective, and user-centred experience.',
          'Direct Access to Users Is Crucial – Limited direct user engagement slowed down the design process and increased the risk of missing critical insights. This reinforced the importance of user validation at every stage to ensure solutions effectively address real-world challenges.',
        ]}
      />
      <KeyOutcomes
        title="Impact & Iterations"
        outcomes={[
          {
            icon: '📚',
            title: '70% Easier Navigation',
            description:
              'Teachers reported improved access to resources after consolidating all content into one central platform.',
          },
          {
            icon: '📈',
            title: 'Higher Teacher Retention',
            description:
              'Increased repeat visits over the first 6 months as teachers returned for updates.',
          },
          {
            icon: '🔄',
            title: 'Refined Content Strategy',
            description:
              'Adjusted structure based on teacher feedback to better support real-world application.',
          },
          {
            icon: '🛠️',
            title: 'Reduced Support Needs',
            description:
              'Fewer inquiries from teachers due to clearer, more accessible documentation.',
          },
        ]}
      />
    </div>
  )
}

export default MOENceaWebsite
