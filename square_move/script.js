"use strict";

let square=document.getElementById('square');
let area=document.getElementById('area');
let x=0;
let y = 0;
let direction = null;


let timer = setInterval(run, 10);

function run() {
    switch(direction) {
        case "right": {
            x++;
            square.style.left = `${x}px`;
            if (x >= area.offsetWidth-square.offsetWidth-area.offsetLeft) {
                direction = null;
            }
        };
        break;

        case "left": {
            x--;
            square.style.left = `${x}px`;
            if (x <= area.offsetLeft) {
                direction = null;
            }
        };
        break;

        case "down": {
            y++;
            square.style.top = `${y}px`;
            if (y >= area.offsetHeight-square.offsetHeight-area.offsetTop) {
                direction = null;
            }
        };
        break;

        case "up": {
            y--;
            square.style.top = `${y}px`;
            if (y <= area.offsetTop) {
                direction = null;
            }
        };
        break;
    }
}


window.addEventListener("keydown", function(e) {
// нажимая на стрелку мы вызываем run с соответствующим direction
    
    if(e.code=="ArrowLeft") {
        direction = "left";
    } else if (e.code=="ArrowRight"){
        direction = "right";
    } else if (e.code=="ArrowDown"){
        direction = "down";
    } else if (e.code=="ArrowUp"){
        direction = "up";
    }
});
