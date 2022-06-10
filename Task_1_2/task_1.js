function cntSimpleNumbers(num) {
    // Функция вычисления количества простых чисел в диапазоне от 0 до number включительно    
    
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
