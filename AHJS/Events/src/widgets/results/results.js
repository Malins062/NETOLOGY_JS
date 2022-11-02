import './results.css';

export default class Result {
    constructor(container) {
        if(typeof container === 'string') {
            container = document.querySelector(container);
        }
        
        this.container = container.querySelector('.result-border');
    }

    add(id, value=null) {
        const result = this.container.querySelector(`.result-item.id-${id}`).querySelector('.result-item-value');
        result.innerHTML = value===null ? +result.innerHTML + 1: value;
    }

    get(id) {
        const result = this.container.querySelector(`.result-item.id-${id}`).querySelector('.result-item-value');
        return Number(result.innerHTML);
    }

    clear() {
        this.add(1, 0);
        this.add(2, 0);
        this.add(3, 0);
        this.add(4, 0);
    }
}
