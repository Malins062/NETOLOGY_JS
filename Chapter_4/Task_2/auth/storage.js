class Storage {
    /*
    Класс для работы с localStorage
        read(dataKey) - чтение данных по ключу dataKey из localStorage
        write(dataKey, data) - сохранение данных data по ключу dataKey в localStorage
        remove(dataKey, data) - удаление данных data по ключу dataKey в localStorage
    */

    constructor () {
        this.localStorage = window.localStorage;
    }

    readItem (dataKey) {
        const data = this.localStorage.getItem(dataKey);
        try {
            return JSON.parse(data);
        } catch {
            return null;
        }
    }

    writeItem (dataKey, data) {
        try {
            this.localStorage.setItem(dataKey, JSON.stringify(data));
        } catch(e) {
            return e.code;
        }
    }

    removeItem (dataKey) {
        try {
            this.localStorage.removeItem(dataKey);
        } catch(e) {
            return e.code;
        }
    }
}
