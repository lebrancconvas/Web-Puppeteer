const puppeteer = require('puppeteer')

let puppet = async () => {
    const browser = await puppeteer.launch({headless: false , devtools: true})
    const page = await browser.newPage()
    await page.goto('https://wa-suta.world/')
    await console.log("The World Standard - Open!!")
}

puppet()