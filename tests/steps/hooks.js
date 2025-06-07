const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000); // Timeout global

// Before hook: abre browser, context, page
Before(async function () {
    this.browser = await chromium.launch({ headless: false, slowMo: 100 });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

// After hook: tira screenshot e fecha tudo
After(async function (scenario) {
    if (this.page) {
        const status = scenario.result.status;
        const safeName = scenario.pickle.name
            .replace(/ /g, '_')
            .replace(/[^a-zA-Z0-9_]/g, '');
        const screenshotDir = path.resolve('reports/screenshots');
        const screenshotPath = path.join(screenshotDir, `${safeName}_${status}.png`);
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }
        await this.page.screenshot({ path: screenshotPath });

        if (!this.attach) this.attach = () => {};
        const file = fs.readFileSync(screenshotPath);
        this.attach(file, 'image/png');
    }
    if (this.page && typeof this.page.close === 'function')
        await this.page.close();

    if (this.context && typeof this.context.close === 'function')
        await this.context.close();

    if (this.browser && typeof this.browser.close === 'function')
        await this.browser.close();
});