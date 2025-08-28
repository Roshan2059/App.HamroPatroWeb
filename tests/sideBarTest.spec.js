import { test, expect } from '@playwright/test';
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
