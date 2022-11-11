var readlineSync = require('readline-sync');

//  input 

var userName = readlineSync.question('Hey,What is your name? ');
console.log('Heyy ', userName, '!');

questionOne = {
  question: "What is Arjun's favourite sports?",
  answer: "cricket"
}
questionTwo = {
  question: "What is Arjun's favourite place?",
  answer: "marine drive"
}
questionThree = {
  question: "Do you know Arjun birthday?(yes/no)",
  answer: "yes"
}
questionFour = {
  question: "Which year did Arjun graduated?",
  answer: "2020"
}
questionFive = {
  question: "In which field has Arjun done his engineering?",
  answer: "computer engineering"
}

questionSix = {
  question: "In which city does Arjun live?",
  answer: "mumbai"
}
questionSeven = {
  question: "In which company does Arjun work?",
  answer: "tcs"
}
listScorers = [
  {
    name: "Arjun",
    score: 7
  },
  {
    name: "Mahesh",
    score: 6
  },
  {
    name: "Pratik",
    score: 5
  },
  {
    name: "Vaibhav",
    score: 3
  }
]

questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

var score = 0;

for (let i = 0; i < questions.length; i++) {
  var receivedAns = readlineSync.question(questions[i].question + " ");
  if (receivedAns.toLowerCase() === questions[i].answer) {
    console.log("Correct!");
    score += 1
  }
  else {
    console.log('Wrong Answer! Correct answer is: ', questions[i].answer);

  }

}

console.log("============================")
console.log("Your total score: " + score);

console.log("============================")

function listScore() {
  console.log("list of score,ping me your score i will add");

  listScorers.map(score => console.log(score.name, "::", score.score))
}
listScore();

