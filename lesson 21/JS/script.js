'use strict'; // урок 21, видео 26, Действия с элементами на странице -> продолжиьт с 23:34

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('div'),
    wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color:blue; width: 500px';

btns[2].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'black';

// for(let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor='black';
// }

hearts.forEach(item=>{
    item.style.backgroundColor='black'; // деиствия со всеми элементами
});

const div=document.createElement('div');
// const text=document.createTextNode('hello');

div.classList.add('black');

// document.querySelector('.wrapper').append(div); // помещает элемент в конец списка элементов
// wrapper.appendChild(div);


// wrapper.prepend(div); // помещает элемент в начало списка элементов

// hearts[1].before(div); // помещает элемент вперед
wrapper.insertBefore(div, hearts[1]);

// hearts[1].after(div); // помещает элемент назад

// circles[0].remove(); // удаление элемента

// hearts[0].replaceWith(circles[0]); // заменяет элемент кузанным элементом

