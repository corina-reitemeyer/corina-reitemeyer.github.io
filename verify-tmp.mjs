import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
page.on('pageerror', (err) => errors.push(String(err)))

await page.goto('http://localhost:5174/about', { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
await page.screenshot({ path: '/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad/about-full.png', fullPage: true })

// Test community tab keyboard nav
const firstTab = page.getByRole('tab', { name: 'Latin dance' })
await firstTab.focus()
await page.keyboard.press('ArrowRight')
const secondTabSelected = await page.getByRole('tab', { name: 'Teaching & sharing' }).getAttribute('aria-selected')
console.log('after ArrowRight, teaching tab selected:', secondTabSelected)
await page.waitForTimeout(200)
await page.locator('#community').screenshot({ path: '/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad/community-tab2.png' })

// Test photo wiggle hover
const photo = page.locator('img[alt="Corina Reitemeyer"]')
await photo.scrollIntoViewIfNeeded()
await photo.hover()
await page.waitForTimeout(150)
const transform = await photo.evaluate((el) => getComputedStyle(el).transform)
console.log('photo transform mid-hover:', transform)

console.log('console errors:', errors)
await browser.close()
