import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,

  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify({
          browserName: 'Chrome',
          browserVersion: 'latest',
          platform: 'Windows 11',
          'LT:Options': {
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
            project: 'Playwright TS Hackathon',
            build: 'GitHub TS Build',
            name: 'LambdaTest Session',
            network: true,
            video: true,
            console: true,
            github: {
              repo: ' kishore2k2/lamdatest', // Replace with your GitHub repo
              branch: 'main'
            }
          }
        })
      )}`     
    }
  }
});
