import { useId } from 'react'
import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'

export default function OWTemplates() {
  const reflectionsId = useId()

  return (
    <>
      <CaseStudyNavy
        intro="A feature built to speed up research setup. It ended up revealing how users actually thought about their work."
        company="Optimal Workshop"
        project="Templates"
        imageSrc="/images/product/optimal-case-study-hero.webp"
        imageAlt="Optimal Workshop templates feature hero"
        scope="The product was experiencing churn. After completing a single study, users were dropping off: not because the product had failed them, but because they hadn't seen enough of its value to stay. The business wanted to find a way to keep researchers engaged for longer and demonstrate what the product could really do. The hypothesis the team had was simple: if users combined studies rather than running one in isolation, they'd get stronger insights and be more likely to stick around. The problem was that most users didn't know combination was possible, and setting up even a single study was slower than it needed to be. I designed the first version of the templates feature to address both problems — reducing setup friction and surfacing the breadth of what the product supported, including IA testing which had been underused despite being a core capability. What the feature became was slightly different to what it was designed to be. A details page — added based on observed collaboration patterns in usage data — turned the feature into an unexpected source of insight about how users thought about their research and whether they were choosing the right tools for the outcomes they wanted."
        involvement="Product Designer — led the design of the templates feature from user testing, concept to delivery, collaborating closely with researchers, product managers, and engineers to validate and evolve the solution across two iterations."
        team="Worked with product managers, engineers, and UX researchers across two phases. The feature originated from a PM and IA lead responding to a churn problem with a hypothesis — my role was to take that idea and design a solution that balanced business intent with real researcher needs. Post-launch, I worked closely with a researcher to observe how the first six templates were used in practice, turning that observation into direct input for the second iteration."
        meta={{
          date: '2023',
          type: 'Product Design, SaaS Product (B2B)',
          specialisation: 'Growth design',
        }}
      />

      <ImageStrip
        images={[
          {
            id: 'ow-desktop-1',
            src: '/images/product/ow-desktop-1.webp',
            alt: 'Two laptops showing the template library and overview modal',
            caption: 'Desktop — template library and overview modal.',
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
              'First iteration: six multi-study templates supporting IA-focused research.',
          },
        ]}
      />

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
              'The first IA-led templates surfaced an underused but high-value capability, nudging the product toward a stronger and more intentional focus on information architecture.',
          },
          {
            id: 'retention',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase Graph',
            iconEmoji: '📈',
            title: 'Contributed to Retention Improvement',
            description:
              'Retention improved in the period following launch, suggesting the feature helped users find enough value to stay beyond their first study.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            id: 'process-experiment',
            subtitle: 'Treating v1 as an experiment, not a finished product',
            body: 'Because this was the first project under a new product strategy, I treated it deliberately as a low-risk experiment. The priority was proving user value with minimal engineering investment — not shipping a complete feature. I designed six ready-made in collaboration with the brand designer and IA specialist, customisable templates that surfaced the range of study types the product supported, including IA testing, and made combining methods feel approachable rather than overwhelming. The focus was on getting something real in front of users quickly so we could learn from actual behaviour rather than assumptions.',
          },
          {
            id: 'process-details-page',
            subtitle: 'One page added on instinct',
            body: 'The product was not deeply designed for collaboration at the time. Context, decisions, and changes often got lost unless teams had a separate system in place to track them. I noticed this gap in usage patterns and added a details page that let users document the purpose of their study directly inside the product. It was not in the original brief. The data it generated gave the team a window into how users thought about their research — what they were trying to learn, whether they were choosing the right tools for their goals, and what types of templates were missing from the product. That information fed directly into leadership conversations about product direction.',
          },
          {
            id: 'process-iteration',
            subtitle: 'What we learned from watching real use',
            body: 'Post-launch, I worked closely with a researcher to observe how the first six templates were used in real workflows. Teams were using templates for inspiration and experimenting with method combinations — which validated the core hypothesis. But gaps were also clear. Complete beginners had less guidance than they needed, and some functionality was missing. Those observations shaped the second iteration directly. The feature evolved from a setup shortcut into something that actively taught researchers what better research could look like.',
          },
        ]}
        images={[
          {
            id: 'ow-userflow',
            src: '/images/process/ow-userflow.webp',
            alt: 'Interaction map showing how a user can access and use templates inside the product',
            caption:
              'Interaction map showing how users access and use templates.',
          },
          {
            id: 'ow-fulllibrary',
            src: '/images/process/ow-fulllibrary-future.webp',
            alt: 'Two screens showing iterations of a full page library design',
            caption:
              'Explorations — blue-sky concepts for future template evolution.',
          },
          {
            id: 'ow-wireframes',
            src: '/images/process/ow-wireframes.webp',
            alt: 'Two laptops showing the create study modal and details tab',
            caption:
              'First release included six templates, designed with scalability in mind.',
          },
        ]}
      />

      <AchievementsSection
        title="Constraints & Trade-offs"
        achievements={[
          {
            id: 'constraint-churn',
            title:
              'Designing against a churn problem without a proven solution',
            description:
              'The hypothesis — that combining studies would keep users engaged for longer — was unproven at the start. There was no guarantee templates would change behaviour. The design had to make the value of combining methods feel obvious without being prescriptive about how researchers should work.',
          },
          {
            id: 'constraint-rigid-vs-flexible',
            title: 'Balancing guidance with flexibility',
            description:
              'Templates that were too rigid would frustrate experienced researchers. Too much flexibility would fail to reduce friction for those with less confidence. The solution had to work as a starting point for beginners and a time-saver for experts before customisation options could be added — without compromising either.',
          },
          {
            id: 'constraint-beginners',
            title: 'V1 underserved complete beginners',
            description:
              'The first release prioritised proving value quickly over comprehensive guidance. After testing the feature with customers, users with the least research experience had less support than they needed. That gap was only visible after a soft launch — and became one of the clearest inputs into the second iteration.',
          },
          {
            id: 'constraint-collaboration',
            title: 'Context and decisions were getting lost',
            description:
              'The product was not deeply designed for collaboration. Without a way to document study purpose and intent inside the tool, teams were losing context between sessions. The details page addressed this gap — but it was not in the original brief and required making the case for its inclusion.',
          },
        ]}
      />

      <section
        aria-labelledby={reflectionsId}
        className="relative z-0 flex min-h-[90vh] w-full items-center overflow-hidden bg-[#08003B] text-white"
      >
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/images/portfolio/reflections-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        <div className="container relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-2xl text-left">
            <img
              src="/images/portfolio/lightbulb-icon.svg"
              alt=""
              aria-hidden="true"
              className="mb-6 h-20 w-20 opacity-80"
            />

            <h2 id={reflectionsId} className="text-3xl font-bold">
              Reflections & Learnings
            </h2>

            <div className="mt-8 space-y-6 text-slate-300">
              <div className="mt-8 space-y-6 text-slate-300">
                <p>
                  This project sharpened how I think about scaffolding in
                  product design. Providing just enough structure builds
                  confidence without removing agency. Too much guidance and
                  experienced users feel constrained. Too little and beginners
                  are lost before they start. Getting that balance right
                  required watching real people use the feature after launch,
                  not just testing assumptions before it shipped.
                </p>
                <p>
                  The details page was the biggest personal lesson. Adding it
                  was an instinct based on something I noticed in usage patterns
                  — not a brief, not a research finding, not a stakeholder
                  request. It helped that the team had an experimental mindset
                  culture where trying things and learning from them was
                  genuinely encouraged. That environment gave me the room to act
                  on the instinct. It ended up being one of the most valuable
                  parts of the feature from a product intelligence perspective —
                  and reinforced that paying close attention to how people
                  actually use a product, and acting on what you notice, is a
                  design skill in itself.
                </p>
                <p>
                  It also showed me how a single feature can shift behaviour
                  quietly. Teams started combining methods who never had before.
                  Researchers who came in for speed stayed because they
                  discovered new possibilities. That is what good product design
                  can do when it is built around real workflow needs rather than
                  just feature requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
