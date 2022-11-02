import Game from './game';

const TIME_SHOW = 1000; // Время показа рисунка
const COUNT_SKIPS = 5; // Количество пропусков для завершения игры
const game = new Game('.game', TIME_SHOW, COUNT_SKIPS);

game.run();
