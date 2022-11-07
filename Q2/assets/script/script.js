'use strict'
let user = {};
function setterGenerator(objKey) {
    console.log(objKey)
    return function (objValue) {
        this.objKey = objValue;
    }
};
const nameSetter = setterGenerator.bind(user, 'name');
// console.log(nameSetter)
// nameSetter.call(user, 'jack');
// console.log(user)
