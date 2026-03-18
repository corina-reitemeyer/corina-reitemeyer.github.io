// components/casestudy/CaseStudyMeta.tsx

type MetaItem = {
  label: string
  value: string
}

type CaseStudyMetaProps = {
  items: MetaItem[]
}

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <section
      aria-label="Project metadata"
      className="w-full bg-[#08082a] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-white/20 p-6 sm:grid-cols-4 sm:gap-8 sm:p-8">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                {item.label}
              </dt>
              <dd className="text-base font-medium text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
