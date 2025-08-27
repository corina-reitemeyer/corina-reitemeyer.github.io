// components/ExperienceSection.tsx
type ExperienceItem = {
  company: string
  title: string
  dates: string
}

type Props = {
  leftBlock: ExperienceItem[]
  rightBlock: ExperienceItem[]
  heading?: string
}

export default function ExperienceSection({
  leftBlock,
  rightBlock,
  heading = 'Experience',
}: Props) {
  const rows = Math.max(leftBlock.length, rightBlock.length)

  const getItem = (arr: ExperienceItem[], i: number) => arr[i] ?? null

  return (
    <section className="bg-[#08082a]">
      <div className="container mx-auto max-w-6xl px-8 py-16 md:pb-28 md:pt-20">
        <h2 className="mb-10 text-2xl font-semibold text-white sm:text-3xl">
          {heading}
        </h2>

        {/* Desktop: single 4-col grid so rows align across both blocks */}
        <div
          className="hidden gap-x-16 gap-y-2 [grid-template-columns:minmax(0,1fr)_auto_minmax(0,1fr)_auto]
                        lg:grid"
        >
          {Array.from({ length: rows }).map((_, i) => {
            const L = getItem(leftBlock, i)
            const R = getItem(rightBlock, i)

            return (
              <div key={i} className="contents">
                {/* Left block: info */}
                <div className="py-4">
                  {L ? (
                    <>
                      <p className="font-semibold text-white">{L.company}</p>
                      <p className="text-white/70">{L.title}</p>
                    </>
                  ) : (
                    <div className="py-6" /> // empty spacer keeps row height
                  )}
                </div>
                {/* Left block: dates */}
                <div className="py-4 text-right">
                  {L ? (
                    <p className="whitespace-nowrap font-semibold text-white">
                      {L.dates}
                    </p>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>

                {/* Right block: info */}
                <div className="py-4">
                  {R ? (
                    <>
                      <p className="font-semibold text-white">{R.company}</p>
                      <p className="text-white/70">{R.title}</p>
                    </>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>
                {/* Right block: dates */}
                <div className="py-4 text-right">
                  {R ? (
                    <p className="whitespace-nowrap font-semibold text-white">
                      {R.dates}
                    </p>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile/Tablet: fall back to two separate two-column lists */}
        <div className="grid grid-cols-1 gap-16 lg:hidden">
          {[leftBlock, rightBlock].map((block, idx) => (
            <div key={idx} className="grid grid-cols-[1fr_auto] gap-x-10">
              {block.map((item, i) => (
                <div key={i} className="contents">
                  <div className="py-4">
                    <p className="font-semibold text-white">{item.company}</p>
                    <p className="text-white/70">{item.title}</p>
                  </div>
                  <div className="py-4 text-right">
                    <p className="whitespace-nowrap font-semibold text-white">
                      {item.dates}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
