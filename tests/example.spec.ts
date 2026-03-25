import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const text = await page.getByText('Sensortrol').innerText();
  expect(text).toBe('Sensortrol');
  expect(page).toHaveTitle('Sensortrol');
});

test('Increment counter with button', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const button = page.getByRole('button', { name: /count is/ });
  await button.click();
  expect(await button.innerText()).toContain('1');
  await button.click();
  expect(await button.innerText()).toContain('2');
});
