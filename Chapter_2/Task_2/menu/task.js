const menuItems = document.querySelectorAll('.menu__item');

console.log('Поиск menu__item: ', menuItems);

if (menuItems.length > 0) {
    for (let item of menuItems) {
        
        let parentItem = item.closest('.menu_main');
        console.log(parentItem);

        if (parentItem != null) {
            console.log(item);
            item.onclick = () => {
                let subMenu = item.querySelector('.menu_sub')
                if (subMenu != null) {
                    subMenu.className += ' menu_active';
                    return false;
                } 
            }    
        }
    }
}
