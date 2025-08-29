 import { test, expect } from '@playwright/test';

test('assertTodaysTime', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.waitForLoadState('load');
  // await page.pause();
  await page.locator('.clickable.outline-none.flex > .outline-none').first().click();
  await page.getByRole('button', { name: 'भाषा नेपाली' }).click();
  await page.getByRole('button', { name: 'English' }).click();
  // await page.getByRole('button', { name: 'Membership' }).click();
  await expect(page.getByRole('button', { name: 'Membership' })).toBeVisible();

  // Close the sheet
  await page.locator("#sheet-close-btn").click();

  await page.waitForTimeout(2000);
const timeLocator = page.locator("//p[contains(@class,'font-bold')]/div/span");
  await expect(timeLocator.first()).toBeVisible();

  // Join spans and clean up whitespace/newlines
  const spans = await timeLocator.allInnerTexts();
  const uiTime = spans.join('').replaceAll(/\s+/g, '').trim(); // "04:13PM"
  console.log("🕒 UI Time from Hamro Patro:", uiTime);

  // System time in same format
  const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kathmandu' };
  const systemTime = new Date().toLocaleTimeString('en-US', options).replace(" ", "")+"NPT";
  console.log("🖥️ System Time:", systemTime);

  expect(uiTime).toBe(systemTime);

  if (uiTime === systemTime) {
    console.log("✅ Test Passed: UI time matches System time");
  } else {
    console.log("❌ Test Failed: UI time does not match System time");
  }
});
