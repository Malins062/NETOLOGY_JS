const ERROR_SEARCH_KEY = 'Unknown error';

class ErrorRepository extends Map {
  translate(code) {
    if (this.has(code)) {
      return this.get(code);
    }
    return ERROR_SEARCH_KEY;
  }
}

export { ErrorRepository as default, ERROR_SEARCH_KEY };
