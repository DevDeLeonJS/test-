import { defineConfig } from 'cypress';

import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-gpu')
        }
        return launchOptions
      })
    },
  },
})
