const { chromium } = require ('playwright');

const URL = 'https://the-internet.herokuapp.com/forgot_password';
const email_id = '#email';
const email_value = 'test@mail.com';

(async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto(URL);
    // code to type in email textbox
    const email = await page.$(email_id);
    await email.type(email_value, { delay : 50});
    await browser.close();
})();