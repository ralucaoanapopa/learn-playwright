const { chromium } = require ('playwright');

const URL = 'https://demoqa.com/automation-practice-form';
const id_first_name = '#firstName';
const sports = '#hobbies-checkbox-1';
const id_submit = '#submit';

(async() => {
    //function code
    const browser = await chromium.launch({slowMo: 100});
    const page = await browser.newPage();
    await page.goto(URL);

    const firstName = await page.$(id_first_name);
    const sportsCheck = await page.$(sports);
    const submitBtn = await page.$(id_submit);

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());

    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isEditable());

    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());

    await browser.close();
})();