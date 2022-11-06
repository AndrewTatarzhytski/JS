"use strict"; // видео 025, отлавливаем ошибки

function hello() {
    console.log('Hello World!');
    debugger; // останавливает выполнение скрипта на этой строке, и открывает вкладку source(источники) в браузере
}

hello();

function hi() {
    console.log('Say hi');
}

hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);


