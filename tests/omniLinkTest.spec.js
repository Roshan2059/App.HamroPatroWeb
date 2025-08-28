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
  if (page.url().includes("calendar?v=patro")) {
    console.log("पात्रो button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  console.log("पात्रो button navigation test passed");
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('ताजा समाचार button navigation', async ({ page }) => {
  await page.getByText('ताजा समाचार', { exact: false }).click();
  await expect(page).toHaveURL(/news/);
  if (page.url().includes("news")) {
    console.log("ताजा समाचार button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('रेडियो button navigation', async ({ page }) => {
  await page.getByText('रेडियो', { exact: false }).click();
  await expect(page).toHaveURL(/radio/);
  if (page.url().includes("radio")) {
    console.log("रेडियो button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('राशिफल button navigation', async ({ page }) => {
  await page.getByText('राशिफल', { exact: false }).click();
  await expect(page).toHaveURL(/rashifal/);
  if (page.url().includes("rashifal")) {
    console.log("राशिफल button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('हाम्रो ज्योतिष button navigation', async ({ page }) => {
  await page.getByText('हाम्रो ज्योतिष', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/jyotish/);
  if (page.url().includes("jyotish")) {
    console.log("हाम्रो ज्योतिष button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('हाम्रो पे button navigation', async ({ page }) => {
  await page.getByText('हाम्रो पे', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/pay/);
  if (page.url().includes("pay")) {
    console.log("हाम्रो पे button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('हाम्रो हेल्थ button navigation', async ({ page }) => {
  await page.getByText('हाम्रो हेल्थ', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/health/);
  if (page.url().includes("health")) {
    console.log("हाम्रो हेल्थ button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('हाम्रो मार्ट button navigation', async ({ page }) => {
  await page.getByText('हाम्रो मार्ट', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/mart/);
  if (page.url().includes("mart")) {
    console.log("हाम्रो मार्ट button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('विनिमय दर button navigation', async ({ page }) => {
  await page.getByText('आजको विनिमय दर', { exact: false }).click();
  await expect(page).toHaveURL(/forex/);
  if (page.url().includes("forex")) {
    console.log("विनिमय दर button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('होटल बुकिङ button navigation', async ({ page }) => {
  await page.getByText('होटल बुकिङ', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/basiyo/);
  if (page.url().includes("basiyo")) {
    console.log("होटल बुकिङ button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('सुन/चाँदी button navigation', async ({ page }) => {
  await page.getByText('सुन/चाँदी', { exact: false }).click();
  await expect(page).toHaveURL(/gold/);
  if (page.url().includes("gold")) {
    console.log("सुन/चाँदी button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('नयाँ शेयर बजार button navigation', async ({ page }) => {
  await page.getByText('नयाँ शेयर बजार', { exact: false }).click();
  await expect(page).toHaveURL(/laganisutra/);
  if (page.url().includes("laganisutra")) {
    console.log("नयाँ शेयर बजार button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('ब्लग button navigation', async ({ page }) => {
  await page.getByText('ब्लग', { exact: false }).click();
  await expect(page).toHaveURL(/posts/);
  if (page.url().includes("posts")) {
    console.log("ब्लग button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('सिनेमा button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('सिनेमा', { exact: false }).click();
  await expect(page).toHaveURL(/hamropatro-blog/);
  if (page.url().includes("hamropatro-blog")) {
    console.log("सिनेमा button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('अडियो / पोड्काष्ट button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('अडियो / पोड्काष्ट', { exact: false }).click();
  await expect(page).toHaveURL(/podcasts/);
  if (page.url().includes("podcasts")) {
    console.log("अडियो / पोड्काष्ट button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('मिति परिवर्तन button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('मिति परिवर्तन', { exact: false }).click();
  await expect(page).toHaveURL(/converter/);
  if (page.url().includes("converter")) {
    console.log("मिति परिवर्तन button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('साइत button navigation', async ({ page }) => {
  await page.getByText('साइत', { exact: false }).click();
  await expect(page).toHaveURL(/sahit/);
  if (page.url().includes("sahit")) {
    console.log("साइत button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('क्विज button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('क्विज', { exact: false }).click();
  await expect(page).toHaveURL(/quiz/);
  if (page.url().includes("quiz")) {
    console.log("क्विज button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('कुण्डली button navigation', async ({ page }) => {
  await page.getByText('कुण्डली', { exact: false }).click();
  await expect(page).toHaveURL(/jyotish/);
  if (page.url().includes("jyotish")) {
    console.log("कुण्डली button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('ताली वा गाली button navigation', async ({ page }) => {
  await page.getByText('ताली वा गाली', { exact: false }).click();
  await expect(page).toHaveURL(/taligali/);
  if (page.url().includes("taligali")) {
    console.log("ताली वा गाली button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('बस टिकट button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('बस टिकट', { exact: false }).click();
  await expect(page).toHaveURL("https://tickets.hamropatro.com/bus/add-info");
  if (page.url() === "https://tickets.hamropatro.com/bus/add-info") {
    console.log("बस टिकट button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL("https://tickets.hamropatro.com/bus/add-info");
  if (page.url() === "https://tickets.hamropatro.com/bus/add-info") {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('नोट्स / इभेन्टहरू button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('नोट्स / इभेन्टहरू', { exact: false }).nth(1).click();
  await expect(page).toHaveURL(/notes/);
  if (page.url().includes("notes")) {
    console.log("नोट्स / इभेन्टहरू button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});

test('इभेन्ट टिकट button navigation', async ({ page }) => {
  await page.getByText('View More', { exact: false }).click();
  await page.getByText('इभेन्ट टिकट', { exact: false }).click();
  await expect(page).toHaveURL(/event/);
  if (page.url().includes("event")) {
    console.log("इभेन्ट टिकट button navigation test passed: Successfully navigated to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate to the expected URL. Current URL: " + page.url());
  }
  await page.goBack();
  await expect(page).toHaveURL(baseURL);
  if (page.url() === baseURL) {
    console.log("Test passed: Successfully navigated back to: " + page.url());
  }else{
    console.log("Test failed: Did not navigate back to the base URL. Current URL: " + page.url());
  }
});
