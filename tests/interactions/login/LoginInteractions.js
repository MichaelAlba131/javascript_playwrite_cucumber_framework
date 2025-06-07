const LoginPage = require('../../pages/login/LoginPage');

class LoginInteractions extends LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
    }

    async openUrl() {
        await this.page.goto('https://login.dafiti.com.br/');
        return this;
    }

    async fillUser(user) {
        await this.txtEmail.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtEmail.fill(user);
        return this;
    }

    async fillPassword(password) {
        await this.txtPass.fill(password);
        return this;
    }

    async clickAcessar() {
        await this.btnAcessar.click();
        return this;
    }
}

module.exports = LoginInteractions;
