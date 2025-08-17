import DiscoverySection from '../components/casestudy/DiscoverySection'
import Hero from '../components/casestudy/Hero'
import InsightsSection from '../components/casestudy/InsightsSection'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import MobileScreensShowcase from '../components/casestudy/MobileShowCase'
import ThreeScreensSection from '../components/casestudy/ThreeMobile'

const Ritmo = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        hook="Imagine a dance app that remembers your moves better than you do."
        project={{
          id: 1,
          projectTitle:
            'A personal library and progress tracker for Latin dancers',
          slug: 'ritmo',
          projectSubtitle: 'Ritmo - Latin Dance Move Library',
          overview:
            'Created for dancers to keep learning beyond class. Ritmo blends a clean move library, descriptive search, and role-specific guidance.',
          objectiveGoals: [
            'Create an intuitive, easy-to-use interface that encourages dancers to stay engaged and motivated.',
            'Develop a structured dance move library, breaking down steps clearly for different skill levels.',
            'Streamline navigation and search, allowing users to quickly find and review moves when they need them.',
            'Integrate dancer feedback to refine and enhance the experience based on real-world usage.',
            'Ensure inclusive instructions for both lead and follow dancers, making learning accessible for all roles.',
          ],
          role: 'UI/UX Designer & Full Stack Web Developer',
          company: 'Personal Project',
          date: 'July 2024 - present',
          projectImage: '/images/portfolio/ritmo-cover.webp',
          headerImage: '/images/banner-images/ritmo-banner.webp',
          githubLink:
            'https://github.com/corina-reitemeyer/ritmo-dance-library',
        }}
      />

      {/* Three Mobile Showcase */}
      <ThreeScreensSection
        screensImage="/images/product/ritmo-threemobiles.webp"
        backgroundImage="/images/product/ritmo-circle.webp"
      />

      {/* Discovery Section */}
      <DiscoverySection
        subtitle="Discovery"
        title="Interviews & Observations"
        description="How do you practice when you can’t remember the name of the move?

During dance practicas and socials, I noticed a common challenge: leads often struggle to recall and recreate specific moves. Instead of using official names, they typically describe moves based on a distinctive feature, making it harder to search for them later.

Adding to this challenge, most Latin dance moves are named in Spanish, which can be a barrier for New Zealand-based students—even when they remember the correct name. This limits self-learning outside of class and makes online searchability difficult.

To dig deeper, I conducted interviews with students and teachers across different skill levels and backgrounds. These conversations helped uncover common pain points and patterns, shaping Ritmo’s approach to organising and labeling dance moves for better recall and accessibility.

"
        variant="tabbed"
        subtitleColor="ritmo"
      />

      {/* Insights Section */}
      <InsightsSection
        subtitle="Discovery"
        title="What is holding the dance students back?"
        description="Learning doesn’t stop when class ends, but without the right tools, progress stalls. Through in-depth interviews with students, teachers, and social dancers, I uncovered key barriers that make it difficult for them to improve outside of class. Students struggle to track progress and reference moves, as there’s no structured way to log their practice. Teachers rely on fragmented resources, making lesson planning and knowledge-sharing inefficient. Social dancers lack ways to stay engaged with the community, making it harder to stay connected and keep improving without regular classes. These insights shaped Ritmo’s design, ensuring it delivers practical, user-focused solutions that empower every dancer’s journey."
        insights={[
          {
            id: 1,
            title: 'Insight #1',
            description:
              'Students and teachers I spoke with consistently expressed the need for a reliable "source of truth" they could reference when needed.',
            highlights: ['reliable "source of truth"'],
          },
          {
            id: 2,
            title: 'Insight #2',
            description:
              'Students at different experience levels require varying degrees of detail when learning moves.',
            highlights: ['varying degrees of detail'],
          },
          {
            id: 3,
            title: 'Insight #3',
            description:
              'Instructors emphasised the value of a tool that helps them plan their curriculum and review notes on explaining techniques.',
            highlights: ['plan their curriculum'],
          },
          {
            id: 4,
            title: 'Insight #4',
            description:
              'Despite years of experience, newer teachers often struggle to articulate movements and techniques they perform instinctively through muscle memory.',
            highlights: ['articulate movements', 'techniques'],
          },
          {
            id: 5,
            title: 'Insight #5',
            description:
              'There is a need for cohesive, organised resources due to inconsistent naming conventions, where the same move can have different names depending on where it was learned.',
            highlights: ['cohesive, organised resources'],
          },
          {
            id: 6,
            title: 'Insight #6',
            description:
              'Many moves are named in Spanish, making it difficult for non-Spanish speakers to accurately hear, remember, and search for them online.',
            highlights: [
              'accurately hear',
              'remember',
              'search for them online',
            ],
          },
        ]}
        subtitleColor={'ritmo'}
      />

      {/* Mobile Screens Showcase */}
      <MobileScreensShowcase
        image={{
          src: '/images/process/ritmo/ritmo-showcase.webp',
          alt: 'Showcase of mobile screens',
        }}
        backgroundImage="/images/product/ritmo-circle.webp"
      />

      <KeyOutcomes
        title="Expected Product Impact & Iterations"
        outcomes={[
          {
            icon: '🔍',
            title: 'Improved Searchability',
            description:
              'Enable dancers to find moves easily, even if they don’t know the exact name.',
          },
          {
            icon: '📈',
            title: 'Increased Engagement',
            description:
              'Encourage regular practice with personalised tracking and structured lessons.',
          },
          {
            icon: '🎥',
            title: 'Enhanced Learning Experience',
            description:
              'Provide clear video tutorials and instructions for both leads and followers.',
          },
          {
            icon: '🔄',
            title: 'Iterative Refinements',
            description:
              'Continuously test and adapt the UX based on dancer feedback and usage data.',
          },
        ]}
      />
    </div>
  )
}

export default Ritmo
