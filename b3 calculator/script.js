"use strict";

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button0 = document.getElementById('button0');
const buttonDot = document.getElementById('buttonDot');
const buttonBracketLeft = document.getElementById('buttonBracketLeft');
const buttonBracketRight = document.getElementById('buttonBracketRight');
const buttonDivide = document.getElementById('buttonDivide');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonMinus = document.getElementById('buttonMinus');
const buttonPlus = document.getElementById('buttonPlus');
const buttonEquality = document.getElementById('buttonEquality');
const buttonReset = document.getElementById('buttonReset');
const display = document.getElementById('display');

display.innerHTML = "";

function buttonClick(argument) {
	argument.addEventListener ("click", function() {
		if (display.innerHTML[0] == "0") {
			display.innerHTML = argument.value;
		} else {
			display.innerHTML += argument.value;
		}
	})
};
//ф-ция для отслеживания набора символов на экране

buttonClick(button1);
buttonClick(button2);
buttonClick(button3);
buttonClick(button4);
buttonClick(button5);
buttonClick(button6);
buttonClick(button7);
buttonClick(button8);
buttonClick(button9);
buttonClick(button0);
buttonClick(buttonDot);
buttonClick(buttonBracketLeft);
buttonClick(buttonBracketRight);
buttonClick(buttonDivide);
buttonClick(buttonMultiply);
buttonClick(buttonMinus);
buttonClick(buttonPlus);

buttonReset.addEventListener("click" ,function() {
	display.innerHTML = 0;
});
//ф-ция для обнуления экрана 


buttonEquality.onclick = function() {
    let value = display.innerHTML;
    display.innerHTML = calculate(value);
};

//ф-ция для просчета значений

function calculate(str) {
    let myArr = parseString(str);
    let result = searchFragment(myArr);

    function searchFragment(arr) {
        let range = [];
        let fragmentArr = [];
        let tempArray = arr;

        for (let j = 0; j < tempArray.length; j++) {

            if (tempArray[j] == ')') {
                range.push(j);
                for (let i = j; i >= 0; i--) {

                    if (tempArray[i] == '(') {

                        range.unshift(i);
                        fragmentArr = tempArray.slice(range[0] + 1, range[1]);

                        if (fragmentArr.length === 1) {
                            tempArray.splice(range[0], fragmentArr.length + 2, fragmentArr[0]);
                        } else if (fragmentArr.length > 3) {
                            let temp = searchFragment(fragmentArr);
                            tempArray.splice(range[0], (range[1] - range[0] + 1), temp[0]);
                        } else {
                            tempArray.splice(range[0], fragmentArr.length + 2, calcFragment(fragmentArr));
                        }
                        range = [];
                        fragmentArr = [];
                        j = 0;
                        break;
                    }
                }
            }
        }

        for (let i = 0; i <= tempArray.length; i++) {
            if (tempArray[i] == '*' || tempArray[i] == '/') {
                fragmentArr = tempArray.slice(i - 1, i + 2);
                tempArray.splice(i - 1, 3, calcFragment(fragmentArr));
                fragmentArr = [];
                i = 0;
            }
        }

        for (let i = 0; i <= tempArray.length; i++) {
            if (tempArray[i] == '+' || tempArray[i] == '-') {
                fragmentArr = tempArray.slice(i - 1, i + 2);
                tempArray.splice(i - 1, 3, calcFragment(fragmentArr));
                fragmentArr = [];
                i = 0;
            }
        }

        if (tempArray.length <= 1) {
            return tempArray;
        }
    }

    function calcFragment(frag) {
        let result = 0;

        frag.forEach(function(item, index) {
            switch (item) {
                case '+':
                    result = +frag[0] + +frag[2];
                    break;
                case '-':
                    result = +frag[0] - +frag[2];
                    break;
                case '*':
                    result = +frag[0] * +frag[2];
                    break;
                case '/':
                    result = +frag[0] / +frag[2];
                    break;
            }
        });
        return result;
    }

    // функция для отделения частей между символами по значению которое нужно найти, 
    // на выходе массив с которым и работаем
    function parseString(str) {


        str = str.replace(/\s+/g, '');

        let part = '';
        let parts = [];
        let value = '';
        let prev = '';

        for (let i = 0; i < str.length; i++) {
            value = str[i];
            switch (value) {
                case '+':
                case '*':
                case '/':
                case '(':
                case ')':
                    if (part) {
                        parts.push(part);
                        part = '';
                    }
                    parts.push(value);
                    break;
                case '-':
                    if (part) {
                        parts.push(part);
                        part = '';
                        parts.push(value);
                    } else {
                        if (i === 0 || prev == '+' || prev == '-' || prev == '*' || prev == '/' || prev == '(') {
                            part = value;
                        } else {
                            parts.push(value);
                        }
                    }
                    break;

                default:
                    part += value;
            }
            prev = value;
        }

        if (part) {
            parts.push(part);
        }
        return parts;
    }

    if (result.length === 1) {
        return result[0];
    }
}

