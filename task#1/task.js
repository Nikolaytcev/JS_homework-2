const modal = Array.from(document.querySelectorAll('.modal__close'));
const modalMain = window.modal_main;
const modalSuccess = window.modal_success;


modal.forEach((e) => {
 e.onclick = () => {
    if (e.classList.contains('modal__close_times')) {
        modalMain.style.display = 'none';
        modalSuccess.style.display = 'none';
    }
    if (e.classList.contains('show-success')) {
        modalMain.classList = 'modal';
        modalSuccess.classList.add('modal_active');
    };
 }
});
