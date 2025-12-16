import { defineConfig } from 'cypress';
import 'dotenv/config'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(baseUrl);
          return null;
        },
      });
    },
    baseUrl: process.env.CYPRESS_baseUrl
  },
  
});
