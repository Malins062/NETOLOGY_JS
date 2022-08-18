const KEY_SPECIAL = 'special';

export default function getSpecial(obj) {
  if (Object.prototype.hasOwnProperty.call(obj, KEY_SPECIAL)) {
    const resultObject = [];
    const {
      [KEY_SPECIAL]: [...specialObjects],
    } = obj;
    if (specialObjects.length > 0) {
      specialObjects.forEach((element) => {
        const {
          id, name, description = 'Описание недоступно', icon,
        } = element;
        resultObject.push({
          id, name, description, icon,
        });
      });
    }
    return resultObject;
  }
  return [];
}
