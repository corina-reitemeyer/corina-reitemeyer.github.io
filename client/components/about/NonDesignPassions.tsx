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
      className="w-full bg-ink py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <h2 className="mb-10 text-center text-3xl font-bold text-paper antialiased sm:text-3xl lg:text-left">
          What I love beyond design
        </h2>

        <div className="rounded-2xl p-8 sm:p-10">
          <ul className="grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {passions.map((passion) => (
              <li key={passion.id} className="flex flex-col gap-3">
                <img
                  src={passion.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8"
                />
                <span className="text-[20px] font-semibold text-paper antialiased">
                  {passion.title}
                </span>
                <span className="text-[16px] font-medium text-paper-muted antialiased">
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
