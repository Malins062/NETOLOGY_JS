class Chat {
    /*
    Класс для ЧАТ-БОТА, инициализируется с параметром HTML-контейнера для чата
    */

    constructor(container) {
        // Основной html - элемент
        this.container = container;

        // Кнопка открытия окна чата
        this.chatWidgetSide = container.querySelector('.chat-widget__side');
        
        // Сообщения
        this.messages = container.querySelector( '.chat-widget__messages' );

        // Стока ввод сообщения пользователя
        this.input = container.querySelector( '.chat-widget__input' );

        console.log(this.chatWidgetSide, this.messages);

        // Регистрация возможных событий
        this.registerEvents();
    }

    registerEvents() {
        /*
        Метод регистрации всех возможных событий в чат-боте
        */

        // Регистрация клика на сайд-баре
        this.chatWidgetSide.addEventListener('click', () => {
            // Формирование первоночального сообщения робота
            this.sendMessage(this.getAnswer());

            // Активация окна сообщений
            this.container.classList.add('chat-widget_active');
        })
    
        // Регистрация отправки сообщения пользователем
        this.input.addEventListener('keyup', (e) => {
            if (e.)
        });

    }
    
    sendMessage(textMessage, isClient=false) {
        /*
        Метод формирования и отправки сообщения в чат
        Параметры: 
            textMessage - текст сообщения;
            isClient - автор сообщения (true - пользователь, false - бот)
        */

        // Получение текущей даты и времени
        const nowDateTime = new Date().toLocaleString();
        
        // Форимирование сообщения
        const html = `<div class="message${isClient ? ' message_client': ''}">
            <div class="message__time">${nowDateTime}</div>
            <div class="message__text">
              ${textMessage}
            </div>
          </div>
        `;
      this.messages.innerHTML += html;        
    }

    getAnswer() {
        /*
        Метод получения случайного ответа от робота чата 
        */

        // Массив возможных сообщений
        const messages = [
            'Давайте, до свидания!',
            'Что хотели?',
            'Я непонимаю Вас!',
            'Отвалите!!!',
            'Пока!',
            'Приветики!',
            'До свидос!',
            'Я Вас - не понимать',
            'Совесть есть?',
            'Ничего не продам!',
            'Доброе утро, мы ещё не проснулись. Позвоните через 10 лет',
        ];

        // Случайный выбор сообщения
        index = Math.floor(Math.random() * messages.length);

        return messages[index];
    }
    
} 

new Chat(document.querySelector('.chat-widget'));

// // добавит
// messages.innerHTML += `
