export default class ArrayBufferConverter {
  constructor() {
    this.arrayBuffer = null;
    this.bufferView = null;
  }

  load(buffer) {
    this.arrayBuffer = buffer;
    this.bufferView = new Uint16Array(this.arrayBuffer);
  }

  toString() {
    const str = String.fromCharCode(...this.bufferView);
    return str;
  }
}
