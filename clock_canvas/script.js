'use strict'
// создаем поле часов
let clockArea = document.getElementById("clockCanvas");
let clockRadius = 200; //радиус большого диска, при ее изменении все часы резинятся и от него все размеры 

clockArea.width = clockRadius*2;
clockArea.height = clockRadius*2;
let context = clockArea.getContext("2d");

function clock(){
    // отрисовываем круг часов 
    context.fillStyle = '#99e8ee';
    context.beginPath();
    context.arc(clockRadius,clockRadius, clockRadius, 0, Math.PI*2, false);
    context.fill();

    // создаем блок для времени
    let time = new Date();
    context.font = "normal 25px Arial";
    context.fillStyle = "#111111";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(time.toLocaleTimeString(), clockRadius, clockRadius*0.45);

    // создаем стрелки
    let h = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    //создаем смещение стрелок
    let hourRad = parseFloat(h*360/12 + 30/60*min + 6/3600*sec)/180*Math.PI; 
    let minRad = parseFloat(min*360/60 + 6/60*sec)/180*Math.PI;
    let secRad = parseFloat(sec*360/60)/180*Math.PI;

    //создаем размеры стрелок
    let hourLength = clockRadius*0.5;
    let minuteLength = clockRadius*0.7;
    let secondLength = clockRadius*0.85;

    // отрисовываем циферблат
    for (let i=0; i<12; i++){
        context.fillStyle = "#ecea41";
        context.beginPath();
        let radius = parseFloat(clockRadius*0.85);
        let angle = parseFloat(i*360/12)/180*Math.PI; //угол расположения полей с цифрами в радианах
        let x = clockRadius + radius*Math.sin(angle);
        let y = clockRadius - radius*Math.cos(angle);
        context.arc(x, y, clockRadius*0.14, 0, Math.PI*2, false);
        context.fill();

        context.font = "normal 30px Arial";
        context.fillStyle = "#111111";
        context.textAlign = "center";
        context.textBaseline = "middle";
        if (i==0){
            context.fillText('12',x,y);
        } else {
            context.fillText(i,x,y); 
        }
    }

    // положение стрелок 
    let hourX = clockRadius + hourLength*Math.sin(hourRad);
    let hourY = clockRadius - hourLength*Math.cos(hourRad);
    context.strokeStyle = "#da2d52";
    context.beginPath();
    context.lineWidth = clockRadius*0.04;
    context.lineCap="round";
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(hourX, hourY);
    context.stroke();

    let minX = clockRadius + minuteLength*Math.sin(minRad);
    let minY = clockRadius - minuteLength*Math.cos(minRad);
    context.strokeStyle = "#41da2d";
    context.beginPath();
    context.lineWidth = clockRadius*0.04;
    context.lineCap = "round";
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(minX, minY);
    context.stroke();

    let secX = clockRadius + secondLength*Math.sin(secRad);
    let secY = clockRadius - secondLength*Math.cos(secRad);
    context.strokeStyle = "#1937dd";
    context.beginPath();
    context.lineWidth = clockRadius*0.02;
    context.lineCap = "round";
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(secX, secY);
    context.stroke();
}

window.addEventListener('DOMContentLoaded', clock);
setInterval(clock,1000);
//для начала работы функции сразу же после загрузки страницы, а не через 1с






