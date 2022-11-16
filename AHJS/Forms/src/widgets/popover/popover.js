import './popover.css';

export default class PopoverWidget {
  constructor(parentEl, text, title, content) {
    /*
      Параметры:
        parentEl - контейнер
        text - текст кнопки
        title - название подсказки
        content - текст подсказки
    */
    this.parentEl = parentEl;
    this.text = text;
    this.title = title;
    this.content = content;
  }

  get markup() {
    return `
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover-hint" id="popover-button" data-bs-placement="top"
            data-bs-title="${this.title}" data-bs-content="${this.content}">
            ${this.text}
        </button>
        <div class="popover hidden" role="tooltip" id="popover-hint" 
          data-popper-placement="top">
          <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(47px, 0px);"></div>
          <h3 class="popover-header">${this.title}</h3>
          <div class="popover-body">${this.content}</div>
        </div>
    `;
  }

  static get buttonSelector() {
    return '[id=popover-button]';
  }

  static get hintSelector() {
    return '[id=popover-hint]';
  }
  
  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
    const button = this.parentEl.querySelector(PopoverWidget.buttonSelector);
    // console.log(this.parentEl, this.constructor.submitSelector, submit);
    button.addEventListener('click', evt => this.onClick(evt));
  }

  toggleHint() {
    const popoverHint = document.querySelector(PopoverWidget.hintSelector),
      popoverButton = document.querySelector(PopoverWidget.buttonSelector);
    popoverHint.classList.toggle('hidden');

    const coordsPopoverHint = popoverHint.getBoundingClientRect(),
      coordsPopoverButton = popoverButton.getBoundingClientRect();

    // console.log(coordsPopoverButton, coordsPopoverHint);
    popoverHint.style.top = coordsPopoverButton.top - coordsPopoverHint.height + "px";
    popoverHint.style.left = coordsPopoverButton.left + (coordsPopoverButton.width / 2) - (coordsPopoverHint.width / 2) + "px";
  }

  onClick(evt) {
    evt.preventDefault();
    this.toggleHint();
  }
}
