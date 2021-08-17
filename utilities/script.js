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

// ***DOM

// // *функция кроссбраузерного добавления стилевого правила в стилевую таблицу 

// function addCSSRule(sheet, selector, rules, index) {
//     if ( 'insertRule' in sheet )
//       sheet.insertRule(selector+'{'+rules+'}',index);
//     else if( 'addRule' in sheet )
//       sheet.addRule(selector,rules,index);
// }

// addCSSRule( document.styleSheets[0],
//     'div.SSS1', 'float: left; margin: 0;');


// // *проверка медиаусловия
// let mq=window.matchMedia('(orientation: portrait)');
// if ( mq.matches )
//    // ориентация устройства - портретная
// else
//    // ориентация устройства - ландшафтная
// Можно подписаться на событие изменения значения медиаусловия — mq.addListener(f) 
// или отписаться — mq.removeListener(f). Функция f при вызове получит в качестве аргумента
// всё то же медиаусловие (в данном случае mq) и сможет проверить его истинность (mq.matches).

// *функция прокрутки до элемента на странице
// function getElementPos(elem) {
//     var bbox=elem.getBoundingClientRect();
//     return {
//       left: bbox.left+window.pageXOffset,
//       top: bbox.top+window.pageYOffset
//     };
//   }
// // то же, кроссбраузерный вариант (в т.ч. для IE8-)
// function getElementPos(elem) {
//     var bbox=elem.getBoundingClientRect();

//     var body=document.body;
//     var docEl=document.documentElement;

//     var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;
//     var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;

//     var clientTop=docEl.clientTop||body.clientTop||0;
//     var clientLeft=docEl.clientLeft||body.clientLeft||0;

//     var top=bbox.top+scrollTop-clientTop;
//     var left=bbox.left+scrollLeft-clientLeft;

//     return {
//         left: left,
//         top: top
//     };
// }
