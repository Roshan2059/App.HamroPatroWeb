import { test, expect } from '@playwright/test';

test('changeLanguageTest', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.waitForLoadState('load');
  // await page.pause();
  await page.locator('.clickable.outline-none.flex > .outline-none').first().click();
  await page.getByRole('button', { name: 'भाषा नेपाली' }).click();
  await page.getByRole('button', { name: 'English' }).click();
  // await page.getByRole('button', { name: 'Membership' }).click();
  await expect(page.getByRole('button', { name: 'Membership' })).toBeVisible();
  if (await page.getByRole('button', { name: 'Membership' }).isVisible()) {
    console.log("✅ Test Passed: Membership button is visible and content change to english.");
  } else {
    console.log("❌ Test Failed: Membership button is not visible. Content not changed to Nepali");
  }
});