import { Page } from "@playwright/test";

class NavbarPage {
  constructor(page) {
    this.page = page;
    this.closeButton = page.locator("//button[@class='close']");
    this.annualReportLink = page.locator(
      "//*[@id='outer-container']/div/div[3]/header[1]/div[2]/div[1]/a"
    );
    this.tentangKamiLink = page.locator("//a[.='Tentang Kami']");
    this.serviskamilink = page.locator("//div[@class='dropbtn']");
    this.wifiAdvertisingLink = page.locator("//a[.='Wifi Advertising']");
    this.higospotLink = page.locator("//a[.='Higospot']");
    this.integratedDigitalAgencyLink = page.locator(
      "//a[.='Integrated Digital Agency']"
    );
    this.caseStudyLink = page.locator("//a[.='Studi Kasus']");
    this.contactUsLink = page.locator("//a[.='Hubungi Kami']");
    this.blogLink = page.locator("#blog");
  }

  async navigateToAnnualReport() {
    await this.annualReportLink.click();
  }

  async navigateToTentangKami() {
    await this.tentangKamiLink.click();
  }

  async clickservicekami() {
    await this.serviskamilink.click();
  }

  async navigateToWifiAdvertising() {
    await this.wifiAdvertisingLink.click();
  }

  async navigateToHigospot() {
    await this.higospotLink.click();
  }

  async navigateToIntegratedDigitalAgency() {
    await this.integratedDigitalAgencyLink.click();
  }

  async navigateToCaseStudy() {
    await this.caseStudyLink.click();
  }

  async navigateToContactUs() {
    await this.contactUsLink.click();
  }

  async navigateToBlog() {
    await this.blogLink.click();
  }

  async closeInitialPopup() {
    await this.closeButton.click();
  }
}

export default NavbarPage;
