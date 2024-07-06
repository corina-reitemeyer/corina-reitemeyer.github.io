import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
