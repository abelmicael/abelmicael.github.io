"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { double, times100, myMap}; 
//add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(number) {
    return number * 2;
}

/**
 * @returns {number} 100 times the input
 */
function times100(number) {
    return number * 100;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = func(arr[i])
    }
    return arr1;
}

/**
 * 
 * @returns {Array} creates a new array with function mapped to each element
 */
 function myMapExpression(num) {
   
    return num * 3;
}
// /**
//  * 
//  * @param {Number} num any number
//  * @returns{Number} 
//  */

 let myMapArrow = (num) => {return num * 3;};







