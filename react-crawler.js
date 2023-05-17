const puppeteer = require('puppeteer');
const fs = require('fs').promises;


(async() => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://mailchimp.com/presents/", {
        waitUntil: 'networkidle0',
    });

    const descs = await page.evaluate(() => {
        
         return Array.from(document.querySelectorAll(".ShowCard-hoverDescription p")).map( x => x.textContent)

    });

    console.log(descs)

    await browser.close();
    
})(); 
