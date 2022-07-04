const dropdownButtons = Array.from(document.querySelectorAll('.dropdown'));
console.log(dropdownButtons);

dropdownButtons.forEach((item) => {
    const dropdownList = item.querySelector('.dropdown__list');
    console.log(dropdownList);

    const dropdownValue = item.querySelector('.dropdown__value');
    console.log(dropdownValue);

    dropdownValue.addEventListener('click', () => {
        // console.log('click');
        dropdownList.className = dropdownList.classList.contains('dropdown__list_active') ? 'dropdown__list': 'dropdown__list dropdown__list_active';
    });

    const dropdownItems = dropdownList.querySelectorAll('.dropdown__item');
    console.log(dropdownItems);

    dropdownItems.forEach((item) => {
        console.log(item);
        item.addEventListener('click', function () {
            const textContent = this.querySelector('.dropdown__link').textContent.trim();
            console.log(textContent);
            if (dropdownValue.textContent != textContent) {
                dropdownValue.textContent = textContent;
            }
            dropdownList.className = 'dropdown__list';
            return false;    
    }, true);
    });
});
