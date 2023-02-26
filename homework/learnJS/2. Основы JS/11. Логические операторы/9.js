let userLogin = prompt('Кто там ?');
let userPassword;
if (userLogin !== 'Админ') {
    if (userLogin === '' || userLogin === null) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю')
    }
} else {
    userPassword = prompt('Пароль ?');
    if (userPassword === 'Я главный') {
        alert('Здравствуйте!');
    } else if (userPassword === '' || userPassword === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
}