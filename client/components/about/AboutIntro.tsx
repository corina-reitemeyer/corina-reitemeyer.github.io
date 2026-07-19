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
    <section aria-labelledby={headingId} className="bg-ink">
      <div className="container mx-auto max-w-6xl px-8 pb-12 pt-20 sm:pb-36 sm:pt-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="
                aspect-square motion-safe:animate-fade-in-up mx-auto w-full max-w-[420px] rounded-2xl
                object-cover md:mx-0 md:max-w-[560px]
                lg:max-w-[620px]
              "
            />
          </div>

          <div className="md:col-span-6">
            <h1
              id={headingId}
              className="mb-5 text-[40px] font-extrabold leading-[1.05] tracking-tight text-paper antialiased sm:text-[48px] sm:font-bold sm:leading-[1.2] md:text-[64px] md:leading-[1.15] xl:text-[72px] xl:leading-[1.1] 2xl:text-[96px] 2xl:leading-[1.2]"
            >
              {title}
            </h1>

            <div className="space-y-4">
              {paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-paper-muted">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 text-paper">
              {'Accolades: '}
              <a
                href={accoladeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={accoladeLabel}
                className="text-teal-mid underline-offset-4 transition-colors duration-200 hover:text-teal-mist hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
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
