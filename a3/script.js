let word = prompt("Введите строку!");
word = word.match(/[A-Za-zА-Ща-щЭ-Яэ-я0-9]/gi).join("").toLowerCase();

function isPolindrome(word) {

    for(let i=0; i < word.length; i++) {
        if (word[i]!==word[word.length - 1 - i]) {
            return false;
        }
        
        return true;
    }
}

isPolindrome(word)?alert("This is a polindrom"):alert("This isn't a polindrom");
