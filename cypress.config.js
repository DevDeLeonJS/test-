import { defineConfig } from 'cypress';
import 'dotenv/config'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_baseUrl
  },
  
});
