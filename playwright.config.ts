import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  fullyParallel: true,

  use: {
    headless: true,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'Chromium-Windows',
      use: { browserName: 'chromium' },
    },
  ],
});
