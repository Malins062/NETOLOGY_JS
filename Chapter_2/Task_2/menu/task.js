const subMenuItems = Array.from(document.querySelectorAll('.menu__sub'));

subMenuItems.forEach(() => {
    
})

// const menuItems = Array.from(allMenuItems);
// console.log('Нужные menu__item: ', menuItems);

// let activeMenu = null;
// // let subMenu = null;

// if (menuItems.length > 0) {

//     for (let item of menuItems) {
//         console.log('Обрабатываем клики на меню: ', item);
//         if (item.querySelector('.menu_sub'))
//         item.onclick = function getSubMenu() {
//             const subMenu = this.querySelector('.menu_sub');
//             // const subMenu = this.querySelector('.menu_sub');
//             console.log('1. Есть ли подменю: ', subMenu);
//             console.log('2. Активное меню ДО: ', activeMenu);
//             if (subMenu == activeMenu) alert('1')
//             if (subMenu != activeMenu && subMenu != null) {
//                 if (activeMenu != null) {
//                     activeMenu.className = 'menu menu_sub';
//                 }
//                 subMenu.className = 'menu menu_sub menu_active';
//                 activeMenu = subMenu;

//                 console.log('3. Подменю ПОСЛЕ: ', subMenu);
//                 console.log('4. Активное меню ПОСЛЕ: ', activeMenu);
//                 return false;
//             }
//         }    

        // console.log('Обрабатываем клики на меню: ', item);
        // subMenu = item.querySelector('.menu_sub');
        // if (subMenu != null) {
        //     console.log('+');
        //     item.onclick = function getSubMenu() {
        //         // const subMenu = this.querySelector('.menu_sub');
        //         console.log('1. Есть ли подменю: ', subMenu);
        //         console.log('2. Активное меню ДО: ', activeMenu);
        //         alert('1');
        //         if (subMenu != activeMenu) {
        //             if (activeMenu != null) {
        //                 activeMenu.className = 'menu menu_sub';
        //             }
        //             subMenu.className = 'menu menu_sub menu_active';
        //             activeMenu = subMenu;
    
        //             console.log('3. Подменю ПОСЛЕ: ', subMenu);
        //             console.log('4. Активное меню ПОСЛЕ: ', activeMenu);
        //             return false;
        //         }
        //     }    

            // let subMenu = item.querySelector('.menu_sub');
        // if (subMenu != null) {
        //     item.onclick = function getSubMenu() {
        //         // const subMenu = this.querySelector('.menu_sub');
        //         // const subMenu2 = this.closest('.menu_sub');
        //         console.log('Есть ли подменю: ', subMenu);
        //         // console.log('Есть ли подменю2: ', subMenu2);
        //         if (subMenu != null) {
        //             console.log('Активное меню ДО: ', activeMenu);
    
        //             if (subMenu != activeMenu) {
        //                 if (activeMenu != null) {
        //                     activeMenu.className = 'menu menu_sub';
        //                 }
        //                 subMenu.className = 'menu menu_sub menu_active';
        //                 activeMenu = subMenu;
        
        //                 console.log('Подменю ПОСЛЕ: ', subMenu);
        //                 console.log('Активное меню ПОСЛЕ: ', activeMenu);
        //             }
        //             return false;    
        
        //         }
        //     }    
    
        
    }
}
