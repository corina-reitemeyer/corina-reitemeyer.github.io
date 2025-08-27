// components/AboutIntro.tsx
type Props = {
  imageSrc: string
  imageAlt?: string
  title: string
  paragraphs: string[]
  accoladeText: string
  accoladeHref: string
  ribbon?: string // vertical text by the image (e.g., "The obstacle is the way")
}

export default function AboutIntro({
  imageSrc,
  imageAlt = '',
  title,
  paragraphs,
  accoladeText,
  accoladeHref,
  ribbon = 'The obstacle is the way',
}: Props) {
  return (
    <section className="bg-[#08082a]">
      <div className="py-26 container mx-auto max-w-6xl px-8 md:pb-36 md:pt-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          {/* Left: image — square at all sizes */}
          <div className="relative md:col-span-6">
            {/* Vertical ribbon text (top-aligned) */}
            <span
              aria-hidden="true"
              className="absolute -left-10 top-0 rotate-180 text-xs
               font-semibold leading-none tracking-widest text-white/80 [writing-mode:vertical-rl] md:block"
            >
              {ribbon}
            </span>

            {/* Square wrapper with responsive max width (so height matches width) */}
            <div
              className="
      relative mx-auto aspect-[1/1]
      w-full max-w-[340px] overflow-hidden rounded-2xl bg-white/10
      sm:max-w-[420px] md:mx-0 md:max-w-[560px] lg:max-w-[620px]
    "
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: copy (match the 6/6 split) */}
          <div className="md:col-span-6">
            <h2 className="mb-5 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {title}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-white/60">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 text-white/100">
              Accolades:{' '}
              <a
                href={accoladeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD803] underline-offset-4 hover:underline"
              >
                {accoladeText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
