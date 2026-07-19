import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5174/about', { waitUntil: 'networkidle' })

const shots = [
  ['Government, product', 'experience'],
  ['What I like to do', 'duo'],
  ['What drives the work', 'values'],
  ['Latin dance and the rooms', 'community'],
]
for (const [text, name] of shots) {
  const el = page.locator(`text=${text}`).first()
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await el.locator('xpath=ancestor::section[1]').screenshot({ path: `/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad/about-${name}.png` })
}
await browser.close()
