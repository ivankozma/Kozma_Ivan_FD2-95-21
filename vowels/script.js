function getVowels() {
    let str = prompt("Введите строку");
    let vowels =["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let count = str.split("").reduce((a, b) => a + vowels.includes(b), 0);

    return count ? `Количество гласных букв: ${count}` : "Русские гласные буквы в данном слове отсутствуют";

}

alert(getVowels());


