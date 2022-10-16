const { firefox } = require ('playwright');

const URL = 'https://www.w3schools.com/howto/howto_css_custom_checkbox.asp';
const locator_list_checkboxes = "#main div :nth-child(1) input[type='checkbox']";
const locator_list_radiobuttons = "#main div :nth-child(1) input[type='radio']";

(async() => {
    //function code
    const browser = await firefox.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto(URL);
    // check the second checkbox
    const checks = await page.$$(locator_list_checkboxes);
    await checks[1].check();
    await checks[0].uncheck();
    //select the second radio button
    const selects = await page.$$(locator_list_radiobuttons);
    await selects[1].check();

    await browser.close();
})();