import '@testing-library/jest-dom/vitest'
// Not loaded via index.html in tests, so pull it in directly -- this is what
// lets axe's color-contrast rule check real Tailwind colors instead of
// jsdom's unstyled defaults.
import '../styles/main.css'
import { afterEach, expect, vi } from 'vitest'
import { toHaveNoViolations } from 'jest-axe'
import { cleanup } from '@testing-library/react'

expect.extend(toHaveNoViolations)

// Not using test.globals, so testing-library's own auto-cleanup detection
// doesn't kick in -- without this, unmount effects (which cancel the RAF
// loops driving scroll animations) never run between tests.
afterEach(cleanup)

// jsdom implements none of these, but the site's scroll-reveal animations,
// reduced-motion checks, and canvas background rely on them being present.
class MockIntersectionObserver {
  root = null
  rootMargin = ''
  thresholds: number[] = []
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
  takeRecords = () => []
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

class MockResizeObserver {
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
}
vi.stubGlobal('ResizeObserver', MockResizeObserver)

vi.stubGlobal(
  'matchMedia',
  vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
)

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (cb: FrameRequestCallback) =>
    window.setTimeout(() => cb(performance.now()), 0)
  window.cancelAnimationFrame = (id: number) => window.clearTimeout(id)
}

window.scrollTo = vi.fn() as unknown as typeof window.scrollTo

// jsdom has no canvas backend; the ASCII liquid background already bails
// out gracefully when getContext returns null, this just does that quietly
// instead of jsdom logging a "not implemented" error for it.
HTMLCanvasElement.prototype.getContext = vi.fn(
  () => null,
) as unknown as typeof HTMLCanvasElement.prototype.getContext
