const tabs = Array.from(document.getElementsByClassName('tab'));
const tabs_content = Array.from(document.getElementsByClassName('tab__content'));

// console.log(tabs);
// console.log(tabs_content);

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        // Деактивация активной вкладки
        const tab_active = document.querySelector('.tab_active');       
        tab_active.className = 'tab';
        tabs_content[tabs.indexOf(tab_active)].className = 'tab__content';

        // Активация новой вкладки
        tab.className = 'tab tab_active';
        tabs_content[tabs.indexOf(tab)].className = 'tab__content tab__content_active';
    })
});