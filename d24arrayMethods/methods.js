"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let result = arr.filter(i => i >= a && i <= b)
    return result;
}


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    // remove if outside of the intertemp
    if (temp < a || temp > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}


function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

function unique(arr) {
    const newArr =[]

let s =arr.forEach(item =>{
   if(!newArr.includes(item)){
       newArr.push(item);
   }}
   )
   return newArr;
}

// function groupById(array) {

// }
function groupById(array) {
  return array.reduce((obj, tempue) => {
    obj[tempue.id] = tempue;
    return obj;
  }, {})
}