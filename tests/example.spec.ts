import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle('Sensortrol');
});

test('Increment counter with button', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const botonContador = page.getByRole('button', { name: /count is 0/i });
  await expect(botonContador).toBeVisible();
  await botonContador.click();
  await expect(page.getByRole('button', { name: /count is 1/i })).toBeVisible();
  await botonContador.click();
  await expect(page.getByRole('button', { name: /count is 2/i })).toBeVisible();
});
