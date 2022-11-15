import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;
  jest.setTimeout(30000);

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Test open new server page', async () => {
    await page.goto('http://localhost:8888');

    await page.waitForSelector('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});