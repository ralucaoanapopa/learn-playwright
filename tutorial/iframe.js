const { webkit } = require ('playwright');

const URL = 'https://demoqa.com/frames';

(async() => {
    //function code
    const browser = await webkit.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto(URL);

    const frame_one = page.frame({url: /\/sample/});
    const heading_one = await frame_one.$('h1');
    console.log(await heading_one.innerText());
    
    await browser.close();
})();