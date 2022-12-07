'use strict'; // 035 Async, defer, динамические скрипты

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // отключить async при загрузке, по умолчанию true
    document.body.append(script); // append - помещает элемент в конец, внутри тэга (body в даном случае)
}

loadScript("JS/test.js");
loadScript("JS/some.js");