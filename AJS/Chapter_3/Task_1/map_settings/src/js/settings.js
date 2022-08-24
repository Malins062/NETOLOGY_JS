// Возможные настройки
const SETTINGS = {
  theme: ['dark', 'light', 'gray'],
  music: ['trance', 'pop', 'rock', 'chillout', 'off'],
  difficulty: ['easy', 'normal', 'hard', 'nightmare'],
};

// Класс настроек
class Settings {
  constructor(userSettings) {
    // Настройки по умолчанию
    this.defaultSettings = new Map();
    Object.keys(SETTINGS).forEach((key) => {
      this.defaultSettings.set(key, SETTINGS[key][0]);
    });

    // Настройки пользователя
    this.userSettings = new Map();
    for (const key in userSettings) {
      if (Object.keys(SETTINGS).includes(key)
      && SETTINGS[key].indexOf(userSettings[key]) !== -1) {
        this.userSettings.set(key, userSettings[key]);
      }
    }
  }

  get() {
    const settings = new Map();
    this.defaultSettings.forEach((value, key) => {
      settings.set(
        key,
        this.userSettings.has(key) ? this.userSettings.get(key) : value,
      );
    });
    return settings;
  }
}

export { Settings as default, SETTINGS };
