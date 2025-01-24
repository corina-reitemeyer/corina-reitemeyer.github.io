import AchievementsSection from '../components/casestudy/Achievements'
import CompetitiveAnalysisSection from '../components/casestudy/CompetitiveAnalysis'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
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
            'The NCEA Website project aimed to provide teachers with a centralised platform to access information on new assessment standards, subject materials, and updates on the change programme. The project involved designing a user-friendly interface that simplifies navigation and enhances access to crucial educational resources.',
          objectiveGoals: [
            'Inform and Educate: Provide clear, accessible, and up-to-date information about the NCEA changes, including timelines, resources, and key updates for students, teachers, and parents.',
            'Engage Stakeholders: Create an interactive platform that encourages engagement and feedback from educators, students, and the wider community to ensure transparency and inclusivity.',
            'Streamline Access to Resources: Offer centralised access to learning materials, guides, and support tools tailored for different user groups to ease the transition to the new NCEA framework.',
            'Ensure Accessibility and Usability: Design the website to meet web accessibility standards (e.g., WCAG), ensuring all users, including those with disabilities, can easily navigate and interact with the content.',
          ],
          role: 'UI/UX Designer',
          company: 'Ministry of Education',
          date: '2019 - 2021',
          projectImage: '/images/portfolio/moe-ncea-cover.png',
          headerImage: '/images/banner-images/moe-ncea.png',
        }}
      />

      {/* Dual Laptop Section */}
      <DualLaptopsSection
        backgroundColor="#90AEFF"
        laptops={[
          {
            src: '/images/product/ncea-desktop-left.png',
            alt: 'Screen of Learning tab',
          },
          {
            src: '/images/product/ncea-desktop-right.png',
            alt: 'Screen of Assessment Standard',
          },
        ]}
      />
      {/* Discovery Section */}
      <DiscoverySection
        subtitle="DISCOVERY"
        title="Teacher workshops and it's challenges"
        description="Due to business constraints, conducting direct research with teachers proved challenging, as maintaining the relationship between the business and teachers was a key concern. Instead, we leveraged observational research by attending focus groups and workshops run by advisors working on the assessment standards, where we were permitted to observe but not directly engage. To supplement this, we utilized survey data, website analytics, and competitor analysis of platforms teachers had previously relied on. This multi-faceted approach allowed us to gather insights while respecting the boundaries set by the business."
        variant="tabbed"
        subtitleColor="moe"
      />

      <SimpleTextSection
        text={
          'The NCEA Website was developed in response to the NCEA Change Programme, which kicked off in 2019. This was the first step to digitise and create a single touch point for teachers to access the newly updated assessment standards, newly introduced subjects and materials. It was clear from the get go that this site would form into the Ministries direct communication channel between NCEA teachers and public servants who work on NCEA material.'
        }
      />

      {/* Primary Users Section */}
      <PrimaryUsersSection
        subtitle="DISCOVERY"
        title="Primary Users"
        description="The primary users of the NCEA Change Programme website were a combination of Ministry staff and NCEA teachers. Ministry staff, including ex-teachers, were responsible for creating the new materials and resources, while NCEA teachers needed to incorporate these changes into their classrooms. Balancing the needs of both user groups was critical, as the website needed to serve as a bridge, providing clear, accessible resources and guidance to support the transition effectively."
        principles={[
          {
            number: 1,
            title: 'NCEA Teachers',
            description:
              'Ceachers needed accessible, user-friendly resources to implement curriculum changes effectively in their classrooms.',
          },
          {
            number: 2,
            title: 'Ministry Staff',
            description:
              'Ministry staff required tools to develop, update, and manage resources that align with the new NCEA standards',
          },
        ]}
        backgroundColor="#90AEFF"
        subtitleColor="moe"
        reversedLayout={false}
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="DISCOVERY"
        title="What is holding the teachers and Ministry staff back?"
        subtitleColor="moe"
        description="After feedback from teachers and staff, as well as insights from the workshops and focus groups, we identified key challenges: teachers need clear resources, timely updates, and practical guidance for real-world application, while Ministry staff require efficient tools for developing and distributing consistent resources."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Teachers need clear and accessible resources to understand and implement curriculum changes',
            highlights: ['clear and accessible resources'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Timely updates are essential to keep teachers aligned with evolving standards',
            highlights: ['Timely updates'],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Teachers prefer resources with concrete examples and actionable guidance for real-world application',
            highlights: ['concrete examples and', 'actionable guidance'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Ministry staff require efficient collaboration tools to streamline resource development and distribution',
            highlights: ['efficient collaboration tools'],
          },
        ]}
      />
      {/* Opportunity Space Section */}
      <OpportunitySpace
        subtitle="OPPORTUNITY SPACE"
        title="Defining the Problem and Opportunities"
        subtitleColor="moe"
        description="These initial KPIs were set at the beginning of the project to measure the website's success in providing accessible resources, timely updates, and increased engagement. However, as the NCEA Change Programme evolved over the course of three years, these KPIs were revisited and refined to align with new priorities, address emerging challenges, and ensure the goals remained relevant to the needs of both teachers and Ministry staff."
        kpis={[
          {
            value: '80%',
            description:
              'of teachers download or interact with at least one resource within their first visit to the website',
          },
          {
            value: '70%',
            description:
              'of teachers finding the resources clear and easy to navigate',
          },
          {
            value: '30%',
            description:
              'Increase repeat visits from teachers and Ministry staff within the first 6-12 months',
          },
        ]}
      />

      {/* Principles Section */}
      <PrinciplesSection
        subtitle="GOALS & STRATEGY"
        subtitleColor="moe"
        title="Principles"
        description="These design principles were established to address the unique challenges of the NCEA Change Programme website. Consistency was essential to create a cohesive experience for users navigating between resources, ensuring clarity and trust. Accessibility was prioritized to meet WCAG standards, making the platform inclusive and usable for all teachers and staff, regardless of their abilities. Modularity allowed for the creation of reusable components, streamlining development and enabling flexibility to adapt to evolving user needs and project requirements."
        principles={[
          {
            number: 1,
            title: 'Consistency',
            description:
              'Maintain a unified visual language and structure across all pages and components to ensure a seamless and professional user experience.',
          },
          {
            number: 2,
            title: 'Accessibility',
            description:
              'Design with inclusivity in mind by adhering to WCAG standards, ensuring the platform is usable for all, including those with disabilities.',
          },
          {
            number: 3,
            title: 'Modularity',
            description:
              'Create reusable, flexible components that streamline development while allowing for customisation to meet specific user and project needs',
          },
        ]}
        reversedLayout={true}
      />

      {/* Competitive Analysis Section */}
      <CompetitiveAnalysisSection
        subtitle="EXPLORATION"
        subtitleColor="moe"
        title="Previous NCEA resources and guidelines"
        description="To better understand how teachers currently access NCEA standards and resources, I conducted an analysis of existing websites frequently used by educators. This research highlighted strengths, weaknesses, and gaps in these platforms, providing insights to inform the design of a more user-friendly and efficient system tailored to their needs."
        image={{
          src: '/images/process/moe-ncea/moe-ncea-competitor.png',
          alt: 'TKI and NZQA are two of the most widely used official websites for NCEA standards prior to the NCEA Education website',
        }}
      />

      {/* User Flows Section */}
      <UserFlow
        overheadTitle="EXPLORATION"
        title="User Flows"
        description="The sitemap for the NCEA website was designed to provide a clear and intuitive structure, ensuring teachers, students, and Ministry staff could easily find key resources and information. It incorporated both the Māori and English curriculums, organising content in a way that respected and supported both languages. Critical sections such as curriculum updates, teaching materials, and support tools were prioritised, enhancing usability and accessibility to streamline navigation and improve the overall user experience."
        images={[
          {
            path: '/images/process/moe-ncea/ncea-sitemap.png',
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
        description="The wireframing process for the NCEA Change Programme website was a collaborative and iterative effort, involving multiple designers working together to tackle the complexity of such a large-scale project. Due to the size and scope of the website, the content and wireframe processes often evolved in parallel rather than in a strictly chronological order. This dynamic approach allowed design and content to inspire and inform each other, ensuring the final product was both visually cohesive and content-rich, tailored to meet user needs effectively."
        image={{
          src: '/images/process/moe-ncea/ncea-website-wireframes.png',
          alt: 'Mid-fidelity wireframes of the recent changes and news pages',
        }}
      />
      {/* VisualDesign Section */}
      <VisualDesignSection
        subtitle="REFINEMENT"
        title="Visual Design"
        description="The visual design for the NCEA Change Programme website was developed in close alignment with the in-house branding team to maintain consistency with organizational guidelines. However, we often needed to adjust colors and source images ourselves to meet the unique needs of the project. The design process was led by the lead designer, ensuring that the visuals not only adhered to brand standards but also effectively supported the website’s content and functionality."
        images={[
          {
            src: '/images/process/moe-ncea/ncea-website-visualdesign-1.png',
            alt: 'NCEA Mega menus - English and Maori Version',
          },
          {
            src: '/images/process/moe-ncea/moe-ncea-visual-design-2.png',
            alt: 'Banners with different Brand Colours depending on Subjectmatter',
          },
        ]}
        subtitleColor={'moe'}
      />

      {/* TwoRowsImages Section */}
      <TwoRowsImagesSection
        desktopImage={{
          src: '/images/product/moe-ncea-desktop.png',
          alt: 'Combined desktop images',
        }}
      />

      {/* Achievements Section */}
      <AchievementsSection
        title="Achievements"
        achievements={[
          {
            title: 'Empowered Stakeholder Engagement',
            description: `Built strong relationships with in-house teams by fostering open communication, enabling them to better understand and utilise the design system's potential in their work.`,
          },
          {
            title: 'Efficient Problem-Solving',
            description:
              'Adapted to challenges like asynchronous content and wireframe development, turning them into opportunities for innovation where design and content inspired each other.',
          },
          {
            title: 'Streamlined Teacher Support',
            description:
              'Created a visually cohesive and intuitive platform that helped NCEA teachers easily navigate resources and implement curriculum changes, improving their ability to adapt to new standards.',
          },
          {
            title: 'Shared Project Leadership',
            description:
              'Although the Lead Designer took most of the responsibility at the time (I was a mid-level designer when I started the project), it gave me the first exposure to own more responsibility. I supported the business unit to understand their needs on their end and collaborated in workshops with them when they were going through their content design phase, consulting with Information Architecture and helped visualised how the content can sit in the website.',
          },
        ]}
      />

      {/* Lessons Learned Section */}
      <LessonsLearnedSection
        title="Lessons Learned"
        lessons={[
          'The asynchronous nature of content and design development reinforced the importance of flexibility in workflows, as it allowed for creativity and problem-solving in unexpected ways.',
          'Close collaboration with the branding team and lead designer highlighted the value of regular communication to balance organisational standards with project-specific needs.',
          ' Iterative collaboration across different design stages led to a more refined product, as feedback loops provided opportunities to refine and improve both the visuals and the user experience.',
          'Not having sufficient access to users directly slows down the design process and increased the risk to miss important opportunities to sufficiently solve user problems.',
        ]}
      />
    </div>
  )
}

export default MOENceaWebsite
