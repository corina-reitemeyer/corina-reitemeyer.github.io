# Corina Reitemeyer — Portfolio

Personal portfolio site for Corina Reitemeyer, Product & Learning Designer. Live at [corina-reitemeyer.github.io](https://corina-reitemeyer.github.io/).

## Stack

- React + TypeScript, built with Vite
- React Router (`createBrowserRouter`)
- Tailwind CSS, with Framer Motion for animation
- Sofia Pro (Adobe Fonts/Typekit)

## Pages

- **Home** (`/`) — landing page
- **Designing** (`/digital-products`) — product design case studies
- **Elearning** (`/learning-experiences`) — learning experience design case studies
- **Making** (`/making`) — side projects and experiments
- **About** (`/about`)
- Individual case studies live at `/digital-product/:slug` and `/learning-experience/:slug`

## Local development

```
npm install
npm run dev
```

This starts the Vite dev server at [http://localhost:5173](http://localhost:5173).

## Other scripts

```
npm run build    # production build
npm run lint      # eslint
npm run format    # prettier
```

## Deployment

The site is static and deploys automatically via GitHub Actions (`.github/workflows/static.yml`) on every push to `main` — no manual deploy step needed. A custom `public/404.html` handles deep-linking on GitHub Pages by redirecting unmatched paths back through `index.html` so client-side routing can take over.
