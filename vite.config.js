import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./client/test/setup.ts'],
    // Actually processes and injects Tailwind's generated CSS into jsdom, so
    // axe's color-contrast rule checks real computed colors, not defaults.
    css: true,
    // The longest case-study pages render a lot of DOM, and axe's
    // color-contrast rule is expensive -- the 5s default isn't enough.
    testTimeout: 20000,
  },
})
