let countriesH={};

function addCountry(countryName,capitalName) {
    countryName = prompt("Введите название страны");
    capitalName = prompt("Введите название столицы");
    countriesH[countryName]=capitalName;
}
// фуункция ввода страны и столицы

function getCountryInfo(countryName) {
    countryName = prompt("Введите название страны");
    if ( countryName in countriesH )
        alert( `страна: ${countryName} столица: ${countriesH[countryName]}`);
    else
        alert(`нет информации о стране ${countryName}!`);
}
//функция получения информации о стране 

function listCountries() {
    let keys = Object.keys(countriesH);
    if (keys.length < 1) 
        alert("Нет введенной информации о странах");
    keys.forEach (key => {
        console.log(`страна :${key} столица:${countriesH[key]}`)
    });
}
//функция вывода списка введенных стран 

function deleteCountry(countryName) {
    countryName = prompt("Введите название страны");
    delete countriesH[countryName];
}
//функция удаления страны 

const aboutCountryInput = document.getElementById("aboutCountryInput");
aboutCountryInput.addEventListener("click",()=> {
    addCountry();
} );

const aboutCountryGet = document.getElementById("aboutCountryGet");
aboutCountryGet.addEventListener("click", ()=> {
    getCountryInfo();
});

const countriesList = document.getElementById("countriesList");
countriesList.addEventListener("click",()=> {
    listCountries();
});

const deleteCountryItem = document.getElementById("deleteCountry");
deleteCountryItem.addEventListener("click", ()=> {
    deleteCountry();
});




