<h1 align="center">🔐 Testes E2E com Playwright + CucumberJS</h1>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" width="50"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" width="50"/>
</p>

<p align="center">
  <b>Framework robusto de automação E2E para aplicações web</b><br/>
  <i>JavaScript • Playwright • Cucumber | Gherkin</i>
</p>

<hr/>

<h2>✨ Visão Geral</h2>
<p>
  Este framework oferece uma abordagem moderna de testes end-to-end baseada em BDD (Behavior-Driven Development), garantindo a validação dos fluxos essenciais da aplicação, como autenticação de usuários. Foco em modularidade, manutenção e escalabilidade.
</p>

<h2>🗂️ Estrutura do Projeto</h2>
<pre>
tests/
├── features/        # Cenários BDD (Gherkin)
│   └── login/
│       └── Login.feature
├── interactions/    # Regras de negócio (ações de usuário)
│   └── login/
│       └── LoginInteractions.js
├── pages/           # Page Objects (mapeamento de elementos)
│   └── login/
│       └── LoginPage.js
└── steps/           # Step Definitions e Hooks
    ├── hooks.js
    └── login/
        └── Login.steps.js
</pre>


## 🚀 Como Executar

Instale as dependências:
   ```bash
     npm install
   ```

Execute todos os testes:
   ```bash
     npm test
   ```

Testes paralelos:
   ```bash
     npm run test:parallel2
     npm run test:parallel3
     npm run test:parallel4
   ```

Filtre por tags:
   ```bash
     npm run test:tag
   ```


<h2>⚙️ Tecnologias</h2>
<ul>
  <li>🌐 <b>Playwright</b> – Automação cross-browser</li>
  <li>🥒 <b>CucumberJS</b> – Sintaxe Gherkin (BDD)</li>
  <li>🟩 <b>JavaScript</b> ES6+</li>
  <li>📊 <b>Relatórios HTML</b> & Evidências visuais</li>
</ul>

<h2>📄 Exemplo de Cenário</h2>
<pre>
@FeatureLogin
Funcionalidade: Login

  @Login
  Esquema do Cenário: Fazer login - "&lt;usuario&gt;"
    Dado Eu abro a url
    Quando Eu preencho o usuario "&lt;usuario&gt;" e a senha "&lt;senha&gt;"
    Exemplos:
      | usuario            | senha    |
      | email1@exemplo.com | teste123 |
      | email2@exemplo.com | teste123 |
</pre>

<h2>🔎 Relatórios & Evidências</h2>
<ul>
  <li>Captura automática de screenshots por cenário</li>
  <li>Evidências estruturadas para análise pós-execução</li>
</ul>

<h2>🛠️ Personalização</h2>
<ul>
  <li>Suporte a <b>Chrome, Firefox, Safari (WebKit)</b></li>
  <li>Execução visível ou <code>headless</code> configurável</li>
  <li>Timeouts, paralelismo e traces ajustáveis (<code>playwright.config.js</code>)</li>
</ul>

<hr/>


<h2>🪪 Licença</h2>
<p>
Distribuído sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais informações.
</p>

<br>
<p align="center">🚀 Framework de automação pronto para evoluir com seu time!<br>
