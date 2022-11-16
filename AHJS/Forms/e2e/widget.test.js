import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Popover widget form test', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);

    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
    //   headless: true,
    //   slowMo: 100,
    //   devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Show popover display or none hint', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('#widget-container');
    const button = await page.$('#popover-button');
    await button.click();

    await page.waitForSelector('.popover');

    await button.click();
    await page.waitForSelector('.popover.hidden');
  });
});