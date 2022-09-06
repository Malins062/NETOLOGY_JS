export default function read(param) {
  return new Promise((resolve) => {
    // эмуляция чтения файла
    setTimeout(() => {
      // param - параметр чтения файла, например имя файла,
      //    в нашем случае просто тестовые данные объекта
      const data = param;
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}
