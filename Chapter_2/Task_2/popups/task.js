const window_main = document.getElementById('modal_main');
window_main.className += ' modal_active'

const window_close = document.getElementsByClassName('modal__close');

window_close.onclick(() => {
    window_main.className = 'modal';
})