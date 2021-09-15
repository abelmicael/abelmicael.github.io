// // // const scores = [
// // //     { id: 1, score: 10 },
// // //     { id: 2, score: 5 },
// // //     { id: 3, score: 8 },
// // //     { id: 10, score: 12 }

// // // ]
// // // // let sum = 0;
// // // // function sumScore() {

// // // //     for (const s of scores) {
// // // //         sum += s.score;
// // // //     }
// // // //     return sum;
// // // // }
// // // // //console.log(sum)


// // // // function highest(arr) {
// // // //     let highest = 0;
// // // //     const hig = {};
// // // //     for (const s of scores) {
// // // //         if (s.score > highest) {
// // // //             highest = s.score
// // // //             hig = s;
// // // //         }
// // // //     }
// // // //     return highest;
// // // // }
// // // // //console.log(highest)

// // // // const pointsArr = [{ id: 1, points: [10, 8, 6, 2, 2] },
// // // // { id: 2, points: [0, 4, 2, 0, 0] }
// // // // ]

// // // // let sum = 0;
// // // // function points(arr) {

// // // //     for (let i = 0; i < arr.length; i++) {
// // // //         for (let j = 0; j < arr[i].length; j++) {
// // // //             sum += arr[i].points[j];
// // // //             console.log(sum)
// // // //         }
// // // //     }
// // // //     return sum;
// // // // }
// // // // console.log(points(pointsArr))

// // // // let str ="abel micael";
// // // // console.log(str.indexOf("asmerom"))
// // // // console.log(str.slice(1,[3]))


// // // // arr=[1,2,16,3,108];

// // // // arr.forEach(function(i){
// // // //     if(i%2===0){
// // // //         console.log(i)
// // // //     }
// // // // }
// // // //)
// // // let arr = [1, 2, 3, 4, 5];
// // // let result = arr.reduce(function (sum, current) { return sum * current; }, 1);
// // // let max = arr.reduce(function (max, current) { return Math.max(max,current) }, 1);
// // // console.log(max)

// // // let arr=[1,4,2,5,5]
// // // function filterRange(arr, a, b) {
// // //     let result =arr.filter((i)=>{i>=a&&i<=b})
// // //     return result;
// // //   }

// // //   console.log(filterRange(arr,1,4))

// // // let strings = ["Hare", "Krishna", "Hare", "Krishna",
// // //     "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// // // function unique(arr) {
// // //      const newArr =[]

// // // let s =arr.forEach(item =>{
// // //     if(!newArr.includes(item)){
// // //         newArr.push(item);
// // //     }}
// // //     )
// // //     return newArr;
// // // }
// // // console.log(unique(strings))


// // // function foo(a,b){
// // //     console.log(a+" "+b)

// // // }
// // // foo(x,y);
// // // const x=5;
// // // const y=6;

// // // function s(a,b){
// // //     console.log(a+b);
// // // }
// // // //s(1,2);
// // // let x=s(1,2);
// // // console.log(x)

// // var someObject = {
// //     some_prop: 'some string value',
// //     another_prop: 'another string value',
// //     int_prop: 100
// // };

// // for(let x in someObject){
// //     console.log(someObject[x])
// // }



// // // const circle = {
// // //     r: 2,
// // //     cer: function () {
// // //         return Math.PI * this.r;
// // //     }
// // // }

// // // function ch() {
// // //     //console.log(this)
// // //     console.log(this.side);
// // //     return this.side * this.side;
// // // }


// // // console.log(ch())

// // // const ex = {
// // //     a: "name",
// // //     b: 12
// // // };
// // // const pro = a
// // // console.log(ex.a)

// // let result = array123.map(item=>Math.pow(item,2))

// //let three = 3;
// // let four = 4;
// // let [one, two] = [three, four];

// // console.log(one);  

// // console.log(two);  //Blank 2. Fill in the blank, read surrounding text.

// // console.log(three);  //Blank 3. Fill in the blank, read surrounding text.

// // console.log(four);  //Blank 4. Fill in the blank, read surrounding text.

// // const abc = {alpha: 1, beta: 0};
// // console.log(abc[alpha])



// // const player1 = { name: "Bob", points: [1, 2, 1] };
// // const player2 = { name: "Andre", points: [2, 0, 1] };
// // const player3 = { name: "Max", points: [1, 1, 1] };
// // const players = [player1, player2, player3];


// // function maxPoints(players) {
// //     let sum = 0;
// //     const y = [];
// //     let max = 0;
// //     for (let i = 0; i < players.length; i++) {
// //         sum = 0;
// //         for (let j = 0; j < players[i].points.length; j++) {
// //             sum += players[i].points[j];
// //         }
// //         if (sum > max) {
// //             max = sum;
// //         }
// //     }
// //     return max;
// // }
// // console.log("expect 4:",  maxPoints(players));

// abel = [

//     { name: "abel", age: 1 },
//     { name: "gefege", age: 3 }

// ]

// // let sum=0
// // for(let x of abel){
// //     console.log(x.age)

// // }
// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// // function averagePoints(array) {
// //     const o = {};
// //     const arr = [];
// //     array.map(item => {
// //         o[item.name] = ave(item.points);
// //     })
// //     arr.push(o);
// //     return arr;
// // }

// // function ave(arr) {
// //     let sum = 0
// //     for (let x of arr) {
// //         sum += x;
// //     }
// //     return sum / arr.length;
// // }

