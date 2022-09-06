import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

const ERROR_OBJECT = 'Ошибка чтения данных.';
const defaultParam = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

class GameSavingLoader {
  static load(param = defaultParam) {
    return new Promise((resolve, reject) => {
      const data = read(param);
      data.then((buffer) => {
        json(buffer).then((str) => {
          try {
            const objectData = JSON.parse(str);

            const result = new GameSaving(objectData);

            resolve(result);
          } catch (error) {
            reject(new Error(`${ERROR_OBJECT} Code:${error}`));
          }
        });
      });
    });
  }
}

export { GameSavingLoader as default, ERROR_OBJECT };
