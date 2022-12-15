'use strict'; // 045 Функции-конструкторы

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function () { // prototype - добавление свойства или метода в существующий лбъект
    console.log(`Пользователь ${this.name} ушел`); 
};

const ivan = new User('Ivan', 30); // создает объект с указанными свойствами
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();
console.log(ivan);
console.log(alex);