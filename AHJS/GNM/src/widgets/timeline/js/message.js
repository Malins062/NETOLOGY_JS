import AVATAR from '../img/eye.png';

export default class Message {
  constructor(message, date, coords = null) {
    this.message = message;
    this.date = date;
    this.coords = coords;
  }

  render() {
    const messageEl = document.createElement('li');
    messageEl.className = 'message';

    const divMessage = document.createElement('div');
    divMessage.className = 'msg';

    const messageHeader = document.createElement('div');
    messageHeader.className = 'msg_header';

    const messageDateTime = document.createElement('span');
    messageDateTime.className = 'msg_date_time';
    messageDateTime.textContent = this.date;

    messageHeader.appendChild(messageDateTime);

    const messageText = document.createElement('p');
    messageText.className = 'msg_text';
    messageText.textContent = this.message;

    const messageFooter = document.createElement('div');
    messageFooter.className = 'msg_footer';

    const messageCoords = document.createElement('span');
    messageCoords.className = 'msg_coords';
    messageCoords.textContent = this.coords;

    const divAvatarEl = document.createElement('div');
    divAvatarEl.className = 'coords_image';
    const avatarEl = document.createElement('img');
    avatarEl.src = this.coords ? AVATAR : '';
    divAvatarEl.appendChild(avatarEl);

    messageFooter.appendChild(messageCoords);
    messageFooter.appendChild(divAvatarEl);

    divMessage.appendChild(messageHeader);
    divMessage.appendChild(messageText);
    divMessage.appendChild(messageFooter);
    messageEl.appendChild(divMessage);
    return messageEl;
  }
}
