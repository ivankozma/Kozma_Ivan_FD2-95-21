function isPolindrome() {
    let word = prompt("Введите строку!");
    word = word.match(/[A-Za-zА-Ща-щЭ-Яэ-я0-9]/gi).join("").toLowerCase();
    for(let i=0; i < word.length; i++) {
        if (word[i]===word[word.length - 1 - i]) {
            alert(`This is a polindrom`);
        }
        
        else {
            alert(`This isn't a polindrom`);
        }
        break;
    }
}
isPolindrome();