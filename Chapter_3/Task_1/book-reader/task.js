// Количество и виды настроек отображения книги
const bookControls = Array.from(document.querySelectorAll('.book__controls'));
// console.log(bookControls);

bookControls.forEach((bookControl) => {
    // Каждая из настроек отображения
    const controls = Array.from(bookControl.querySelectorAll('.book__control'));

    const CONTROLS_SETTINGS = [
        {
            nameClass: 'book__control_font-size',
            activeClass: 'font-size_active',
        },
        {
            nameClass: 'book__control_color',
            activeClass: 'color_active',
        },
        {
            nameClass: 'book__control_background',
            activeClass: 'color_active',
        },
    ]
    // console.log(CONTROLS_SETTINGS);

    // Отработка каждой настройки
    controls.forEach((control, index) => {
        // Виды кнопок
        const buttons = Array.from(control.querySelectorAll('a'));
        console.log(buttons);

        buttons.forEach((button) => {
            // console.log(button);
            button.addEventListener('click', (event) => {                
                console.log(button);

                // Деактивация активной кнопки
                const buttonActive = document.querySelector('.tab_active');       
                buttonActive.className = 'tab';

                // Активация нажатой кнопки
                button.classList.add(CONTROLS_SETTINGS[index].activeClass);

                event.preventDefault();
            });
        })
    });

})