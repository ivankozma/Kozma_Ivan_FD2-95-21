"use strict";

let square=document.getElementById('square');
let area=document.getElementById('area');
let x=0;
let y = 0;
let direction = null;

let timer;

function run() {
    switch(direction) {
        case "right": {
            do {
            x++;
            square.style.left = `${x}px`;
            } while (x > area.offsetWidth-square.offsetWidth-area.offsetLeft);
        };
        break;

        case "left": {
            do {
            x--;
            square.style.left = `${x}px`;
            } while (x < area.offsetLeft);
        };
        break;

        case "down": {
            do {
            y++;
            square.style.top = `${y}px`;
           } while (y > area.offsetHeight-square.offseHeight-area.offsetTop);
        };
        break;

        case "up": {
            do {
            y--;
            square.style.top = `${y}px`;
            } while (y < area.offsetTop);
        };
        break;
    }
}


window.addEventListener("keydown", function(e) {
// нажимая на стрелку мы вызываем run с соответствующим direction
    
    if(e.code=="ArrowLeft") {
        clearInterval(timer);
        direction = "left";
        timer = setInterval(run, 10);

    } else if (e.code=="ArrowRight"){
        clearInterval(timer);
        direction = "right";
        timer = setInterval(run, 10);

    } else if (e.code=="ArrowDown"){
        clearInterval(timer);
        direction = "down";
        timer = setInterval(run, 10);

    } else if (e.code=="ArrowUp"){
        clearInterval(timer);
        direction = "up";
        timer = setInterval(run, 10);
    }
});
