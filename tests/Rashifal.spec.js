import { test, expect } from '@playwright/test';

test('RashifalTest', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  // await page.pause();
  // await page.getByRole('button', { name: 'राशिफल' }).click();
  await page.locator('text=राशिफल').click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal');
  // await page.pause();
  await page.locator('text=मेष').first().click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/daily/Mesh');
  await page.waitForTimeout(5000);
});