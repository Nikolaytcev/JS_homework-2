const pictures = Array.from(document.querySelectorAll('.slider__item'));
const sliders = Array.from(document.querySelectorAll('.slider__arrow'));
const sliders_dots = Array.from(document.querySelectorAll('.slider__dot'))
let counter = 0;
let ind = 0;


function showPic(index) {
    for (let i = 0; i < pictures.length; i++){
        pictures[i].classList = 'slider__item';
        sliders_dots[i].classList = 'slider__dot';
    };
    pictures[index].classList.add('slider__item_active');
    sliders_dots[index].classList.add('slider__dot_active');
};


function checkCounter(counter) {
    if (counter < 0) {
        if (counter % pictures.length == 0) {
            return 0;
        }
        else {
            return (pictures.length + counter % pictures.length);
        }
    }
    else {
        return counter % pictures.length;
    }
};

sliders.forEach((e) => {
    e.onclick = () => {
        if (e.classList.contains('slider__arrow_next')) {
            counter++;
            showPic(checkCounter(counter));
        }
        else {
            counter--;
            showPic(checkCounter(counter));
        }
}
});

for (let j = 0; j < sliders_dots.length; j++) {
    sliders_dots[j].onclick = () => {
        counter = j;
        showPic(counter)
    }
};




