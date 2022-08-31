import Character from './character';
import Magician from './magician';
import Daemon from './daemon';

/* eslint-disable */

const hero = Character('Alex', 'Swordman', 100, 1, 25, 25);
console.log(hero);

const heroMagician = Magician('Mike');
console.log(heroMagician);

const heroDaemon = Daemon('Dady');
console.log(heroDaemon);

/* eslint-enable */
