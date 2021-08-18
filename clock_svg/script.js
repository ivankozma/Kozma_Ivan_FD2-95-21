'use strict'
// создаем поле часов
const clockArea = document.getElementById('clockSvg');
let clockRadius = 200; //радиус большого диска, при ее изменении все часы резинятся и от него все размеры 
clockArea.setAttribute("height", clockRadius*2);
clockArea.setAttribute("width", clockRadius*2);

// создаем круг часов 
let clockCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
clockCircle.setAttribute('cx', clockRadius);
clockCircle.setAttribute('cy', clockRadius);
clockCircle.setAttribute('r', clockRadius);
clockCircle.setAttribute('fill', '#99e8ee');
clockArea.appendChild(clockCircle);

// создаем стрелки
let hour = document.createElementNS("http://www.w3.org/2000/svg",'line');
hour.setAttribute("stroke", "#da2d52");
hour.setAttribute("stroke-width", clockRadius*0.04);
hour.setAttribute("stroke-linecap", "round");

let minute = document.createElementNS("http://www.w3.org/2000/svg",'line');
minute.setAttribute("stroke", "#41da2d");
minute.setAttribute("stroke-width", clockRadius*0.04);
minute.setAttribute("stroke-linecap", "round");

let second = document.createElementNS("http://www.w3.org/2000/svg",'line');
second.setAttribute("stroke", "#1937dd");
second.setAttribute("stroke-width", clockRadius*0.02);
second.setAttribute("stroke-linecap", "round");

// создаем циферблат

for (let i=0; i<12; i++){
    let numberCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    let radius = parseFloat(clockRadius*0.85);
    let angle = parseFloat(i*360/12)/180*Math.PI; //угол расположения полей с цифрами в радианах
    let cx = clockRadius + radius*Math.sin(angle);
    let cy = clockRadius - radius*Math.cos(angle);

    numberCircle.setAttribute("cx", cx);
    numberCircle.setAttribute("cy", cy);
    numberCircle.setAttribute("r", clockRadius*0.14);
    numberCircle.setAttribute("fill", "#ecea41");
    clockArea.appendChild(numberCircle);
 

    let numb = document.createElementNS("http://www.w3.org/2000/svg",'text');
    numb.setAttribute('x', cx);
    numb.setAttribute('y', cy);
    numb.style.fill = "#111111";
    numb.setAttribute("font-size", "30");
    numb.setAttribute("text-anchor", "middle");
    numb.setAttribute("alignment-baseline", "central");
    numb.textContent = i;
    if (i==0){
        numb.textContent = 12;
    }
    clockArea.appendChild(numb);
}

// создаем блок для времени
let time = document.createElementNS("http://www.w3.org/2000/svg",'text');
time.setAttribute("x", clockRadius);
time.setAttribute("y", clockRadius*0.45);
time.style.fill="#111111";
time.setAttribute("text-anchor", "middle");
time.setAttribute("font-size", "25");
clockArea.appendChild(time);

// создаем фунццию часов
function clock(){
    let timeData = new Date();
    time.innerHTML = timeData.toLocaleTimeString();
    
    let h = timeData.getHours();
    let min = timeData.getMinutes();
    let sec = timeData.getSeconds();

//создаем смещение стрелок
let hourRad = parseFloat(h*360/12 + 30/60*min + 6/3600*sec)/180*Math.PI; 
let minRad = parseFloat(min*360/60 + 6/60*sec)/180*Math.PI;
let secRad = parseFloat(sec*360/60)/180*Math.PI;

let x1Hour = clockRadius;
let y1Hour = clockRadius;
let x2Hour = clockRadius*0.5;
let y2Hour = clockRadius*0.5;
hour.setAttribute('x1', clockRadius);
hour.setAttribute('y1', clockRadius);
x2Hour=x1Hour+x2Hour*Math.sin(hourRad);
y2Hour=y1Hour-y2Hour*Math.cos(hourRad);
hour.setAttribute('x2', x2Hour);
hour.setAttribute('y2', y2Hour);
clockArea.appendChild(hour);

let x1Min = clockRadius;
let y1Min = clockRadius;
let x2Min = clockRadius*0.70;
let y2Min = clockRadius*0.70;
minute.setAttribute('x1', clockRadius);
minute.setAttribute('y1', clockRadius);
x2Min=x1Min+x2Min*Math.sin(minRad);
y2Min=y1Min-y2Min*Math.cos(minRad);
minute.setAttribute('x2', x2Min);
minute.setAttribute('y2', y2Min);
clockArea.appendChild(minute);

let x1Sec = clockRadius;
let y1Sec = clockRadius;
let x2Sec = clockRadius*0.85;
let y2Sec = clockRadius*0.85;
second.setAttribute('x1', clockRadius);
second.setAttribute('y1', clockRadius);
x2Sec=x1Sec+x2Sec*Math.sin(secRad);
y2Sec=y1Sec-y2Sec*Math.cos(secRad);
second.setAttribute('x2', x2Sec);
second.setAttribute('y2', y2Sec);
clockArea.appendChild(second);
}


window.addEventListener('DOMContentLoaded', clock);
setInterval(clock,1000);
//для начала работы функции сразу же после загрузки страницы, а не через 1с






