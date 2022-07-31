var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    if (!options.url || !options.method) {
        return;
    } 

    const xhr = new XMLHttpRequest();
    let url = undefined;
    let formData = undefined;

    if (options.method == 'POST') {
        formData= new FormData;
        for(let [name, value] of options.data) {
            formData.append(name, value);
        }
    }

    if (options.method == 'GET') {
        url = new URL(options.url);
        for (let key in options.data) {
            url.searchParams.set(key, options.data[key]);
        }
    }

    if (options.callback) {
        xhr.addEventListener('load', () => {
            options.callback(null, xhr.response);
        });
    
        xhr.addEventListener('error', (event) => {
            options.callback(event.type, xhr.response);
        });
    }

    xhr.open(options.method, url ? url : options.url);
    xhr.responseType = 'json';
    // fomData ? xhr.send(formData) : xhr.send();
    xhr.send(formData);
};

// Пример вызова функции:
createRequest({
    url: 'https://example.com', // адрес
    data: { // произвольные данные, могут отсутствовать
      email: 'ivan@poselok.ru',
      password: 'odinodin'
    },
    method: 'GET', // метод запроса
    /*
      Функция, которая сработает после запроса.
      Если в процессе запроса произойдёт ошибка, её объект
      должен быть в параметре err.
      Если в запросе есть данные, они должны быть переданы в response.
    */
    callback: (err, response) => {
      console.log( 'Ошибка, если есть', err );
      console.log( 'Данные, если нет ошибки', response );
    }
  });