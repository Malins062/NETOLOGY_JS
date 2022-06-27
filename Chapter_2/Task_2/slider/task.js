const sliders = Array.from(document.querySelectorAll('.slider__item'));
const slidersDot = Array.from(document.querySelectorAll('.slider__dot'));
const slidePrev = document.getElementsByClassName('slider__arrow_prev')[0];
const slideNext = document.getElementsByClassName('slider__arrow_next')[0];

let numActiveSlide = 0;
let activeSlide = sliders[numActiveSlide];
let activeSliderDot = slidersDot[numActiveSlide];
const countSliders = sliders.length;

console.log(sliders);
console.log(activeSlide);
console.log(slidePrev);
console.log(slideNext);

activeSlide.deActivate = function() {
    this.className = 'slider__item';
}

activeSlide.Activate = function() {
    this.className += 'slider__item_active';
}

function nextSlide(i) {
    numActiveSlide = numActiveSlide + i;
    if (numActiveSlide < 0) {
        numActiveSlide = countSliders - 1;    
    } else if (numActiveSlide == countSliders) {
        numActiveSlide = 0;
    }

    console.log(numActiveSlide);
}

function slideActivate(num) {
    activeSlide.className = 'slider__item'; 
    activeSlide = sliders[num];
    activeSlide.className = 'slider__item slider__item_active';
    console.log(activeSlide);
}

slidePrev.onclick = () => {
    console.log('Previuos');
    nextSlide(-1);
    slideActivate(numActiveSlide);
}

slideNext.onclick = () => {
    console.log('Next');
    nextSlide(1);
    slideActivate(numActiveSlide);
}

// function deactivateDot(num) {
//     let dot = slidersDot[num];
//     dot.className = 'slider__dot';
// }

// for (let dot of slidersDot) {
//     let num = 0;
//     dot.onclick = () => {
//         deactivateDot(numActiveSlide);
//         dot.className = 'slider__dot slider__dot_active';
//         numActiveSlide = num;
//         slideActivate(numActiveSlide)
//     }
// }