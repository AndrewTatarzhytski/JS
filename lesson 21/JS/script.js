'use strict'; // урок 21, видео 26, Действия с элементами на странице

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('div');


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
wrapper.appendChild(div);


// wrapper.prepend(div); // помещает элемент в начало списка элементов

// hearts[1].before(div); // помещает элемент вперед
// wrapper.insertBefore(div, hearts[1]);


// hearts[1].after(div); // помещает элемент назад

// circles[0].remove(); // удаление элемента
// wrapper.removeChild(hearts[1]); // удаление элемента

// hearts[0].replaceWith(circles[0]); // заменяет элемент укзанным элементом
// wrapper.replaceChild(circles[0], hearts[0]); // заменяет элемент укзанным элементом

div.innerHTML = '<h1>Hello world</h1>'; // вставка другого содержимого в элемент на странице

// div.textContent = 'Hello'; // вставка текста в элемент на странице
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставка HTML-кода перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставка HTML-кода в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставка HTML-кода в конец элемента
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставка HTML-кода после элемента


