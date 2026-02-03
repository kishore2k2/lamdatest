import { test, expect } from '@playwright/test';

test('TestScenario3', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.getByText('Input Form Submit').click();

  const submitBtn = page.locator('//button[text()="Submit"]');

  await submitBtn.click({ force: true });

 const form = page.locator('#seleniumform');
  const isValid = await form.evaluate((f: HTMLFormElement) => f.checkValidity());
  console.log('Form valid?', isValid); // false if required fields are empty

  expect(isValid).toBe(false); 

  // Now fill the form completely
const fields = [
  { selector: 'input[name="name"]', value: 'kishore' },
  { selector: '#inputEmail4', value: 'kishore@test.com' },
  { selector: '#inputPassword4', value: 'Test@1234' },
  { selector: 'input[name="company"]', value: 'kishore Inc' },
  { selector: '#websitename', value: 'https://kishore.com' },
  { selector: '#inputCity', value: 'New York' },
  { selector: '#inputAddress1', value: '123 Main St' },
  { selector: '#inputAddress2', value: 'Code 456' },
  { selector: '#inputState', value: 'NY' },
  { selector: '#inputZip', value: '457845' }
];

for (const field of fields) {
  const element = page.locator(field.selector);
  await element.waitFor({ state: 'visible' });
  await element.fill(field.value);
}

const countrySelect = page.locator('select').nth(0);
await countrySelect.waitFor({ state: 'visible' });
await countrySelect.selectOption({ label: 'United States' });

await submitBtn.click();

  // 6️⃣ Validate success message
  const successMessage = page.locator('text=Thanks for contacting us, we will get back to you shortly.');
  await expect(successMessage).toBeVisible();

});

