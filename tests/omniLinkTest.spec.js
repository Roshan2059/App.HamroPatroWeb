import { test, expect } from '@playwright/test';
import { info } from 'console';

const baseURL = "https://app.hamropatro.com/";

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForLoadState("load");
//   await page.pause();
  await page.getByText('View More', { exact: false }).click();
  
});

test('पात्रो button navigation', async ({ page }) => {
  await page.getByText('पात्रो', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/calendar\?v=patro/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  console.log("पात्रो button navigation test passed");
});

test('ताजा समाचार button navigation', async ({ page }) => {
  await page.getByText('ताजा समाचार', { exact: false }).click();
  await expect(page).toHaveURL(/news/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('रेडियो button navigation', async ({ page }) => {
  await page.getByText('रेडियो', { exact: false }).click();
  await expect(page).toHaveURL(/radio/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('राशिफल button navigation', async ({ page }) => {
  await page.getByText('राशिफल', { exact: false }).click();
  await expect(page).toHaveURL(/rashifal/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('हाम्रो ज्योतिष button navigation', async ({ page }) => {
  await page.getByText('हाम्रो ज्योतिष', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/jyotish/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('हाम्रो पे button navigation', async ({ page }) => {
  await page.getByText('हाम्रो पे', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/pay/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('हाम्रो हेल्थ button navigation', async ({ page }) => {
  await page.getByText('हाम्रो हेल्थ', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/health/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('हाम्रो मार्ट button navigation', async ({ page }) => {
  await page.getByText('हाम्रो मार्ट', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/mart/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('विनिमय दर button navigation', async ({ page }) => {
  await page.getByText('आजको विनिमय दर', { exact: false }).click();
  await expect(page).toHaveURL(/forex/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('होटल बुकिङ button navigation', async ({ page }) => {
  await page.getByText('होटल बुकिङ', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/basiyo/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('सुन/चाँदी button navigation', async ({ page }) => {
  await page.getByText('सुन/चाँदी', { exact: false }).click();
  await expect(page).toHaveURL(/gold/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('नयाँ शेयर बजार button navigation', async ({ page }) => {
  await page.getByText('नयाँ शेयर बजार', { exact: false }).click();
  await expect(page).toHaveURL(/laganisutra/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('ब्लग button navigation', async ({ page }) => {
  await page.getByText('ब्लग', { exact: false }).click();
  await expect(page).toHaveURL(/posts/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('सिनेमा button navigation', async ({ page }) => {
  await page.getByText('सिनेमा', { exact: false }).click();
  await expect(page).toHaveURL(/hamropatro-blog/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('अडियो / पोड्काष्ट button navigation', async ({ page }) => {
  await page.getByText('अडियो / पोड्काष्ट', { exact: false }).click();
  await expect(page).toHaveURL(/podcasts/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('मिति परिवर्तन button navigation', async ({ page }) => {
  await page.getByText('मिति परिवर्तन', { exact: false }).click();
  await expect(page).toHaveURL(/converter/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('साइत button navigation', async ({ page }) => {
  await page.getByText('साइत', { exact: false }).click();
  await expect(page).toHaveURL(/sahit/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('क्विज button navigation', async ({ page }) => {
  await page.getByText('क्विज', { exact: false }).click();
  await expect(page).toHaveURL(/quiz/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('कुण्डली button navigation', async ({ page }) => {
  await page.getByText('कुण्डली', { exact: false }).click();
  await expect(page).toHaveURL(/jyotish/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('ताली वा गाली button navigation', async ({ page }) => {
  await page.getByText('ताली वा गाली', { exact: false }).click();
  await expect(page).toHaveURL(/taligali/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('बस टिकट button navigation', async ({ page }) => {
  await page.getByText('बस टिकट', { exact: false }).click();
  await expect(page).toHaveURL("https://tickets.hamropatro.com/bus/add-info");
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('नोट्स / इभेन्टहरू button navigation', async ({ page }) => {
  await page.getByText('नोट्स / इभेन्टहरू', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/notes/);
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
});

test('इभेन्ट टिकट button navigation', async ({ page }) => {
  await page.getByText('इभेन्ट टिकट', { exact: false }).click();
  await expect(page).toHaveURL(/event/);
  await page.goBack();  
  await expect(page).toHaveURL(baseURL);
});
