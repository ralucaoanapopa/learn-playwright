const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('a:has-text("1")').click();
  await page.waitForURL('https://www.saucedemo.com/cart.html');

  await page.locator('[data-test="checkout"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');

  await page.locator('[data-test="firstName"]').click();

  await page.locator('[data-test="firstName"]').fill('STandard');

  await page.locator('[data-test="firstName"]').press('Tab');

  await page.locator('[data-test="lastName"]').fill('User');

  await page.locator('[data-test="lastName"]').press('Tab');

  await page.locator('[data-test="postalCode"]').fill('28002');

  await page.locator('[data-test="continue"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');

  await page.locator('[data-test="finish"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');

  // ---------------------
  await context.close();
  await browser.close();
})();