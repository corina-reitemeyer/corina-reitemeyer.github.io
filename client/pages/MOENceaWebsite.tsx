import AchievementsSection from '../components/casestudy/Achievements'
import CaseStudyNavy from '../components/casestudy/Hero'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

const MOENceaWebsite = () => {
  return (
    <div>
      {/* Hero Section */}
      <CaseStudyNavy
        intro="Establishing, designing, and documenting digital brand guidelines and a design system…"
        company="Company"
        project="Project"
        imageSrc="/images/case-hero.jpg"
        scope="Microsoft To-Do is the easiest way to get stuff done…"
        involvement="Product design, system architecture, prototyping"
        meta={{ date: '2025', type: 'Product Design', specialisation: 'AI' }}
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
