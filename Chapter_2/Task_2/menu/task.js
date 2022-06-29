const allMenuItems = Array.from(document.querySelector('.menu_main').querySelectorAll('.menu__item'));

if (allMenuItems != null) {

    // let activeMenu = null;

    allMenuItems.forEach((item) => {
        if (item.querySelector('.menu_sub') !=null) {
            
            // Выборка ссылки названия подменю
            const aLink = item.getElementsByTagName('a')[0];
            // Отработка клик на название меню, имеющее подменю
            aLink.onclick = function getSubMenu() {

                const subMenu = item.getElementsByClassName('menu_sub')[0];
                const activeMenu = document.getElementsByClassName('menu_sub menu_active')[0];

                if (subMenu == activeMenu) {return false;}

                if (subMenu != activeMenu && subMenu != null) {
                    if (activeMenu != null) {
                        activeMenu.className = 'menu menu_sub';
                    }
                    subMenu.className = 'menu menu_sub menu_active';
                    // activeMenu = subMenu;
                    return false;
                }
            }
        }
    })    
}
