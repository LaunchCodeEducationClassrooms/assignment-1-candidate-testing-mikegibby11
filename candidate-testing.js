const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40","Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //


candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < 5; i++) {
  candidateAnswers.push(input.question(`${questions[i]}`));
}

}




function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log("\n\n\n\n>>> TEST RESULTS <<<")

console.log(`\n\nCandidate Name: ${candidateName}\n\n1) ${questions[0]}\nCorrect Answer: ${correctAnswers[0]}. \nYour Answer: ${candidateAnswers[0]}.\n\n2) ${questions[1]}\nCorrect Answer: ${correctAnswers[1]}\nYour Answer: ${candidateAnswers[1]} \n\n3) ${questions[2]}\nCorrect Answer: ${correctAnswers[2]}\nYour Answer: ${candidateAnswers[2]}\n\n4) ${questions[3]}\nCorrect Answer: ${correctAnswers[3]}\nYour Answer: ${candidateAnswers[3]}\n\n5) ${questions[4]}\nCorrect Answer: ${correctAnswers[4]}\nYour Answer: ${candidateAnswers[4]}`)

let numberCorrectAnswers = 0

if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()) {
  (numberCorrectAnswers = numberCorrectAnswers + 1);
} else (numberCorrectAnswers = numberCorrectAnswers + 0)

if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()) {
  (numberCorrectAnswers = numberCorrectAnswers + 1);
} else (numberCorrectAnswers = numberCorrectAnswers + 0)

if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()) {
  (numberCorrectAnswers = numberCorrectAnswers + 1);
} else (numberCorrectAnswers = numberCorrectAnswers + 0)

if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()) {
  (numberCorrectAnswers = numberCorrectAnswers + 1);
} else (numberCorrectAnswers = numberCorrectAnswers + 0)

if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()) {
  (numberCorrectAnswers = numberCorrectAnswers + 1);
} else (numberCorrectAnswers = numberCorrectAnswers + 0)


let grade = ((numberCorrectAnswers / 5)*100);
console.log(`\n>>> OVERALL GRADE: ${grade}% (${numberCorrectAnswers} out of 5 correct). <<<`)

if (grade >= 80){
  console.log(">>> STATUS: PASSED <<<")
}else {
  console.log(">>> STATUS: FAILED <<<")
}




  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHello, ${candidateName}, welcome to the quiz!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};