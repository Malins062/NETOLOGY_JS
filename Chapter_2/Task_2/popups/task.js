const windowMain = document.getElementById('modal_main');
const windowSuccess = document.getElementById('modal_success');

windowMain.className += ' modal_active';

const windowClose = document.querySelectorAll('.modal__close');
const buttonSuccess = document.querySelector('.show-success');

for (let activeWindow of windowClose) {
    activeWindow.onclick = function closeWindow() {
        let windowForClose = this.closest('.modal');
        windowForClose.className = 'modal';
    }
}

buttonSuccess.onclick = () => {
    windowSuccess.className += ' modal_active';
    windowMain.className = 'modal';
}