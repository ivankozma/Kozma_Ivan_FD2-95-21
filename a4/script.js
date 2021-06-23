function isPolindrome() {
    let word = prompt("Введите строку!");
    word = word.match(/[A-Za-zА-Ща-щЭ-Яэ-я0-9]/gi).join("").toLowerCase();

    if(word.length < 2) return true;

    if (word[0]===word[word.length - 1]) return isPolindrome(word.slice(1,-1));

    return false;
}


console.log (isPolindrome());