'use strict'; // урок 20, видео 25, Получение элементов со страницы

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // получение кнопки под номером 2 (данная команда возвращает псевдомассив элементов под заданным тегом)

// console.log(btns[1]); // получение кнопки под номером 2

console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// Более современные способы получения элементов

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item=>{
    console.log(item);
});

// console.log(hearts);

const oneHeart=document.querySelector('div');

console.log(oneHeart);


