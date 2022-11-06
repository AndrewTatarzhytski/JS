"use strict"; // видео 025, Динамическая типизация

// !!!!!!! ВСЕ ДАННЫЕ ПРИХОДЯЩИЕ ОТ ПОЛЬЗОВАТЕЛЯ ПРИХОДЯТ В ВИДЕ СТРОКИ !!!!!!!

// to string

// 1 typeof

console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2 конкатинация

console.log(typeof (5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSIze = 26 + 'px';

// to number

// 1 typeof
console.log(typeof (Number('4')));

// 2 унарный плюс

console.log(typeof (+'5')); //перевод строки в число

// 3 parseint
console.log(typeof (parseInt('15px', 10)));

let answ = +prompt("Hello", "");

// to boolean

// 0, '', null, undefined, NaN - всегда FALSE!!!!

// 1
let switcher = null;

if (switcher){
    console.log("Working...");
}

switcher=1;

if (switcher){
    console.log("Working...");
}

// 2

console.log(typeof (Boolean('4')));

// 3

console.log(typeof (!!"4446654")); // !! переводят в тип boolean