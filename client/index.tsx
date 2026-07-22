import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)

const rootElement = document.getElementById('app')
if (!rootElement) {
  throw new Error(
    '[main.tsx] Could not find #app root element. ' +
      'Ensure your index.html contains <div id="app"></div>.',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
