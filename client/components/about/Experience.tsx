import { useId } from 'react'

type ExperienceItem = {
  id: string
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
  const headingId = useId()
  const rows = Math.max(leftBlock.length, rightBlock.length)

  return (
    <section aria-labelledby={headingId} className="bg-[#08082a]">
      <div className="container mx-auto max-w-6xl px-8 py-16 md:pb-24 md:pt-10">
        <h2
          id={headingId}
          className="mb-10 text-2xl font-semibold text-white sm:text-3xl"
        >
          {heading}
        </h2>

        {/* Desktop: single 4-col grid so rows align across both blocks */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul
          role="list"
          className="hidden gap-x-16 gap-y-2 [grid-template-columns:minmax(0,1fr)_auto_minmax(0,1fr)_auto] lg:grid"
        >
          {/* Index key is intentional — derived fixed-length array, never reordered */}
          {Array.from({ length: rows }).map((_, i) => {
            const L = leftBlock[i] ?? null
            const R = rightBlock[i] ?? null

            return (
              <li key={i} className="contents">
                <div className="py-4">
                  {L ? (
                    <>
                      <p className="font-semibold text-white">{L.company}</p>
                      <p className="text-slate-400">{L.title}</p>
                    </>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>
                <div className="py-4 text-right">
                  {L ? (
                    <p className="whitespace-nowrap font-semibold text-white">
                      {L.dates}
                    </p>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>

                <div className="py-4">
                  {R ? (
                    <>
                      <p className="font-semibold text-white">{R.company}</p>
                      <p className="text-slate-400">{R.title}</p>
                    </>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>
                <div className="py-4 text-right">
                  {R ? (
                    <p className="whitespace-nowrap font-semibold text-white">
                      {R.dates}
                    </p>
                  ) : (
                    <div className="py-6" />
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        {/* Mobile/Tablet: two separate two-column lists */}
        <div className="grid grid-cols-1 gap-y-8 lg:hidden">
          {[leftBlock, rightBlock].map((block, idx) => (
            <>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
              <ul
                key={idx}
                role="list"
                className="grid grid-cols-[1fr_auto] gap-x-10"
              >
                {block.map((item) => (
                  <li key={item.id} className="contents">
                    <div className="py-4">
                      <p className="font-semibold text-white">{item.company}</p>
                      <p className="text-slate-400">{item.title}</p>
                    </div>
                    <div className="py-4 text-right">
                      <p className="whitespace-nowrap font-semibold text-white">
                        {item.dates}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
