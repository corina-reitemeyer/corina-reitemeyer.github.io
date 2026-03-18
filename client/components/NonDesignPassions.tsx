type Passion = {
  id: string
  iconSrc: string
  iconAlt: string
  title: string
  description: string
}

type NonDesignPassionsProps = {
  passions: Passion[]
}

export default function NonDesignPassions({
  passions,
}: NonDesignPassionsProps) {
  return (
    <section
      aria-label="Non-design passions"
      className="w-full bg-[#08082a] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <h2 className="mb-10 text-3xl font-bold text-white antialiased sm:text-3xl">
          What I love beyond design
        </h2>

        <div className="rounded-2xl border border-white/10 p-8 sm:p-10">
          <ul className="grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {passions.map((passion) => (
              <li key={passion.id} className="flex flex-col gap-3">
                <img
                  src={passion.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8"
                />
                <span className="text-[20px] font-semibold text-white antialiased">
                  {passion.title}
                </span>
                <span className="text-[16px] font-medium text-slate-300 antialiased">
                  {passion.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
