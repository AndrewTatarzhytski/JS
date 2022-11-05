"use strict";
// 023 !!! Прототипно-ориентированное наследование

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    helsth:400,
    armor:100,
    sayHello: function(){
        console.log("Hello");
    }
};

const John=Object.create(soldier); // создаем объект John который будет протипно наследоваться от солдата !!!ОБЯЗАТЕЛЬНО ЗАПОМНИТЬ!!!

// John.__proto__=soldier; !!! НЕ ИСПОЛЬЗУЕТСЯ

// Object.setPrototypeOf(John, soldier); // установили прототип для John от soldier !!!ОБЯЗАТЕЛЬНО ЗАПОМНИТЬ!!!

John.sayHello();

// console.log(John.armor);

// console.log(John);

