const scores = [
    { id: 1, score: 10 },
    { id: 2, score: 5 },
    { id: 3, score: 8 },
    { id: 10, score: 12 }

]
// let sum = 0;
// function sumScore() {

//     for (const s of scores) {
//         sum += s.score;
//     }
//     return sum;
// }
// //console.log(sum)


// function highest(arr) {
//     let highest = 0;
//     const hig = {};
//     for (const s of scores) {
//         if (s.score > highest) {
//             highest = s.score
//             hig = s;
//         }
//     }
//     return highest;
// }
// //console.log(highest)

// const pointsArr = [{ id: 1, points: [10, 8, 6, 2, 2] },
// { id: 2, points: [0, 4, 2, 0, 0] }
// ]

// let sum = 0;
// function points(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i].points[j];
//             console.log(sum)
//         }
//     }
//     return sum;
// }
// console.log(points(pointsArr))

// let str ="abel micael";
// console.log(str.indexOf("asmerom"))
// console.log(str.slice(1,[3]))


arr=[1,2,16,3,108];

arr.forEach(function(i){
    if(i%2===0){
        console.log(i)
    }
}
)