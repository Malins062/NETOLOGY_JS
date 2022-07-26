// Название класса активной подсказки, которая на экране
const ACTIVE_TOOLTIP = 'tooltip_active';

// Отступ подсказаки от элемента
const MARGIN = 2;

// Получение всех ссылок для которых нужны подсказки
const aTooltips = document.querySelectorAll('.has-tooltip');

function createDivTooltip(elementForHint) {
    /*
    Функция создания элемента подсказки для html-элемента - element
        margin - дополнительный отступ от элемента
    */

    // Создание экзмепляра подсказки - div
    const hintElement = document.createElement('div');
    
    // Текст подсказки
    hintElement.textContent = elementForHint.title;

    // Добавление название класса для div
    hintElement.className = 'tooltip';

    // Создание html-элемента подсказки
    elementForHint.insertAdjacentElement('afterEnd', hintElement);    
}

function positionChange(hintElement, elementForHint, margin=0) {
    /*
    Функция изменения координат элемента hinElement, относительно elementForHint,
        margin - дополнительный отступ от элемента
    */

    // Считываение дополнительных атрибутов позицнирования
    const dataSet = elementForHint.dataset.position ? elementForHint.dataset.position : "bottom";

    // Текущие координаты element
    const coordElement = elementForHint.getBoundingClientRect();
    
    // Текущая позиция hintElement
    const coordHintElement = hintElement.getBoundingClientRect();

    // Задание координат подсказки
    switch (dataSet) {
        case "bottom":
            hintElement.style.left = `${coordElement.left}px`;
            hintElement.style.top = `${coordElement.bottom + margin}px`;
            break;
        case "top":
            hintElement.style.left = `${coordElement.left}px`;
            hintElement.style.top = `${coordElement.top - coordHintElement.height - margin}px`;
            break;
        case "right":
            hintElement.style.left = `${coordElement.left + coordElement.width + margin}px`;
            hintElement.style.top = `${coordElement.top}px`;
            break;
        case "left":
            hintElement.style.left = `${coordElement.left - coordHintElement.width - margin}px`;
            hintElement.style.top = `${coordElement.top}px`;
            break;
    }
}

aTooltips.forEach((aLink) => {
    // Создание подсказки для ссылки
    createDivTooltip(aLink, MARGIN);

    // Обработчик клика на ссылку
    aLink.addEventListener('click', (e) => {
        // Следующий элемент за ссылкой - div
        const tooltip = e.currentTarget.nextElementSibling;
        
        // Поиск активной подсказки
        const activeTooltip = document.querySelector('.' + ACTIVE_TOOLTIP);

        if (activeTooltip != tooltip) {
            // Деактивация старой подсказки
            if (activeTooltip) {
                activeTooltip.classList.remove(ACTIVE_TOOLTIP);
            }

            // Активация подсказки
            tooltip.classList.add(ACTIVE_TOOLTIP);

            // Задание координат элемента
            positionChange(tooltip, e.currentTarget, MARGIN);
        } else {
            // Деактивация подсказки
            tooltip.classList.remove(ACTIVE_TOOLTIP);
        }

        e.preventDefault();
    });
});

// Деактивация подсказок при прокрутки окна или изменения размеров
const windowEvents = ['scroll', 'resize'];
windowEvents.forEach((event) => {
    window.addEventListener(event, () => {
        const activeTooltip = document.querySelector('.' + ACTIVE_TOOLTIP);
        if (activeTooltip) {
            activeTooltip.classList.remove(ACTIVE_TOOLTIP);        
        }
    })    
});
