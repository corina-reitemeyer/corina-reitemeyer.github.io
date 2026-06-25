import Lightbox from '../../components/casestudy/LightBox'
import { useLightboxImage } from '../../lib/useLightboxImage'

type ChallengeImage = {
  id: string
  src: string
  alt: string
  caption?: string
}

type ChallengeItem = {
  id: string
  heading: string
  body: (string | { text: string; bold: boolean })[]
  image?: ChallengeImage
}

type ChallengeSectionProps = {
  challenges: ChallengeItem[]
}

export default function ChallengeSection({
  challenges,
}: ChallengeSectionProps) {
  const lightbox = useLightboxImage()

  return (
    <>
      <section
        aria-label="Challenge"
        className="w-full bg-[#08082a] py-16 sm:pt-32"
      >
        <div className="mx-auto max-w-2xl px-6 lg:px-0">
          <h2 className="mb-12 text-4xl font-bold text-white antialiased sm:text-5xl">
            Challenge
          </h2>

          <div className="space-y-16">
            {challenges.map((challenge) => (
              <div key={challenge.id}>
                <h3 className="mb-6 text-xl font-bold text-white antialiased sm:text-2xl">
                  {challenge.heading}
                </h3>
                <div className="space-y-4">
                  {challenge.body.map((segment, i) =>
                    typeof segment === 'string' ? (
                      <p
                        key={i}
                        className="text-lg leading-relaxed text-slate-300 antialiased"
                      >
                        {segment}
                      </p>
                    ) : (
                      <p
                        key={i}
                        className="text-lg leading-relaxed text-white antialiased"
                      >
                        <strong className="font-semibold text-white antialiased">
                          {segment.text}
                        </strong>
                      </p>
                    ),
                  )}
                </div>

                {challenge.image && (
                  <figure className="mt-8">
                    <button
                      type="button"
                      onClick={(e) =>
                        lightbox.open(
                          { src: challenge.image!.src, alt: challenge.image!.alt },
                          e,
                        )
                      }
                      className="w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`View larger: ${challenge.image.alt}`}
                    >
                      <img
                        src={challenge.image.src}
                        alt={challenge.image.alt}
                        className="w-full rounded-xl object-cover transition duration-200 hover:opacity-90"
                      />
                    </button>
                    {challenge.image.caption && (
                      <figcaption className="mt-3 text-sm text-slate-400 antialiased">
                        {challenge.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox.active && (
        <Lightbox
          src={lightbox.active.src}
          alt={lightbox.active.alt}
          onClose={lightbox.close}
          triggerRef={lightbox.triggerRef}
        />
      )}
    </>
  )
}
