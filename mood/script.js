function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    let colors=['', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let usedColors = {};
    // console.log( `Number of colors is ${colorsCount}`);
    for (let i=1; i<=colorsCount; i++ ) {
    let n=randomDiap(1,7);
    let colorName=colors[n];
    if(colorName in usedColors)
        continue;
    usedColors[colorName]=true;
    console.log(colorName);
    }
}

mood(3);