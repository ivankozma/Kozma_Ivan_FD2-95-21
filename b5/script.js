/*Напишите функцию для оборачивания текста в тег с атрибутами, с которой можно было бы работать в следующем стиле:
  var wrapP=buildWrapper(""P"");   // строим функцию для оборачивания текста в тег P
  console.log( wrapP(""Однажды в студёную зимнюю пору"") );
  // в консоль выводится строка ""<P>Однажды в студёную зимнюю пору</P>""
  console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
  // в консоль выводится строка ""<P lang='ru'>Однажды в студёную зимнюю пору</P>""
Функция должна учитывать, что некоторые символы надо заменять на HTML-мнемоники (а именно - символы < > ' "" &):
  console.log( wrapP(""Однажды в <студёную> зимнюю пору"") );
  // в консоль выводится строка ""<P>Однажды в &lt;студёную&gt; зимнюю пору</P>""
  var wrapH1=buildWrapper(""H1""); // строим функцию для оборачивания текста в тег H1
  console.log( wrapH1(""СТИХИ"",{align:""center"",title:""M&M's""}) );
  // в консоль выводится строка ""<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"*/


function buildWrapper(value) {
    function wrap(text, attributes) {
        function changeMnemonic(str){
            // создаем функцию по замене символов на мнемоники, функции потом используем несколько раз
            let stringMnemonic = str.replace('<','&lt;').replace('>','&gt;').replace('\'','&apos;').replace('\"','&quot;').replace('\&','&amp;');
            return stringMnemonic;
        }
        
        let attr = "";
        for(let a in attributes) {
            // перебираем все ключи в массиве, для значений ключей применяем функцию changeMnemonic(str)
            let attribute = ` ${a} = '${changeMnemonic(attributes[a])}'`;
            attr += attribute;
        }

        text = changeMnemonic(text);
        // в переданном text заменяем при наличии символы на мнемоники 
        let leftTag = attr ? `<${value} ${attr}>`:`<${value}>`;
        let rightTag = `</${value}>`;
        return `${leftTag}${text}${rightTag}`;
        // собираем тег из нескольких частей 
    }
    return wrap;
}

let wrapH1 = buildWrapper("H1");
let wrapP = buildWrapper("P");

console.log(wrapP("Однажды в студеную зимнюю пору"));
console.log(wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}));
console.log(wrapP("Однажды в <студёную> зимнюю пору"));
console.log(wrapH1("СТИХИ",{align:"center",title:"M&M's"}));

