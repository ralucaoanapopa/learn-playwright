const { chromium } = require ('playwright');

const URL = 'https://demoqa.com/alerts';
const button_one = '#alertButton';
const button_three = '#confirmButton';
const button_four = '#promtButton';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto(URL);

    // create a listener in order to accept
    // by default playwright automaticaly dismisses dialogs
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click(button_one);

    await sleep(1000);

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click(button_three);

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('test this enter text inside alert');
        await sleep(1000);
    });
    await page.click(button_four);

    await browser.close();
})();