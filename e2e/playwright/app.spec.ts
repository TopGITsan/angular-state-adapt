import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AngularStateAdapt/);
});

test('app has title', async ({ page }) => {
  await page.goto('http://localhost:4200');
  const title = await page.title();

  expect(title).toBe('AngularStateAdapt');
});
