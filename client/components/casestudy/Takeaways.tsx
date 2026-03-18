// components/casestudy/Takeaways.tsx

type TakeawaysProps = {
  paragraphs: string[]
}

export default function Takeaways({ paragraphs }: TakeawaysProps) {
  const headingId = `takeaways-${Math.random().toString(36).slice(2)}`

  return (
    <section
      aria-labelledby={headingId}
      className="relative z-0 flex min-h-[90vh] w-full items-center overflow-hidden bg-[#08082a] text-white"
    >
      <div className="absolute inset-0 z-[-1]">
        <img
          src="/images/portfolio/reflections-bg.svg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-left">
          <img
            src="/images/portfolio/lightbulb-icon.svg"
            alt=""
            aria-hidden="true"
            className="mb-6 h-20 w-20 opacity-80"
          />

          <h2 id={headingId} className="text-3xl font-bold">
            Takeaways
          </h2>

          <div className="mt-8 space-y-6 text-slate-300">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
