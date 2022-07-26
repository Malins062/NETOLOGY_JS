/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {

  static URL = this.URL + '/account';

  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    this.URL = this.URL + '/' + id; 
    this.list(null, callback);
  }
}
