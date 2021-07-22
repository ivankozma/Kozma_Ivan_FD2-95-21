class HashStorageClass {
    constructor() {
        this.drinkItems = {}; 
    // здесь храним значения= публично доступный объект
    }
    addValue (key, value) {
        this.drinkItems[key] = value;
    };
    // значения сохраняются в items

    getValue (key) {
        return this.drinkItems[key];
    };

    deleteValue (key) {
        if (key in this.drinkItems) {
            delete this.drinkItems[key];
    // проверка наличия ключа в объекте 
            return true;
        }
            return false;
    };

    getKeys () {
        return (Object.keys(this.drinkItems));
    // возвращаем все ключи объекта 
    };
}

let drinkStorage = new HashStorageClass;
// создаем экземпляр класса 

const aboutDrinkInput = document.getElementById("aboutDrinkInput");
aboutDrinkInput.addEventListener("click",()=> {
    let drink = prompt("Введите название напитка");
    let isAlcohol = prompt("Укажите этот напиток алкогольный? Да или Нет");
    let recipe = prompt("Введите рецепт приготовления");
    drinkStorage.addValue(drink, {isAlco: isAlcohol, drinkRecipe: recipe});
    // вызываем метод с ключем и значениями, полученными от пользователя. В объект попадает ключ и его зачения
});

const aboutDrinkGet = document.getElementById("aboutDrinkGet");
aboutDrinkGet.addEventListener("click", ()=> {
    let drink = prompt("Введите название напитка");
    let drinkInfo = drinkStorage.getValue(drink);
         if (drinkInfo) {
            alert(`
            Напиток: ${drink}
            Содержание алкоголя: ${drinkInfo.isAlco}
            Рецепт: ${drinkInfo.drinkRecipe}`);
        } else {
            alert(`Напитка ${drink} в списке нет`);
        }
});

const deleteDrink = document.getElementById("deleteDrink");
deleteDrink.addEventListener("click", ()=> {
    let drink = prompt("Введите название напитка, который вы хотите удалить");
    let drinkDeleted = drinkStorage.deleteValue(drink);
    alert(drinkDeleted?"Напиток удален":"Такой напиток в списке отсутствует");
});

const drinksList = document.getElementById("drinksList");
drinksList.addEventListener("click",()=> {
    let drinks = drinkStorage.getKeys();
    alert(`Перечень напитков: ${drinks}`);
});






