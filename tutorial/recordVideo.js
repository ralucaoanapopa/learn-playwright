const { chromium } = require ('playwright');

const URL = 'https://the-internet.herokuapp.com/dynamic_loading/1';
const start_btn = 'button';
const loading_id = '#loading';

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});

    const context = await browser.newContext({
        recordVideo: {
            dir:"./recordings"
        }
    });
    // see that used context when instance a new page.
    const page = await context.newPage();
    await page.goto(URL);

    await page.click(start_btn);
    await page.waitForSelector(loading_id);
    await page.waitForSelector(loading_id, {state: 'hidden'});

    await browser.close();
})();