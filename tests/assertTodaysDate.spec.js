import { test, expect } from '@playwright/test';

test('validate date matches system date', async ({ page }) => {
  // Go to page
  await page.goto("https://app.hamropatro.com/"); // adjust if needed
  await page.pause();
  // Get the text from the given XPath
  let uiDate = await page.locator(
    "(//p[contains(@class,'font-semibold text-sm')])[1]"
).innerText();
uiDate = uiDate.replace(',', '');
  // Format system date in "MMM dd, yyyy" format
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const systemDate = new Date().toLocaleDateString('en-US', options)
    .replace(',', ''); // ensures "Aug 29, 2025" format

  console.log("📅 System Date:", systemDate);
  console.log("📅 UI Date:", uiDate);

  // Validate
  expect(uiDate).toBe(systemDate);

  if (uiDate === systemDate) {
    console.log("✅ Test Passed: System date matches UI date.");
  } else {
    console.log("❌ Test Failed: System date does not match UI date.");
  }

});
