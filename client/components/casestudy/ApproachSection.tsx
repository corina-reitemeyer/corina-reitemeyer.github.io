import { useRef, useState } from 'react'
import Lightbox from '../../components/casestudy/LightBox'

type ApproachImage = {
  id: string
  src: string
  alt: string
  caption?: string
}

type ApproachItem = {
  id: string
  heading: string
  body: string[]
  image?: ApproachImage
}

type ApproachSectionProps = {
  items: ApproachItem[]
}

export default function ApproachSection({ items }: ApproachSectionProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>('')
  const triggerRef = useRef<HTMLElement>(null)

  return (
    <>
      <section
        aria-label="Approach"
        className="w-full bg-[#08082a] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-2xl px-6 lg:px-0">
          <h2 className="mb-12 text-4xl font-bold text-white antialiased sm:text-5xl">
            Approach
          </h2>

          <div className="space-y-20">
            {items.map((item) => (
              <div key={item.id}>
                <h3 className="mb-6 text-xl font-bold text-white antialiased sm:text-2xl">
                  {item.heading}
                </h3>

                <div className="space-y-4">
                  {item.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg leading-relaxed text-slate-300 antialiased"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {item.image && (
                  <figure className="mt-8">
                    <button
                      ref={triggerRef as React.RefObject<HTMLButtonElement>}
                      type="button"
                      onClick={() => {
                        setLightboxSrc(item.image!.src)
                        setLightboxAlt(item.image!.alt)
                      }}
                      className="w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`View larger: ${item.image.alt}`}
                    >
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-full rounded-xl object-cover transition duration-200 hover:opacity-90"
                      />
                    </button>
                    {item.image.caption && (
                      <figcaption className="mt-3 text-sm text-slate-400 antialiased">
                        {item.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setLightboxSrc(null)}
          triggerRef={triggerRef}
        />
      )}
    </>
  )
}
