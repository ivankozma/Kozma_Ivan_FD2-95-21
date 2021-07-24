let formDef1=[
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
      variants:[{text:'бытовая техника',value:1},{text:'домашний уют',value:2},{text:'здоровье',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {caption:'Опубликовать',kind:'submit'},
];
let formDef2=[
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
];

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

function buldForm(form, array) {
    array.forEach(elem =>{
        function createInput(type) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            let labelText = document.createTextNode(elem.label);
            input.type = type;
            if (input.type==="submit") {
                input.value = elem.caption;
                form.appendChild(input);
            } else {
                input.name= elem.name;
                label.appendChild(labelText);
                form.appendChild(label).appendChild(input);
            };
        }
    
        if(elem.kind ==="longtext"){
            createInput("text");
        } else if (elem.kind ==="number") {
            createInput("number");
        } else if (elem.kind ==="shorttext") {
            createInput("email");
        } else if (elem.kind ==="check") {
            createInput("checkbox");
        } else if (elem.kind ==="submit") {
            createInput("submit");
        } else if (elem.kind ==="combo") {
            let options = elem.variants;
            let label = document.createElement("label");
            let labelText = document.createTextNode(elem.label);
            let select = document.createElement("select");
            select.name = elem.name;

            label.appendChild(labelText);
            form.appendChild(label).appendChild(select);

            options.forEach((item)=>{
                let option = document.createElement("option");
                let variantText = document.createTextNode(item.text);
                option.value = item.value;
                select.appendChild(option).appendChild(variantText);
            });
        } else if (elem.kind==="radio") {
            let radioItems = elem.variants;
            let label = document.createElement("label");
            let labelText = document.createTextNode(elem.label);

            label.appendChild(labelText);
            form.appendChild(label);

            radioItems.forEach((item)=>{
                let input = document.createElement("input");
                let labelRadio = document.createElement("labelRadio");
                let labelRadioText = document.createTextNode(item.text);

                input.type = "radio";
                input.name = elem.name;
                input.value = item.value;

                labelRadio.appendChild(input);
                labelRadio.appendChild(labelRadioText);
                label.appendChild(labelRadio);
            });
        } else if (elem.kind ==="memo") {
            
            let label = document.createElement("label");
            let labelText = document.createTextNode(elem.label);
            let textarea = document.createElement("textarea");
            textarea.name = elem.name;
            label.appendChild(labelText);
            form.appendChild(label).appendChild(textarea);
        }
    })
}



buldForm(form1, formDef1);
buldForm(form2, formDef2)


