function getVowelsReduce() {
    let str = prompt("Введите строку");
    let vowels =["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let count = str.split("").reduce((a, b) => a + vowels.includes(b), 0);
    return count ? `Количество гласных букв: ${count}` : "Русские гласные буквы в данном слове отсутствуют";
}
alert(getVowelsReduce());


function getVowelsFilter() {
    let str = prompt("Введите строку");
    let countFilter = str.split("").filter(i => "аоеёиуэюяы".includes(i)).length;
    return countFilter ? `Количество гласных букв: ${countFilter}` : "Русские гласные буквы в данном слове отсутствуют";
}
alert(getVowelsFilter());

function getVowelsForEach() {
    let str = prompt("Введите строку");
    let vowels =["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let countForEach = 0;
    str.split("").forEach(i =>{
        if(vowels.includes(i))
        ++countForEach;
    });
    return countForEach ? `Количество гласных букв: ${countForEach}` : "Русские гласные буквы в данном слове отсутствуют";
}
alert(getVowelsForEach());