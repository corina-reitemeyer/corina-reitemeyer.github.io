import AchievementsSection from '../components/casestudy/Achievements'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import DualLaptopsSection from '../components/casestudy/DualLaptopSection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import OpportunitySpace from '../components/casestudy/OpportunitySpace'
import SimpleTextSection from '../components/casestudy/SimpleTextSection'
import TwoRowsImagesSection from '../components/casestudy/TwoRowsImagesSection'
import VisualDesignSection from '../components/casestudy/VisualDesignSection'

const MOENceaWebsite = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        hook="Navigating NCEA changes shouldn’t feel like a maze. Teachers need a platform where updates, assessment standards, and resources are clear and accessible—so they can focus on teaching, not searching."
        project={{
          id: 1,
          projectTitle: 'Resources and Guidance for NCEA Standards',
          slug: 'moe-ncea-website',
          projectSubtitle: 'NCEA Education Website',
          overview:
            'I co-led the UX design for the NCEA Website, working with educators, policy teams, and developers from discovery to delivery. Through workshops, I shaped the content strategy and helped build the platform from the ground up. My focus: creating a clear, accessible, and user-friendly site that simplified navigation and made curriculum updates easier to implement.',
          role: 'UI/UX Designer',
          company: 'Ministry of Education',
          date: '2019 - 2021',
          projectImage: '/images/portfolio/moe-ncea-cover.webp',
          headerImage: '/images/banner-images/moe-ncea.webp',
        }}
      />

      {/* Dual Laptop Section */}
      <DualLaptopsSection
        laptopsImage="/images/product/moe-ncea-duallaptop.webp"
        backgroundColor="#90AEFF"
        backgroundImage="/images/product/moe-ncea-triangles-1.webp"
      />

      <SimpleTextSection text="The NCEA Website was part of the 2019 NCEA Change Programme—digitising resources and improving access to updated standards. Before this, teachers had to juggle fragmented systems to find criteria, new subjects, and supporting material. The website became the Ministry’s single source of truth: a scalable, accessible platform where teachers could find, understand, and act on updates quickly." />

      <DiscoverySection
        subtitle="Discovery"
        title="Research under constraints"
        description="Due to constraints, research couldn't be done directly with teachers, so we triangulated: advisor workshops, focus groups with teachers, analytics, and competitor reviews. The signal was clear—clarity and scale, not more content."
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'How teachers got stuck',
            description:
              'Analytics showed dead-ends and long paths to standards—too many clicks, unclear labels.',
          },
          {
            title: 'What they needed',
            description:
              'A central source of truth with transparent updates and real-world examples they can apply.',
          },
          {
            title: 'What the org needed',
            description:
              'Staff tools and workflows to publish at scale; vendors needed clear guidelines to stay aligned.',
          },
        ]}
      />

      <OpportunitySpace
        subtitle="Opportunity"
        title="Defining Success"
        subtitleColor="moe"
        description="We set clear KPIs from the start—then refined them as the 3-year programme evolved. This kept the website relevant, measurable, and responsive to teacher needs."
        kpis={[
          {
            value: '60%',
            description:
              'Teachers downloaded or interacted with at least one resource on their first visit.',
          },
          {
            value: '70%',
            description:
              'Reported that resources were clear and easy to navigate.',
          },
          {
            value: '30%',
            description:
              'Increase in repeat visits within the first 6–12 months.',
          },
        ]}
      />

      {/* VisualDesign Section */}
      <VisualDesignSection
        subtitle="Refinement"
        title="Visual Design"
        description="I partnered with the branding team to keep visuals on-brand while adapting to the project’s unique needs. Colors and imagery were refined to support usability, accessibility, and function—helping teachers navigate complex curriculum changes with ease."
        descriptionSecond="A key focus was reflecting both the New Zealand English curriculum and Te Mātauranga o Aotearoa. Working with cultural advisors and content teams, we used typography, color, and imagery that balanced cultural integrity, readability, and inclusivity—ensuring the site worked for all educators."
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
        title="Key Achievements"
        achievements={[
          {
            title: 'Aligned Stakeholders',
            description:
              'Facilitated collaboration between content, branding, and policy teams—shaping decisions and ensuring UX and content strategy worked hand in hand.',
          },
          {
            title: 'Improved Workflow',
            description:
              'Turned asynchronous content and design challenges into a more agile process—streamlining iterations and boosting team efficiency.',
          },
          {
            title: 'Enhanced Teacher Experience',
            description:
              'Designed a cohesive, intuitive platform that helped teachers quickly find resources and adapt to curriculum changes with less friction.',
          },
          {
            title: 'Stepped Into Leadership',
            description:
              'Co-facilitated workshops and guided content structure—expanding beyond UX into strategy, accessibility, and business alignment.',
          },
        ]}
      />

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            icon: '📚',
            title: 'Simplified Navigation',
            description:
              '70% of teachers reported easier access to resources after content was centralised into one platform.',
          },
          {
            icon: '📈',
            title: 'Higher Engagement',
            description:
              'Repeat visits increased within the first 6 months as teachers returned for updates and materials.',
          },
          {
            icon: '🔄',
            title: 'Content Iterations',
            description:
              'Feedback loops refined the structure—making resources more practical for real classroom use.',
          },
        ]}
      />
    </div>
  )
}

export default MOENceaWebsite
