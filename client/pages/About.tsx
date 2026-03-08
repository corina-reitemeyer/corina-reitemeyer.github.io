import { useId } from 'react'
import aboutData from '../../src/about.json'
import type AboutData from '../../models/aboutdata'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import AboutIntro from '../components/AboutIntro'
import ExperienceSection from '../components/Experience'

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
          "Hi, I'm Corina, a Melbourne-based Senior Product Designer specialising in design systems, scalable UX, and accessible digital products.",
          "Growing up between Germany and New Zealand gave me a structured but practical way of thinking, which shows up a lot in how I work. I do my best work in delivery. I like taking complex or messy platforms and making them clearer, whether that's rebuilding a design system, reworking a key journey, or helping a team ship more consistently.",
          "I have 8+ years across government, education, and B2B SaaS, including products with AI-enabled features. I'm known for being reliable, thorough, and easy to work with.",
          "Fun Fact: I'm a former Cuban Salsa instructor who taught for 4 years in New Zealand and still dance for the fun and community aspect!",
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
    </>
  )
}
