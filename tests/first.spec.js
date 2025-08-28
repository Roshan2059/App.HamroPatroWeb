const { test, expect } = require("@playwright/test");

test("My first test", async ({ page }) => {
  await page.goto("https://app.hamropatro.com");
  await expect(page).toHaveURL("https://app.hamropatro.com/");
});

test("click Hamro Pay test", async ({ page }) => {
  await page.goto("https://app.hamropatro.com/");
  await page.waitForLoadState("load");
  await page.locator('text="हाम्रो पे"').first().click();
  await expect(page).toHaveURL("https://pay.hamropatro.com/");
  if (page.url() === "https://pay.hamropatro.com/") {
    console.log("Test passed: Successfully navigated to: " + page.url());
  } else {
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.close();
});

test("click Historical fiction test", async ({ page }) => {
  await page.goto(
    "https://mart.hamropatro.com/"
  );
  await page.waitForLoadState("load");
  await page.waitForTimeout(6000);
  await page.locator('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(4) > main:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > p:nth-child(2)').click();
  await expect(page).toHaveURL("https://mart.hamropatro.com/-NtH0x81PPRI4ovEA62h/categories");
  if (page.url() === "https://mart.hamropatro.com/-NtH0x81PPRI4ovEA62h/categories") {
    console.log("Test passed: Successfully navigated to: " + page.url());
  } else {
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.waitForTimeout(5000);

  await page.close();
});

