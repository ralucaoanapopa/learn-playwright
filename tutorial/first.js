const { chromium } = require ('playwright');

const URL = 'https://google.com';

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto(URL);
    await browser.close();
})();