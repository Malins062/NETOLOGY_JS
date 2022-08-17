export default function orderByProps(obj, sort = []) {
  const resObject = [];
  const sortedKeys = Object.keys(obj).sort().filter((el) => !sort.includes(el));
  const keys = (sort.length > 0) ? [...sort, ...sortedKeys] : sortedKeys;

  keys.forEach((nameProperty) => {
    if (Object.prototype.hasOwnProperty.call(obj, nameProperty)) {
      resObject.push({
        key: nameProperty,
        value: obj[nameProperty],
      });
    }
  });
  return resObject;
}
