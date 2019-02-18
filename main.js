const puppeteer = require('puppeteer')

(async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://www.youtube.com/user/tv11cm/videos?view=0&sort=da&flow=grid')
    await console.log("Puppeteer Complete.")
})()