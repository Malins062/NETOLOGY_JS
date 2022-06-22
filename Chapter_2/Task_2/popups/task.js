const window_main = document.getElementById('modal_main');
const window_success = document.getElementById('modal_success');

window_main.className += ' modal_active'

const window_close = document.querySelector('.modal__close');
const button_success = document.querySelector('.show-success');

window_close.onclick = () => {
    window_main.className = 'modal';
}

window_success.onclick = () => {
    window_success.className = 'modal';
}

button_success.onclick = () => {
    window_success.className += ' modal_active'
    window_main.className = 'modal';
}