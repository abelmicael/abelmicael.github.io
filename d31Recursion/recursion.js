"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci }
//, outputList, outputListLoop, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests


function sumTo(num) {
    if (num === 0) return 0;

    return num + sumTo(num - 1);
}

function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
