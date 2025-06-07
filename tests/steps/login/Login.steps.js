const { Given, When } = require('@cucumber/cucumber');
const LoginInteractions = require('../../interactions/login/LoginInteractions.js');

Given('Eu abro a url', async function () {
    this.loginInteraction = new LoginInteractions(this.page);
    await this.loginInteraction.openUrl();  // Use sempre 'this'
});

When('Eu preencho o usuario {string} e a senha {string}', async function (usuario, senha) {
    await this.loginInteraction.fillUser(usuario);
    await this.loginInteraction.fillPassword(senha);
    await this.loginInteraction.clickAcessar();
});