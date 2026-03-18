import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return createPortal(
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#08082a] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08082a] motion-reduce:hover:scale-100 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span className="translate-y-px leading-none">Scroll up</span>
    </button>,
    document.body,
  )
}
