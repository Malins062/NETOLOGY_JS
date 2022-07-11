class Chat {
    /*
    Класс для ЧАТ-БОТА, инициализируется с параметром HTML-контейнера для чата
    */

    constructor(container, secondsToSleep = 30) {
        // Основной html - элемент
        this.container = container;

        // Кнопка открытия окна чата
        this.chatWidgetSide = container.querySelector('.chat-widget__side');
        
        // Контейнер всех сообщений
        this.chatWidgetMessages = container.querySelector('.chat-widget__messages-container');
        
        // Сообщения
        this.messages = container.querySelector( '.chat-widget__messages' );

        // Стока ввод сообщения пользователя
        this.inputMessage = container.querySelector( '.chat-widget__input' );

        // Количество секунд бездействия пользователя для сворачивания чат-бота
        this.secondsToSleep = secondsToSleep * 1000;

        // Таймеры бездействия пользователя
        this.timerId = 0;
        this.timerOutId = 0;

        // Сообщения при бездействии пользователя
        this.TEXT_FOR_SLEEP_USER = 'Я могу чем нибудь Вам еще помочь?';
        this.TEXTOUT_FOR_SLEEP_USER = 'Закрываю чат...';

        // Регистрация возможных событий
        this.registerEvents();
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
        
        // Прокрутка вниз до последнего сообщения
        this.chatWidgetMessages.scrollTo(0, this.chatWidgetMessages.scrollHeight);
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
        const index = Math.floor(Math.random() * messages.length);
        
        return messages[index];
    }

    setTimerToSleep() {
        // Очистка всех таймеров
        clearTimeout(this.timerId);
        clearTimeout(this.timerOutId);
        
        this.timerId = setTimeout(() => {
            // Формирование и отправка сообщения робота при бездействии пользователя
            this.sendMessage(this.TEXT_FOR_SLEEP_USER);

            this.timerOutId = (setTimeout(() => {
                // Формирование и отправка сообщения робота при повторном бездействии пользователя
                this.sendMessage(this.TEXTOUT_FOR_SLEEP_USER);

                // Деактивация окна сообщений
                this.container.classList.remove('chat-widget_active');
            }, this.secondsToSleep));

        }, this.secondsToSleep);

      }
    
    registerEvents() {
        /*
        Метод регистрации всех возможных событий в чат-боте
        */

        let chat = this;

        // Регистрация клика на сайд-баре
        this.chatWidgetSide.addEventListener('click', () => {
            // Формирование первоночального сообщения робота и его отправка
            this.sendMessage(this.getAnswer());

            // Установка таймера для отслеживания бездействия пользователя
            this.setTimerToSleep();

            // Активация окна сообщений
            this.container.classList.add('chat-widget_active');
        })
    
        // Регистрация отправки сообщения пользователем
        this.inputMessage.addEventListener('keyup', function(event) {
            if (event.key == 'Enter' && chat.inputMessage.value.trim().length > 0) {
                // Отправка сообщения клиента
                chat.sendMessage(chat.inputMessage.value, true);

                chat.setTimerToSleep();
                
                // Очистка сообщения клиента для нового ввода
                chat.inputMessage.value = '';

                // Отправка ответа бота клиенту
                chat.sendMessage(chat.getAnswer());
            }
        });

    }
} 

new Chat(document.querySelector('.chat-widget'), 30);
