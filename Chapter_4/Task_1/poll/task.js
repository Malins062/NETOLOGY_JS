// Адрес ресурса для запроса опросника
const URL_POLL = 'https://netology-slow-rest.herokuapp.com/poll.php';

class Poll {
    /*
    Класс опросника

        registerEvents() - обработчик событий отправки запроса на сервер
        create(data) - метод создания опроса
            data - JSON-данные опросника
        createButton(value, index) - метод создания элемента "кнопки"
            value - текст кнопки
            index - индекс кнопки/ответа
        createButton(title, value) - метод создания элемента итоговый результатов опроса
            title - текст ответа
            value - значение (порцент отданных голосов)
        totalRequest() - метод создания POST-запроса на итоги опроса
    
    */

    constructor (container, url) {
        this.container = container;
        this.pollTitle = this.container.querySelector('.poll__title');
        this.pollAnswers = this.container.querySelector('.poll__answers');
        this.modalWindow = this.container.querySelector('.poll__close');
        this.url = url;

        this.registerEvents();
    }

    registerEvents () {
        const closeButton = this.container.querySelector('.poll__close div a');
        closeButton.addEventListener('click', () => {
            this.modalWindow.style.visibility = 'hidden';
            this.totalRequest();
        });

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == xhr.DONE) {
                // Id опроса
                this.pollId = xhr.response.id;

                // Создание опроса в HTML
                this.create(xhr.response);
            }
        });

        xhr.open('GET', this.url);
        xhr.responseType = 'json';
        xhr.send();
    }

    create (data) {
        // Текст опроса
        this.pollTitle.textContent = data.data.title;

        data.data.answers.forEach((element, index) => this.createButton(element, index));
    }

    createButton (value, index) {
        // Создание кнопки
        const button = document.createElement('button');
        button.className = 'poll__answer'; 
        button.textContent = value;
        this.pollAnswers.insertAdjacentElement('afterEnd', button);

        // Обработчик на клик на кнопке
        button.addEventListener('click', () => {
            this.modalWindow.style.visibility = 'visible';
            this.pollAnswer = index; 
        });
    }

    createTotalAnswer (title, value) {
        // Создание кнопки
        const html = `<div class=poll__result>
                <div class=poll__result_title>${title}: </div>
                <div class=poll__result_value>${value}%</div>
            </div>`;
        this.pollAnswers.insertAdjacentHTML('afterEnd', html);
    }

    totalRequest () {
        const data = this;

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == xhr.DONE) {
                const answers = Array.from(this.container.querySelectorAll('.poll__answer'));
                // console.log(this.container, answers, xhr.response);
                answers.forEach(element => this.container.removeChild(element));

                // Сумма всех голосов
                const totalAnswers = xhr.response.stat.reduce((acc, item) => acc += item.votes, 0);
                console.log(xhr.response.stat, totalAnswers);
                xhr.response.stat.forEach(function (element) {
                    // console.log(element);
                    const percent =  (totalAnswers /  element.votes).toFixed(2);
                    data.createTotalAnswer(element.answer, percent);
                })
            }
        });

        xhr.open('POST', this.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.send( `vote=${this.pollId}&answer=${this.pollAnswer}` );
    }

}

new Poll(document.querySelector('.poll'), URL_POLL);