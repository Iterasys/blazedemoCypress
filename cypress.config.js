const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080, // resolução de tela
    viewportWidth: 1920,
    baseUrl: 'https://www.blazedemo.com', // endereço do software alvo
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
