const divInner = document.getElementById("div");
const strongInner = document.getElementById("strong");
const emInner = document.getElementById("em");
const pInner = document.getElementById("p");

divInner.addEventListener("click", ()=> {
    const inputValue = document.getElementById("text").value;
    const divI = document.createElement("div");
    const divText = document.createTextNode(inputValue);
    divI.appendChild(divText);
    document.body.appendChild(divI);
});

strongInner.addEventListener("click", ()=> {
    const inputValue = document.getElementById("text").value;
    const strongI = document.createElement("strong");
    const strongText = document.createTextNode(inputValue);
    strongI.appendChild(strongText);
    document.body.appendChild(strongI);
});

emInner.addEventListener("click", ()=> {
    const inputValue = document.getElementById("text").value;
    const emI = document.createElement("em");
    const emText = document.createTextNode(inputValue);
    emI.appendChild(emText);
    document.body.appendChild(emI);
});

pInner.addEventListener("click", ()=> {
    const inputValue = document.getElementById("text").value;
    const pI = document.createElement("p");
    const pText = document.createTextNode(inputValue);
    pI.appendChild(pText);
    document.body.appendChild(pI);
});