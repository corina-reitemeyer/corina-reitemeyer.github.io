import { useEffect, useState } from 'react'
import aboutData from '../../src/about.json'
import AboutData from '../../models/aboutdata'

const About = () => {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    setData(aboutData)
  }, [])

  if (!data) return <p>Loading...</p>

  const firstRowSteps = data.process.slice(0, 4)
  const secondRowSteps = data.process.slice(4)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-3xl px-4 py-12">
        <img
          src="/images/corina_about.png"
          alt="Smiling woman surrounded by two yellow circles"
          className="profile-image mx-auto mb-8"
        />
        <h2 className="py-8 text-3xl font-bold">Hi! I&apos;m Corina👋</h2>
        <p>
          I&apos;m a Senior UX/UI Designer and Full Stack Developer with over 6
          years of experience creating user-centered solutions that not only
          look great but also deliver real results. My approach blends
          creativity, technical expertise, and data-driven insights to help
          businesses achieve their goals through thoughtful design. After years
          of deep UX/UI work, I expanded my skill set by diving into full stack
          development and data analytics, which allows me to craft holistic
          solutions that balance user needs with business objectives. I&apos;m
          passionate about solving complex problems, continuously learning, and
          delivering designs that make an impact. When I&apos;m not designing or
          coding, you&apos;ll find me Latin dancing, doing Reformer Pilates, or
          playing cozy games. If you&apos;re looking for a designer who brings
          curiosity, strategy, and a collaborative mindset to the table,
          let&apos;s chat!
        </p>
        <h3 className="mb-2 text-left text-2xl font-bold">Accolades:</h3>
        <p className="text-left text-lg">
          <a
            href="https://bestawards.co.nz/digital/student-digital/massey-university-college-of-creative-arts/infinite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-amber-400 underline decoration-solid">
              Best Awards:
            </strong>
          </a>
          {''} Bronze Award, 2018
        </p>
      </div>
      {/* What I Do Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold">
            What I Do
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {data.roles.map((role, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {role.title}
                </h3>
                <p className="text-sm italic text-gray-500">{role.company}</p>
                <p className="mt-4 text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How I Work Section */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold">
            How I Work
          </h2>

          {/* Row 1 */}
          <div className="relative mb-16">
            {/* Grey Line for Row 1 */}
            <div className="absolute left-0 top-[20px] h-0.5 w-full bg-slate-200"></div>

            <div className="relative flex items-start justify-between">
              {firstRowSteps.map((step, index) => (
                <div key={index} className="relative flex-1 px-4 text-center">
                  {/* Circle Positioned on the Line */}
                  <div className="absolute left-1/2 top-[10px] z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-sky-300"></div>

                  {/* Step Number */}
                  <div className="mt-10 text-sm text-gray-500">{step.step}</div>

                  {/* Step Title */}
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative">
            {/* Grey Line for Row 2 */}
            <div className="absolute left-0 top-[20px] h-0.5 w-full bg-slate-200"></div>

            <div className="relative flex items-start justify-between">
              {secondRowSteps.map((step, index) => (
                <div key={index} className="relative flex-1 px-4 text-center">
                  {/* Circle Positioned on the Line */}
                  <div className="absolute left-1/2 top-[10px] z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-sky-300"></div>

                  {/* Step Number */}
                  <div className="mt-10 text-sm text-gray-500">{step.step}</div>

                  {/* Step Title */}
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold">
            My Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.values.map((value, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
