// Кнопка открытия окна чата
const chatWidgetSide = document.querySelector('.chat-widget__side');

// Экземпляр чата
const chatWidget = document.querySelector('.chat-widget');

// Сообщения
const messages = document.querySelector( '.chat-widget__messages' );

class Chat {
    /*
    Класс ЧАТ, инициализируется с параметром HTML-контейнера для чата
    */

    constructor(messages) {
        this.messages = messages;
    }

    sentMessage() {
        
    }
} 

const chat = new Chat(messages);

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

// // добавит
// messages.innerHTML += `
//   <div class="message">
//     <div class="message__time">09:21</div>
//     <div class="message__text">
//       Добрый день, мы ещё не проснулись. Позвоните через 10 лет
//     </div>
//   </div>
// `;