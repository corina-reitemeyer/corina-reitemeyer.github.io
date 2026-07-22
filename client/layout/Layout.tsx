import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollToTopButton from './ScrollToTopButton'

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-ink focus:outline-none focus:ring-2 focus:ring-focus"
      >
        Skip to main content
      </a>

      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none"
      >
        <ScrollToTop />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
