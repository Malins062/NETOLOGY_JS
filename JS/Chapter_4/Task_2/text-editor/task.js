class Storage {
    /*
    Класс для работы с localStorage
        read(dataKey) - чтение данных по ключу dataKey из localStorage
        write(dataKey, data) - сохранение данных data по ключу dataKey в localStorage
    */

    constructor () {
        this.localStorage = window.localStorage;
    }

    read (dataKey) {
        const data = this.localStorage.getItem(dataKey);
        try {
            return JSON.parse(data);
        } catch {
            return null;
        }
    }

    write (dataKey, data) {
        try {
            this.localStorage.setItem(dataKey, JSON.stringify(data));
        } catch(e) {
            return e.code;
        }
    }
}

class TextEditor {
    constructor (container) {
        this.container = container;
        this.editor = this.container.querySelector('.card__editor');
        this.clear = this.container.querySelector('.card__clear');

        console.log(this.container, this.editor, this.clear);
        this.dataKey = this.editor.className;
        this.storage = new Storage();

        this.editor.value = this.storage.read(this.dataKey);

        this.registerEvents();
    }

    registerEvents () {

        this.editor.addEventListener('change', () => {
            this.storage.write(this.dataKey, this.editor.value);    
        });

        // Если нужно сохранять, при нажатии любой клавиши в активном редакторе:
        // this.editor.addEventListener('keyup', () => {
        //     this.storage.write(this.dataKey, this.editor.value);    
        // });

        this.clear.addEventListener('click', () => {
            this.editor.value = '';    
            this.storage.write(this.dataKey, this.editor.value);    
        });

    }
}

new TextEditor(document.querySelector('.card'));