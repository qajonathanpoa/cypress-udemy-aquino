const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  video: false,
  e2e: {
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env:{
      allureResultsPath: "allure-results",
      allureAddVideoOnPass: true
    }
    
  },
 
});
