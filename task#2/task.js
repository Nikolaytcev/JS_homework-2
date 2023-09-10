const menu_link = Array.from(document.querySelectorAll('.menu__link'));
let flag = 0;

function setUnvisible() {
    let menu = document.querySelectorAll('.menu_sub');
    menu.forEach((e) => {
        e.classList = 'menu menu_sub';
    }

    )

}

menu_link.forEach((e) => {
    e.onclick = () => {
        let a = e.closest('.menu__item').querySelector('.menu');
        if (a.classList.contains('menu_active')) {
            a.classList = 'menu menu_sub';
            flag = 0

        }
        else {
            if (flag == 1) {
                setUnvisible()
            }
            a.classList.add('menu_active');
            flag = 1
        }
        return false;
    }
});
