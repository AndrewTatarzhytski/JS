'use strict'; // 042 Параметры документаб окна и работа с ними

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top); // получение координат элемента

const style = window.getComputedStyle(box); // получение стилей применнных к элементу

console.log(style.display);

console.log(document.documentElement.scrollTop);