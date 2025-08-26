import { test, expect } from '@playwright/test';

test('ClickRadioButtonTest', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.getByRole('button', { name: 'रेडियो' }).click();
  await expect(page).toHaveURL('https://www.hamropatro.com/radio');
  await page.getByText('Radio Stations', { exact: true }).click();
  await page.waitForTimeout(5000);
});