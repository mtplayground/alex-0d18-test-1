const { expect, test } = require("@playwright/test");

test("renders the clock and updates after two seconds", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".analog-clock")).toBeVisible();
  await expect(page.locator(".dial-face")).toHaveCount(1);
  await expect(page.locator(".minute-tick")).toHaveCount(60);
  await expect(page.locator(".hour-marker")).toHaveCount(12);
  await expect(page.locator(".roman-numeral")).toHaveCount(12);
  await expect(page.locator(".arabic-numeral")).toHaveCount(12);

  const clock = page.locator("#clock");
  await expect(clock).toHaveText(/^\d{2}:\d{2}:\d{2}$/);

  const initialValue = await clock.textContent();

  await page.waitForTimeout(2100);

  await expect(clock).toHaveText(/^\d{2}:\d{2}:\d{2}$/);
  await expect(clock).not.toHaveText(initialValue);
});
