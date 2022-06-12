// Скрипт необходимо запускать с числовым параметром

function cntSimpleNumbers(num) {
    /* 
    Функция вычисления количества первых n простых чисел.
    */
    
    // Проверка на правильность ввода числового аргумента
    if (isNaN(num) || num < 1) {
        return undefined
    } 
    
    let i = 2;
    let cnt = [2]

    // Вычисление количество простых чисел в цикле
    for (let count = 1; count < num; count++) {
        do {
            i++;
            if (i % 2 != 0) {
                cnt[count] = i;        
            }    
        } while (i % 2 != 0);
    }
    return cnt;
}

console.time();
console.log(cntSimpleNumbers(process.argv[2]));
console.timeEnd();
