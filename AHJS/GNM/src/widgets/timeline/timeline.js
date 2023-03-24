import './css/timeline.css';

import {
  getFormattedDateTime,
  getCurrentPosition,
  checkCoordinates,
} from './js/utils';

import Message from './js/message';

// Наименование стиля для скрытия объекта
const STYLE_HIDDEN = 'hidden';

// Стиль bootstrap для невалидного объекта
const STYLE_IS_INVALID = 'is-invalid';

export default class TimeLineWidget {
  constructor(parentEl, title) {
    this.parentEl = parentEl;
    this.title = title;
  }

  formTimeLineHTML() {
    return `
      <div class="messaging">
        <div class="right_side">

          <div class="heading_panel">
            <div class="recent_heading">
              <h4>${this.title}</h4>
            </div>
          </div>

            <ul class="msg_history list-unstyled" data-id="messages"></ul>

          <div class="type_msg">
            <form data-id="form-message">
              <input type="text" data-id="message" placeholder='Введите сообщение и нажмите "Enter"...' />
            </form>
          </div>
          
      </div>
      </div>    
    `;
  }

  static get formCoordsHTML() {
    return `
      <div class="dialog_coords ${STYLE_HIDDEN}" data-id="dialog-coords">
        <div class="overlay" id="overlay"></div>
        <form class="form_coords row g-2" data-id="form-coords">
          <div class="col-12 d-flex justify-content-center">
            <h5 class="title">Что-то пошло не так</h5>
          </div>
          <div class="col-12">
            <p class="text">
              К сожалению нам не удалось определить Ваше местоположение, пожайлуста, дайте разрешение
              на исользование геолокации или введите координаты вручную.
            </p>
            <p class="text">
              Широта и долгота через запятую
            </p>
          </div>
          <div class="col-12">
            <input type="text" class="form-control" data-id = "coords" required placeholder="Введите координаты">
            <div class="invalid-feedback">
              Введите правильные координаты, например: [51.50851, −0.12572].
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <button type="submit" value="submit" class="submit-buttom btn btn-primary ms-2">Продолжить</button>
            <button type="reset" class="btn btn-default ms-2">Отмена</button>
          </div>
        </form>
      </div>
    `;
  }

  static idSelector(id) {
    return `[data-id="${id}"]`;
  }

  // Запуск виджета
  run() {
    // Отрисовка HTML
    this.bindToDOM();

    // Инициализация переменных и событий
    this.init();
  }

  // Разметка HTML и отслеживание событий
  bindToDOM() {
    this.parentEl.innerHTML = '';
    this.parentEl.innerHTML += TimeLineWidget.formCoordsHTML;
    this.parentEl.innerHTML += this.formTimeLineHTML();
  }

  init() {
    this.ulMessages = this.parentEl.querySelector(TimeLineWidget.idSelector('messages'));
    this.formMessage = this.parentEl.querySelector(TimeLineWidget.idSelector('form-message'));
    this.dialogCoords = this.parentEl.querySelector(TimeLineWidget.idSelector('dialog-coords'));
    this.formCoords = this.parentEl.querySelector(TimeLineWidget.idSelector('form-coords'));
    this.inputCoords = this.formCoords.querySelector(TimeLineWidget.idSelector('coords'));

    // Обработка событий по отправке нового поста
    this.onMessage = this.onMessage.bind(this);
    this.formMessage.addEventListener('submit', (evt) => this.onMessage(evt));

    // Обработка событий по вводу координат
    this.onEnterCoords = this.onEnterCoords.bind(this);
    this.formCoords.addEventListener('submit', (evt) => this.onEnterCoords(evt));

    this.hideDialogCoords = this.hideDialogCoords.bind(this);
    this.formCoords.addEventListener('reset', this.hideDialogCoords);
  }

  async onMessage(evt) {
    evt.preventDefault();

    const messageText = this.formMessage.querySelector(TimeLineWidget.idSelector('message')).value;
    if (!messageText || messageText.trim().length === 0) {
      return;
    }

    try {
      const coordsText = await TimeLineWidget.getCoordinates();
      this.addMessage(coordsText);
    } catch (err) {
      this.dialogCoords.classList.remove(STYLE_HIDDEN);
    }
  }

  onEnterCoords(evt) {
    evt.preventDefault();
    const strCoordinates = this.inputCoords.value;

    const coordinates = checkCoordinates(strCoordinates);

    if (!coordinates) {
      this.inputCoords.classList.add(STYLE_IS_INVALID);
    } else {
      this.addMessage(TimeLineWidget.messageCoordinates(coordinates.lat, coordinates.lon));
      this.hideDialogCoords();
    }
  }

  hideDialogCoords() {
    this.dialogCoords.classList.add(STYLE_HIDDEN);
    if (this.inputCoords.classList.contains(STYLE_IS_INVALID)) {
      this.inputCoords.classList.remove(STYLE_IS_INVALID);
    }
    this.formCoords.reset();
  }

  addMessage(coordinates) {
    const messageText = this.formMessage.querySelector(TimeLineWidget.idSelector('message')).value;
    const dateTimeText = getFormattedDateTime(new Date());
    this.ulMessages.insertBefore(
      new Message(messageText, dateTimeText, coordinates).render(),
      this.ulMessages.firstElementChild,
    );
    this.formMessage.reset();
  }

  static async getCoordinates() {
    const position = await getCurrentPosition({ enableHighAccuracy: true });
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    return TimeLineWidget.messageCoordinates(latitude, longitude);
  }

  static messageCoordinates(lat, lon) {
    return `[${lat}, ${lon}]`;
  }
}
