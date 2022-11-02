import Handler from './handler';

export default class Game {
    constructor(container, timeShow, countSkips) {
        this.timeShow = timeShow;
        this.countSkips = countSkips;

        if(typeof container === 'string') {
            container = document.querySelector(container);
        }
        
        this.container = container;

    }

    // Запуск игры
    run() {
        new Handler(this.container, this.timeShow, this.countSkips);

        console.log('Игра загружена!');
        console.log('Ждем команды...');
    }

}
