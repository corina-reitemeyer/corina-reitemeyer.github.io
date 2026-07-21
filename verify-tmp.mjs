import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--no-proxy-server', '--proxy-bypass-list=*'],
})
const page = await browser.newPage({ viewport: { width: 375, height: 900 } })
await page.goto('http://127.0.0.1:5173/about', { waitUntil: 'networkidle' })
await page.evaluate(() => document.getElementById('community')?.scrollIntoView({ behavior: 'instant', block: 'start' }))
await page.waitForTimeout(1000)
await page.screenshot({ path: '/tmp/audit-mobile-community-fixed.png' })
await browser.close()
