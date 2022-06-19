const textGame = 'Система загадала число от 0 до 999. Угадаете число?';
const textMainQuestion = 'Введите число: ';

// Текст вопроса
let textQuestion = (attempt, description=textMainQuestion) => {return `Попытка №${attempt}. ${description}`};

// Имя файла журнала
const logFileName = "./task_3.log";

var rl = require('readline').createInterface(process.stdin, process.stdout);    

function getCurrentAttempt(attempt) {
    return function increment(incr) {
        return (attempt + incr);
    }
}

function writeLog(fileName, content, dateTime=true) {
    /*
    Функция добваления информации "content" в файл "fileName"
    Параметр "dateTime" необязателен, указывает на то проставлять дату и время записи да/нет
    */

    const fs = require('fs');
    let new_content = '';

    // Проверка проставлять дату и время или нет
    if (dateTime) {
        new_content = new Date().toLocaleString() + ' - ' + content + '\n';
    } else {
        new_content = content
    }

    // Запись в файл
    fs.promises.appendFile(fileName, new_content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

async function getAnswer(text) {
    /*
    Функция вывод диалога с пользователем и вывода ответа
    "text" - текст вопроса, "n" - число дла сравнения
    */


    rl.question(text, (answer) => {
        let exit = false;

        // Запись в файл
        writeLog(logFileName, text + answer);

        let answer_text = '';
        console.log(answer, randomNumber);
        
        // Проверка введеной информации
        if (isNaN(answer)) {
            answer_text = 'До свидания...';
            exit = true;
        } else if (answer == randomNumber) {
            answer_text = `ПОЗДРАВЛЯЮ, Вы угадали число!!! Система загадала: ${answer}`;
            exit = true;
        } else {
    
            if (answer > randomNumber) {
                answer_text = `Искомое число ментше, введенного: ${answer}`;
            } else if (answer < randomNumber) {
                answer_text = `Искомое число больше, введенного: ${answer}`;
            }    
        }

        // Вывод сообщения
        console.log(answer_text);

        // Запись в файл
        writeLog(logFileName, answer_text);

        if (exit) {
            rl.close();
        } else {
            getAnswer(textQuestion(currentAttempt(1)));
        }

    });    
}

const currentAttempt = getCurrentAttempt(0);

// Загадывание числа системой
const randomNumber = Math.floor(Math.random() * 1000);

// Вывод названия игры
console.log(textGame);

// Запись лога
writeLog(logFileName, textGame);

getAnswer(textQuestion(currentAttempt(1)));
