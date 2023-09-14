const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5xrpp5",
  reporter: 'cypress-mochawesome-reporter',


  e2e: {
    baseUrl: 'https://one-pre.kube.vged.es/home',
    browser: 'chrome',
    chromeWebSecurity: false,
    failOnStatusCode: false,
    video: false,
    viewportWidth: 1500,
    viewportHeight: 900,
    defaultCommandTimeout: 15000,
    excludeSpecPattern:[
      '*/*/3-curso',
      '*/*/cucumber',
      '*/*/example'   
    ],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //on('file:preprocessor', cucumber());
    },  
    //specPattern:"cypress/e2e/cucumber/*.feature",   
     
  }, 
    
});

