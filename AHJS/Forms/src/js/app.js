import PopoverWidget from '../widgets/popover/popover';

const widget = new PopoverWidget(document.querySelector('#widget-container'),
    'Click to toggle popover', 'Popover title', "And here's some amazing content. It's very engaging. Right?");
widget.bindToDOM();