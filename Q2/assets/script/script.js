'use strict'
function elemCreator(elem, func) {
    let x = document.createElement(elem);
    document.body.append(x);
    func(x);
}

const callback = function (elem) {
    elem.style.backgroundColor = 'orange'
}
elemCreator('li', callback);

