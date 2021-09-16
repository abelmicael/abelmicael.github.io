"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop }
//add all of your function names here that you need for the node mocha tests


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

function outputList(list) {
    if (list.next == null) return list.value + " printed to console";

    return list.value + " " + outputList(list.next);
}

function outputListLoop(list) {

    let str = "";
    while (list.next !== null) {
        str = str + list.value + " ";
        list = list.next;

    }
    return str + list.value + " printed to console"
}

function reverseList(list) {

    if (list.next === null) return list.value;

    return reverseList(list.next) + " " + list.value;
}

function reverseListLoop(list) {

    let str = "";
    while (list.next !== null) {
        str = list.value + " " + str;
        list = list.next;

    }
    return list.value + " " + str + "printed to console"
}

