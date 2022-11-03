"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Поиск номера символа с, которого начинается слово

const logg = "Hello world";

// console.log(logg.slice(-5, -1)); // Получение слова начинающегося с 6 символа и заканчиющегося на 11 символ

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test)); //возвращает целое число
console.log(parseFloat(test)); //возвращат число с плавающей точкой