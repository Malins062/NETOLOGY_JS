import GameSavingLoader from './gamesavingloader';

/* eslint-disable */

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
});

/* eslint-enable */
