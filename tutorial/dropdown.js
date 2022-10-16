const { chromium } = require ('playwright');

const URL = 'https://the-internet.herokuapp.com/dropdown';
const dropdown_id = '#dropdown';
const option_1_label = "Option 1";
const option_2_value = "2";

(async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto(URL);

    const dropdown = await page.$(dropdown_id);
    // value
    await dropdown.selectOption({value: option_2_value});
    // label
    await dropdown.selectOption({label: option_1_label});
    // index
    await dropdown.selectOption({index: 2});

    // values inside
    const available_options = await dropdown.$$('option');
    for ( let i = 0; i < available_options.length; i++){
        console.log(await available_options[i].innerText());
    }
    


    await browser.close();
})();