export default class Message {
  constructor(userName, message, date, isOwner = false) {
    this.userName = userName;
    this.message = message;
    this.isOwner = isOwner;
    // console.log('class Message constructor:', userName, message, date);
    this.date = date;
    // console.log(this.date);
  }

  render() {
    const messageEl = document.createElement('li');
    messageEl.className = this.isOwner ? 'outgoing_msg' : 'incoming_msg';

    const divMessage = document.createElement('div');
    divMessage.className = 'msg';

    const messageHeader = document.createElement('div');
    messageHeader.className = 'msg_header';

    const messageDateTime = document.createElement('span');
    messageDateTime.className = 'msg_date_time';
    messageDateTime.textContent = this.date;

    const messageUser = document.createElement('span');
    messageUser.className = 'msg_user';
    messageUser.textContent = `${this.userName}, `;

    messageHeader.appendChild(messageUser);
    messageHeader.appendChild(messageDateTime);

    const messageText = document.createElement('p');
    messageText.className = 'msg_text';
    messageText.textContent = this.message;

    divMessage.appendChild(messageHeader);
    divMessage.appendChild(messageText);
    messageEl.appendChild(divMessage);
    return messageEl;
  }
}
