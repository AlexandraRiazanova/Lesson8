const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};
const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
        addIngridientToKettle(nameOfIngridient, amount){
            this.ingridients[nameOfIngridient] = amount;
            console.log('Adding...', nameOfIngridient, amount)
            kitchen.minusIngridientFromKitchen(nameOfIngridient, amount)
        },
    },
    minusIngridientFromKitchen(nameOfIngridient, amount){
        this[nameOfIngridient] -= amount;
    },
    cook(recipe) {
        for(let key in recipe){
            if(recipe[key] == kitchen.kettle.ingridients[key]){
                console.log(key, kitchen.kettle.ingridients[key], "Ингридиентов достаточно")
            }else{
                console.log(key, kitchen.kettle.ingridients[key], "Не хватает ингридиентов")
            }
        }
    },
};
kitchen.kettle.addIngridientToKettle('lava', 10)
kitchen.kettle.addIngridientToKettle('evil', 998)
kitchen.cook(magicBook.recipes.littleDevil)

console.log(kitchen)

// addIngridientToKettle. Принимает в объект ингредиентов где ключ - название ингредиента, 
// а значение - его кол-во. Когда ингредиент добавляется, в самом объекте его кол-во должно уменьшиться
// cook - метод принимает рецепт из книги и если все ингредиенты добавлены в правильном кол-ве - 
// отдает строку, которая является ключом рецепта. Иначе выводит в консоль предупреждение, 
// что ингредиентов не достаточно.


