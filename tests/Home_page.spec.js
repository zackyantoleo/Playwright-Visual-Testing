import { test, expect } from "@playwright/test";

test.describe("UI Test Home Page", () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    console.log("Open Website");
    await page.goto("https://higo.id/");
    await page.waitForSelector("//button[@class='close']");
    await page.click("//button[@class='close']");
  });

  test("Verify UI for Home Page is expected", async () => {
    await expect(page).toHaveScreenshot("Homepage_UI.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.03,
    });
    await expect(
      page.getByRole("heading", { name: "Di mana pun lokasinya #" })
    ).toBeVisible();
    await expect(page.locator("#btn-home")).toBeVisible();
    await expect(
      page.getByText("WiFi Advertising", { exact: true })
    ).toBeVisible();
    await expect(page.getByText("Platform Indonesia")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Lihat Lokasi HIGOspot" })
    ).toBeVisible();
    await expect(
      page.locator("p").filter({ hasText: "Ratusan Lokasi HIGOspot bukan" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "location-1" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "location-" }).nth(1)
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "location-" }).nth(2)
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Pilih Kebutuhanmu" })
    ).toBeVisible();
  });
});
