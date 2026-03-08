import AchievementsSection from '../components/casestudy/Achievements'
import TwoColumnDetail from '../components/casestudy/DetailColumn'
import CaseStudyNavy from '../components/casestudy/Hero'
import ImageStrip from '../components/casestudy/ImageStrip'
import KeyOutcomes from '../components/casestudy/KeyOutcomes'
import { useId } from 'react'

export default function MOEDesignSystem() {
  const reflectionsId = useId()

  return (
    <>
      <CaseStudyNavy
        intro="From a COVID crisis site to shared design standards across 50+ platforms."
        company="Ministry of Education"
        project="Design System"
        imageSrc="/images/product/moe-designsystem-hero.webp"
        imageAlt="Ministry of Education design system hero"
        scope="The rushed launch of a critical COVID-19 website exposed gaps in the organisation's design and implementation process. Inconsistent design, accessibility issues, and a lack of shared standards made it difficult for teams to work efficiently and deliver inclusive experiences. I led the creation of the organisation's first design system to address these problems. I started with product audits and staff interviews to understand where teams were struggling, then designed reusable components and accessibility guidelines aligned with WCAG standards. By working closely with designers, engineers, and web advisors, I helped align teams and streamline delivery. The result was a shared set of standards that reduced design issues, improved accessibility, and supported future projects. The design system is now used across more than 50 digital platforms."
        involvement="Senior UX/UI Designer - Led the establishment and ongoing evolution of the design system site and Adobe XD component library."
        team="Worked with designers, engineers, content teams, and web accessibility advisors across the organisation to align standards and delivery."
        meta={{
          date: '2020 - 2021',
          type: 'Design System, Website',
          specialisation: 'Government, Education',
        }}
      />

      <ImageStrip
        images={[
          {
            id: 'moe-desktop-screens',
            src: '/images/product/moe-desktop-screens.webp',
            alt: 'Three screen mockups of the design system website',
            caption:
              'Desktop screens — components, case studies, and guidance pages.',
          },
          {
            id: 'moe-mobile-screens',
            src: '/images/product/moe-mobile-screens.webp',
            alt: 'Design system website on mobile',
            caption: 'Mobile screens — design system website.',
          },
          {
            id: 'moe-responsive',
            src: '/images/product/moe-responsive.webp',
            alt: 'Design system website showing responsive layouts',
            caption: 'Responsive designs — from mobile to large desktop.',
          },
          {
            id: 'moe-components',
            src: '/images/product/moe-components-example.webp',
            alt: 'Component guidelines in Adobe XD',
            caption: 'Component guidelines in Adobe XD.',
          },
          {
            id: 'moe-brand-assets',
            src: '/images/product/moe-brand-assets.webp',
            alt: 'Brand assets and tokens in Adobe XD',
            caption: 'Brand assets and tokens in Adobe XD.',
          },
        ]}
      />

      <KeyOutcomes
        title="Product Impact"
        outcomes={[
          {
            id: 'faster-delivery',
            iconSrc: '/icons/rocket.svg',
            iconAlt: 'Rocket',
            iconEmoji: '🚀',
            title: '40% Faster Dev/Design Time',
            description:
              'Standardised components cut duplicate work and sped up delivery.',
          },
          {
            id: 'broad-use',
            iconSrc: '/icons/increase.svg',
            iconAlt: 'Increase',
            iconEmoji: '📈',
            title: 'Broad System Use',
            description:
              'Teams applied the system across 50+ sites, both new builds and existing products.',
          },
          {
            id: 'simpler-workflows',
            iconSrc: '/icons/speedometer.svg',
            iconAlt: 'Speedometer',
            iconEmoji: '⏳',
            title: 'Simpler Workflows',
            description:
              'Shared patterns reduced rework and made design processes easier.',
          },
          {
            id: 'clearer-docs',
            iconSrc: '/icons/book.svg',
            iconAlt: 'Book',
            iconEmoji: '📖',
            title: 'Clearer Documentation',
            description:
              'Guidelines were updated to reflect real developer needs.',
          },
          {
            id: 'consistent-ux',
            iconSrc: '/icons/color-bucket.svg',
            iconAlt: 'Colour bucket',
            iconEmoji: '🎨',
            title: 'Consistent User Experience',
            description:
              'A unified visual language reduced usability issues and built trust in digital platforms.',
          },
          {
            id: 'vendor-alignment',
            iconSrc: '/icons/handshake.svg',
            iconAlt: 'Handshake',
            iconEmoji: '🤝',
            title: 'Better Vendor Alignment',
            description:
              'Clear standards helped external teams deliver consistent work.',
          },
        ]}
      />

      <TwoColumnDetail
        heading="Process"
        sections={[
          {
            id: 'process-exploration',
            subtitle: 'From exploration to system alignment',
            body: 'I began by mapping existing sites and reviewing comparable platforms to understand where inconsistency and duplication were creeping in. From there, I guided the work from early wireframes through to final components. The components were shaped and agreed through facilitated workshops, while I designed the design system website from scratch and set up the design tokens in our design tool. One of the biggest challenges was alignment. The system needed to work across more than 100 sites, involving an internal web team and multiple external vendors, each with their own brand styles and constraints. I focused on finding the right balance: flexible enough to allow variation, but structured enough to create consistency through shared patterns and components.',
          },
          {
            id: 'process-pressure',
            subtitle: 'Designing under pressure',
            body: 'The main risk was treating the design system as a post-crisis clean-up task. Without shared standards, teams would have continued duplicating effort and repeating the same accessibility issues across new sites. Instead of aiming for a perfect system, I prioritised pragmatic, easy-to-adopt patterns. This approach allowed teams to move quickly while improving accessibility and consistency in a high-stakes government environment.',
          },
        ]}
        images={[
          {
            id: 'moe-sitemap',
            src: '/images/process/moe-sitemap.webp',
            alt: 'Sitemap of the design system website',
            caption:
              'Design system sitemap — balancing guidance with case studies.',
          },
          {
            id: 'moe-wireframe',
            src: '/images/process/moe-desktop-wireframe.webp',
            alt: 'Low fidelity wireframes progressing to final designs',
            caption: 'From wireframe to final designs.',
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
              <p>
                This project reinforced how critical shared standards are in
                high-pressure environments. When speed is prioritised without
                structure, accessibility and consistency are often the first
                things to suffer.
              </p>
              <p>
                Leading this work after a national emergency response taught me
                to design for adoption rather than perfection. Creating clear,
                usable patterns that teams could pick up quickly proved more
                valuable than aiming for a fully polished system.
              </p>
              <p>
                The design system continues to be used across more than 50
                platforms after my departure, and it shaped how I now approach
                design systems in complex, multi-team organisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AchievementsSection
        title="Key Achievements"
        achievements={[
          {
            id: 'first-design-system',
            title: "Built the Organisation's First Design System",
            description:
              'Led research, workshops, and implementation to create a shared system, securing adoption across teams.',
          },
          {
            id: 'accessibility-standards',
            title: 'Ensured Application of Accessibility Standards',
            description:
              'Embedded WCAG compliance into the system, ensuring consistent application and more inclusive services.',
          },
          {
            id: 'collaboration',
            title: 'Improved Collaboration',
            description:
              'Streamlined workflows between designers and engineers, making handoff smoother and faster.',
          },
          {
            id: 'standards-scale',
            title: 'Set Standards Across 50+ Products',
            description:
              "Brought consistency and scalability to dozens of websites, shaping the organisation's long-term digital strategy.",
          },
        ]}
      />
    </>
  )
}
