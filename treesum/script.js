function treeSum(array) {
    let sum = 0;
    array.forEach(function(i) {
    // перебор массива методом forEach, функция в методе выполняется 1 раз для i-го элемента
        if(typeof i == "object") {
            sum += treeSum(i);
            // если i - элемент не объект(массив), происходит рекурсия
        } else {
            sum += i;
            // если i-'элемент - не объект, происходит суммирование с результатом предыдуще итерации
        }
    });
    return sum;
}

let test =   [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];

alert(treeSum(test));