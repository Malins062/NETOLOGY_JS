var readline = require('readline');

const textGame = 'Система загадала число от 0 до 999. Угадаете число?';
const textMainQuestion = 'Введите число: ';

const fs = require("fs");
const fileName = "./task_2.log";
let out = fs.createWriteStream(fileName)

var r1 = readline.createInterface(process.stdin, process.stdout);
// var rl = readline.createInterface(process.stdin, out, );

const n = Math.floor(Math.random() * 1000);
        
console.log(textGame);

rl.setPrompt(textMainQuestion);
rl.prompt();
// rl.question('Система загадала число от 0 до 999. Угадаете число?\nВведите число: ', function(answer) {

rl.on('line', (answer) => {
    if (isNaN(answer)) {
        console.log(`До свидания...`);

        rl.close();
    } else if (answer === n) {
        console.log(`ПОЗДРАВЛЯЮ, Вы угадали число!!! Система загадала: ${answer}`);
        rl.close();
    } else if (answer > n) {
        console.log(`Искомое число больше, введенного: ${answer}\n${textMainQuestion}`);
    } else if (answer < n) {
        console.log(`Искомое число меньше, введенного: ${answer}\n${textMainQuestion}`);
    }
});