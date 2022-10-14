const { chromium } = require ('playwright');


const c6_keynote = "(//button[@class='soundbutton noselect'])[1]";
const d3_keynote = "(//button[@class='soundbutton noselect'])[78]";
const g5_keynote = "(//button[@class='soundbutton noselect'])[33]";
const URL = 'https://www.apronus.com/music/lessons/unit01.htm';

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto(URL);
    // click on the keynotes
    await page.click(c6_keynote);
    await page.click(d3_keynote);
    await page.click(g5_keynote);

    await browser.close();
})();