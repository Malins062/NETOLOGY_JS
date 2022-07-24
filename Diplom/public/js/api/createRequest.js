/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    if (!every(options.url, options.method)) {
        return;
    } 

    const xhr = new XMLHttpRequest;

    if (options.method = 'POST') {
        formData= new FormData;
        for(let [name, value] of options.data) {
            formData.append(name, value);
        }
    }

    if (options.method = 'GET') {
        let url = new URL(options.url);
        url.searchParams.set(options.data);
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
    fomData ? xhr.send(formData) : xhr.send();
};
