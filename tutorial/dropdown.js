const { chromium } = require ('playwright');

const URL = 'https://the-internet.herokuapp.com/dropdown';
const dropdown_id = '#dropdown';
const option_1_label = "Option 1";
const option_2_value = "2";

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto(URL);

    const dropdown = await page.$(dropdown_id);
    // value
    await dropdown.selectOption({value: option_2_value});
    // label
    await dropdown.selectOption({label: option_1_label});
    // index
    await dropdown.selectOption({index: 2});

    await browser.close();
})();