import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.hamropatro.com/');
  await page.waitForLoadState("domcontentloaded");
});

test('Navigate to हाम्रो पे', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो पे' }).first().click();
  await expect(page.getByText('HAMRO PAY')).toBeVisible();
  await page.goBack();
});

test('Navigate to हाम्रो मार्ट', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो मार्ट' }).first().click();
  await expect(page.getByText('Hamro Mart')).toBeVisible();
  await page.goBack();
});

test('Navigate to हाम्रो ज्योतिष', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो ज्योतिष' }).first().click();
  await expect(page.getByText('Hamro Jyotish')).toBeVisible();
  await page.goBack();
});

test('Navigate to नोट्स / इभेन्टहरू', async ({ page }) => {
  await page.getByRole('button', { name: 'नोट्स / इभेन्टहरू' }).first().click();
  await expect(page.getByText('Notes')).toBeVisible();
  await page.goBack();
});

test('Navigate to हाम्रो हेल्थ', async ({ page }) => {
  await page.getByRole('button', { name: 'हाम्रो हेल्थ' }).first().click();
  await expect(page.getByText('Hamro Health')).toBeVisible();
  await page.goBack();
});

test('Navigate to होटल बुकिङ', async ({ page }) => {
  await page.getByRole('button', { name: 'होटल बुकिङ' }).first().click();
  await expect(page.getByText('Hotel')).toBeVisible();
  await page.goBack();
});

test('Navigate to शेयर बजार', async ({ page }) => {
  await page.getByRole('button', { name: 'शेयर बजार' }).first().click();
  await expect(page.getByText('Share')).toBeVisible();
  await page.goBack();
});
