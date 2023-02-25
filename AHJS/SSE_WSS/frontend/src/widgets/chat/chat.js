import './css/chat.css';
import User from './js/user';
import Message from './js/message';

// Наименование стиля для скрытия объекта
const STYLE_HIDDEN = 'hidden';

// Стиль bootstrap для невалидного объекта
const STYLE_IS_INVALID = 'is-invalid';

export default class ChatWidget {
  constructor(parentEl, urlWebSocket) {
    this.parentEl = parentEl;
    this.urlWebSocket = urlWebSocket;
    this.ws = null;
  }

  static get formChatHTML() {
    return `
      <div class="messaging">
        <div class="inbox_msg">
          <div class="left_side">
            <div class="heading_panel">
              <div class="recent_heading">
                <h4>Участники</h4>
              </div>
            </div>
            <ul class="list-unstyled users_list" data-id="users"></ul>
          </div>

          <div class="right_side">
            <div class="heading_panel">
              <div class="recent_heading">
                <h4>Сообщения</h4>
              </div>
            </div>
            <div class="messages">
              <ul class="msg_history list-unstyled" data-id="messages"></ul>
              <div class="type_msg">
                <form data-id="form-message">
                  <input type="text" data-id="message" placeholder='Введите сообщение и нажмите "Enter"...' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>    
    `;
  }

  static get loadingHTML() {
    return `
      <div class="form-processing ${STYLE_HIDDEN}">
        <div class="overlay" id="overlay"></div>
        <div class="loading-process" id="loadingProcess"></div>
      </div>
    `;
  }

  static get formErrorHTML() {
    return `
      <div class="dialog-error ${STYLE_HIDDEN}">
        <div class="overlay" id="overlay"></div>
        <form class="form-ticket-delete row g-3">
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <h5 class="form-title">Ошибка</h5>
            </div>
            <p></p>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <button type="submit" value="submit" class="submit-buttom btn btn-primary ms-2">OK</button>
          </div>
        </form>
      </div>
      `;
  }

  static get formLoginHTML() {
    return `
      <div class="dialog-login" data-id="dialog-login">
        <div class="overlay" id="overlay"></div>
        <form class="form-login row g-3" data-id="form-login">
          <div class="col-12 d-flex justify-content-center">
            <h5 class="form-title">Выберите псевдоним</h5>
          </div>
          <div class="col-12">
            <input type="text" class="form-control" data-id = "username" required placeholder="Введите Ваше имя">
            <div class="invalid-feedback">
              Заданное имя уже занято. Выберите другое имя.
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <button type="submit" value="submit" class="submit-buttom btn btn-primary ms-2">Продолжить</button>
          </div>
        </form>
      </div>
    `;
  }

  static idSelector(id) {
    return `[data-id="${id}"]`;
  }

  static get formLoginSelector() {
    return '.form-login';
  }

  wsConnect() {
    if (this.ws) {
      this.ws.close(3001);
    } else {
      this.ws = new WebSocket(this.urlWebSocket);

      this.wsOpen = this.wsOpen.bind(this);
      this.ws.addEventListener('open', this.wsOpen);

      this.wsClose = this.wsClose.bind(this);
      this.ws.addEventListener('close', (evt) => this.wsClose(evt));

      this.wsMessage = this.wsMessage.bind(this);
      this.ws.addEventListener('message', (message) => this.wsMessage(message));

      this.wsError = this.wsError.bind(this);
      this.ws.addEventListener('error', (evt) => this.wsError(evt));
    }
  }

  // Запуск виджета
  run() {
    // Отрисовка HTML
    this.bindToDOM();

    // Соединяемся с сокетом
    this.wsConnect();

    // Инициализация переменных и событий
    this.init();
  }

  // Разметка HTML и отслеживание событий
  bindToDOM() {
    this.parentEl.innerHTML = '';
    this.parentEl.innerHTML += ChatWidget.loadingHTML;
    this.parentEl.innerHTML += ChatWidget.formErrorHTML;
    this.parentEl.innerHTML += ChatWidget.formLoginHTML;
    this.parentEl.innerHTML += ChatWidget.formChatHTML;
  }

