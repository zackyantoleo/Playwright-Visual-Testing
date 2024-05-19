import { test, expect } from "@playwright/test";
import { time } from "console";

test("Verify UI for Tentang Kami Page is expected", async ({ page }) => {
  await page.goto("https://higo.id/about-us");
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot("Tentang_KamiUI.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.05,
  });
  await expect(page.locator(".main-text")).toBeVisible();
  await expect(page.getByText("Keterbatasan akan smart city")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Di balik Layar" })
  ).toBeVisible();
  await expect(page.locator(".people-profile > div")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "DENGAN MISI" })
  ).toBeVisible();
  await expect(page.locator(".inovatif")).toBeVisible();
  await expect(page.locator(".realible")).toBeVisible();
  await expect(page.locator(".relevan")).toBeVisible();
  await expect(page.locator("#solution-case img")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "UNTUK MEMBERIKAN SOLUSI" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "Bekerja sama dengan banyak pihak, untuk sama-sama membantu banyak orang"
    )
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Ambil Bagianmu" })
  ).toBeVisible();
  await expect(page.getByText("Untuk ikut serta")).toBeVisible();
  await expect(page.locator("#btn-home")).toBeVisible();
  await expect(
    page.getByText(
      "PT HIGO FITUR INDONESIA Plaza Kedoya Elok, Lantai 3 Blok DA No. 3-4, Jakarta Barat 11520E: info@higo.idP: (021) 5806860About UsCareerBlogTerms & ConditionsPrivacy & Policy © PT Higo Fitur Indonesia"
    )
  ).toBeVisible();
});
