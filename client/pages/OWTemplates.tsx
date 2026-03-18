import AchievementsSection from '../components/casestudy/Achievements'
import ChallengeSection from '../components/casestudy/Challenge'
import ApproachSection from '../components/casestudy/ApproachSection'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import Takeaways from '../components/casestudy/Takeaways'

export default function OWTemplates() {
  return (
    <>
      {/* 1. Hero */}
      <CaseStudyNavy
        intro="A feature built to speed up research setup. It ended up revealing how users actually thought about their work."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/product/optimal-case-study-hero.webp"
        imageAlt="Optimal Workshop templates feature hero"
        overview="Optimal Workshop is a B2B SaaS platform used by UX researchers to run studies — card sorting, tree testing, and information architecture testing. When I joined, the company was shifting strategy to focus more intentionally on the information architecture segment — a high-value area where the product had strong capabilities but hadn't fully capitalised on them. That shift was backed by ongoing and recently completed research. The templates feature was the first project to put that strategy into practice — and it came with a churn problem to solve at the same time: users were completing one study and leaving before they'd seen what the product could really do."
        involvement="Led the design of the templates feature from concept to delivery across two iterations, collaborating closely with researchers, product managers, and engineers."
        meta={[
          { label: 'Domain', value: 'SaaS (B2B)' },
          { label: 'Year', value: '2023' },
          { label: 'My Role', value: 'Product Designer' },
          { label: 'Team', value: 'PM, IA Lead, Engineers, UX Researchers' },
        ]}
      />

      {/* 2. Final designs */}
      <ImageStrip
        images={[
          {
            id: 'ow-desktop-1',
            src: '/images/product/ow-desktop-1.webp',
            alt: 'Two laptops showing the template library and overview modal',
            caption:
              'Template library and overview modal — the entry point for starting a research study.',
          },
          {
            id: 'ow-desktop-2',
            src: '/images/product/ow-desktop-2.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'Template library accessed from core workflows, with study details for added context.',
          },
          {
            id: 'ow-template-types',
            src: '/images/product/ow-template-types.webp',
            alt: 'Six templates with their study types',
            caption:
              'First iteration — six multi-study templates supporting IA-focused research.',
          },
        ]}
      />

      {/* 3. Challenge */}
      <ChallengeSection
        challenges={[
          {
            id: 'challenge-churn',
            heading:
              "Users were leaving before they saw the product's real value",
            body: [
              'Most users ran a single study and left. The product supported far more than that — card sorting, tree testing, IA testing, multi-method combinations — but the complexity of getting started meant most users never explored beyond their first study.',
              {
                text: "The churn problem wasn't about the product being bad. It was about users not having a clear path to the value that would make them stay.",
                bold: true,
              },
            ],
          },
          {
            id: 'challenge-setup',
            heading: 'Setting up research was slower than it needed to be',
            body: [
              'Even experienced researchers spent time on configuration that added no value to their work. For less experienced users, the setup process was a barrier that stopped them from getting started at all.',
              {
                text: 'The feature had to reduce friction for beginners without feeling prescriptive to experts — two very different needs that had to be served by the same solution.',
                bold: true,
              },
            ],
          },
          {
            id: 'challenge-ia',
            heading: 'IA testing was underused despite being a core capability',
            body: [
              "Information architecture testing was one of the product's strongest capabilities — but most users didn't know it existed or how to use it effectively.",
              {
                text: 'The new IA strategy needed a concrete expression in the product. Templates were the opportunity to surface that capability and shift user behaviour — without requiring users to already know what they were looking for.',
                bold: true,
              },
            ],
          },
        ]}
      />

      {/* 4. Approach */}
      <ApproachSection
        items={[
          {
            id: 'approach-experiment',
            heading: 'Treating v1 as an experiment, not a finished product',
            body: [
              'The templates concept originated from the IA Lead and PM in my squad — a hypothesis responding to both the churn problem and the new IA strategy. My role was to take that idea and make it real. Before opening Figma, I drew on existing research initiatives — the IA strategy work and the Voice of Customer research — to understand what users actually needed from a templates feature.',
              'I also audited competitor products and platforms researchers and designers commonly used — productivity tools, research platforms — to understand established template conventions and what users would likely expect. The deliberate constraint of starting with six templates meant we could learn from real use before scaling rather than building a full library nobody had validated.',
            ],
            image: {
              id: 'ow-wireframes',
              src: '/images/process/ow-wireframes.webp',
              alt: 'Two laptops showing the create study modal and details tab',
              caption:
                'First release — six templates designed with scalability in mind.',
            },
          },
          {
            id: 'approach-userflow',
            heading: 'Mapping where templates fit in the workflow',
            body: [
              "A key design decision was where in the product templates should live. Too buried and they'd be missed. Too prominent and they'd feel like a forced starting point rather than a useful option.",
              "I mapped all the entry points where a user might want to start from a template and designed access points that fit naturally into existing workflows. The goal was for templates to feel like they'd always been there — not like a new feature bolted on.",
            ],
            image: {
              id: 'ow-userflow',
              src: '/images/process/ow-userflow.webp',
              alt: 'Interaction map showing how a user can access and use templates inside the product',
              caption:
                'Interaction map — showing how users access and use templates across the product.',
            },
          },
          {
            id: 'approach-details-page',
            heading: 'One page added on instinct',
            body: [
              "I realised that the product wasn't deeply designed for collaboration. Context, decisions, and changes often got lost unless teams had a separate system in place to track them. I noticed this gap in usage patterns and added a details page that let users document the purpose of their study directly inside the product — it wasn't in the original brief.",
              'The data it generated gave the team a window into how users actually thought about their research — what they were trying to learn, whether they were choosing the right tools, and what templates were missing. That fed directly into leadership conversations about product direction.',
            ],
          },
          {
            id: 'approach-iteration',
            heading: 'Learning from real use',
            body: [
              'Post-launch, I worked closely with a researcher to observe how the first six templates were used in real workflows. The churn signal was positive — users were staying longer. But template uptake itself was lower than expected.',
              "I ran user interviews and click-testing with a small controlled group to understand why. The finding was specific: users wanted to customise templates but couldn't — so they were starting from a template and then duplicating it to tailor it to their needs. A workaround that worked, but signalled a clear gap. That became the primary input for the second iteration.",
            ],
            image: {
              id: 'ow-fulllibrary',
              src: '/images/process/ow-fulllibrary-future.webp',
              alt: 'Two screens showing iterations of a full page library design',
              caption:
                'Explorations — concepts for future template evolution informed by user behaviour.',
            },
          },
        ]}
      />

      {/* 5. Constraints & Trade-offs */}
      <AchievementsSection
        title="Constraints & Trade-offs"
        achievements={[
          {
            id: 'constraint-churn',
            title: 'Designing against an unproven hypothesis',
            description:
              'The hypothesis — that combining studies would keep users engaged for longer — was unproven at the start. The design had to make the value of combining methods feel obvious without being prescriptive about how researchers should work.',
          },
          {
            id: 'constraint-rigid-vs-flexible',
            title: 'Balancing guidance with flexibility',
            description:
              'Templates that were too rigid would frustrate experienced researchers. Too much flexibility would fail beginners. The solution had to work as a starting point for both — without compromising either.',
          },
          {
            id: 'constraint-beginners',
            title: 'V1 underserved complete beginners',
            description:
              'The first release prioritised proving value quickly over comprehensive guidance. After testing with customers, it was clear that users with the least experience had less support than they needed. That gap became one of the clearest inputs into the second iteration.',
          },
          {
            id: 'constraint-collaboration',
            title: "The details page wasn't in the brief",
            description:
              "Adding the details page required making the case for something that wasn't scoped or planned. In a team with an experimental culture, that was possible — but it still needed a clear rationale grounded in observed behaviour rather than intuition alone.",
          },
          {
            id: 'constraint-customisation',
            title: 'Low template uptake despite positive churn signal',
            description:
              "The feature reduced churn as intended — but template uptake was lower than expected. User interviews and click-testing revealed the reason: users wanted to customise templates but couldn't, so they were duplicating them as a workaround. A clear usability gap that only became visible after launch.",
          },
        ]}
      />

      {/* 6. Product Outcomes */}
      <KeyOutcomes
        title="Product Outcomes"
        outcomes={[
          {
            id: 'faster-setup',
            iconSrc: '/icons/Bolt.svg',
            iconAlt: 'Bolt',
            iconEmoji: '⚡',
            title: 'Faster Study Setup',
            description:
              'Teams reported faster configuration after launch — estimated at around 10% reduction in setup time, letting researchers focus on insights rather than admin.',
          },
          {
            id: 'multi-study',
            iconSrc: '/icons/puzzle.svg',
            iconAlt: 'Puzzle',
            iconEmoji: '🔗',
            title: 'More Teams Combining Methods',
            description:
              'Researchers who had previously run single studies started combining methods, generating stronger and more connected insights from their work.',
          },
          {
            id: 'barrier-to-entry',
            iconSrc: '/icons/check.svg',
            iconAlt: 'Check',
            iconEmoji: '✅',
            title: 'Lower Barrier for New Researchers',
            description:
              'Ready-made templates reduced the intimidation of getting started, making the product more accessible to researchers with less experience without slowing down experts.',
          },
          {
            id: 'ia-direction',
            iconSrc: '/icons/compass.svg',
            iconAlt: 'Compass',
            iconEmoji: '🧭',
            title: 'Set the Direction for IA-Focused Features',
            description:
              'The first IA-led templates surfaced an underused capability, nudging the product toward a stronger and more intentional focus on information architecture.',
          },
          {
            id: 'retention',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase Graph',
            iconEmoji: '📈',
            title: 'Churn Reduced, Learnings Surfaced',
            description:
              'Retention improved in the period following launch. Template uptake was lower than expected — but that gap led directly to a specific, actionable finding that shaped the next iteration.',
          },
        ]}
      />

      {/* 7. Takeaways */}
      <Takeaways
        paragraphs={[
          'This project sharpened how I think about scaffolding. Just enough structure builds confidence without removing agency — getting that balance right required watching real people use the feature after launch, not just testing assumptions before it shipped.',
          "The details page was the biggest personal lesson. The primary purpose was practical — preserving the intent of a template when it was applied to a study. But I knew it would also generate useful signal about how users thought about their research. It did both. Acting on that instinct, grounded in something observable rather than just intuition, is a habit I've carried forward.",
          'The churn signal was positive but template uptake was low. That gap — found through user interviews after launch — was more valuable than a clean success story. It gave the team a specific direction for the next iteration. Sometimes the most useful thing a v1 can do is surface what v2 needs to solve.',
        ]}
      />
    </>
  )
}
