import puppeteer from 'puppeteer';

describe('Card number Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitFor('.cardnumber-form-widget');
  });

  test('Form input should add .valid class if card number is valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.cardnumber-form-widget');

    const form = await page.$('.cardnumber-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2200240768512994');
    await submit.click();

    await page.waitFor('.cardnumber-form-widget .input.is-valid');
  });

  afterEach(async () => {
    await browser.close();
  });
});