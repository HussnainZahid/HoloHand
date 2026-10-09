import { test, expect } from "@playwright/test";

test("renders the interactive workspace without camera permission", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "HoloHand" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Use mouse instead" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Use mouse instead" }).click();
  await expect(page.getByText("Mouse only")).toBeVisible();
});

test("supports keyboard model switching", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Use mouse instead" }).click();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#m-name")).not.toHaveText("Loading…");
});
