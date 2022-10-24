# Note
This is created based on [Playwright course](https://testautomationu.applitools.com/js-playwright-tutorial) from [Test Automation University](https://testautomationu.applitools.com/) by instructor [Ixchel Meza](https://github.com/ixmeza)

# Setup

Download [nodejs](https://nodejs.org/en/download/) + [how to install nodejs](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

Execute in terminal:
> npm init -y

> npm i -D playwright

> npm install -D jest

> npm i -D @applitools/eyes-playwright

# Run tests written in page-object-model
> npm test

 ! In order for `jest` to ignore other test files (from tests folder), updated `package.json`:
```
 "jest":{
    "testPathIgnorePatterns":["/tests/"]
  },
```

# Resources

## Tools
- [Playwright](https://playwright.dev/docs/intro)
- [JEST - javascript testing framework](https://jestjs.io/)

## Documentation
- [Playwright course](https://testautomationu.applitools.com/js-playwright-tutorial)
- [Docs Playwright: Page Object Models](https://playwright.dev/docs/pom)
- [Page Object Models - Selenium docs](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
- [How to use Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Free websites for UI testing
- [Available UI elements](https://the-internet.herokuapp.com/)
- [Available UI elements, forms, widgets](https://demoqa.com/)
- [Demo applitools](https://demo.applitools.com/)

Extra tool:
- [Applitools: Eyes](https://applitools.com/tutorials/quickstart/web/playwright/typescript)

Playwright CLI:
> npx playwright codegen <URL>

After launching Playwright Inspector => choose Library (in order to generate js code)