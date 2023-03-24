function getFormattedDateTime(date) {
  const day = date.getDate() < 10
    ? `0${date.getDate()}`
    : date.getDate();
  const month = date.getMonth() < 10
    ? `0${date.getMonth() + 1}`
    : date.getMonth();
  const year = String(date.getFullYear()).slice(-2);
  const hour = date.getHours() < 10
    ? `0${date.getHours()}`
    : date.getHours();
  const minutes = date.getMinutes() < 10
    ? `0${date.getMinutes()}`
    : date.getMinutes();
  const seconds = date.getSeconds() < 10
    ? `0${date.getSeconds()}`
    : date.getSeconds();
  const formattedDate = `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;

  return formattedDate;
}

function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function checkCoordinates(strCoordinates) {
  if (typeof strCoordinates !== 'string') {
    return null;
  }

  const re = /^\s*\[*\s*(?<lat>-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?),\s*(?<lon>-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)\s*\]*\s*$/;
  const data = re.exec(strCoordinates);

  return data ? data.groups : false;
}

export { getFormattedDateTime, getCurrentPosition, checkCoordinates };
