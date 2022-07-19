// Наименование ключа для сохранения списка валют
const DATA_KEY = 'ListOfCurrencies';

// Адрес ресурса для запроса котировок валют
const URL_EXCHANGE_RATE = 'https://netology-slow-rest.herokuapp.com';

class LocalStorage {
    constructor (dataKey) {
        // Хранилище данных и ключ
        this.data = window.localStorage;
        this.dataKey = dataKey;
    }

    read () {
        const res = this.data.getItem(this.dataKey);
        return res ? JSON.parse(res) : {};
    }

    save (dataWrite) {
        this.data.setItem(this.dataKey, JSON.stringify(dataWrite));
    }

    remove () {
        this.data.removeItem(this.dataKey);
    }

}

class ExchangeRate {
    /*
    Класс для обновления курса валют

        registerEvents() - обработчик событий отправки запроса на сервер
        createItem(currencyData) - метод создания элемента валюты с данными currencуData
        refreshItems() - метод обновления всех данных о валютах
    
    */

    #currencyClassName;
    #listCurrencies;

    constructor (container, url, dataKey) {
        this.container = container;
        this.items = this.container.querySelector('#items');
        this.url = url;
        this.#currencyClassName = 'item'; 

        // Хранилище данных
        this.dataStorage = new LocalStorage(dataKey);
        
        // Список валют
        this.#listCurrencies = this.dataStorage.read();

        if (this.#listCurrencies) {
            this.refreshItems();
        }

        // console.log(this.container, this.#listCurrencies)
        this.registerEvents();
    }

    registerEvents () {
        const xhr = new XMLHttpRequest();

        const container = this.container;
        
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == xhr.DONE) {
                // Обновление данных о валюте
                this.#listCurrencies = xhr.response.response.Valute;
                this.refreshItems();
                // console.log(this.#listCurrencies);

                this.dataStorage.save(this.#listCurrencies);
   
                // Деактивация прогресс-бара
                const progressBar = container.querySelector('.loader_active');
                progressBar.className = 'loader';
            }
        });

        xhr.open('GET', this.url);
        xhr.responseType = 'json';
        xhr.send();
    }

    createItem (currencyData) {
        const itemElement = document.createElement('div');
        itemElement.className = this.#currencyClassName; 

        const code = `<div class="item__code">${currencyData.CharCode}</div>`;
        const value = `<div class="item__value">${currencyData.Value}</div>`;
        const currency = `<div class="item__currency">руб.</div>`;

        itemElement.insertAdjacentHTML('afterBegin', currency);
        itemElement.insertAdjacentHTML('afterBegin', value);
        itemElement.insertAdjacentHTML('afterBegin', code);

        this.items.insertAdjacentElement('beforeBegin', itemElement);
    }

    refreshItems () {
        const items = this.items.querySelectorAll(this.#currencyClassName);
        items.forEach(element => this.container.remove(element));

        for (var element in this.#listCurrencies) {
            this.createItem(this.#listCurrencies[element]);
        }
    }
}

new ExchangeRate(document.querySelector('.card'), URL_EXCHANGE_RATE);