const SERVER_ERROR = 'Ошибка сети. Сервер не отдал код ошибки.';

export default class RequestSender {
  constructor(urlServer, formProcess = null, formError = null) {
    this.url = urlServer;
    this.formProcess = formProcess;
    this.formError = formError;
  }

  getAsync(method, query, body) {
    return new Promise((resolve) => {
      const requestText = `${this.url}?${query}`;
      const xhr = new XMLHttpRequest();
      xhr.open(method, requestText);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = () => {
        resolve(xhr);
        // if (this.xhr.status === 202) {
        //   resolve(this.xhr.response);
        // } else {
        //   reject(new Error(`${this.xhr.status}: ${this.xhr.statusText}`));
        // }
      };

      xhr.onerror = () => {
        resolve(SERVER_ERROR);
      };

      xhr.send(body);
    });
  }

  async sendRequest(method, query, body = undefined) {
    if (this.formProcess.form) {
      this.formProcess.form.classList.remove(this.formProcess.hide);
    }

    const result = await this.getAsync(method, query, body);

    if (this.formProcess.form) {
      this.formProcess.form.classList.add(this.formProcess.hide);
    }

    return result;
  }

  responseAnswer(a) {
    let rAnswer = null;
    // console.log('responseAnswer', a.status);
    if (a === SERVER_ERROR || !a.status) {
      rAnswer = a;
      this.showError(rAnswer);
      return rAnswer;
    }

    if (!(a.status >= 200 && a.status < 300)) {
      rAnswer = `Ошибка запроса к серверу ${this.urlServer} (код - ${a.status}): "${a.responseText}".`;
      this.showError(rAnswer); // eslint-disable-line no-console
      return rAnswer;
    }

    if (a.status === 202) {
      try {
        // console.log('responseText', a.responseText);
        rAnswer = JSON.parse(a.responseText);
      } catch (e) {
        rAnswer = `${e} Статус: ${a.status}. Тело: ${a.responseText}.`;
        this.showError(rAnswer); // eslint-disable-line no-console
        return rAnswer;
      }
    }

    // console.log('rAnswer', rAnswer);
    return rAnswer;
  }

  showError(msg) {
    console.error(msg); // eslint-disable-line no-console

    if (this.formError) {
      const p = this.formError.form.querySelector('p');

      this.formError.form.classList.remove(this.formError.hide);
      p.innerText = msg;

      this.formError.form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this.formError.form.classList.add(this.formError.hide);
      });
    }
  }

  async getAllTickets() {
    const responseText = await this.sendRequest('GET', 'method=allTickets');
    const result = this.responseAnswer(responseText);
    // console.log('getAllTickets result', result)
    if (result !== undefined && result !== null && result.constructor === Array) {
      return result;
    }
    return [];
  }

  async getTicket(id) {
    if (!id) {
      return null;
    }

    const responseText = await this.sendRequest('GET', `method=ticketById&id=${id}`);
    const result = this.responseAnswer(responseText);

    if (result !== undefined && result !== null
      && result.constructor === Array && result.length > 0) {
      return result[0];
    }

    return [];
  }

  async addTicket(body) {
    if (!body) {
      return null;
    }

    // console.log('addTicket body=', body);
    const responseText = await this.sendRequest('POST', 'method=createTicket', body);
    const result = this.responseAnswer(responseText);
    return result;
  }

  async deleteTicket(id) {
    if (!id) {
      return null;
    }

    // console.log('deleteTicket id=', id);
    const responseText = await this.sendRequest('DELETE', `method=deleteTicket&id=${id}`);
    const result = this.responseAnswer(responseText);
    return result;
  }

  async setStatusTicket(id, body) {
    if (!id) {
      return null;
    }

    // console.log('changeStatusTicket id=', id);
    const responseText = await this.sendRequest('PATCH', `method=changeStatusTicket&id=${id}`, body);
    const result = this.responseAnswer(responseText);
    return result;
  }

  async changeTicket(id, body) {
    if (!id || !body) {
      return null;
    }

    // console.log('changeTicket id=', id);
    const responseText = await this.sendRequest('PATCH', `method=changeTicket&id=${id}`, body);
    const result = this.responseAnswer(responseText);
    return result;
  }
}
