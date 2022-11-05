"use strict";

const options = {
    name: 'test',
    width: {
        borderTop: 1024,
        borderBottom: 1024
    },
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("test");
    }

};

options.makeTest();

const { border, bg } = options.colors; // деструктуризация объекта
console.log(border);

const { borderTop, borderBottom  } = options.width;
console.log(borderBottom);

// console.log(Object.keys(options)); // получение массива со свойствами объекта

// console.log(Object.keys(options).length); // получение колличества свойств в объекте

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);