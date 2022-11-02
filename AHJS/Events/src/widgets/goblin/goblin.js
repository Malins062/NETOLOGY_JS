import './goblin.css';

export default class Goblin {
    constructor(container) {
        if(typeof container === 'string') {
            container = document.querySelector(container);
        }
        
        this.container = container.querySelector('.battle-field');
        this.goblin = this.container.querySelector('.goblin');

        this.getCoords = this.getCoords.bind(this);
        this.getCoords();
        window.addEventListener('resize', this.getCoords, true);    }

    getCoords() {
        this.coordsBattleField = this.container.getBoundingClientRect();
        // console.log('getCoords', this.coordsBattleField);
    }

    next() {
        if (!this.goblin.classList.contains('hidden')) {
            this.hide();
        }
        const top = Math.floor(Math.random() * Math.trunc(this.coordsBattleField.height - this.goblin.height)) + this.coordsBattleField.top;
        const left = Math.floor(Math.random() * Math.trunc(this.coordsBattleField.width - this.goblin.width)) + this.coordsBattleField.left;
        // console.log('random', top, left);
        // console.log('Battle-Field height, width', this.coordsBattleField.height, this.coordsBattleField.width);
        // console.log('Battle-Field top, left', this.coordsBattleField.top, this.coordsBattleField.left);
        // console.log('Goblin', this.goblin.height, this.goblin.width);
        
        this.goblin.style.top = top + "px";
        this.goblin.style.left = left + "px";

        this.goblin.classList.remove('hidden');
    }

    hide() {
        this.goblin.classList.add('hidden');
    }
}
