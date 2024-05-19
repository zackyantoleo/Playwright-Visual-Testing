import { test, expect } from "@playwright/test";

test.describe("Test Higo.id Blog", () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://blog.higo.id/");
    await page.waitForTimeout(10000);
  });

  test("Verify All Blog Category is Accessible", async () => {
    await page.locator("//a[.='HIGOes Update']").click();
    await expect(page).toHaveURL("https://blog.higo.id/higoes-update");
    await page.locator("//a[.='Hangout']").click();
    await expect(page).toHaveURL("https://blog.higo.id/hangout");
    await page.locator("//a[.='Lifestyle']").click();
    await expect(page).toHaveURL("https://blog.higo.id/lifestyle");
    await page.locator("//a[.='Tech & Social Media']").click();
    await expect(page).toHaveURL("https://blog.higo.id/tech-social-media");
    await page.locator("//a[.='Business Tips']").click();
    await expect(page).toHaveURL("https://blog.higo.id/business-tips");
  });

  test("Verify Article from 'Artikel Terbaru' Can be Accessible", async () => {
    const frontArticleTitle = await page
      .locator(
        "//li[@class='react-multi-carousel-item react-multi-carousel-item--active ']//h3[@class='bold my-1 text-white leading-tight text-lg lg:text-xl xl:text-2xl md:w-full w-10/12']"
      )
      .textContent();
    await page
      .locator(
        "//li[@class='react-multi-carousel-item react-multi-carousel-item--active ']//div[@class='md:px-5 relative w-full h-full']"
      )
      .click();
    const articleTitle = await page
      .locator('//*[@id="main-cont"]/div[2]/h1')
      .textContent();
    await expect(frontArticleTitle).toContain(articleTitle);
  });

  test("Verify Article from 'Artikel Terkini' can be accessible", async () => {
    const frontArticleTitle = await page
      .locator(
        "//div[@class='mb-4 pb-4 w-full flex h-40 xl:h-48 lg:h-44 2xl:h-56 border-b-2 border-blue-200 lg:border-b-0']//h2[@class='transition-all duratioon-150 font-bold my-3 lg:my-2 2xl:my-4 md:text-base xl:text-xl group-hover:text-blue-700 line-clamp-2']"
      )
      .textContent();
    await page.mouse.wheel(0, 500);
    await page
      .locator(
        "xpath=/html/body/div[1]/div/div[2]/main/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/a/div"
      )
      .click();
    const articleTitle = await page
      .locator(
        "//div[@class='mb-4 pb-4 w-full flex h-40 xl:h-48 lg:h-44 2xl:h-56 border-b-2 border-blue-200 lg:border-b-0']//h2[@class='transition-all duratioon-150 font-bold my-3 lg:my-2 2xl:my-4 md:text-base xl:text-xl group-hover:text-blue-700 line-clamp-2']"
      )
      .textContent();
    await expect(frontArticleTitle).toContain(articleTitle);
  });

  test('Verify that user are able to Load more article by clicking "Load More" button', async () => {
    const initialArticleCount = await page
      .locator(
        "//p[@class='transition-all text-gray-500 font-light duratioon-150 text-xs xl:text-sm 2xl:text-base group-hover:text-blue-500 w-20 md:w-auto ml-auto md:ml-1']"
      )
      .count();
    await page.mouse.wheel(0, 200);
    await page.locator("//button[@id='loadmore-btn']").click();
    await page.waitForTimeout(2000); // Wait for the articles to load
    const newArticleCount = await page
      .locator(
        "//p[@class='transition-all text-gray-500 font-light duratioon-150 text-xs xl:text-sm 2xl:text-base group-hover:text-blue-500 w-20 md:w-auto ml-auto md:ml-1']"
      )
      .count();
    await expect(newArticleCount).toBeGreaterThan(initialArticleCount);
  });

  test.afterEach(async () => {
    await page.close();
  });
});
