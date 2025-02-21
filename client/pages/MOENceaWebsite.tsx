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
        hook="Navigating NCEA changes shouldn’t be complicated. Teachers need a platform that makes key updates, assessment standards, and learning resources easy to find and understand. The goal? To create a seamless, accessible experience that puts clarity first."
        project={{
          id: 1,
          projectTitle:
            'Resources and Guidance for the NCEA Assessment Standards',
          slug: 'moe-ncea-website',
          projectSubtitle: 'NCEA Education Website',
          overview:
            'I co-led the UX design for the NCEA Website project, collaborating closely with educators, policy teams, and developers from discovery to delivery. Through workshops with the business unit, I helped shape the content strategy and built the platform from the ground up. My focus was on designing a clear, accessible, and user-friendly platform—one that simplified navigation and improved access to crucial assessment standards, subject materials, and real-time updates.',
          objectiveGoals: [
            'Inform & Educate – Ensure the platform delivers clear, accessible, and up-to-date information on NCEA changes—including timelines, resources, and key updates for teachers, students, and parents.',
            'Engage Stakeholders – Design an interactive experience that fosters feedback and transparency, making educators and the wider community feel actively involved in the transition process.',
            'Streamline Access to Resources – Develop a centralised hub for learning materials, guides, and support tools—tailored for different user groups to simplify the transition to the new NCEA framework.',
            'Ensure Accessibility & Usability – Adhere to WCAG web accessibility standards to create a platform that is fully inclusive and usable by all users, including those with disabilities.',
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
        description="How do you design for teachers when direct research isn’t an option? By observing, listening, and analysing every touchpoint available. Due to business constraints, conducting direct research with teachers was not feasible, as maintaining the business-educator relationship was a priority. To work within these limitations, I leveraged observational research, attending focus groups and workshops led by assessment advisors. While I couldn’t engage directly, these sessions provided firsthand insights into teachers’ needs, concerns, and workflows. By taking a multi-faceted approach, we gathered meaningful insights while respecting business constraints, ensuring the platform was aligned with real teacher needs despite limited direct engagement. To ensure a data-driven approach, my team and I combined multiple research methods to build a deeper understanding of how teachers interacted with assessment resources:"
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Website Analytics',
            description:
              'Uncovered behavioural patterns and areas of friction in resource discovery.',
          },
          {
            title: 'Competitor Analysis',
            description:
              'Evaluated external platforms teachers previously relied on, identifying best practices and improvement areas.',
          },
        ]}
      />

      <SimpleTextSection
        text={
          'The NCEA Website was developed in response to the NCEA Change Programme, launched in 2019 to digitise resources and improve access to updated assessment standards. Previously, teachers had to navigate a fragmented system to find assessment criteria, new subjects, and supporting materials. This initiative aimed to streamline access, creating a single source of truth for NCEA updates. From the outset, it was clear that this website would become the Ministry’s primary communication channel between NCEA teachers and curriculum developers. To support both immediate needs and long-term digital transformation, the platform needed to be structured, accessible, and scalable—ensuring that teachers could easily find, understand, and implement the latest changes.'
        }
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="Discovery"
        title="Primary Users"
        description="Bridging the gap between curriculum development and classroom implementation. The NCEA Change Programme website needed to serve two core user groups — NCEA teachers and Ministry staff, including ex-teachers responsible for developing new resources. My role was to balance the needs of both, ensuring the platform acted as a seamless bridge between policy and practice. By collaborating closely with both groups, I designed a system that streamlined content creation, improved resource distribution, and made curriculum updates easier to adopt in classrooms."
        principles={[
          {
            number: 1,
            title: 'NCEA Teachers',
            description:
              'Needed accessible, structured, and user-friendly resources to efficiently implement curriculum changes. Clear navigation, practical guidance, and intuitive content structure were essential to their success.',
          },
          {
            number: 2,
            title: 'Ministry Staff',
            description:
              'Required tools to develop, update, and manage NCEA-aligned resources while maintaining consistency and accessibility for teachers. The website had to support efficient content workflows without adding complexity.',
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
        description="A new curriculum is only as effective as the system supporting it—but what was getting in the way? Through teacher and staff feedback, validated by the business's ongoing Feedback Programme, as well as insights from workshops and focus groups, we uncovered key challenges affecting both groups. While their needs varied, both required a structured, efficient system to successfully implement NCEA changes. By correlating multiple research sources, we ensured our findings were data-driven, representative, and actionable. This approach allowed us to design a solution tailored to real workflows and pain points, ensuring that both educators and ministry staff had the tools they needed to navigate curriculum updates smoothly and effectively."
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
        description="Success isn’t static—measuring impact meant continuously refining our approach. At the start of the project, we established key performance indicators (KPIs) to measure the website’s success in delivering accessible resources, timely updates, and increased engagement. However, as the NCEA Change Programme evolved over three years, I worked closely with the team to reassess and refine these KPIs, ensuring they aligned with shifting priorities and emerging challenges. By continuously iterating on success metrics, we ensured the website remained effective, relevant, and responsive to the needs of both teachers and Ministry staff."
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
        title="Guiding Principles"
        description="Designing for clarity, accessibility, and adaptability in a dynamic educational landscape. These design principles were critical in tackling the unique challenges of the NCEA Change Programme website. Consistency ensured a cohesive experience, accessibility provided equitable access, and modularity supported long-term scalability and adaptability, making it easier to evolve alongside the changing curriculum."
        principles={[
          {
            number: 1,
            title: 'Consistency',
            description:
              'A unified visual language and structure across all pages and components ensured a seamless, professional experience, reinforcing clarity and trust as users navigated the platform.',
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
              'Developed a flexible, reusable component system that streamlined development while allowing for customisation, enabling the platform to adapt to evolving curriculum updates and user needs.',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="Exploration"
        subtitleColor="moe"
        title="Previous NCEA resources and guidelines"
        description="Before designing a better system, we needed to understand the gaps in the old one. To better understand how teachers accessed NCEA standards and resources, I analyzed existing platforms frequently used by educators. This research revealed critical gaps in discoverability, accessibility, and content structure, directly shaping the approach for a more intuitive and efficient platform tailored to teachers’ needs."
        image={{
          src: '/images/process/moe-ncea/moe-ncea-competitor.webp',
          alt: 'TKI and NZQA are two of the most widely used official websites for NCEA standards prior to the NCEA Education website',
        }}
        bulletPoints={[
          'Navigation Structures – Identified usability challenges that made finding resources difficult.',
          'Content Clarity – Assessed how effectively information was communicated and where improvements were needed.',
          'Engagement Patterns – Examined how teachers interacted with materials to uncover friction points and areas for improvement.',
        ]}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="Exploration"
        title="User Flows"
        description="A well-structured platform means less searching and more learning. I designed the NCEA website sitemap to provide a clear, intuitive structure, ensuring that teachers and Ministry staff could quickly navigate key resources. The information architecture incorporated both the Māori and English curriculums, structuring content to respect and support both languages while maintaining seamless accessibility. To enhance usability, the sitemap prioritised high-impact areas such as curriculum updates, teaching materials, and support tools, reducing friction in content discovery. By structuring content effectively, the website streamlined navigation, improved accessibility, and created a seamless user experience, ensuring educators could easily find the latest resources and guidance."
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
        description="Great design starts with structure—building a foundation that evolves with user needs. The wireframing process for the NCEA Change Programme website was a collaborative and iterative effort, involving multiple designers working together to tackle the complexities of a large-scale platform. Given the scope and evolving nature of the project, content strategy and wireframes were developed in parallel, allowing design and content to shape each other rather than following a strict linear process. This dynamic approach ensured the final product was visually cohesive and content-rich, directly addressing real user needs. By continuously refining layouts, we created a structure that prioritised clarity, accessibility, and seamless navigation, making it easier for educators to find and apply the latest NCEA resources."
        image={{
          src: '/images/process/moe-ncea/ncea-website-wireframes.webp',
          alt: 'Mid-fidelity wireframes of the recent changes and news pages',
        }}
      />
      {/* VisualDesign Section */}
      <VisualDesignSection
        subtitle="Refinement"
        title="Visual Design"
        description="More than aesthetics—designing a platform that informs, includes, and respects cultural identity. The visual design for the NCEA Change Programme website was developed in close collaboration with the in-house branding team to maintain alignment with organisational guidelines. However, the project’s unique requirements meant we frequently adjusted colors and sourced images to ensure the visuals enhanced both content and functionality. While the lead designer oversaw the design process, I contributed by refining the user experience and accessibility of visual elements, ensuring the final product was on-brand, user-friendly, and optimised for educators navigating complex curriculum changes."
        descriptionSecond="A key focus was honoring both the New Zealand English curriculum and Te Mātauranga o Aotearoa curriculum. Our team worked closely with branding specialists, content developers, and cultural advisors to integrate visual elements that reflected the values and structure of each curriculum. This included thoughtful use of typography, color, and imagery to balance cultural integrity, readability, and usability. By embedding these considerations into the design, we created an inclusive experience that respected cultural identity and diverse learning needs, ensuring the website served all educators effectively."
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
        title=" Key Achievements"
        achievements={[
          {
            title: 'Empowering Stakeholder Collaboration',
            description: `Fostered strong relationships with in-house teams, content developers, and branding experts by driving open communication and collaboration. This enabled teams to better understand and adopt design system principles, ensuring long-term alignment and usability.`,
          },
          {
            title: 'Driving Agile Problem-Solving',
            description:
              'Turned challenges—such as asynchronous content and wireframe development—into opportunities for cross-team innovation. By allowing design and content to inform each other, we created a more flexible, iterative workflow that improved efficiency and coherence across teams.',
          },
          {
            title: 'Improving Teacher Experience',
            description:
              'Designed a visually cohesive, intuitive platform that enabled NCEA teachers to quickly access resources and implement curriculum changes with ease. This reduced friction in the transition process, ensuring faster adaptation to new standards.',
          },
          {
            title: 'Expanding My Leadership Role',
            description:
              'While the Lead Designer had primary responsibility, this project gave me early exposure to leadership opportunities. I worked closely with the business unit to help teams articulate their needs and align design solutions with broader objectives. I also co-facilitated content strategy workshops, ensuring that Information Architecture and usability were considered in decision-making. Additionally, I played a key role in structuring and visualising content placement, optimising the website for clarity and accessibility. These experiences allowed me to deepen my strategic thinking and contribute beyond UX design, strengthening my ability to bridge business goals with user needs.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          {
            heading: 'Flexibility Fuels Innovation',
            description:
              'The asynchronous nature of content and design development reinforced the importance of adaptive workflows, enabling creativity and problem-solving in unexpected ways.',
          },
          {
            heading: 'Collaboration Bridges Standards & User Needs',
            description:
              'Close collaboration with the branding team and lead designer highlighted the value of regular communication to balance organisational standards with project-specific needs, ensuring alignment without sacrificing usability.',
          },
          {
            heading: 'Iterative Feedback Strengthens Outcomes',
            description:
              'Collaborative, multi-stage design iterations created opportunities for continuous refinement, leading to a more polished, effective, and user-centered experience.',
          },
          {
            heading: 'User Validation is Non-Negotiable',
            description:
              'Limited direct user engagement slowed the design process and increased the risk of missing critical insights. This reinforced the need for ongoing user validation to ensure solutions effectively address real-world challenges.',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Impact & Iterations"
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
