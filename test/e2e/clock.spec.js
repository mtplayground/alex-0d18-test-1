const { expect, test } = require("@playwright/test");

test("renders the clock and updates after two seconds", async ({ page }) => {
  await page.goto("/");

  const clock = page.locator("#clock");
  await expect(clock).toHaveText(/^\d{2}:\d{2}:\d{2}$/);

  const initialValue = await clock.textContent();

  await page.waitForTimeout(2100);

  await expect(clock).toHaveText(/^\d{2}:\d{2}:\d{2}$/);
  await expect(clock).not.toHaveText(initialValue);
});
