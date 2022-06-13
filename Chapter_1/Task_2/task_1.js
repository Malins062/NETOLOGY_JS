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
    let simpleNumbers = [2];
    let index = 1;

    while (i < num) {
        i++;

        let n = 1;
        do {
            n++;
        } while (i % n != 0) 

        if (i == n) {
            simpleNumbers[index] = n;
            index++;
        }
    }
    return simpleNumbers;
}

console.time();
console.log(cntSimpleNumbers(process.argv[2]));
console.timeEnd();
