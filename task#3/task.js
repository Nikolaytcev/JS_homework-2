const pictures = Array.from(document.querySelectorAll('.slider__item'));
const sliders = Array.from(document.querySelectorAll('.slider__arrow'));
const slidersDots = Array.from(document.querySelectorAll('.slider__dot'))

function showPic(index) {
    for (let i = 0; i < pictures.length; i++){
        pictures[i].classList = 'slider__item';
        slidersDots[i].classList = 'slider__dot';
    };
    pictures[index].classList.add('slider__item_active');
    slidersDots[index].classList.add('slider__dot_active');
};


function checkIndex(index) {
    if (index < 0) {
        if (index % pictures.length == 0) {
            return 0;
        }
        else {
            return (pictures.length + index % pictures.length);
        }
    }
    else {
        return index % pictures.length;
    }
};

sliders.forEach((e) => {
    e.onclick = () => {
        let indexActive = 0;
        pictures.forEach((e, i) => {if (e.classList.contains('slider__item_active')) {indexActive = i}});
        if (e.classList.contains('slider__arrow_next')) {
            indexActive++;
            showPic(checkIndex(indexActive));
        }
        else {
            indexActive--;
            showPic(checkIndex(indexActive));
        }
}
});

for (let j = 0; j < slidersDots.length; j++) {
    slidersDots[j].onclick = () => {
        showPic(j)
    }
};




