function HashStorageFunc() {
    let storage = {};
    // создаем пустой объект

    this.addValue = function(key, value) {
        storage[key] = value;
    };
    // здесь и далее методы в контексте объекта в котором они будут вызываться

    this.getValue = function(key) {
        return storage[key];
    };

    this.deleteValue = function(key) {
        if (key in storage) {
            delete storage[key];
    // проверка наличия ключа в объекте 
            return true;
        }
            return false;
    };

    this.getKeys = function() {
        return (Object.keys(storage));
    // возвращаем все ключи объекта 
    };
}

let drinkStorage = new HashStorageFunc();
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
    // создаем вспомогательную переменную для проверки на наличие инфо о напитке и проверяем на условие истинности
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






