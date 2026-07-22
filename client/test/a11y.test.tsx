import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { axe } from 'jest-axe'
import routes from '../routes'

/** Every real path in the site -- one per page, plus one of each dynamic
 *  case-study slug so their content actually renders. */
const paths = [
  '/',
  '/selected-work',
  '/digital-product/moe-design-system',
  '/digital-product/ow-templates',
  '/digital-product/suitefiles-design-system',
  '/digital-product/suitefiles-ai-summary',
  '/learning-experience/building-adaptive-teams',
  '/playground',
  '/about',
  '/contact',
]

describe('accessibility', () => {
  it.each(paths)('%s has no axe violations', async (path) => {
    const router = createMemoryRouter(routes, { initialEntries: [path] })
    const { container } = render(<RouterProvider router={router} />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
