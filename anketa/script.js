const firstName = prompt("Ваше имя?");
const lastName = prompt("Ваша фамилия?");
const patronymic = prompt("Ваше отчество?");
const age = parseInt(prompt("Ваш возраст?"));
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
