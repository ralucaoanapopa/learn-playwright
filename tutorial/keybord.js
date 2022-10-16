const { chromium } = require ('playwright');

const URL = 'https://the-internet.herokuapp.com/key_presses';

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto(URL);

    await page.click('input');
    await page.keyboard.type('THM first');
    await page.keyboard.down('Shift');
    
    for (let i = 0; i < 'first'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Delete');

    await page.keyboard.type('is better than this');

    await browser.close();
})();