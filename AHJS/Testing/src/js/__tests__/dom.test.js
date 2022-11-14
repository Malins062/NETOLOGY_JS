import CardNumberWidget from '../widget';

test.each([
  ['imagesCardsHTML+formHTML', [true, false]],
  ['imagesCardsHTML+formHTML+DescriptionHTML', [true, true]],
  ['formHTML+DescriptionHTML', [false, true]],
  ['formHTML', [false, false]],
])(('Should render self this forms: %s'), (_, input) => {
// test('Should render self', () => {
  document.body.innerHTML = '<div id="widget-container"></div>';

  const container = document.querySelector('#widget-container');
  const widget = new CardNumberWidget(container, input[0], input[1]);
  let innerHTML = input[0] ? CardNumberWidget.imagesCardsHTML + CardNumberWidget.formHTML : CardNumberWidget.formHTML;
  innerHTML =  input[1] ? innerHTML + CardNumberWidget.descriptionHTML : innerHTML;

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(innerHTML);
  // expect(container.innerHTML).toEqual(CardNumberWidget.imagesCardsHTML + CardNumberWidget.formHTML + 
  //   CardNumberWidget.descriptionHTML);
});

test('Should validate input', () => {
  document.body.innerHTML = '<div id="widget-container"></div>';

  const container = document.querySelector('#widget-container');
  const widget = new CardNumberWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardNumberWidget.inputSelector);
  input.value = '2200240768512994';

  const submit = container.querySelector(CardNumberWidget.submitSelector);
  submit.click();

  expect(input.classList.contains('is-valid')).toBeTruthy();
});

test('Should invalidate input', () => {
  document.body.innerHTML = '<div id="widget-container"></div>';

  const container = document.querySelector('#widget-container');
  const widget = new CardNumberWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardNumberWidget.inputSelector);
  input.value = '000000000000';

  const submit = container.querySelector(CardNumberWidget.submitSelector);
  submit.click();

  expect(input.classList.contains('is-invalid')).toBeTruthy();
});