  init() {
    this.dialogLogin = this.parentEl.querySelector(ChatWidget.idSelector('dialog-login'));
    this.ulUsers = this.parentEl.querySelector(ChatWidget.idSelector('users'));
    this.ulMessages = this.parentEl.querySelector(ChatWidget.idSelector('messages'));
    this.formMessage = this.parentEl.querySelector(ChatWidget.idSelector('form-message'));

    // Строка ввода имени псевдонима
    this.inputUserName = this.parentEl.querySelector(ChatWidget.idSelector('username'));
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.inputUserName.addEventListener('keydown', this.onChangeUserName);

    // Обработка событий по подтверждению вводу псевдонима
    const formLogin = this.dialogLogin.querySelector(ChatWidget.idSelector('form-login'));
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    formLogin.addEventListener('submit', (evt) => this.onSubmitLogin(evt));

    // Обработка событий по отправке сообщения
    this.onSendMessage = this.onSendMessage.bind(this);
    this.formMessage.addEventListener('submit', (evt) => this.onSendMessage(evt));
  }

  wsOpen() {
    console.log(`Соединение установлено. URL: ${this.urlWebSocket}`); // eslint-disable-line no-console
  }

  wsClose(evt) {
    if (evt.wasClean) {
      console.log('Соединение закрыто.'); // eslint-disable-line no-console

      this.ws = null;
    } else {
      console.log('Обрыв соединения!'); // eslint-disable-line no-console
    }
    console.log(`Код: ${evt.code}; причина: ${evt.reason}`); // eslint-disable-line no-console
  }

  wsMessage(message) {
    // console.log('Сообщение:', message);
    const data = JSON.parse(message.data);
    // console.log('Получены данные:', (data));

    // Отрисовка всех текущих пользователей
    if (data.renderUsers) {
      this.users = data.names;
      this.users.forEach((name) => {
        this.ulUsers.appendChild(new User(name).render());
      });
    }

    // Проверка: занято ли имя пользователя или нет
    if (data.nameIsFree) {
      this.dialogLogin.classList.add(STYLE_HIDDEN);
      const user = new User(data.name, true).render();
      this.ulUsers.appendChild(user);
    } else if (data.nameIsFree === false) {
      this.inputUserName.classList.add(STYLE_IS_INVALID);
    }

    // Добавился новый пользователь
    if (data.renderName) {
      this.ulUsers.appendChild(new User(data.name).render());
      return;
    }

    // Выход пользователя из чата
    if (data.closeUser) {
      const usersArray = [...this.ulUsers.querySelectorAll('li')];
      usersArray.forEach((user) => {
        if (user.querySelector('.user__name').textContent === data.name) {
          user.remove();
        }
      });
    }

    if (data.renderOwnMessage) {
      this.ulMessages.appendChild(
        new Message(data.name, data.message, data.date, true).render(),
      );
    }

    if (data.renderMessage) {
      this.ulMessages.appendChild(
        new Message(data.name, data.message, data.date).render(),
      );
    }

    if (data.renderMessages) {
      // console.log('on data.renderMessages: ', data);
      data.messages.forEach((msg) => {
        this.ulMessages.appendChild(
          new Message(msg.name, msg.message, msg.date).render(),
        );
      });
    }
  }

  wsError(evt) {
    console.log(`${this} Ошибка: ${evt.message}`); // eslint-disable-line no-console
  }

  onSubmitLogin(evt) {
    evt.preventDefault();
    // console.log(this.inputUserName)
    const userName = this.inputUserName.value;
    this.ws.send(JSON.stringify({ userName, chooseUserName: true }));
    // evt.currentTarget.reset();
  }

  onSendMessage(evt) {
    evt.preventDefault();
    const messageText = this.formMessage.querySelector(ChatWidget.idSelector('message')).value;
    // console.log('onSendMessage', messageText);
    this.ws.send(
      JSON.stringify({
        chatMessage: true,
        messageText,
      }),
    );
    evt.currentTarget.reset();
  }

  onChangeUserName() {
    if (this.inputUserName.classList.contains(STYLE_IS_INVALID)) {
      this.inputUserName.classList.remove(STYLE_IS_INVALID);
    }
  }
}
