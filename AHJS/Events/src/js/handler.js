import Goblin from '../widgets/goblin/goblin';
import Messages from '../widgets/messages/messages';
import Result from '../widgets/results/results';
import Timer from './timer';

export default class Handler {
    constructor(container, timeShow, countSkips) {
        this.timeShow = timeShow;
        this.maxCountSkips = countSkips;
        this.isTargetClick = false;

        if(typeof container === 'string') {
            container = document.querySelector(container);
        }

        this.btnStart = container.querySelector('.game-start');
        this.btnStop = container.querySelector('.game-stop');
        this.btnReset = container.querySelector('.game-reset');
        this.battleField = container.querySelector('.battle-field');

        this.messages = new Messages(container);
        this.goblin = new Goblin(container);
        this.timer = new Timer(container.querySelector('.result-timer-value'));
        this.result = new Result (container);

        this.onBtnStartClick = this.onBtnStartClick.bind(this);
        this.onBtnStopClick = this.onBtnStopClick.bind(this);
        this.onBtnResetClick = this.onBtnResetClick.bind(this);
        this.onClickBattle = this.onClickBattle.bind(this);

        this.btnStart.addEventListener('click', this.onBtnStartClick);
        this.btnStop.addEventListener('click', this.onBtnStopClick);
        this.btnReset.addEventListener('click', this.onBtnResetClick);
        this.battleField.addEventListener('click', this.onClickBattle, true);
        
        this.onBtnResetClick();
    }

    isGameOver() {
        return (this.result.get(4) > 0 && this.result.get(4) >= this.maxCountSkips)
    }

    // Нажата кнопка "Старт"
    onBtnStartClick() {
        this.messages.start();
        this.btnStart.disabled = true;
        this.btnStop.disabled = false;
        console.log('Игра началась. Бей гоблинов!');

        if (this.isGameOver()) {
            this.result.clear();
            this.timer.clear();
        }

        this.timer.run();

        this.gameInterval = setInterval(() => {
            if (this.isGameOver()) {
                this.messages.gameOver();
                this.stop();
                console.log('Game over!');
            } else {
                this.result.add(1);    
                this.goblin.next();
                if (!this.isTargetClick) {
                    this.result.add(4);
                }
                this.isTargetClick = false;
            }
            // console.log(this.result.get(1));
          }, this.timeShow);
    }

    // Нажата кнопка "Стоп"
    onBtnStopClick() {
        this.messages.stop();
        this.stop();
        console.log('Остановка игры.');
    }

    // Нажата кнопка "Сброс игры"
    onBtnResetClick() {
        this.messages.reset();
        this.stop();
        this.timer.clear();
        this.result.clear();
        this.isTargetClick = false;
        console.log('Сброс и остановка игры.');
    }

    stop() {
        if (this.gameInterval) {
            clearInterval(this.gameInterval);
            this.gameInterval = null;
        }
        clearTimeout(this.goblinInterval);
        this.timer.stop();
        this.btnStart.disabled = false;
        this.btnStop.disabled = true;
        this.goblin.hide();
    }

    onClickBattle(e) {
        if (e.target.className === 'battle-field' || e.target.className === 'goblin') {
            // console.log(e);
            if (e.target.className === 'goblin') {
                console.log('Есть попадание!');
                this.result.add(2);
                this.isTargetClick = true;
                this.goblin.hide();
            } else {
                // if (this.goblin.classList.contains('hidden')) {
                //     clearTimeout(this.timeShow);
                // }
                console.log('Промах!');
                this.result.add(3);
            }
        }
    }

}
