"use strict";

const area = document.getElementById("app");

let areaContain = [
    [0,1,0,2,0,1,0,2,1,1,0,2,0,1,0,1,0,0,0,1],
    [0,2,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,2],
    [1,0,0,1,1,1,1,0,0,0,0,1,0,2,0,1,0,2,1,1],
    [0,0,0,1,0,0,0,1,0,2,0,1,0,0,0,1,2,0,0,1],
    [0,0,0,0,0,1,1,1,2,0,0,0,0,1,0,0,0,1,0,2],
    [0,1,0,0,0,1,2,0,0,1,0,1,0,2,0,1,0,2,1,1],
    [0,1,0,2,0,1,0,2,1,1,0,1,0,0,0,1,2,0,0,1],
    [0,2,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,2],
    [0,1,0,2,0,1,0,2,1,1,0,2,0,1,0,1,0,0,0,1],
    [0,0,0,0,0,1,1,1,2,0,0,0,0,1,0,0,0,1,0,2],
    [0,0,0,0,0,1,1,1,2,0,0,0,0,1,0,0,0,1,0,2],
    [0,1,0,0,0,1,2,0,0,1,0,1,0,2,0,1,0,2,1,1],
    [0,1,0,2,0,1,0,2,1,1,0,1,0,0,0,1,2,0,2,1],
    [1,0,0,1,1,1,1,0,0,0,0,1,0,2,0,1,0,2,1,1],

];

for (let i=0; i <areaContain.length; i++) {
    for(let j=0; j < areaContain[i].length; j++) {
        if(areaContain[i][j]==0) {
            createGrass();
        }
        else if(areaContain[i][j]==1) {
            createBrick();
        } else {
            createCoin();
        }
    }
}

function createGrass() {
    const element = document.createElement("div");
    element.className = "grass";
    app.appendChild(element);
}

function createBrick() {
    const element = document.createElement("div");
    element.className = "brick";
    app.appendChild(element);
}

function createCoin() {
    const element = document.createElement("div");
    element.className = "coin";
    app.appendChild(element);
}

let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");