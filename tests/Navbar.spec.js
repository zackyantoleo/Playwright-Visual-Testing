import { test, expect } from "@playwright/test";
import NavbarPage from "../Page/NavbarPage";

test.describe("Test Navbar", () => {
  let page;
  let navbar;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navbar = new NavbarPage(page);
    console.log("Open Website");
    await page.goto("https://higo.id/");
    await page.waitForSelector("//button[@class='close']");
    await navbar.closeInitialPopup();
    await page.waitForTimeout(2000);
  });

  test("Navigate to Annual Report", async () => {
    await navbar.navigateToAnnualReport();
    expect(page.url()).toContain("https://higo.id/annualreport2024");
    // await expect(page).toHaveScreenshot("Annual_Report_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Tentang Kami", async () => {
    await navbar.navigateToTentangKami();
    expect(page.url()).toContain("https://higo.id/about-us");
    // await expect(page).toHaveScreenshot("About_Us_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Wifi Advertising", async () => {
    await navbar.clickservicekami();
    await navbar.navigateToWifiAdvertising();
    expect(page.url()).toContain("https://higo.id/wifi-advertising");
    // await expect(page).toHaveScreenshot("Wifi_Advertising_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Higospot", async () => {
    await navbar.clickservicekami();
    await navbar.navigateToHigospot();
    expect(page.url()).toContain("https://higo.id/higospot");
    // await expect(page).toHaveScreenshot("Higospot_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Integrated Digital Agency", async () => {
    await navbar.clickservicekami();
    await navbar.navigateToIntegratedDigitalAgency();
    expect(page.url()).toContain("https://higo.id/integrated-digital-agency");
    // await expect(page).toHaveScreenshot("Integrated_Digital_Agency_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Case Study", async () => {
    await navbar.navigateToCaseStudy();
    expect(page.url()).toContain("https://higo.id/case-study");
    // await expect(page).toHaveScreenshot("Case_Study_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Contact Us", async () => {
    await navbar.navigateToContactUs();
    expect(page.url()).toContain("https://higo.id/contact-us");
    // await expect(page).toHaveScreenshot("Contact_Us_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test("Navigate to Blog", async () => {
    await navbar.navigateToBlog();
    expect(page.url()).toContain("https://blog.higo.id");
    // await expect(page).toHaveScreenshot("Blog_UI.png", {
    //   maxDiffPixelRatio: 0.02,
    // });
  });

  test.afterEach(async () => {
    await page.close();
  });
});
