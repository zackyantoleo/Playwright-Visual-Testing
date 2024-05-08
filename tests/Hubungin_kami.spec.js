import { test, expect } from "@playwright/test";

test.describe("Test Form Hubungi Kami", () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    console.log("Open Website");
    await page.goto("https://higo.id/contact-us");
  });

  test("Verify user unable to submit the form with empty name", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("");
    await page.getByPlaceholder("E-mail").fill("test@example.com");
    await page
      .getByPlaceholder("Nomor telepon (+62888xxx) ")
      .fill("08888888888");
    await page.locator("#select-btn").selectOption("Wifi Advertising");
    await page.getByPlaceholder("Nama Usaha, Lokasi, Event,").fill("test");
    await page.getByPlaceholder("Komentar...").fill("test");
    await page.getByRole("button", { name: "Kirim" }).click();
    await expect(page.locator("//p[.='*Isi nama kamu']")).toBeVisible();
  });

  test("Verify user unable to submit the form with empty email", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("Test Name");
    await page.getByPlaceholder("E-mail").fill("");
    await page
      .getByPlaceholder("Nomor telepon (+62888xxx)")
      .fill("08888888888");
    await page.locator("#select-btn").selectOption("Wifi Advertising");
    await page
      .getByPlaceholder("Nama Usaha, Lokasi, Event,")
      .fill("Test Business");
    await page.getByPlaceholder("Komentar...").fill("Test Comment");
    await page.getByRole("button", { name: "Kirim" }).click();
    await expect(page.locator("//p[.='*Isi email kamu']")).toBeVisible();
  });

  test("Verify user unable to submit the form with empty phone number", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("Test Name");
    await page.getByPlaceholder("E-mail").fill("test@example.com");
    await page.getByPlaceholder("Nomor telepon (+62888xxx)").fill("");
    await page.locator("#select-btn").selectOption("Wifi Advertising");
    await page
      .getByPlaceholder("Nama Usaha, Lokasi, Event,")
      .fill("Test Business");
    await page.getByPlaceholder("Komentar...").fill("Test Comment");
    await page.getByRole("button", { name: "Kirim" }).click();
    await expect(
      page.locator("//p[.='*Isi dengan nomor telepon kamu']")
    ).toBeVisible();
  });

  test("Verify user unable to submit the form with empty category", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("Test Name");
    await page.getByPlaceholder("E-mail").fill("test@example.com");
    await page
      .getByPlaceholder("Nomor telepon (+62888xxx)")
      .fill("08888888888");
    await page
      .getByPlaceholder("Nama Usaha, Lokasi, Event,")
      .fill("Test Business");
    await page.getByPlaceholder("Komentar...").fill("Test Comment");
    // await page.getByRole("button", { name: "Kirim" }).click();
    await expect(
      page.locator("p").filter({ hasText: "Isi Kategori" })
    ).toBeVisible();
  });

  test("Verify user unable to submit the form with empty business name", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("Test Name");
    await page.getByPlaceholder("E-mail").fill("test@example.com");
    await page
      .getByPlaceholder("Nomor telepon (+62888xxx)")
      .fill("08888888888");
    await page.locator("#select-btn").selectOption("Wifi Advertising");
    await page.getByPlaceholder("Nama Usaha, Lokasi, Event,").fill("");
    await page.getByPlaceholder("Komentar...").fill("Test Comment");
    await page.getByRole("button", { name: "Kirim" }).click();
    await expect(page.locator("//p[.='*Isi nama usaha kamu']")).toBeVisible();
  });

  test("Verify user unable to submit the form with empty comment", async () => {
    await page.getByPlaceholder("Nama", { exact: true }).fill("Test Name");
    await page.getByPlaceholder("E-mail").fill("test@example.com");
    await page
      .getByPlaceholder("Nomor telepon (+62888xxx)")
      .fill("08888888888");
    await page.locator("#select-btn").selectOption("Wifi Advertising");

    await page
      .getByPlaceholder("Nama Usaha, Lokasi, Event,")
      .fill("Test Business");
    await page.getByPlaceholder("Komentar...").fill("");
    await page.getByRole("button", { name: "Kirim" }).click();
    await expect(
      page.locator("//p[.='* Isi dengan pesan kamu']")
    ).toBeVisible();
  });

  test.afterEach(async () => {
    await page.close();
  });
});
