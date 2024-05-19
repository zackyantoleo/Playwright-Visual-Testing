import { test, expect } from "@playwright/test";

test("UI Test Studi Kasus Page", async ({ page }) => {
  await page.goto("https://higo.id/case-study/");
  await page.waitForTimeout(4000);
  await expect(page).toHaveScreenshot("Studi_Kasus_UI.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.05,
  });
  await expect(
    page.getByRole("heading", { name: "Studi Kasus" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Kisah sukses yang seneng" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Merchant" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Campaign" })).toBeVisible();
  await expect(page.locator("#list-cases2 img").first()).toBeVisible();
  await expect(page.locator("#list-cases2 img").nth(2)).toBeVisible();
  await expect(page.locator("#list-cases2 img").nth(3)).toBeVisible();
  await expect(
    page.getByText(
      "PT HIGO FITUR INDONESIA Plaza Kedoya Elok, Lantai 3 Blok DA No. 3-4, Jakarta Barat 11520E: info@higo.idP: (021) 5806860About UsCareerBlogTerms & ConditionsPrivacy & Policy © PT Higo Fitur Indonesia"
    )
  ).toBeVisible();
});
