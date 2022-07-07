// Количество и виды настроек отображения книги
const bookControls = Array.from(document.querySelectorAll('.book_controls'));

bookControls.forEach((bookControl) => {
    // Каждая из настроек отображения
    const controls = Array.from(bookControl.querySelectorAll('.book_control'));

    // Отработка каждой настройки
    controls.forEach((control) => {
        // Виды кнопок
        const buttons = Array.from(control.querySelectorAll('a'));

        buttons.forEach((button) =>{
            button.addEventListener('click', () => {                
                button.classList.add('font-size');
                return false;
            })
        })
    });

})