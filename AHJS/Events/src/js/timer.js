export default class Timer {
    constructor(container, delay=1000, time=0) {
        this.delay = delay;
        this.time = time;

        if(typeof container === 'string') {
            container = document.querySelector(container);
        }        
        this.output = container;
        // console.log(this.output);
    }

    run() {
        this.timeInterval = setInterval(() => {
            this.time += 1;
            this.render();
          }, this.delay);
    }

    stop() {
        clearInterval(this.timeInterval);
    }

    clear() {
        this.time = 0;
        this.render();
    }

    render() {
        this.output.innerHTML = this.strTime;
    }
    
    get strTime() {
        const minutes = Math.floor(this.time / 60),
            seconds = this.time - minutes * 60,
            hours = Math.floor(this.time / 3600);
            // time = this.time - hours * 3600;
        
        return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');    
    }
}
