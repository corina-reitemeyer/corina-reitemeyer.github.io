import { useId } from 'react'
import aboutData from '../../src/about.json'
import type AboutData from '../../models/aboutdata'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import AboutIntro from '../components/AboutIntro'
import ExperienceSection from '../components/Experience'
import NonDesignPassions from '../components/NonDesignPassions'

const left = [
  {
    id: 'suitefiles',
    company: 'SuiteFiles',
    title: 'Senior Product Designer',
    dates: '2025 – 2026',
  },
  {
    id: 'dev-academy',
    company: 'Dev Academy',
    title: 'Technical Facilitator',
    dates: '2024',
  },
  {
    id: 'optimal-workshop',
    company: 'Optimal Workshop',
    title: 'Product Designer',
    dates: '2022 - 2023',
  },
  {
    id: 'moe-senior',
    company: 'Ministry of Education',
    title: 'Senior UX/UI Designer',
    dates: '2021 - 2022',
  },
]

const right = [
  {
    id: 'moe-mid',
    company: 'Ministry of Education',
    title: 'UX/UI Designer',
    dates: '2019 - 2021',
  },
  {
    id: 'frankie-ai',
    company: 'Frankie AI',
    title: 'Web Designer',
    dates: '2018 - 2019',
  },
  {
    id: 'blackeye-vr',
    company: 'Blackeye VR',
    title: 'Digital Product Designer',
    dates: '2018',
  },
  {
    id: 'umajin',
    company: 'Umajin',
    title: 'Mobile Creative Designer',
    dates: '2016 - 2017',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const sharedViewport = { once: true, amount: 0.2 } as const

export default function About() {
  const valuesHeadingId = useId()
  const shouldReduceMotion = useReducedMotion()

  const data: AboutData = aboutData

  return (
    <>
      <AboutIntro
        imageSrc="/images/corina-about.webp"
        imageAlt="Corina Reitemeyer, Melbourne-based Senior Product Designer"
        title="Guten Tag. Kia Ora. Hello!"
        paragraphs={[
          'Senior Product Designer based in Melbourne 🇦🇺 — originally from Germany and New Zealand, which gave me a structured but practical way of thinking.',
          "I do my best work in delivery, specialising in accessibility and bringing systems thinking with a technical lens. Give me a complex, messy platform and I'll make it clearer, more consistent, and easier to ship with.",
          '8+ years across government, education, and B2B SaaS. Former Cuban Salsa instructor. Still dancing for the love of it!',
        ]}
        accoladeText="Best Awards, 2018"
        accoladeHref="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
      />

      <ExperienceSection leftBlock={left} rightBlock={right} />

      <section
        aria-labelledby={valuesHeadingId}
        className="bg-[#08082a] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2
            id={valuesHeadingId}
            className="mb-12 text-center text-3xl font-semibold text-white"
          >
            What Drives My Work
          </h2>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
          >
            {data.values.map((value, index) => (
              <motion.li
                key={value.title}
                custom={index}
                variants={shouldReduceMotion ? undefined : cardVariants}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView={shouldReduceMotion ? undefined : 'visible'}
                viewport={sharedViewport}
                className="mx-4 rounded-3xl bg-[#0f0f3a] p-8 sm:mx-0"
              >
                <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-slate-300">{value.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <NonDesignPassions
        passions={[
          {
            id: 'coffee',
            iconSrc: '/icons/hobby-icons/coffee.svg',
            iconAlt: '',
            title: 'Exploring cafés',
            description: 'Usually a classic flatwhite or iced matcha.',
          },
          {
            id: 'pilates',
            iconSrc: '/icons/hobby-icons/fitness.svg',
            iconAlt: '',
            title: 'Sweet and steady @ Pilates',
            description: 'Reformer for 3 years. Lagree is next (hopefully!).',
          },
          {
            id: 'dancing',
            iconSrc: '/icons/hobby-icons/dance.svg',
            iconAlt: '',
            title: 'Salsa',
            description:
              'Salsa instructor for the past 4 years in NZ, now dancing when I feel like it.',
          },
          {
            id: 'games',
            iconSrc: '/icons/hobby-icons/games.svg',
            iconAlt: '',
            title: 'Cozy pixel games',
            description:
              'Ploughing virtual acres and planting carrots is somehow both destressing and productive.',
          },
          {
            id: 'photography',
            iconSrc: '/icons/hobby-icons/camera.svg',
            iconAlt: '',
            title: 'Travel & Urban photography',
            description:
              'Wherever I go in the world, my camera comes too. Travelled to 16+ countries.',
          },
          {
            id: 'books',
            iconSrc: '/icons/hobby-icons/book.svg',
            iconAlt: '',
            title: 'From Sci-Fi to productivity',
            description:
              'Current rabbit hole: wherever the algorithm or bookstore aisle takes me.',
          },
        ]}
      />
    </>
  )
}
