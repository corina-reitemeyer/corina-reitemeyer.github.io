import { useEffect, useState } from 'react'
import aboutData from '../../src/about.json'
import AboutData from '../../models/aboutdata'

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
                I’m a UX/UI Designer with 6+ years of experience delivering
                user-centered solutions that look great and drive results. My
                work blends creativity, technical expertise, and data-driven
                insights to help businesses meet their goals. Over time, I
                expanded my skill set to include full stack development and data
                analytics, enabling me to craft holistic solutions that balance
                user needs with business objectives. Beyond design and code, I
                enjoy Latin dancing, Reformer Pilates, and cozy games. Let’s
                chat if you’re looking for a designer with curiosity, strategy,
                and a collaborative mindset!
              </p>
              <h3 className="font-heading mb-4 mt-10 text-2xl font-bold">
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
      <section className="relative overflow-hidden rounded-3xl bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="font-heading mb-12 text-center text-3xl font-extrabold">
            What I Do
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {data.roles.map((role, index) => (
              <div
                key={index}
                className="rounded-3xl border-4 border-black bg-white p-6"
              >
                <h3 className="font-heading text-2xl font-bold text-black">
                  {role.title}
                </h3>
                <p className="font-body pb-4 text-sm italic text-gray-700">
                  {role.subtitle}
                </p>
                <p className="mt-4 text-gray-800">{role.description}</p>
              </div>
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="font-heading mb-12 text-center text-3xl font-extrabold">
            My Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.values.map((value, index) => {
              // Fixed color pattern for rows
              const rowColors = [
                ['bg-[#FFB5DE]', 'bg-[#B5FFFA]', 'bg-[#BBB5FF]'], // Row 1: Raspberry Pink, Grape, Plum
                ['bg-[#FFF4B0]', 'bg-[#BBB5FF]', 'bg-[#FFB5DE]'], // Row 2: Lemon, Plum, Raspberry Pink
              ]

              // Determine row and column position
              const rowIndex = Math.floor(index / 3) % 2 // 0 or 1 (alternates between row patterns)
              const colIndex = index % 3 // 0, 1, or 2 (column position)

              return (
                <div
                  key={index}
                  className={`rounded-3xl border-4 border-black p-6 ${rowColors[rowIndex][colIndex]}`}
                >
                  <h3 className="font-heading text-xl font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-gray-800">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
