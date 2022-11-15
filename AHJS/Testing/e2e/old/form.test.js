import puppeteer from 'puppeteer';

describe('Card number Form', () => {
  let browser;
  let page;
  jest.setTimeout(30000);

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:8888');

    await page.waitForSelector('.cardnumber-form-widget');
  });

  test('Form input should add .valid class if card number is valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:8888');

    await page.waitForSelector('.cardnumber-form-widget');

    const form = await page.$('.cardnumber-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2200240768512994');
    await submit.click();

    await page.waitForSelector('.cardnumber-form-widget .input.is-valid');
  });

  test('Form input should add .valid class if card number is invalid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:8888');

    await page.waitForSelector('.cardnumber-form-widget');

    const form = await page.$('.cardnumber-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('00000000000');
    await submit.click();

    await page.waitForSelector('.cardnumber-form-widget .input.is-invalid');
  });

  afterEach(async () => {
    await browser.close();
  });
});