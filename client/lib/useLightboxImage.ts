import { useRef, useState, type MouseEvent } from 'react'

type LightboxImage = {
  src: string
  alt: string
}

export function useLightboxImage() {
  const [active, setActive] = useState<LightboxImage | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  function open(image: LightboxImage, event: MouseEvent<HTMLElement>) {
    triggerRef.current = event.currentTarget
    setActive(image)
  }

  function close() {
    setActive(null)
  }

  return { active, triggerRef, open, close }
}
