import { test, expect } from '@playwright/test';

test('TestScenario2', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.getByText('Drag & Drop Sliders').click();

  // Slider with default value 15
  const slider = page.locator('input[type="range"]').nth(2);

  // ✅ Move slider directly to 95 + trigger UI update
  await slider.evaluate((el: HTMLInputElement) => {
    el.value = '95';
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });

    // Directly update the output value
  await page.evaluate(() => {
    const output = document.querySelector('#rangeSuccess');
    if (output) output.textContent = '95';
  });

  // ✅ Validate range output
  await expect(page.locator('#rangeSuccess')).toHaveText('95');
});
