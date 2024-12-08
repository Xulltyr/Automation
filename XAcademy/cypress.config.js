const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Definimos el reporte a utilizar
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mi Reporte',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Configura los eventos de Node para que el plugin funcione
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    chromeWebSecurity: false
  },
});
