'use strict'
// создаем поле часов
const clockCircle = document.getElementById('clockCircle');
let clockRadius = 200; //радиус большого диска, при ее изменении все часы резинятся и от него все размеры 
clockCircle.style.cssText = 'background-color: #99e8ee; border-radius: 50%'
clockCircle.style.width = `${clockRadius*2}px`;
clockCircle.style.height = `${clockRadius*2}px`;
let centerX = clockCircle.offsetLeft+clockCircle.offsetWidth/2;
let centerY = clockCircle.offsetTop+clockCircle.offsetHeight/2;

// создаем стрелки
let hour = document.createElement('div');
hour.style.cssText = `position: absolute; background-color: #da2d52; border-radius: 50%; transform-origin: left center; left:${centerX}px; top:${centerY}px;`;
hour.style.width = `${clockRadius*0.50}px`;
hour.style.height = `${clockRadius*0.05}px`;
clockCircle.appendChild(hour);

let minute = document.createElement('div');
minute.style.cssText = `position: absolute; background-color: #41da2d; border-radius: 50%; transform-origin: left center; left:${centerX}px; top:${centerY}px;`;
minute.style.width = `${clockRadius*0.70}px`;
minute.style.height = `${clockRadius*0.04}px`;
clockCircle.appendChild(minute);

let second = document.createElement('div');
second.style.cssText = `position: absolute; background-color: #1937dd; transform-origin: left center; left:${centerX}px; top:${centerY}px;`;
second.style.width = `${clockRadius*0.85}px`;
second.style.height = `${clockRadius*0.02}px`;
clockCircle.appendChild(second);


// создаем циферблат
let numberWidth=clockRadius*0.25; 

for (let i=0; i<12; i++){
    let numberCircle = document.createElement('div');
    numberCircle.style.cssText = 'position: absolute; border-radius: 50%; background-color: #ecea41';
    numberCircle.style.width = `${numberWidth}px`;
    numberCircle.style.height = `${numberWidth}px`;
    let radius = parseFloat(clockRadius*0.85); // радиус по полям цифр
    let angle = parseFloat(i*360/12)/180*Math.PI; //угол расположения полей с цифрами в радианах

    let centerXnumberCircle = centerX+radius*Math.sin(angle);
    let centerYnumberCircle = centerY-radius*Math.cos(angle);

    numberCircle.style.left = Math.round(centerXnumberCircle-numberWidth/2)+'px';
    numberCircle.style.top = Math.round(centerYnumberCircle-numberWidth/2)+'px';

    let numb = document.createElement('span');
    numb.style.cssText = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 1.5rem';
    let numText = document.createTextNode(i);
    if (i==0){
        numText = document.createTextNode(12); 
    }
    numb.appendChild(numText);
    numberCircle.appendChild(numb);
    clockCircle.appendChild(numberCircle);
}


// создаем блок для времени
let time = document.createElement('div');  
time.style.cssText = `position: relative; text-align: center; font-size:2em;`
time.style.top = `${centerX/3}px`;


// создаем фунццию часов
function clock(){
    let timeData = new Date();
    time.innerHTML = timeData.toLocaleTimeString();
    clockCircle.appendChild(time);
    let h = 30*(timeData.getHours()-3);
// 30deg(360/12) смещение часовой стрелки за 1 час; 3 т.к. у transform: rotate 0deg на 3ч
    let min = 6*(timeData.getMinutes()-15);
// 6deg(360/60) смещение мин стрелки за 1 мин; 15 т.к. у transform: rotate 0deg на 15мин
    let sec = 6*(timeData.getSeconds()-15);
// 6deg(360/60) смещение сек стрелки за 1 сек; 15 т.к. у transform: rotate 0deg на 15сек

//создаем смщение стрелок
    second.style.transform=`rotate(${sec}deg)`;
    minute.style.transform=`rotate(${min}deg)`  // 6/60=0.1deg смещение минутной стрелки за 1 сек
    hour.style.transform=`rotate(${h}deg)`// 30/60=0.5deg смещение часовой стрелки за 1 мин  6/3600=0.0017deg смещение часовой стрелки за 1 сек
}

window.addEventListener('DOMContentLoaded', clock);
//для начала работы функции сразу же после загрузки страницы, а не через 1с
setInterval(clock,1000);





