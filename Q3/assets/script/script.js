'use strict'
function counterMaker() {
    let counter = 0;
    return (num = 0) => counter = counter + num;
}

const counter = counterMaker();
console.log(counter());
console.log(counter(1));
console.log(counter(11));
console.log(counter(-11));