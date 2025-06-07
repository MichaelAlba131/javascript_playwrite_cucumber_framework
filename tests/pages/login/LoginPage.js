class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.txtEmail = page.locator('[name="email"]');
        this.txtPass = page.locator('[name="password"]');
        this.btnAcessar = page.locator('//div[contains(text(),"Entrar")]//ancestor::button');
    }
}

module.exports = LoginPage;