class Login {
    /*
    Класс формы авторизации
        showError(message) - показ модального окна ошибки авторизации с сообщением message
        showWelcome() - показ приветственного окна при успешной авторизации
        hideWelcome() - скрыти приветственного окна при выходе
        registerEvents() - обработчик событий
    */

    constructor (container, idForm) {
        this.dataKey = idForm;
        this.container = container;
        this.form = this.container.querySelector('#' + this.dataKey);
        this.signinDiv= this.container.querySelector('.signin');
        this.welcomeDiv = this.container.querySelector('#welcome');
        this.logoutBtn = this.container.querySelector('#logout__btn');

        // Окно ошибки
        this.errorWindow = this.form.querySelector('.error');
        this.errorMessage = this.form.querySelector('.error p');

        // Окно прогресс-бара
        this.progressBar = this.form.querySelector('#loader');

        // Хранилище данных
        this.storage = new Storage();

        // Чтение данных авторизации и показ формы авторизации или welcome
        this.idUser = this.storage.readItem(this.dataKey);
        if (this.idUser) {
            this.showWelcome();
        } 

        this.registerEvents();
    }

    showError (message) {
        const closeButton = this.errorWindow.querySelector('.error div a');
        closeButton.addEventListener('click', () => {
            this.errorWindow.style.visibility = 'hidden';
            this.form.signin__btn.disabled = false;
        });

        this.errorWindow.style.visibility = 'visible';
        this.errorMessage.textContent = message;
    }

    showWelcome () {
        this.welcomeDiv.querySelector('#user_id').textContent = this.idUser;
        this.signinDiv.classList.remove('signin_active');
        this.welcomeDiv.classList.add('welcome_active');
    }

    hideWelcome () {
        this.welcomeDiv.querySelector('#user_id').textContent = '';
        this.storage.removeItem(this.dataKey);
        this.welcomeDiv.classList.remove('welcome_active');
        this.signinDiv.classList.add('signin_active');
        this.form.reset();
        this.form.signin__btn.disabled = false;
    }

    registerEvents () {
        this.logoutBtn.addEventListener('click', (e) => {
            this.hideWelcome();
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            // console.log('submit: ', this);
            this.form.signin__btn.disabled = true;
            this.progressBar.classList.add('loader_active');

            const xhr = new XMLHttpRequest();

            xhr.addEventListener('load', () => {
                this.progressBar.classList.remove('loader_active');
                
                const answer = JSON.parse(xhr.response);
                // console.log('load: ', this.dataKey, answer);
                if (!answer.success) {
                    this.showError('Ошибка авторизации: неверный логин/пароль.');
                    return;
                } else {
                    this.idUser = answer.user_id;
                    this.showWelcome();
                    this.storage.writeItem(this.dataKey, this.idUser);    
                }
            });

            xhr.addEventListener('error', () => {
                this.progressBar.classList.remove('loader_active');
                this.showError(`Ошибка обработки запроса: ${xhr.status} - ${xhr.statusText}.`);
                this.form.signin__btn.disabled = false;
            });

            xhr.open('POST', this.form.getAttribute('action'), true);
            xhr.send(new FormData(this.form));
        });
    }
}

new Login(document.querySelector('.card'), 'signin__form');