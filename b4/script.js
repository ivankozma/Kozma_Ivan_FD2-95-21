/*Напишите функцию для оборачивания текста в тег, с которой можно было бы работать в следующем стиле:
var wrapH1=buildWrapper(""H1""); // строим функцию для оборачивания текста в тег H1
var wrapP=buildWrapper(""P"");   // строим функцию для оборачивания текста в тег P
console.log( wrapH1(""СТИХИ"") );
// в консоль выводится строка ""<H1>СТИХИ</H1>""
console.log( wrapP(""Однажды в студёную зимнюю пору"") );
// в консоль выводится строка ""<P>Однажды в студёную зимнюю пору</P>""
Функция должна учитывать, что некоторые символы надо заменять на HTML-мнемоники (а именно - символы < > ' "" &):
console.log( wrapP(""Вкусные M&M's"") );
// в консоль выводится строка ""<P>Вкусные M&amp;M&apos;s</P>"""*/


function buildWrapper(value) {
    function wrap(text) {
        let mnemonics = {
            '<': '&lt;',
            '>': '&gt;',
            '\'': '&apos;',
            '\"': '&quot;',
            '\&': '&amp;'
        };

        for(let i=0; i < text.length; i++){
            if(text[i] in mnemonics) {
                text = text.split(text[i]).join(mnemonics[text[i]]);
            }
        }

        let leftTag = `<${value}>`;
        let rightTag = `</${value}>`;
        return `${leftTag}${text}${rightTag}`;
    }

    return wrap;
}

let wrapH1 = buildWrapper("H1");
let wrapP = buildWrapper("P");

alert(wrapH1("Стихи"));
alert(wrapP("Однажды в студеную зимнюю пору"));
alert(wrapH1("Вкусные M&M's"));
