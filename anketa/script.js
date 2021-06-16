let firstName = prompt("Ваше имя?");

while(true) {
    if (firstName !== "")
        break;
    firstName = prompt("Вы не указали свое имя! Введите пожалуйста свое имя");
}

// цикл по не пустой строке

let lastName = prompt("Ваша фамилия?");

while(true) {
    if (lastName !== null)
        break;
    lastName = prompt("Вы отказались указывать фамилию! Необходимо ввести фамилию");
}

// цикл по отмене ввода фамилии (в этом случае null выдает)

let patronymic = prompt("Ваше отчество?");

while(true) {
    if (patronymic.length >= 2)
        break;
    patronymic = prompt("Отчество слишком короткое. Возможно вы вводите неверное значение. Попытайтесь снова");
}

// цикл по проверке количества символов в отчетстве



let age = parseInt(prompt("Ваш возраст?"));

while(true) {
    if (!isNaN(age)) 
        break;
    age = prompt("Введите ваш возраст корректно");
}

// цикл по не числовому вводу возраст (f.e. буква введена)

const ageInDay = age*365;
const isMan = confirm("Ваш пол мужской?");
let gender;
const ageThroughTime = age + 5;
let pension;

if (isMan) {
    gender="мужской";
    if (age<65) {
        pension = "нет";
    }
    else {
        pension = "да";
    }
}
else {
    gender="женский";
    if (age<60) {
        pension = "нет";
    }
    else {
        pension = "да";
    }
}

alert (`ваше ФИО: ${firstName} ${lastName} ${patronymic}
ваш возраст в годах: ${age}
ваш возраст в днях: ${ageInDay}
через 5 лет вам будет: ${ageThroughTime}
ваш пол: ${gender}
вы на пенсии: ${pension}`);

// интерполяция с использованием шаблонного литера 


