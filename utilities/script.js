// **функция pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x, n) {
//     let result = x;
//     for (let i=1; i < n; n++) {
//         result *= x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }

// // **округление числа не к ближайшей единиц, а к ближайшей сотне или десятой доле 
// // Math.round(n/m)*m., n - округляемое число; m - модуль округдения, число на которое делится округляемое

// function roundMod(n,m) {
//   return Math.round(n/m)*m;
// }

// // Функция получения случайного целого числа в заданном диапазоне

// function randomDiap(n,m) {
//   return Math.floor(Math.random() * (m-n+1)) + n;
// }

