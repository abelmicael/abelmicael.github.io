const num = {
    one: 1,
    two: 22,
    three: 333,
    four: 444

};
const properties = ["one", "two", "three", "four"];

// for (const pro of properties) {
//     console.log(num[pro]);
// }

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

const stArr = [stu1, stu2, stu3];
const answers = [3, 1, 2, 4]
/**
 * 
 * @param {Array} quizArray has student objects
 * @param {*} answers correct answer 
 * @returns {object} contains quiz scores for each object 
 */
function gradeQuiz(quizArray, answers) {
    const grades = [];
    for (const student of quizArray) {
        const studentScore = scoreStudent(student, answers);
        grades.push(studentScore);
        //grades[student.studentId] = studentScore;
    }
    return grades;
}
/**
 * 
 * @param {object} student 
 * @param {*} answers 
 * @returns
 */
function scoreStudent(student, answers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (student.quizAnswers[i] === answers[i]) {
            score += 1;
        }
    }
    return score;
}

console.log(gradeQuiz(stArr, answers))
