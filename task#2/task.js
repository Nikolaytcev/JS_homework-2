const subMenu = Array.from(document.querySelectorAll('.menu_sub'));

subMenu.forEach((e) => {
    let linkSubMenu = e.closest('.menu__item').querySelector('.menu__link');
    linkSubMenu.onclick = () => {
        let menuActive = document.querySelector('.menu_active');
        if (menuActive != null) {
            menuActive.classList = 'menu menu_sub';
            if (menuActive.closest('.menu__item').querySelector('.menu__link') != linkSubMenu) {
                e.classList.add('menu_active')
            }
        }
        else {
            e.classList.add('menu_active');
        }
        return false;
    }
});
