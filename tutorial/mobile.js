const { chromium, devices } = require ('playwright');

const iPhone = devices['iPhone 11'];
const URL = 'https://www.google.com/maps/';

(async() => {
    // mobile code
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation: { latitude: 46.7110668, longitude: 22.827153 },
        locale: 'fr-FR'
    });

    const page = await context.newPage();
    await page.goto(URL);

    await browser.close();
})();