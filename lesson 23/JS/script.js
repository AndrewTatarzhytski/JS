'use strict'; // 

// console.log(document.head);
// console.log(document.documentElement);
console.log(document.body.childNodes); // получение псевдомассива элементов которые содержит родитель (body)

// console.log(document.body.firstChild); // получение первого элемента в родителе
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild); // получение последнего элемента в родителе

// console.log(document.querySelector('#current').parentNode); // получение родителя элемента

// console.log(document.querySelector('#current').parentNode.parentNode); // получение прородителя элемента
// console.log(document.querySelector('#current').parentElement);


// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // получение следующего элемента

for (let node of document.body.childNodes){
    if (node.nodeName =='#text'){
        continue;
    }
    console.log(node);
}