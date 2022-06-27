const allMenuItems = document.querySelectorAll('.menu__item');
console.log('Все меню all_menu__item: ', allMenuItems);

const menuItems = Array.from(allMenuItems);
// console.log('Нужные menu__item: ', menuItems);


let activeMenu = null;

if (menuItems.length > 0) {

    for (let item of menuItems) {
        
        // console.log('Обрабатываемые клики на пункты меню: ', item);

        item.onclick = () => {
            console.log('Активное меню: ', activeMenu);
            if (activeMenu != null) {
                activeMenu.className = 'menu menu_sub';
            }

            let subMenu = item.querySelector('.menu_sub');
            // console.log(subMenu)
       
            if (subMenu != null && subMenu !=activeMenu) {
                subMenu.className += ' menu_active';
                activeMenu = subMenu;
                return false;    
            }
        }    
    }
}
