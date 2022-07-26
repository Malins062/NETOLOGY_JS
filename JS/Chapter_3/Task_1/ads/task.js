// Скорость прокрутки блоков рекламы по умолчанию (если не задана)
const SPEED = 1000;

// Выборка всех ротаторов рекламы
const rotators = Array.from(document.querySelectorAll('.rotator'));

// Перебор всех ротаторов
rotators.forEach((rotator) => {
    // Выборка всех блоков рекламы для ротатора
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    // console.log(cases);

    // Если блоки рекламы есть, то задаем таймаут и перебираем ролики
    if (cases.length > 0) {
        // Начальный блок рекламы
        let next = 0;

        // Запрос настроек для первого блока рекламы
        const firstDataSet = cases[next].dataset;

        // Изменение цвета для первого блока рекламы, если задан
        cases[next].style.color = firstDataSet.color;
        
        // Установка таймера для прокрутки рекламы
        setTimeout(function tick() {
            // Гашение текущего блока рекламы
            cases[next].classList.remove('rotator__case_active');
            
            // Вычисление следующего блока
            if (++next == cases.length) {
                next = 0;
            }

            // Запрос настроек для cледующего блока рекламы
            const dataSet = cases[next].dataset;
            
            // Изменение цвета рекламы, если задан
            cases[next].style.color = dataSet.color;

            // Показ следующего блока рекламы
            cases[next].classList.add('rotator__case_active');

            // Установка задержки на следующий блок рекламы
            setTimeout(tick, dataSet.speed ? dataSet.speed : SPEED);
        }, firstDataSet.speed ? firstDataSet.speed : SPEED);
    }
});