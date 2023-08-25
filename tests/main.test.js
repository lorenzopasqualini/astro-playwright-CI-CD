import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
	await page.goto('/'); // The baseURL here is the webServer URL
	await expect(page).toHaveScreenshot();
});
