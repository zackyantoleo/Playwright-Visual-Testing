import { test, expect } from "@playwright/test";

test("Verify UI for Wifi Advertising Page is expected", async ({ page }) => {
  await page.goto("https://higo.id/wifi-advertising");
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot("Wifi_Advertising_UI.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.05,
  });

  await expect(
    page
      .frameLocator("iframe")
      .getByRole("heading", { name: "WiFi Advertising", exact: true })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByRole("heading", { name: "Apa Keunggulan WiFi" })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("div")
      .filter({ hasText: /^Lebih dari 24\.000\.000 WiFi Connections$/ })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("div")
      .filter({ hasText: /^Tersebar di lebih dari 25 kota di Indonesia$/ })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("div")
      .filter({ hasText: /^Bekerja sama dengan 20 ISP di Indonesia$/ })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByRole("heading", { name: "Langkah-langkah Beriklan di" })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByText(
        "Pilih lokasi iklan sesuai kebutuhanMulai dari Jabodetabek, Bali, Yogyakarta,"
      )
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByText(
        "Tentukan tipe lokasi yang diinginkanTidak hanya restoran, coffee shop, creative"
      )
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByText(
        "Tentukan tipe iklan yang diinginkanMulai dari untuk membangun brand awareness,"
      )
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByText(
        "Jangkau target audiens lebih spesifikDapatkan target audiens yang lebih"
      )
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByRole("heading", { name: "Our Happy Clients" })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("section")
      .filter({ hasText: "Our Happy Clientsand many" })
      .locator("div")
      .first()
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("section")
      .filter({ hasText: "Our Happy Clientsand many" })
      .locator("div")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("section")
      .filter({ hasText: "Our Happy Clientsand many" })
      .locator("div")
      .nth(2)
  ).toBeVisible();
  await expect(
    page.frameLocator("iframe").getByRole("heading", {
      name: "Jangkau Target Audiens Lebih Luas Bersama Kami",
    })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .locator("div")
      .filter({ hasText: /^Mulai Beriklan$/ })
  ).toBeVisible();
  await expect(
    page.frameLocator("iframe").getByRole("img", { name: "wifi-ads" })
  ).toBeVisible();
  await expect(
    page
      .frameLocator("iframe")
      .getByText(
        "PT HIGO FITUR INDONESIA Plaza Kedoya Elok, Lantai 3 Blok DA No. 3-4, Jakarta Barat 11520E: info@higo.idP: (021) 5806860About UsCareerBlogTerms & ConditionsPrivacy & Policy© PT Higo Fitur Indonesia"
      )
  ).toBeVisible();
});
