import { chromium } from 'playwright'

const shotDir =
  '/private/tmp/claude-501/-Users-corinareitemeyer-devacademy-portfolio-website/742d67b0-6bfb-473a-8791-c9dcddee47bc/scratchpad'

const browser = await chromium.launch({ args: ['--no-sandbox'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
page.on('pageerror', (err) => errors.push(String(err)))

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForSelector('text=A designer')
await page.waitForTimeout(300)

// idle
await page.screenshot({ path: `${shotDir}/panel-idle.png` })

// hover first keyword
const kw1 = page.getByRole('button', { name: 'design systems', exact: true })
const kw2 = page.getByRole('button', { name: 'interface', exact: true })
const kw3 = page.getByRole('button', { name: 'code', exact: true })

await kw1.hover()
await page.waitForTimeout(200)
await page.screenshot({ path: `${shotDir}/panel-kw1.png` })

// rapid switch to adjacent keyword (simulates fast mouse movement across the sentence)
await kw2.hover()
await page.waitForTimeout(50)
await page.screenshot({ path: `${shotDir}/panel-kw2-fast.png` })

await kw3.hover()
await page.waitForTimeout(200)
await page.screenshot({ path: `${shotDir}/panel-kw3.png` })

// move mouse away entirely
await page.mouse.move(50, 50)
await page.waitForTimeout(80)
await page.screenshot({ path: `${shotDir}/panel-fading-out.png` })
await page.waitForTimeout(300)
await page.screenshot({ path: `${shotDir}/panel-gone.png` })

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))

await browser.close()
