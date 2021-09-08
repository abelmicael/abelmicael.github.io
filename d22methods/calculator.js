"use strict";

const calculator = {
    a: 1,
    b: 1,
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
    setValues:function(x,y){
        this.a=x;
        this.b=y;
    }
};
// calculator.setValue(7,8)
// console.log(calculator.sum())
// console.log(calculator.x)




/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests
