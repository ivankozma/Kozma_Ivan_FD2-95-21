// Написать чистую функцию для форматирования числа заданной по форматной строке, например:
// console.log( formatNumber(2.3,""# ### ###.##"") );
// // выдаёт ""2.30""
// console.log( formatNumber(12345.368,""# ### ###.##"") );
// // выдаёт ""12 345.37""
// В форматной строке символ ""#"":
//  - после запятой кодирует обязательную цифру, т.е. после запятой в данном примере должно быть ровно два знака, в любом числе;
//  - до запятой кодирует НЕобязательную цифру, т.е. до запятой в данном примере должно быть столько знаков, сколько требуется для отображения целой части числа."

let myNumber = prompt('Введите число');
let format = prompt('Введите формат числа', "### ###.###");

function formatNumber(number, format) {
    let commaAfter = format.split('.');
    // строку разбиваем на массив из 2-х элементов. До и после запятой
    let signs = commaAfter[1].length;
    // определяем необходимое количество знаков после запятой(по длине получившегося массива)
    let correctedNumber = number.toFixed(signs);
    // let correctedNumber = String(number.toFixed(signs));
    // в заданное числе корректируем количество знаков после плавающей запятой 
    let commaNumber = correctedNumber.split('.');
    // разбиваем число на массив (разделитель запятая) 

    let reverseFormat = commaAfter[0].split('').reverse('');
    //разбиваем формат после запятой на массив и переворачиваем
    let reverseNumber = commaNumber[0].split('').reverse('');
    //разбиваем часть числа до запятой в фиксированном числе на массив и переворачиваем

    for (let i = 0; i <= reverseFormat.length; i++) {
        if (reverseFormat[i] === ' ') {
            reverseNumber.splice(i, 0, " ")// Ставим пробел на i место,ничего не удаляем
        }
    }
    // сравниваем элементы в 2 массивах формат и число 
    
    formattedNumber = `${reverseNumber.reverse('').join('')}.${commaNumber[1]}`;
    // необходимое число собираем из 2-х частей
    return formattedNumber;
}

alert(formatNumber(parseFloat(myNumber), format))