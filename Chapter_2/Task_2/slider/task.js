const sliders = Array.from(document.querySelectorAll('.slider__item'));
const slidersDot = Array.from(document.querySelectorAll('.slider__dot'));
const slidePrev = document.getElementsByClassName('slider__arrow_prev')[0];
const slideNext = document.getElementsByClassName('slider__arrow_next')[0];

console.log(sliders);
console.log(slidersDot);

function nextSlide(searchDirection) {
    // Поиск активного слайда
    const activeSlide = sliders.findIndex(slide => slide.className.includes('slider__item_active'));
    // console.log(activeSlide, sliders[activeSlide]);

    if (activeSlide != -1) {
        let nextActiveSlide;

        // Скрытие активного слайда
        sliders[activeSlide].className = 'slider__item';

        if (searchDirection) {
            // console.log('Next');
            // Поиск слайда вперед
            nextActiveSlide = (activeSlide == (sliders.length-1)) ? 0 : (activeSlide + 1);
        } else {
            // console.log('Previuos');
            // Поиск слайда назад
            nextActiveSlide = (activeSlide == 0) ? (sliders.length - 1) : (activeSlide - 1);
        }

        // console.log(nextActiveSlide);
        sliders[nextActiveSlide].className = 'slider__item slider__item_active';
    }
}

slidePrev.onclick = () => {
    nextSlide(0);
}

slideNext.onclick = () => {
    nextSlide(1);
}

// function deactivateDot(num) {
//     let dot = slidersDot[num];
//     dot.className = 'slider__dot';
// }

for (let dot of slidersDot) {
    dot.onclick = () => {
        // Поиск активного слайда
        const activeSlide = sliders.findIndex(slide => slide.className.includes('slider__item_active'));
        if (activeSlide != -1) {
            // Скрытие активного слайда
            sliders[activeSlide].className = 'slider__item';
            slidersDot[activeSlide].className = 'slider__dot';

            sliders[slidersDot.indexOf(dot)].className = 'slider__item slider__item_active';
            dot.className = 'slider__dot slider__dot_active';
        }
    }
}