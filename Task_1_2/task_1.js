// Скрипт необходимо запускать с числовым параметром

function cntSimpleNumbers(num) {
    /* 
    Функция вычисления количества простых чисел в заданном диапазоне.
    Параметр num - диапазон чисел от 2 до num включительно.
    */
    
    let cnt = -1

    // Проверка на правильность ввода числового аргумента
    if (isNaN(num) || num < 2) {
        return cnt
    }

    // Вычисление количество простых чисел в цикле
    cnt = 2;
    let i = cnt;
    while (i <= num) {
        if (i % 2 != 0) {
            cnt++;
        }
        i++;
    }
    return cnt;
}

console.time();
console.log(cntSimpleNumbers(process.argv[2]));
console.timeEnd();
