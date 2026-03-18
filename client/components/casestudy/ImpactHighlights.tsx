type Highlight = {
  id: string
  label: string
  description: string
}

type ImpactHighlightsProps = {
  highlights: Highlight[]
}

export default function ImpactHighlights({
  highlights,
}: ImpactHighlightsProps) {
  return (
    <section
      aria-label="Project highlights"
      className="w-full bg-[#08082a] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <ul className="grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <li key={highlight.id} className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-white antialiased sm:text-3xl">
                {highlight.label}
              </span>
              <span className="text-base text-slate-300 antialiased">
                {highlight.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
