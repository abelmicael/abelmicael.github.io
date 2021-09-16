"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr array to copy its elements
 * @returns {Array} returns array of elements
 */
function copyArray(arr) {
    const newArr = [...arr];
    return newArr;
}
/**
 * 
 * @param {Array} arr1 array of elements
 * @param {Array} arr2 array of elements
 * @returns {Array} returns concated elements of arr1 and arr2
 */
function concat(arr1, arr2) {
    return arr1.concat(arr2)
}
/**
 * 
 * @param  {...any} numbers any numbers
 * @returns {number} returns minimum number
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}
/**
 * 
 * @param {Object} obj1 object
 * @param {Object} obj2 object
 * @returns {Object} retuns object
 */
function combineObjs(obj1, obj2) {
    const merge={...obj1,...obj2}
    return merge
}