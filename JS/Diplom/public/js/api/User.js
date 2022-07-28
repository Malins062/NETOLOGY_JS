/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {

  static URL = this.URL + '/user';
  static keyUser = 'user';

  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    try {
      localStorage.setItem(this.keyUser, JSON.stringify(user));
    } catch(e) {
      console.log(e.code);
    }
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    try {
      localStorage.removeItem(this.keyUser);
    } catch(e) {
        return e.code;
    }
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    const dataUser = localStorage.getItem(this.keyUser);
    try {
      return JSON.parse(dataUser);
    } catch {
        return undefined;
    }
}

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {

  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {

  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {

  }
}
