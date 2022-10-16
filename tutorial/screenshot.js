const { chromium } = require ('playwright');

const URL = 'https://testautomationu.applitools.com/';
const logo_class = '.logo';

(async() => {
    //function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    await page.screenshot({path: "save_img/screenshot.png"});

    const logo = await page.$(logo_class);
    await logo.screenshot({path: 'save_img/api_tools_logo.png'});

    await page.screenshot({path: "save_img/screenshot_full.png", fullPage:true});

    await browser.close();
})();