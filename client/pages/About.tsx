import { useEffect, useState } from 'react'
import aboutData from '../../src/about.json'
import AboutData from '../../models/aboutdata'
import { motion } from 'framer-motion'

const About = () => {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    setData(aboutData)
  }, [])

  if (!data) return <p>Loading...</p>

  const firstRowSteps = Array.isArray(data.process)
    ? data.process.slice(0, 4)
    : []
  const secondRowSteps = Array.isArray(data.process)
    ? data.process.slice(4)
    : []

  return (
    <div className="bg-gray-50">
      {/* Section 1: Hero */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Image Section */}
            <div className="text-center md:text-left">
              <img
                src="/images/corina-about-picture.webp"
                alt="Smiling woman"
                className="profile-image mx-auto"
              />
            </div>

            {/* Text Section */}
            <div>
              <h2 className="font-heading py-4 text-3xl font-extrabold">
                Hi! I&apos;m Corina 👋
              </h2>
              <p className="font-body text-lg leading-relaxed text-gray-700">
                A Senior Product Designer who loves making digital experiences
                simple, intuitive, and scalable. With 6+ years of experience, I
                specialise in AI-driven UX and design systems that help products
                grow smoothly.
              </p>
              <p className="font-body mt-6 text-lg leading-relaxed text-gray-700">
                I also have a background in full-stack development and data
                analytics, which means I understand both the design and
                technical sides of building products. I enjoy working with
                cross-functional teams to turn user needs into smart, practical
                solutions.
              </p>
              <p className="font-body mt-6 text-lg leading-relaxed text-gray-700">
                When I’m not designing, you’ll find me dancing, doing Reformer
                Pilates, or playing cozy games. If you’re looking for a designer
                who’s curious, strategic, and loves solving problems, let’s
                connect!
              </p>
              <h3 className="font-heading mt-10 text-2xl font-bold">
                Accolades:
              </h3>
              <p className="font-body text-lg">
                <a
                  href="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline decoration-4 hover:text-purple-500"
                >
                  <strong>Best Awards:</strong>
                </a>{' '}
                Bronze Award, 2018
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: What I Do */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading mb-12 text-center text-3xl font-extrabold text-[#272343]">
            What I Do
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.roles.map((role, index) => (
              <motion.div
                key={index}
                className="mx-4 rounded-3xl bg-[#E3F6F5] p-10 sm:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="font-heading break-words text-xl font-bold text-[#272343] md:text-2xl">
                  {role.title}
                </h3>
                <p className="font-body pb-4 text-sm italic text-[#272343]">
                  {role.subtitle}
                </p>
                <p className="mt-4 text-[#272343]">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How I Work */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading mb-12 text-center text-3xl font-extrabold">
            How I Work
          </h2>

          {/* Mobile Layout: Stacked Steps */}
          <div className="block space-y-16 sm:hidden">
            {[...firstRowSteps, ...secondRowSteps].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Grey Line */}
                <div className="absolute top-[20px] h-0.5 w-full bg-slate-200"></div>

                {/* Circle Positioned on the Line */}
                <div className="absolute top-[8px] z-10 h-6 w-6 rounded-full border-4 border-white bg-customTeal"></div>

                {/* Step Content */}
                <div className="relative mt-10 flex-1 px-4 text-center">
                  <div className="font-body text-sm text-gray-700">
                    {step.step}
                  </div>
                  <h3 className="font-heading mt-2 text-lg font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-gray-800">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout: Two Rows */}
          <div className="hidden sm:block">
            {/* Row 1 */}
            <div className="relative mb-14">
              <div className="absolute left-0 top-[20px] h-0.5 w-full bg-slate-200"></div>
              <div className="relative flex items-start justify-between">
                {firstRowSteps.map((step, index) => (
                  <div key={index} className="relative flex-1 px-4 text-left">
                    <div className="absolute left-[10px] top-[8px] z-10 h-6 w-6 rounded-full border-4 border-white bg-customTeal"></div>
                    <div className="font-body mt-10 text-sm text-gray-700">
                      {step.step}
                    </div>
                    <h3 className="font-heading mt-2 text-lg font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="font-body mt-2 text-sm leading-relaxed text-gray-800">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div className="absolute left-0 top-[20px] h-0.5 w-full bg-slate-200"></div>
              <div className="relative flex items-start justify-between">
                {secondRowSteps.map((step, index) => (
                  <div key={index} className="relative flex-1 px-4 text-left">
                    <div className="absolute left-[10px] top-[8px] z-10 h-6 w-6 rounded-full border-4 border-white bg-customTeal"></div>
                    <div className="font-body mt-10 text-sm text-gray-700">
                      {step.step}
                    </div>
                    <h3 className="font-heading mt-2 text-lg font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="font-body mt-2 text-sm leading-relaxed text-gray-800">
                      {step.description}
                    </p>
                  </div>
                ))}

                {/* Dummy Invisible Element for Alignment */}
                <div className="invisible relative flex-1 px-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: My Philosophy */}
      <section className="bg-[#E3F6F5] py-24">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="font-heading mb-12 text-center text-3xl font-extrabold text-[#272343]">
            My Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {data.values.map((value, index) => (
              <motion.div
                key={index}
                className="mx-4 rounded-3xl bg-white p-8 sm:mx-0"
                initial={{ opacity: 0, y: 20 }} // Start slightly below & invisible
                whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
                transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Animate only once when visible
              >
                <h3 className="font-heading break-words text-lg font-bold text-[#272343] sm:text-xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-[#272343]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
