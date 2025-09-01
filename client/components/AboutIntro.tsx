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
}: Props) {
  return (
    <section className="bg-[#08082a]">
      <div className="container mx-auto max-w-6xl px-8 py-20 pb-12 sm:pb-36 sm:pt-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          {/* Left: image — square at all sizes */}
          <div className="px-full relative md:col-span-6">
            {/* Square wrapper with responsive max width (so height matches width) */}
            <div
              className="
      relative mx-auto aspect-[1/1]
      w-full max-w-6xl overflow-hidden rounded-2xl bg-white/10
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
