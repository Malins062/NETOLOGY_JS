import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Card number widget form test', () => {
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

  test('Valid card number', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.cardnumber-form-widget');
    const form = await page.$('.cardnumber-form-widget');

    const input = await form.$('.input');
    await input.type('2200240768512994');    

    const button = await form.$('.submit');
    await button.click();

    await page.waitForSelector('.input.is-valid');
  });

  test('Invalid card number', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.cardnumber-form-widget');
    const form = await page.$('.cardnumber-form-widget');

    const input = await form.$('.input');
    await input.type('01253');

    const button = await form.$('.submit');
    await button.click();
    await page.waitForSelector('.input.is-invalid');
  });
});