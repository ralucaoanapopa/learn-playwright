const { chromium } = require ('playwright');
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright');

const URL = 'https://the-internet.herokuapp.com/dynamic_content';
const search_field = '#searchBox';
const first_row_selector = ".ReactTable .rt-tr-group:nth-child(1) .rt-td";
const book_title = 'Eloquent JavaScript, Second Edition';
const author = 'Marijn Haverbeke';
const publisher = 'No Starch Press';

describe(`UI tests for dynamic content using playwright and applitools`, ()=> {
    jest.setTimeout(50000);
    let browser = null;
    let page = null;
    let context = null;
    const eyes = new Eyes(new ClassicRunner());

    beforeAll(async() =>{
        browser = await chromium.launch({headless: false, slowMo: 300});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(URL);
    });

    afterAll(async() =>{
        await browser.close();
    });

    test(`Should look okay`, async() =>{
        await page.waitForSelector('h3', {state: 'attached'});
        await eyes.open(page, 'the internet', 'Dynamic content', new RectangleSize(800, 600));
        await eyes.check(Target.window().fully());
        await eyes.close();
    });


});