// Экзмепляр книги
const book = document.getElementById('book');

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
            style: 'size',
            styleClass: 'book_fs-',
        },
        {
            nameClass: 'book__control_color',
            activeClass: 'color_active',
            style: 'text-color',
            styleClass: 'book_color-',
        },
        {
            nameClass: 'book__control_background',
            activeClass: 'color_active',
            style: 'bg-color',
            styleClass: 'book_bg-',
        },
    ]

    // Отработка каждой настройки
    controls.forEach((control, index) => {
        // Виды кнопок
        const buttons = control.querySelectorAll('a');

        buttons.forEach((button) => {

            button.addEventListener('click', (event) => {                

                // Получение активной кнопки
                const buttonToDeactivate = control.querySelector('.' + CONTROLS_SETTINGS[index].activeClass);

                if (buttonToDeactivate != button) {

                    // Деактивация старого стиля
                    const attributeDeactivate = buttonToDeactivate.getAttribute('data-'+CONTROLS_SETTINGS[index].style)
                    if (attributeDeactivate) {
                        book.classList.remove(CONTROLS_SETTINGS[index].styleClass + attributeDeactivate);
                    }

                    // Деактивация активной кнопки
                    buttonToDeactivate.classList.remove(CONTROLS_SETTINGS[index].activeClass);
    
                    // Активация нажатой кнопки
                    button.classList.add(CONTROLS_SETTINGS[index].activeClass);
                    
                    // Активация нового стиля
                    const attributeActivate = button.getAttribute('data-'+CONTROLS_SETTINGS[index].style)
                    if (attributeActivate) {
                        book.classList.add(CONTROLS_SETTINGS[index].styleClass + attributeActivate);
                    }
    
                }

                event.preventDefault();
            });
        })
    });

})