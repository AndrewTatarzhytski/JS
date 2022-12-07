'use strict'; // 037 ClassList и делигирование событий

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1)); // получение имени класса элемента по его id
// console.log(btns[1].classList.add('blue')); // добавляет класс к элементу (через запятую можно указать несколько классов)
// console.log(btns[1].classList.remove('blue')); // удаляет класс у элемента
// console.log(btns[1].classList.toggle('blue')); // проверяет есть ли класс у этого элемента

// if (btns[1].classList.contains('blue')){
//     console.log('blue');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('blue')) {
    //     btns[1].classList.add('blue');
    // } else {
    //     btns[1].classList.remove('blue');
    // }
    btns[1].classList.toggle('red');
});

// делегирование событий

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('hello');
    }
});

// btns.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);