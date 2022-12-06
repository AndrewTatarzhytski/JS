'use strict'; // 

 // touchstart - событие возникае при касании к элементу
 // touchmove - событие возникающее при движении по элементу
 // touchend - срабатывает при прикражщении касания
 // touchenter - срабатывает когда ведем по экрану и наскальзываем на элемент на который повешено это событие
 // touchleave - срабатывает когда палец ушел за пределы элемента на который повешано данное событие
 // touchcancel - когда точка соприкосновения не регистрируется при прикосновении

 window.addEventListener('DOMContentLoaded',()=>{
    const box = document.querySelector('ul');

    box.addEventListener('touchstart',(e)=>{
        e.preventDefault(); // ставим всегда для мобильных устройств

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove',(e)=>{
        e.preventDefault(); // ставим всегда для мобильных устройств

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend',(e)=>{
    //     e.preventDefault(); // ставим всегда для мобильных устройств

    //     console.log('End');
    // });
 });

 // touches - список всех пальцев которые взаимодействуют с экраном
 // targetTouches - список всех пальцев которые взаимодействуют с элементом
 // changedTouches - список пальцев которые учавствуют в текущем событии

 // http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya