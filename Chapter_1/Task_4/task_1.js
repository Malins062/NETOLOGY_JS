function getPasswordChecker(password) {
    return function checker(correctPassword) {
        return (correctPassword === password)
    }
}

const checkPassword = getPasswordChecker('qwertY');

console.log(checkPassword('sss'));
console.log(checkPassword('qwertY'));
console.log(checkPassword('sssas'));
