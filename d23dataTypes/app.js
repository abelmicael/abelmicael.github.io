"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam ,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {string} str any word
 * @returns{string}returns string changed first letter to upper case
 */
function ucFirst(str) {
    let word = "";
    word = str.charAt(0).toUpperCase()
    str = str.substring(1);

    return word + str

}

/**
 * 
 * @param {string} str any word
 * @returns{boolean} return true or false after checking if word contains spam
 */
function checkSpam(str) {
    const word = ["xxx", "Viagra", "sex"];
    for (let i = 0; i < word.length; i++) {
        if (str.toLowerCase().includes(word[i].toLowerCase())) {
            return true
        }
    }
    return false;
}

/**
 * 
 * @param {string} str any word
 * @param {number} maxlength any number 
 * @returns{string} returns truncuted string
 */
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

/**
 * 
 * @param {string} str 
 * @returns{string} returns string of camel case
 */
function camelize(str) {
    let newWord = "";

    let word = str.toLowerCase().split("-");
    let j = 0;
    for (let i = 1; i < word.length; i++) {
        newWord += word[i].replace(word[i].charAt(0), word[i].charAt(0).toUpperCase());
    }


    return word[0] + newWord;

}
/**
 * 
 * @param {string} str any word
 * @returns {number} return a number 
 */
function extractCurrencyValue(str){
    return parseInt(str.substring(1))
}

