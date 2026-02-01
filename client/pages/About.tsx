import { useEffect, useState } from 'react'
import aboutData from '../../src/about.json'
import AboutData from '../../models/aboutdata'
import { motion } from 'framer-motion'
import AboutIntro from '../components/AboutIntro'
import ExperienceSection from '../components/Experience'

const About = () => {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    setData(aboutData)
  }, [])

  if (!data) return <p>Loading...</p>

  const left = [
    {
      company: 'SuiteFiles',
      title: 'Senior Product Designer',
      dates: '2025 – Present',
    },
    { company: 'Dev Academy', title: 'Technical Facilitator', dates: '2024' },
    {
      company: 'Optimal Workshop',
      title: 'Product Designer',
      dates: '2022 - 2023',
    },
    {
      company: 'Ministry of Education',
      title: 'Senior UX/UI Designer',
      dates: '2021 - 2022',
    },
  ]

  const right = [
    {
      company: 'Ministry of Education',
      title: 'UX/UI Designer',
      dates: '2019 - 2021',
    },
    { company: 'Frankie AI', title: 'Web Designer', dates: '2018 - 2019' },
    {
      company: 'Blackeye VR',
      title: 'Digital Product Designer',
      dates: '2018',
    },
    {
      company: 'Umajin',
      title: 'Mobile Creative Designer',
      dates: '2016 - 2017',
    },
  ]

  return (
    <div>
      <AboutIntro
        imageSrc="/images/corina-about.webp"
        imageAlt="Portrait"
        title="Guten Tag. Kia Ora. Hello!"
        paragraphs={[
          'I’m Corina, a Senior Product Designer with 8+ years’ experience, relocating to Melbourne in late February.',
          'I work end-to-end, but I’m strongest in delivery — turning complex problems into clear, production-ready UX/UI and design systems that teams can actually ship. I also have a full-stack background, so I’m comfortable working closely with engineers and real technical constraints.',
          'When I’m not designing, you’ll probably find me teaching Cuban Salsa, learning new languages (Korean 🇰🇷 is my current obsession), or working on my TEFL certificate.',
        ]}
        accoladeText="Best Awards, 2018"
        accoladeHref="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
      />

      <ExperienceSection leftBlock={left} rightBlock={right} />

      <section className="bg-[#08082a] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl sm:max-w-7xl sm:px-8">
          <h2 className="font-heading mb-12 text-center text-3xl font-semibold text-white">
            What Drives My Work
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {data.values.map((value, index) => (
              <motion.div
                key={index}
                className="mx-4 rounded-3xl bg-[#0f0f3a] p-8 sm:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="font-heading break-words text-lg font-semibold text-white sm:text-xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
