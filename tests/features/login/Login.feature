@FeatureLogin
Feature: Login

  @Login
  Scenario Outline: Fazer login - "<usuario>"
    Given Eu abro a url
    When Eu preencho o usuario "<usuario>" e a senha "<senha>"
    Examples:
      | usuario            | senha    |
      | email1@exemplo.com | teste123 |
      | email2@exemplo.com | teste123 |
      | email3@exemplo.com | teste123 |
      | email4@exemplo.com | teste123 |