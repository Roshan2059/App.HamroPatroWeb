import { test, expect } from '@playwright/test';

test('ClickRadioButtonTest', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.getByRole('button', { name: 'रेडियो' }).click();
  await expect(page).toHaveURL('https://www.hamropatro.com/radio');
  await page.getByText('Radio Stations', { exact: true }).click();
  await page.waitForTimeout(5000);
  if (page.url() === 'https://www.hamropatro.com/radio' && page.locator('h1').innerText() === 'Radio Stations') {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }
  else {
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
});