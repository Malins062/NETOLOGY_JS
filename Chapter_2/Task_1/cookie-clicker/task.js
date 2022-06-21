function counter(start=0) {
    // Функция - Счетчик кликов

    let _next = start;
    return function increment() {
        _next++;
        return _next;
    }
}

function nowSeconds() {
    // Функция вычисления текущего времени в секундах

    const seconds = new Date().getTime() / 1000;
    return seconds;
}

const size = 50;
const clickRate = 0;
let secondsInterval = 0;

const addClick = counter();

const img = document.getElementById('cookie');
const countCliker = document.getElementById('clicker__counter');
const clickerRate = document.getElementById('clicker__rate');

img.onclick = () => {
    countCliker.textContent = addClick();

    if (countCliker.textContent == 1) {        
        secondsInterval = nowSeconds();
        clickerRate.textContent = 1;
        // console.log(secondsInterval);
    } else if (!isNaN(countCliker.textContent)) {
        const now = nowSeconds();
        const value = 1 / (now - secondsInterval);
        
        clickerRate.textContent = new Intl.NumberFormat('ru', { minimumFractionDigits: 4}).format(value);
        
        secondsInterval = now;
    }

    img.width += size;
    img.height += size;

    setTimeout(function pause() {
        img.width -= size;
        img.height -= size;
    }, 100)
}