import { useId } from 'react'

type Props = {
  imageSrc: string
  imageAlt: string
  title: string
  paragraphs: string[]
  accoladeText: string
  accoladeHref: string
}

export default function AboutIntro({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  accoladeText,
  accoladeHref,
}: Props) {
  const headingId = useId()
  const accoladeLabel = accoladeText + ' (opens in a new tab)'

  return (
    <section aria-labelledby={headingId} className="bg-[#08082a]">
      <div className="container mx-auto max-w-6xl px-8 pb-12 pt-20 sm:pb-36 sm:pt-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            {/* ✅ img in normal flow with aspect-square — no absolute positioning needed */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square mx-auto w-full max-w-[420px] rounded-2xl object-cover md:mx-0 md:max-w-[560px] lg:max-w-[620px]"
            />
          </div>

          <div className="md:col-span-6">
            <h2
              id={headingId}
              className="mb-5 text-2xl font-semibold leading-snug text-white sm:text-3xl"
            >
              {title}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 text-white">
              {'Accolades: '}
              <a
                href={accoladeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={accoladeLabel}
                className="text-[#FFD803] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD803]"
              >
                {accoladeText + ' \u2197'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