// function average(arr) {
//     const arr1 = [];
//     const o = {};
//     let sum = 0;
//     for (let x of arr) {
//         sum = 0
//         for (let y of x.points) {
//             sum += y;
//         }
//         o[x.name] = sum / arr.length;
//     }
//     arr1.push(o)
//     return arr1;
// }

// function square(arr){
//     return arr.map(item=>Math.pow(item ,2))
// }

// function executor(a,b,c){
//     if(a==="add"){
//         return sum(a,b)
//     }
// }

// function sum(a,b){
// return a+b
// }
// function mult(a,b){
// return a*b
// }
// console.log(square([1,2,3]))

// const o ={
//     11 :"abel",
//     10:30
// }
// o.age=90;
// for(let x in o)
// console.log(x)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     love:"abel"
//   }
// let sum=0;
//   for(let x in salaries){
//       if(typeof salaries[x] === 'number'){
//             salaries[x]*2;
//       }
//   }
// console.log(salaries)

// let user = {
//     name: "John",
//     age: 30
//   ,

//   sayHi : function() {
//     console.log("Hello!");
//   }
//   };


//
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => console.log(this.firstName);
//       arrow();
//     }
//   };

//   user.sayHi()
// function makeUser(){
//     return this; // this time there's no object literal
//   }
//   console.log(makeUser())

// function Calc(a,b){
//       this.a=a;
//       this.b=b;
//     this.sum = function(){
//      return this.a+this.b;
//     }
// }
//  let x = new Calc(1,2);

//  console.log(x.sum())

// let john = {
//     name: "John",
//     sayHi = function() {
//       console.log(this);
//     }
// //   };

// sayHi();

// let result = arr.map(function(item,index,array){

// })

// let length = ["Bilbo", "Gandalf", "Nazgul"].map((item, index) => {
//     let s = index + ":" + item.length
//     return +(s)
// })
// console.log(length)

// let calc ={

//     setValues: function(a,b){
//         this.a=a;
//         this.b=b;
//     },
//     sum: function(){
//        return this.a+this.b;
//     }

// }
// calc.setValues(1,2)
// console.log(calc.sum())



// const arr =[1,2,3,4];

// arr.sort(function(a,b) {
// return b-a})
// console.log(arr)

// let s = "hello abel how are you going today";
// let split =s.split(" ")
// split.sort(function(a,b){
//     return a.length-b.length;
// })
// console.log(split)
// let x = split.join(" ");
// console.log(x)

// const num=[1,5,18,2,77,108];

// let x = num.findIndex( item => {return item % 2==0})
// console.log(x)
// let y = num.filter(item => {return item % 2==0})
// console.log(y)

// let array =[{name:"ram",age:29},{name:"syam",age:40},{name:"syam",age:19}];

// let sum=0;
// for(let x of array){
//     sum+=x.age;
// }
// let ave = sum/array.length;
// console.log(ave.toFixed(2))

// function old(arr1){
//     let max =0;
//     let obj ={}
//     for(let x of arr1){

//       if(x.age>max){
//           max=x.age;
//           obj=x;
//       }
//     }
//     return obj;
// }console.log(old(array))











// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];



// function ave(arr) {
//     let sum = 0;
//     const obj = {};
//     const arr1 = [];
//     let average = 0;
//     for (let item of arr) {
//         sum = 0;
//         for (let x of item.points) {
//             sum += x;
//         }
//         average = sum / item.points.length;
//         arr1.push(average)
//         //obj[item.name] = average;

//     }

//     //arr1.push(obj)

//     return arr1;
// }

// console.log(ave(players))



// function ex(a, b, c) {

//     if (a === "add") {
//         return b + c;
//     }
//     else {
//         return b * c;
//     }

// }
// console.log(ex("add", 5, 10))

// const y = [1, 4, 6, 2, 3];
// y.sort((a, b) => {
//     return b - a;
// })

// console.log(y)



// let str = "abel";
// console.log(str.slice())

// function checkExam(correctA, stuA) {
//     let a = 0;
//     let b = 0;
//     for (let i = 0; i < correctA.length; i++) {
//         if (correctA[i] === stuA[i]) {
//             a+=4;

//         } else {
//             a--;;
//         }
//     }
//     if(a<0){return 0;}

//     return a;
// }

// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) )

const quiz = {};
quiz.students = [
    { sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
    { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
    { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }
];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }]

function answerComprator(arr) {
    return arr.sort((x, y) => x.qid - y.qid)

}

for (let x of quiz.students) {
    answerComprator(x.answers)
}

const newquiz = {
    average: 0,
    getAverageScore: function () {
        let sum = 0;
        for (let i = 0; i < quiz.key.length; i++) {
            for (let j = 0; j < quiz.students[i].answers.length; j++) {
                if (quiz.key[j].ans === quiz.students[i].answers[j].ans) {
                    sum++;
                    
                }
            }
        }
        return sum/quiz.key.length;

    },
    scoreStudent: function (sid) {
        let sum = 0;
        let x = quiz.students.findIndex(item => item.sid === sid)

        for (let i = 0; i < 3; i++) {
            if (quiz.key[i].ans === quiz.students[x].answers[i].ans) {
                sum++;
            }
        }
        return sum;
    }
}
console.log(newquiz.getAverageScore())
