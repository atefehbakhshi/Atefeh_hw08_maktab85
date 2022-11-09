'use strict'
let user = {};
function setterGenerator(key) {
    return function (value) {
        this[key] = value;
        return this
    }
};
const nameSetter = setterGenerator('name');
console.log(nameSetter.call(user, 'jack'));