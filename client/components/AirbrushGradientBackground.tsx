import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = {
  className?: string
}

type Blob = {
  color: string
  // Optional second color the blob blends toward at its edge, instead of
  // just fading its core color to transparent — used for the one blob that
  // mixes teal-blue with a hint of purple.
  edgeColor?: string
  baseX: number
  baseY: number
  radius: number
  speedX: number
  speedY: number
  phase: number
}

// Teal/blue-green family, one soft white-cyan highlight blob for sparkle,
// and one that blends teal-blue toward a hint of purple at its edge.
// baseX values are clustered around the horizontal center (0.5) so the
// glow reads as one centered mass rather than spreading edge to edge.
const BLOBS: Blob[] = [
  { color: '45, 130, 130', baseX: 0.33, baseY: 0.4, radius: 0.84, speedX: 0.55, speedY: 0.45, phase: 0 },
  { color: '50, 120, 170', edgeColor: '120, 95, 190', baseX: 0.59, baseY: 0.22, radius: 0.77, speedX: 0.4, speedY: 0.6, phase: 2.1 },
  { color: '50, 145, 110', baseX: 0.46, baseY: 0.68, radius: 0.87, speedX: 0.48, speedY: 0.38, phase: 4.2 },
  { color: '55, 155, 145', baseX: 0.68, baseY: 0.62, radius: 0.7, speedX: 0.5, speedY: 0.5, phase: 1.4 },
  { color: '160, 225, 215', baseX: 0.4, baseY: 0.18, radius: 0.45, speedX: 0.32, speedY: 0.28, phase: 3.3 },
]

// Peak opacity per blob, in the same order as BLOBS — kept low so the
// typography stays crisp on top; the highlight blob is dimmer still since
// it's the brightest hue.
const BLOB_ALPHA = [0.32, 0.32, 0.3, 0.3, 0.2]

const TIME_SPEED = 0.0006
const DRIFT = 0.18

export default function AirbrushGradientBackground({ className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let width = 0
    let height = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const renderFrame = (time: number) => {
      const t = time * TIME_SPEED
      const minDim = Math.min(width, height)

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (let i = 0; i < BLOBS.length; i++) {
        const blob = BLOBS[i]
        const cx = (blob.baseX + Math.sin(t * blob.speedX + blob.phase) * DRIFT) * width
        const cy = (blob.baseY + Math.cos(t * blob.speedY + blob.phase * 1.3) * DRIFT) * height
        const r = blob.radius * minDim

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${blob.color}, ${BLOB_ALPHA[i]})`)
        if (blob.edgeColor) {
          gradient.addColorStop(0.6, `rgba(${blob.edgeColor}, ${BLOB_ALPHA[i] * 0.7})`)
          gradient.addColorStop(1, `rgba(${blob.edgeColor}, 0)`)
        } else {
          gradient.addColorStop(1, `rgba(${blob.color}, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Fade all four edges to nothing so this blends into the solid-navy
      // background surrounding it — top/bottom into the header and the
      // section below, left/right into the page edges — instead of
      // stopping abruptly anywhere.
      ctx.globalCompositeOperation = 'destination-in'

      const verticalMask = ctx.createLinearGradient(0, 0, 0, height)
      verticalMask.addColorStop(0, 'rgba(0,0,0,0)')
      verticalMask.addColorStop(0.16, 'rgba(0,0,0,1)')
      verticalMask.addColorStop(0.84, 'rgba(0,0,0,1)')
      verticalMask.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = verticalMask
      ctx.fillRect(0, 0, width, height)

      const horizontalMask = ctx.createLinearGradient(0, 0, width, 0)
      horizontalMask.addColorStop(0, 'rgba(0,0,0,0)')
      horizontalMask.addColorStop(0.08, 'rgba(0,0,0,1)')
      horizontalMask.addColorStop(0.92, 'rgba(0,0,0,1)')
      horizontalMask.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = horizontalMask
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (time: number) => {
      renderFrame(time)
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    if (shouldReduceMotion) {
      renderFrame(0)
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [shouldReduceMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ filter: 'blur(55px)' }}
    />
  )
}
