"use strict";

const stu1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2, 4]
};
const stu2 = {
    studentId: "s102",
    quizAnswers: [2, 1, 2, 2]
};
const stu3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3, 4]
};

const quizArray = [stu1, stu2, stu3];

function collectAnswers(quizArray,questionNumber){
const ans=[];
const index = questionNumber-1;

    for(const student of quizArray){
        ans.push(student.quizAnswers[index]);
    }
    return ans;
}

console.log(collectAnswers(quizArray,3));