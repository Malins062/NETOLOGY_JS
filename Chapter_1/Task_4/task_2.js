var readline = require('readline');

const textGame = 'Система загадала число от 0 до 999. Угадаете число?';
const textMainQuestion = 'Введите число: ';
let currentAttempt = 1;
let textQuestion = (attempt, description=textMainQuestion) => {return `Попытка №${attempt}. ${description}`};

const fs = require("fs");
const logFileName = "./task_2.log";

function writeLog(fileName, content, dateTime=true) {
    let new_content = '';
    if (dateTime) {
        new_content = new Date().toLocaleString() + ' - ' + content + '\n';
    } else {
        new_content = content
    }
    fs.appendFile(fileName, new_content, (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
}


var rl = readline.createInterface(process.stdin, process.stdout);

const n = Math.floor(Math.random() * 1000);


console.log(textGame);
writeLog(logFileName, textGame);

rl.setPrompt(textQuestion(currentAttempt));
writeLog(logFileName, textQuestion(currentAttempt));
rl.prompt();

rl.on('line', (answer) => {
    currentAttempt++;
    // console.log(answer, n);

    let text = '';
    let exit = false;

    if (isNaN(answer)) {
        text = 'До свидания...';
        exit = true;
    } else if (answer == n) {
        text = `ПОЗДРАВЛЯЮ, Вы угадали число!!! Система загадала: ${answer}`;
        exit = true;
    } else if (answer > n) {
        text = `Искомое число меньше, введенного: ${answer}\n${textQuestion(currentAttempt)}`;
    } else if (answer < n) {
        text = `Искомое число больше, введенного: ${answer}\n${textQuestion(currentAttempt)}`;
    }

    console.log(text);
    writeLog(logFileName, text);
    if (exit) {
        rl.close();
    }

});