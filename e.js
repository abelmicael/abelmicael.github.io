// // function myMap(arr, func) {
// //     const newArr = [];
// //     for (let x of arr) {
// //         newArr.push(func(x));
// //     }
// //     return newArr;
// // }

// const { ZERO_OR_MORE } = require("argparse");

// // const dblFun = (num, index) => index + ": " + (num * 2);
// // const squareFun = num => num * num;
// // const result = [];
// // result = arr.map(item=> squareFun(item));

// let a = {value: "A", next: b};
// let b = {value: "B", next: c};
// let c = {value: "C", next: null};

// //write expression(s) to remove B from the list
// a.next =c;
// //➢ write expression(s) to add B to the end of the list
// c.next=b
// b.next=null;
// //➢ write expression(s) to insert Z between C and B
// c.next={value: "Z",next:b};


// function muli(...para) {
//     let tot = 1;
//     for (let x of para) {
//         if (x % 2 == 0) {
//             tot = tot * x
//         }
//     }
//     return tot;
// }

// console.log(muli(1, 2, 3, 4, 5, 6))

// let b=[1,2,3]
// let a =[...b ,...b]
// console.log(a)

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function reverseList(list) {
    if (list === null) return " printed to console";
    
    return reverseList(list.next) + " " + list.value;
}

console.log(reverseList(list))
const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
function concat(arr1, arr2){
    return arr1.concat(arr2)
}
const x =concat(arr1,arr2)
console.log(x)