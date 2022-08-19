export default class Validator {
  constructor(str) {
    this.str = str;
  }

  validateUsername() {
    const re = /^[a-zA-Z]([a-zA-Z]|([_-])|([\d](?!\d{3})))*(?<![\d_-])$/;
    return re.test(this.str);
  }
}
