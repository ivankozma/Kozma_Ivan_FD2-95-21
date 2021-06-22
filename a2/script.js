
function deleteEmpty() {

    let answ = prompt("Введите строку!");

    while (answ.startsWith(" ")) {
        answ = answ.slice(1);
    }
// проверка по условию отсутствия пустого символа в начале строки, в этом случае пустой символ убираем

    while (answ.endsWith(" ")) {
        answ = answ.slice(0, answ.length - 1);
    }
// проверка по условию отсутствия пустого символа в конце строки, в этом случае пустой символ убираем

    alert(`*${answ}*`);
}

deleteEmpty();

