import { test, expect } from '@playwright/test';

test('TestScenario1', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.getByText('Simple Form Demo').click();
  await expect(page).toHaveURL(/simple-form-demo/);

  const message = 'Welcome to TestMu AI';

  await page.click('#user-message');
  await page.keyboard.type(message);

  await page.click('#showInput');

  await expect(page.locator('#message')).toHaveText(message);
});
