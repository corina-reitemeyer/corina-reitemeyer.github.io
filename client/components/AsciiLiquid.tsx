import { useEffect, useRef } from 'react'

const GLYPHS = ' .\'`^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'

/** Compact value-noise field — enough for liquid swirl without a dependency. */
function createNoise2D(seed = 1) {
  const perm = new Uint8Array(512)
  let s = seed >>> 0
  for (let i = 0; i < 256; i++) {
    s = (s * 1664525 + 1013904223) >>> 0
    perm[i] = s & 255
  }
  for (let i = 0; i < 256; i++) perm[i + 256] = perm[i]

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t
  const grad = (hash: number, x: number, y: number) => {
    const h = hash & 3
    const u = h < 2 ? x : y
    const v = h < 2 ? y : x
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
  }

  return (x: number, y: number) => {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    const xf = x - Math.floor(x)
    const yf = y - Math.floor(y)
    const u = fade(xf)
    const v = fade(yf)
    const aa = perm[X + perm[Y]]
    const ab = perm[X + perm[Y + 1]]
    const ba = perm[X + 1 + perm[Y]]
    const bb = perm[X + 1 + perm[Y + 1]]
    return (
      lerp(
        lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
        lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
        v,
      ) * 0.5 +
      0.5
    )
  }
}

type Rgb = [number, number, number]

function mix(a: Rgb, b: Rgb, t: number): Rgb {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ]
}

/** Match site --ink; lean teal with a soft violet accent. */
const INK: Rgb = [18, 21, 26]
const VIOLET: Rgb = [62, 52, 110]
const TEAL_DEEP: Rgb = [26, 88, 98]
const TEAL: Rgb = [58, 152, 158]
const MIST: Rgb = [168, 212, 212]

/** Teal-forward wash with a hint of royal purple in the lows. */
function samplePalette(hue: number, brightness: number): Rgb {
  const h = Math.min(1, Math.max(0, hue))
  const b = Math.min(1, Math.max(0, brightness))
  // Bias toward teal so purple stays an accent, not the body.
  const chroma = mix(mix(VIOLET, TEAL_DEEP, 0.55), TEAL, 0.35 + h * 0.65)
  const lit = mix(chroma, MIST, b * b * 0.4)
  return mix(INK, lit, 0.28 + b * 0.48)
}

type AsciiLiquidProps = {
  className?: string
}

export function AsciiLiquid({ className = '' }: AsciiLiquidProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const noiseA = createNoise2D(19)
    const noiseB = createNoise2D(73)
    const noiseC = createNoise2D(141)

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let raf = 0
    let running = false
    let cell = 9
    let cols = 0
    let rows = 0
    let dpr = 1
    let width = 0
    let height = 0
    const t0 = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      cell = width < 640 ? 10 : 8
      cols = Math.ceil(width / cell)
      rows = Math.ceil(height / cell)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${cell * 1.05}px "JetBrains Mono", ui-monospace, monospace`
      ctx.textBaseline = 'top'
      ctx.textAlign = 'left'
    }

    const paint = (time: number) => {
      const elapsed = reducedMotion ? 0 : (time - t0) * 0.00028
      ctx.fillStyle = '#14181c'
      ctx.fillRect(0, 0, width, height)

      const aspect = width / Math.max(height, 1)

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const u = x / cols
          const v = y / rows
          const px = u * aspect * 2.8
          const py = v * 2.8

          // Curl-ish flow: sample noise offsets so glyphs drift in ribbons.
          const flow = noiseA(px * 0.5 + elapsed, py * 0.5 - elapsed * 0.85)
          const swirl = noiseB(
            px * 0.85 - flow * 1.8 + elapsed * 0.45,
            py * 0.85 + flow * 1.6 - elapsed * 0.32,
          )
          const detail = noiseC(
            px * 2.4 + swirl * 1.2,
            py * 2.4 - elapsed * 0.6,
          )

          // Brightness ribbons + a separate purple–teal hue field.
          const ridge =
            Math.sin((u * 3.2 + swirl * 2.4 - elapsed) * Math.PI) * 0.5 + 0.5
          const heat =
            swirl * 0.42 +
            detail * 0.18 +
            flow * 0.16 +
            ridge * 0.22 +
            (1 - Math.abs(u - 0.42) * 1.05) * 0.18 +
            (1 - Math.abs(v - 0.48) * 0.85) * 0.1

          const density = Math.min(1, Math.max(0, heat * 0.95 + 0.1))
          const hue = Math.min(
            1,
            Math.max(0, 0.35 + u * 0.45 + swirl * 0.25 + flow * 0.15),
          )
          const glyph =
            GLYPHS[
              Math.min(
                GLYPHS.length - 1,
                Math.floor(density * (GLYPHS.length - 1)),
              )
            ]
          const [r, g, b] = samplePalette(hue, density)
          const pxCell = x * cell
          const pyCell = y * cell

          ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`
          ctx.fillRect(pxCell, pyCell, cell + 0.5, cell + 0.5)

          const lift = Math.min(255, (r + 22) | 0)
          const liftG = Math.min(255, (g + 20) | 0)
          const liftB = Math.min(255, (b + 22) | 0)
          ctx.fillStyle = `rgba(${lift},${liftG},${liftB},${(0.35 + density * 0.4).toFixed(3)})`
          ctx.fillText(glyph, pxCell, pyCell)
        }
      }
    }

    const tick = (time: number) => {
      paint(time)
      if (running && !reducedMotion) raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running) return
      running = true
      if (reducedMotion) paint(performance.now())
      else raf = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()
    paint(performance.now())

    const ro = new ResizeObserver(() => {
      resize()
      if (!running) paint(performance.now())
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start()
        else stop()
      },
      { rootMargin: '12% 0px' },
    )
    io.observe(canvas)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`ascii-liquid ${className}`.trim()}
      aria-hidden="true"
    />
  )
}
