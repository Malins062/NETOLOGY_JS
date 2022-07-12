// Метод создания массива из всех необходимых selector-ов
const nodeArray = (selector, parent=document) => [].slice.call(parent.querySelectorAll(selector));

// Основной блок выбора опций
const interestsMain = document.querySelector('.interests_main ul');

// Создание массива всех input-ов 
const allInterests = nodeArray('input', interestsMain);

// Общий обработчик событий
addEventListener('change', e => {
    // Текущий объект который изменился
    let check = e.target;

    // Поиск измененного объекта в нашем списке checkbox-ов, если не найден то выходим из обработчика
    if(allInterests.indexOf(check) === -1) return;

    //  Массив дочерних объектов для <li>, где находится обхъект check
    const children = nodeArray('input', check.parentNode.parentNode);
    
    // Установка для каждого дочернего объекта текущего состояния родителя
    children.forEach(child => child.checked = check.checked);
    
    // Простановка checkbox-ов вверх
    while(check){

        // Родительский input-a
        const parent = (check.closest(['ul']).parentNode).querySelector('input');

        // Все input-ы ниже главного родиля
        const siblings = nodeArray('input', parent.closest('li').querySelector(['ul']));

        // Получение всех статусов дочерних input-ов
        const checkStatus = siblings.map(check => check.checked);
        
        // Проверка все ли дочерние объекты "нажаты" (checked)
        const every  = checkStatus.every(Boolean);

        // Проверка "нажат" ли какой-нить один из дочерних объектов (indeterminate)
        const some = checkStatus.some(Boolean);   
        
        // Установка checked родителю, если все дочерние "нажаты"
        parent.checked = every;   
        
        // Установка indeterminate родителю, если не все дочерние "нажаты", а хотя бы один
        parent.indeterminate = !every && every !== some;

        // Проверка на следующий цикл, есть ли родительский элемент
        check = (check != parent) ? parent : 0;
    }
})









/* 
closest polyfill for ie 


if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
*/