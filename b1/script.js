
function getCentury() {
    let year = prompt("Введите год");

    return Math.floor((year-1)/100 + 1);
}

alert(`Век введенного года: ${getCentury()}`);


