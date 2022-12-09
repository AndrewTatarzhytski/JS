'use strict'; // 040 Работа с датами

const now = new Date('2022-12-08');
// new Date.parse('2022-12-08');

// console.log(now.getFullYear()); // получить год
// console.log(now.getMonth()); // получить месяц
// console.log(now.getDate()); // получить число
// console.log(now.getDay()); // получить номер дня недели
// console.log(now.getUTCHours()); // получиь час по UTC

// console.log(now.getTimezoneOffset()); // получение разницы во времени с основным часовым поясом

// console.log(now.getTime()); // количевство милисекунд которое прошло с 01.01.1970

// console.log(now.setHours(40));
// console.log(now);

// switch (now.getDay()) { // выводить название дня недели
//     case 1:
//         console.log('понедельник');
//         break;
//     case 2:
//         console.log('вторник');
//         break;
//     case 3:
//         console.log('среда');
//         break;
//     case 4:
//         console.log('четверг');
//         break;
//     default:
//         break;
// }

// let start = new Date();

// for (let i=0; i<100000; i++){
//     let some = i ** 3; // i**n возведение в степень (вместо n число)
// }

// let end = new Date();

// alert (`цикл отработал за ${end - start}ms`)