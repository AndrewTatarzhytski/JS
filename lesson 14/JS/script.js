"use strict";

const arr = [2, 23, 3, 14, 8];
arr.sort(compareNum);// сортировка маасива чисел
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr[99]=0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();// удаление последнего элемента из массива
// arr.push(10); // добавление элемента в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); // превращает массив в строку и выводит элементы через указанный в скобках разделитель



