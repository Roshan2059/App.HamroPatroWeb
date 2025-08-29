import { test, expect } from '@playwright/test';
import { log } from 'console';
const finalUrl = 'https://app.hamropatro.com/';

test.beforeEach(async ({ page }) => {
  await page.goto(finalUrl);
  await page.waitForLoadState("domcontentloaded");
  // await page.pause();
});

test('Navigate to हाम्रो पे', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो पे' }).first().click();
  const expectedUrl = "https://pay.hamropatro.com/";
  await expect(page).toHaveURL(expectedUrl);
  await expect(page.getByText('HAMRO PAY')).toBeVisible();
  if (page.url() == expectedUrl && page.isVisible('text=HAMRO PAY')) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }

});

test('Navigate to हाम्रो मार्ट', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो मार्ट' }).first().click();
  const expectedUrl = "https://mart.hamropatro.com/";
  await expect(page).toHaveURL(expectedUrl);
  await expect(page.getByText('Hamro Mart')).toBeVisible();
  if (page.url() == expectedUrl && page.isVisible('text=Hamro Mart')) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('Navigate to हाम्रो ज्योतिष', async ({ page }) => {
  const finalUrl = "https://app.hamropatro.com/";

  // Click ज्योतिष
  await page.getByRole('button', { name: 'हाम्रो ज्योतिष' }).first().click();

  // Two possible URLs
  const expectedUrls = [
    "https://app.hamropatro.com/jyotish",
    "https://app.hamropatro.com/jyotish/call"
  ];

  // Wait for either heading
  const heading1 = page.getByRole('heading', { name: 'ज्योतिष परामर्श' });
  const heading2 = page.getByRole('heading', { name: 'अनलाइन ज्योतिषीहरु' });

  if (expectedUrls.includes(page.url()) && (await heading1.isVisible() || await heading2.isVisible())) {
    console.log("✅ Test passed: Successfully navigated to:", page.url());
  } else {
    console.log("❌ Test failed: Unexpected URL or missing heading. Actual URL:", page.url());
  }

  // Go back
  await page.goBack();

  if (page.url() === finalUrl) {
    console.log("✅ Test passed: Successfully navigated back to:", page.url());
  } else {
    console.log("❌ Test failed: Did not return to homepage. Actual URL:", page.url());
  }
});


test('Navigate to नोट्स / इभेन्टहरू', async ({ page }) => {
  await page.getByRole('button', { name: 'नोट्स / इभेन्टहरू' }).first().click();
  const expectedUrl = "https://app.hamropatro.com/notes";
  await expect(page).toHaveURL(expectedUrl);
  await expect(page.getByRole('heading', { name: 'Notes' , exact: true })).toBeVisible();
  if (page.url() == expectedUrl && page.isVisible('text=Notes')) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('Navigate to हाम्रो हेल्थ', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो हेल्थ' }).first().click();
  const expectedUrl = "https://health.hamropatro.com/";
  await expect(page).toHaveURL(expectedUrl);
  await expect(page.getByRole('heading', { name: 'विशेषज्ञसेवा' })).toBeVisible();
  if (page.url() == expectedUrl && page.getByRole('heading', { name: 'विशेषज्ञसेवा' }).isVisible()) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('Navigate to होटल बुकिङ', async ({ page }) => {
  const expectedUrl = "https://basiyo.com/partner/property";
  await page.getByRole('button', { name: 'होटल बुकिङ' }).first().click();
  await expect(page.getByText('Meals')).toBeVisible();
  if (page.url() == expectedUrl && page.isVisible('text=Meals')) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('Navigate to शेयर बजार', async ({ page }) => {
  const expectedUrl = "https://laganisutra.com/hamropatro";
  await page.getByRole('button', { name: 'शेयर बजार' }).first().click();
  await expect(page.getByText('Share')).toBeVisible();
  if (page.url() == expectedUrl && page.isVisible('text=Share')) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('navigate to पात्रो', async ({ page }) => {
  const expectedUrl = "https://app.hamropatro.com/calendar?v=patro";
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'पात्रो' }).first().click();
  await expect(page.locator('#patro')).toContainText('आइ सोम मंगल बुध बिहि शुक्र शनि');
  await expect(page).toHaveURL(expectedUrl);
  if (page.url() == expectedUrl && page.locator('#patro').isVisible()) {
    console.log("Test passed: Successfully navigated to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});

test('navigate to साइत', async ({ page }) => {
  const possibleUrls = [
    "https://app.hamropatro.com/sahit/2082",
    "https://app.hamropatro.com/sahit/2081"
  ];

  const finalUrl = "https://app.hamropatro.com/"; // update if back navigation is different

  // Navigate
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'साइत' }).first().click();

  const currentUrl = page.url();

  // Assert that current URL matches one of the possible options
  expect(possibleUrls).toContain(currentUrl);

  console.log("✅ Test passed: Successfully navigated to साइत: " + currentUrl);

  // Go back
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);

  if (page.url() === finalUrl) {
    console.log("✅ Test passed: Successfully navigated back to: " + page.url());
  } else {
    console.log('❌ URL mismatch after going back. Actual: ' + page.url());
  }
});

test('navigate to मिति परिवर्तन', async ({ page }) => {
  const possibleUrls = [
    "https://app.hamropatro.com/converter",
    "https://www.hamropatro.com/date-converter"
  ];

  const finalUrl = "https://app.hamropatro.com/"; // update this based on your app flow

  // Navigate
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'मिति परिवर्तन' }).first().click();

  // Check URL matches one of the expected
  const currentUrl = page.url();
  expect(possibleUrls).toContain(currentUrl);

  console.log("✅ Test passed: Successfully navigated to मिति परिवर्तन: " + currentUrl);

  // Go back
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);

  if (page.url() === finalUrl) {
    console.log("✅ Test passed: Successfully navigated back to: " + page.url());
  } else {
    throw new Error('❌ URL mismatch after going back. Actual: ' + page.url());
  }
});

test('navigate to बिदाहरू', async ({ page }) => {
  const expectedUrl = "https://app.hamropatro.com/events?breakout=y&v=0"; // replace if different
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'बिदाहरू' }).first().click();

  await expect(page).toHaveURL(expectedUrl);

  if (page.url() === expectedUrl) {
    console.log("✅ Test passed: Successfully navigated to बिदाहरू: " + page.url());
  } else {
    throw new Error('❌ बिदाहरू URL mismatch. Actual: ' + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(finalUrl);
  if (page.url() == finalUrl) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    throw new Error('URL did not match expected URL and the url was: ' + page.url());
  }
});