import AVATAR from '../img/avatar.png';

const NAME_OWNER = 'Вы';

export default class User {
  constructor(name, isOwner = false) {
    this.userName = name;
    this.isOwner = isOwner;
  }

  render() {
    const liEl = document.createElement('li');
    liEl.className = 'user_item';
    if (this.isOwner) {
      liEl.classList.add('active_user');
    }

    const divEl = document.createElement('div');
    divEl.className = 'user';

    const divImgEl = document.createElement('div');
    divImgEl.className = 'user_image';
    const avatarEl = document.createElement('img');
    avatarEl.src = AVATAR;

    const divIbEl = document.createElement('div');
    divIbEl.className = 'user_name';
    const userNameEl = document.createElement('h5');
    userNameEl.className = 'user__name';
    userNameEl.textContent = this.isOwner ? NAME_OWNER : this.userName;
    avatarEl.alt = userNameEl.textContent;

    divImgEl.appendChild(avatarEl);
    divIbEl.appendChild(userNameEl);

    divEl.appendChild(divImgEl);
    divEl.appendChild(divIbEl);

    liEl.appendChild(divEl);
    return liEl;
  }
}
