const { chromium } = require ('playwright');

const URL = 'https://demoqa.com/books';
const search_field = '#searchBox';
const first_row_selector = ".ReactTable .rt-tr-group:nth-child(1) .rt-td";
const book_title = 'Eloquent JavaScript, Second Edition';
const author = 'Marijn Haverbeke';
const publisher = 'No Starch Press';

describe(`UI tests for bookstore using playwright`, ()=> {
    jest.setTimeout(10000);
    let browser = null;
    let page = null;
    let context = null;
    let firstRowCells = null;

    beforeAll(async() =>{
        browser = await chromium.launch({headless: false, slowMo: 300});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(URL);
    });

    afterAll(async() =>{
        await browser.close();
    });

    test(`Should load page`, async() =>{
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test(`Should be able to search for eloquent javascript`, async() =>{
        await page.fill(search_field, 'eloquent');
    });

    test(`Should check if book image is okay`, async() =>{
        firstRowCells = await page.$$(first_row_selector);
        console.log(firstRowCells.length);
        let imgUrl = await firstRowCells[0].$('img');
        expect(await imgUrl.getAttribute('src')).not.toBeNull();
    });

    test(`Should check if title is okay`, async() =>{
        expect(await firstRowCells[1].innerText()).toBe(book_title);
    });

    test(`Should check if author is okay`, async() =>{
        expect(await firstRowCells[2].innerText()).toBe(author);
    });

    test(`Should check if publisher is okay`, async() =>{
        expect(await firstRowCells[3].innerText()).toBe(publisher);
    });
});
