var readline = require('readline');

const fs = require("fs");
const fileName = "./task_2.log";
let out = fs.createWriteStream(fileName)

// var r1 = readline.createInterface(process.stdin, process.stdout);
const rl = readline.createInterface(process.stdin, out, );

const n = Math.floor(Math.random() * 1000);
        
// out.write(`Система загадала число от 0 до 999. Угадаете число?`)
// console.log(`Система загадала число от 0 до 999. Угадаете число?`);

// rl.question("Введите число: ", function(answer) {
rl.question('Система загадала число от 0 до 999. Угадаете число?\nВведите число: ', function(answer) {
    if (!answer) {
        console.log(`До свидания...`);
        rl.close();
    } else if (value === n) {
        console.log(`ПОЗДРАВЛЯЮ, Вы угадали число!!! Система загадала: ${answer}`);
        rl.close();
    } else if (value > n) {
        console.log(`Искомое число больше, введенного: ${answer}`);
    } else if (value < n) {
        console.log(`Искомое число меньше, введенного: ${answer}`);
    }
    rl.close();
});