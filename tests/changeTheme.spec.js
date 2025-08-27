import { test, expect } from '@playwright/test';

test('verify color change from * after theme toggle', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.waitForLoadState('load');

    await page.pause();
  // Get initial color from html (inherits from * selector)
  const initialColor = await page.locator('html').evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  console.log('Initial Background Color was:', initialColor);

  if (initialColor !== 'rgb(0, 0, 0)' && initialColor !== 'rgb(246, 246, 246)') {
    console.log("Initial color is neither black nor white. The test case may not be valid.");
  }

  await page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)').click();


  // Click toggle theme button
  await page.getByRole('button', { name: 'Toggle theme', exact: true }).click();
  await page.waitForTimeout(2000);

  // Get final color after theme toggle
  const finalColor = await page.locator('html').evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  console.log('Final Background Color is:', finalColor);

  try {
    if (initialColor === 'rgb(0, 0, 0)') {
      expect(finalColor).toBe('rgb(246, 246, 246)');
      console.log("The color changed from black to white.The test case is passed.And the  color code was", finalColor);
    }else{
      expect(finalColor).toBe('rgb(0, 0, 0)');
      console.log("The color changed from white to black.The test case is passed.And the  color code was", finalColor);
    }
  } catch (error) {
    console.log("The color was not either black or white.SO the test cases was failed. ANd the color code was" + "finalColor:",  finalColor + "Initial color was:" , initialColor);
  }
  // Assert that the color actually changed
  expect(initialColor).not.toBe(finalColor);
});
