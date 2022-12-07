import './collapsible.css';

const CLASS_NAME = 'collapsible';
const PREFIX = 'csbl';

const clsblObjects = document.querySelectorAll(`[data-${PREFIX}-toggle=${CLASS_NAME}]`);

clsblObjects.forEach((element) => {
  const id = element.getAttribute(`data-${PREFIX}-target`);
  const clsblObject = document.querySelector(`.${CLASS_NAME}${id}`);
  if (!clsblObject) {
    return;
  }
  element.addEventListener('click', () => clsblObject.classList.toggle('show'));
});
