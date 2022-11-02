import './messages.css';
import data from './messages.json';

export default class Messages {
    constructor(container) {
        if(typeof container === 'string') {
            container = document.querySelector(container);
        }

        this.messageField = container.querySelector('.message-field');
        this.message = this.messageField.querySelector('.message');
        this.messages = data;
    }

    start() {
        this.messageField.classList.add('hidden');
    }

    stop() {
        this.message.innerHTML = this.messages.stop;
        this.messageField.classList.remove('hidden');
        this.messageField.classList.remove('game-over');
    }

    reset() {
        this.message.innerHTML = this.messages.start;
        this.messageField.classList.remove('hidden');
        this.messageField.classList.remove('game-over');
    }

    gameOver() {
        this.message.innerHTML = this.messages.gameover;
        this.messageField.classList.add('game-over');
        this.messageField.classList.remove('hidden');
    }

}
