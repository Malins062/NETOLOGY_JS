const sliders = Array.from(document.querySelectorAll('.slider__item'));
const slidePrev = document.getElementsByClassName('slider__arrow_prev');
const slideNext = document.getElementsByClassName('slider__arrow_next');

console.log(sliders);
console.log(slidePrev);
console.log(slideNext);

let numActiveSlide = 0;
let activeSlide = sliders[numActiveSlide];
const countSliders = sliders.length;

activeSlide.deActivate = function() {
    this.className = 'slider__item';
}

activeSlide.Activate = function() {
    this.className += 'slider__item_active';
}

function nextSlide(i) {
    numActiveSlide += i;
    if (numActiveSlide < 0) {
        numActiveSlide = countSliders - 1;    
    } else if (numActiveSlide == countSliders) {
        numActiveSlide = 0;
    }

    activeSlide.deActivate;
    activeSlide = sliders[numActiveSlide];
    activeSlide.activeSlide;
}

slidePrev.onclick = () => {
    console.log('Previuos');
    nextSlide(-1);
}

slideNext.onclick = () => {
    console.log('Next');
    nextSlide(1);
}
