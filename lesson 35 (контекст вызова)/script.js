'use strict'; // 046 Контекст вызова

// function showThis(a, b) {
//     console.log(this); // такой код вернет глобальнй объект window (при использовании 'use strict' вернет undefined)
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(5, 9);

// const obj = {
//     a: 20,
//     b: 10,
//     sum: function () {
//         function shout() {
//             console.log(this)
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let andrew = new User('Andrew', 23);

// 4
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Andrew'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count (num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(15));

// 1) Обычна функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click',  (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'blue';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = (a, b) => a * b;

console.log(double(5, 7));