function expandString() {
    let str = prompt("Введите строку");

    return str.toLowerCase().split("").reverse().join("");
}

alert(`перевернутая строка: ${expandString()}`);
