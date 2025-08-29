const {test, expect} = require('@playwright/test');

test('festivalSearchtest', async ({ page }) => {
    await page.goto('https://app.hamropatro.com/');
    await page.waitForLoadState('load');
    await page.locator('(//div[@role="button"])[2]').click();
    await page.locator('//input[@id="input-search"]').fill('shivaratri');
    await page.pause();
    await page.keyboard.press('Enter');
    await expect(page.locator('body')).toContainText('महा शिवरात्री');
    await page.waitForTimeout(5000);
});