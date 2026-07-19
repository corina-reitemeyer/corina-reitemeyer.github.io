import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5174/about', { waitUntil: 'networkidle' })

const sections = ['Government, product', 'What I like to do', 'What drives the work', 'Latin dance and the rooms']
for (const text of sections) {
  const el = page.locator(`text=${text}`).first()
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  const opacity = await el.evaluate((e) => getComputedStyle(e.closest('section')).opacity)
  const sectionOpacity = await el.evaluate((e) => getComputedStyle(e).opacity)
  console.log(text, '-> section opacity:', opacity, 'element opacity:', sectionOpacity)
}
await browser.close()
