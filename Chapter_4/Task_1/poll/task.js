// Адрес ресурса для запроса опросника
const URL_POLL = 'https://netology-slow-rest.herokuapp.com/poll.php';

class Poll {
    /*
    Класс опросника

        registerEvents() - обработчик событий отправки запроса на сервер
        create(data) - метод создания опроса
        createButton(value) - метод создания элемента "кнопки"
    
    */

    constructor (container, url) {
        this.container = container;
        this.pollTitle = this.container.querySelector('#poll__title');
        this.pollAnswers = this.container.querySelector('#poll__answers');
        this.url = url;

        // console.log(this.container, this.#listCurrencies)
        this.registerEvents();
    }

    registerEvents () {
        const xhr = new XMLHttpRequest();

        const container = this.container;
        
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == xhr.DONE) {
                // Создание опроса
                this.create(xhr.response);
            }
        });

        xhr.open('GET', this.url);
        xhr.responseType = 'json';
        xhr.send();
    }

    create (data) {
        console.log(data);
        this.pollTitle.textContent = data.data.title;

        data.data.answers.forEach(element => this.createButton(element));
    }

    createButton (value) {
        // Создание кнопки
        const button = document.createElement('button');
        button.className = 'poll__answer'; 
        button.textContent = value;
        this.pollAnswers.insertAdjacentElement('afterEnd', button);

        // Обработчик на клик на кнопке
        button.addEventListener('click', () => {
            alert('спасибо')
        });
    }
}

new Poll(document.querySelector('.poll'), URL_POLL);