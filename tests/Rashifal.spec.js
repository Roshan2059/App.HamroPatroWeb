import { test, expect } from '@playwright/test';

test('RashifalTest', async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  // await page.pause();
  // await page.getByRole('button', { name: 'राशिफल' }).click();
  await page.locator('text=राशिफल').click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal');
  // await page.pause();
  // Daily
  await page.locator('text=मेष').first().click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/daily/Mesh');
  await page.textContent('text=मेष');
  if (await page.locator('text=मेष ( चु, चे, चो, ला, लि, लु, ले, लो, अ )').isVisible() && page.url() === 'https://www.hamropatro.com/rashifal/daily/Mesh') {
    console.log("✅ Test Passed: मेष is visible and URL is correct");
  } else {
    console.log("❌ Test Failed: मेष is not visible or URL is incorrect");
  }
  // Weekly
  await page.getByRole('link', { name: 'Weekly' }).click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/weekly/Mesh');
  await page.textContent('text=Weekly');
  if (await page.locator('text=मेष ( चु, चे, चो, ला, लि, लु, ले, लो, अ )').isVisible() && page.url() === 'https://www.hamropatro.com/rashifal/weekly/Mesh') {
    console.log("✅ Test Passed: Weekly horoscope is visible and URL is correct");
  } else {
    console.log("❌ Test Failed: Did not return to राशिफल page");
  }
  // Monthly
  await page.getByRole('link', { name: 'Monthly' }).click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/monthly/Mesh');
  await page.textContent('text=Monthly');
  if (await page.locator('text=मेष ( चु, चे, चो, ला, लि, लु, ले, लो, अ )').isVisible() && page.url() === 'https://www.hamropatro.com/rashifal/monthly/Mesh') {
    console.log("✅ Test Passed: Monthly horoscope is visible and URL is correct");
  } else {
    console.log("❌ Test Failed: Did not return to राशिफल page");
  }
  //Yearly
  await page.getByRole('link', { name: 'Yearly' }).click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/yearly/Mesh');
  await page.textContent('text=Yearly');
  if (await page.locator('text=मेष ( चु, चे, चो, ला, लि, लु, ले, लो, अ )').isVisible() && page.url() === 'https://www.hamropatro.com/rashifal/yearly/Mesh') {
    console.log("✅ Test Passed: Yearly horoscope is visible and URL is correct");
  } else {
    console.log("❌ Test Failed: Did not return to राशिफल page");
  }
  
  await page.locator('text=सिंह').first().click();
  await expect(page).toHaveURL('https://www.hamropatro.com/rashifal/daily/Singha');
  await page.textContent('text=सिंह');
  if (await page.locator('text=सिंह ( मा, मि, मु, मे, मो, टा, टि, टु, टे )').isVisible() && page.url() === 'https://www.hamropatro.com/rashifal/daily/Singha') {
    console.log("✅ Test Passed: सिंह is visible and URL is correct");
  } else {
    console.log("❌ Test Failed: सिंह is not visible or URL is incorrect");
  }
});