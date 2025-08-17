import AchievementsSection from '../components/casestudy/Achievements'
import BackgroundSection from '../components/casestudy/Background'
import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import OverlappingImagesSection from '../components/casestudy/OverlappingImagesSection'
import TwoRowsImagesSection from '../components/casestudy/TwoRowsImagesSection'

const MOEDesignSystem = () => {
  return (
    <div>
      <Hero
        hook="When the Ministry of Education rushed out a COVID-19 site without a design system, the result was inconsistency, accessibility gaps, and scalability issues. I created the organisation’s first design system to bring clarity, efficiency, and WCAG compliance across 50+ products."
        project={{
          id: 1,
          projectTitle: 'Building Consistency and Efficiency Across Teams',
          slug: 'moe-design-system',
          projectSubtitle: 'Ministry of Education Design System',
          overview:
            'After the emergency launch of a critical website during lockdown, it was clear a structured framework was needed to avoid design debt. I led the creation of a scalable design system with reusable components and clear guidelines—driving consistency, accessibility, and efficiency across 50+ platforms.',
          role: 'Senior UI/UX Designer',
          company: 'Ministry of Education (New Zealand)',
          date: '2020 – 2022',
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

      <BackgroundSection
        subtitle="Discovery"
        title="Learning from Home"
        date="Website | 2020 – 2021"
        description="During COVID-19, we launched the Learning from Home site under extreme time pressure. The rushed build exposed major gaps: no design system, inconsistent UI, and accessibility risks. With these pain points fresh, I secured buy-in to create the Ministry’s first design system—partnering with designers, developers, and advisors to lay the foundation for scalable, accessible platforms."
        imageSrc="/images/process/moe-designsystem/moe-learningfromhome.webp"
        imageAlt="Mockup of Learning from Home website"
        subtitleColor={'moe'}
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="What a Crisis Revealed"
        description="Digging into team workflows and project retros, it became clear: without a design system, every project felt like starting from zero. The pain points were loud and consistent."
        variant="threeColumns"
        subtitleColor="moe"
        threeColumnData={[
          {
            title: 'Reinventing UI, Again and Again',
            description:
              'Designers and devs rebuilt the same buttons and forms across 50+ sites—burning time and creating visual drift.',
          },
          {
            title: 'Fragmented UX & Accessibility Gaps',
            description:
              'Inconsistent patterns left users guessing, while WCAG compliance slipped without shared rules.',
          },
          {
            title: 'Scaling Pains & Vendor Drift',
            description:
              'New projects slowed to a crawl, and external vendors delivered off-brand work without clear documentation.',
          },
        ]}
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
              'Led research, definition, and implementation of the first-ever design system, securing buy-in and adoption across teams at scale.',
          },
          {
            title: 'Elevated Accessibility Standards',
            description:
              'Embedded WCAG compliance into the system, reducing risk and ensuring more inclusive digital services.',
          },
          {
            title: 'Enhanced Cross-Team Collaboration',
            description:
              'Streamlined workflows between designers and engineers, cutting friction in design-to-dev handoff.',
          },
          {
            title: 'Raised Design Standards Across 50+ Products',
            description:
              'Brought consistency and scalability to an ecosystem of websites, shaping long-term digital strategy.',
          },
        ]}
      />

      {/* Key Outcomes Section */}
      <KeyOutcomes
        title="Product Impact"
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
          {
            icon: '🎨',
            title: 'Consistent User Experience',
            description:
              'Unified visual language reduced usability issues and boosted trust in digital platforms.',
          },
          {
            icon: '🤝',
            title: 'Better Vendor Alignment',
            description:
              'Clear standards made it easier for external teams to deliver consistent work.',
          },
        ]}
      />
    </div>
  )
}

export default MOEDesignSystem
