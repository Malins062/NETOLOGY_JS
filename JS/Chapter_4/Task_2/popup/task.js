KEY_SUBSCRIBE = 'subscribe';

const subscribeModal = document.getElementById('subscribe-modal');

if (!getCookie(KEY_SUBSCRIBE)) {
    subscribeModal.classList.add('modal_active');
}

const subscribeModalClose = document.querySelector('.modal__close_times');

subscribeModalClose.onclick = () => {
    subscribeModal.classList.remove('modal_active');
    setCookie(KEY_SUBSCRIBE, false);
}


//  Методы для работы с куками

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);  
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}