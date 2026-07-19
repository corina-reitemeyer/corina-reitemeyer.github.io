import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5174/about', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.screenshot({ path: '/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad/about-hero-v2.png', clip: { x: 0, y: 0, width: 1440, height: 620 } })

const introSection = page.locator('text=Who I am').first().locator('xpath=ancestor::section[1]')
await introSection.screenshot({ path: '/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad/about-intro-v2.png' })
await browser.close()
