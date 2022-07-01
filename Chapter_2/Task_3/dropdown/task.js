const dropdownButtons = Array.from(document.querySelectorAll('.dropdown'));
console.log(dropdownButtons);

dropdownButtons.forEach(button => {
    dropdownItem = Array.from(button.querySelector('.dropdown__item'));
    console.log(dropdownItem);
});
