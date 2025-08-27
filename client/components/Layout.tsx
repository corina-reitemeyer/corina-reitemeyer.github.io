import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import ScrollToTop from './ScrollToTop.tsx'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}
