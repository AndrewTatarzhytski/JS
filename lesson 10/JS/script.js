"use strict";

let num = 20;

function showFirsMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}
showFirsMessage("Hello World");
console.log(num);

// console.log(calc(4, 5));
// console.log(calc(4, 6));
// console.log(calc(4, 7));

// function calc(a, b) {
//     return (a + b);
// }



function ret() {
    let num = 50;
    return num;
}

const anotheNum = ret();
console.log(anotheNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

