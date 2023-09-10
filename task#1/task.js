const div = Array.from(document.querySelectorAll('.modal__close'));
const modal_main = window.modal_main;
const modal_success = window.modal_success;


div.forEach((e) => {
 e.onclick = () => {
    if (e.classList.contains('modal__close_times')) {
        modal_main.style.display = 'none';
        modal_success.style.display = 'none';
    }
    if (e.classList.contains('show-success')) {
        modal_success.classList.add('modal_active');
    };
 }
});
