"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam ,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    let word = "";
    word = str.charAt(0).toUpperCase()
    str = str.substring(1);

    return word + str

}


function checkSpam(str) {
    const word = ["xxx", "Viagra", "sex"];
    for (let i = 0; i < word.length; i++) {
        if (str.toLowerCase().includes(word[i].toLowerCase())) {
            return true
        }
    }
    return false;
}


function truncate(str, maxlength) {
    let word = "";
    if (str.length > maxlength) {
        return str.substring(0, maxlength - 1) + "…";
    }
    return str.substring(0, maxlength);
}




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
// [1,5,-1,3,5,3,-9]
function getMaxSubSum(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(max, sum);
        }


    }
    return max;

}


function camelize(str) {
    let newWord = "";

    let word = str.toLowerCase().split("-");
    let j = 0;
    for (let i = 1; i < word.length; i++) {
        newWord += word[i].replace(word[i].charAt(0), word[i].charAt(0).toUpperCase());
    }


    return word[0] + newWord;

}

function extractCurrencyValue(str){
    return parseInt(str.substring(1))
}

console.log(extractCurrencyValue("$120"))