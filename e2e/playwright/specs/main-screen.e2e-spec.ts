import {expect, createTest} from '@ngx-playwright/test';

import {MainScreen} from '../screens/main-screen.js';

const test = createTest(MainScreen);

test.describe('the main screen of the application', () => {
  test('it should have a title', ({$: {title}}) => {
    expect(title).toBeTruthy();
  });

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
});
