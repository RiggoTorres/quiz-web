const question = document.getElementById("questions")
let options = document.getElementById("options");
let scoreDisplay = document.getElementById("scoring");
const questions = [
  {
    question : "What is the Capital City of Australia?",
    options : ["Sydney", "Melbourne","Canberra", "Perth"],
    correctAnswer : "Canberra"
  },
  {
    question: "Which creature holds the record for the deepest diving mammal?",
    options: ["Sperm Whale", "Elephant Seal", "Cuvier’s Beaked Whale", "Blue Whale"],
    correctAnswer: "Cuvier’s Beaked Whale"
  },
  {
    question: "Which battle is considered the turning point of the Pacific Theater in WWII?",
    options: ["Battle of Midway", "Battle of Guadalcanal", "Battle of Iwo Jima", "Battle of Okinawa"],
    correctAnswer: "Battle of Midway"
  },
  {
    question: "Which river flows through the most countries?",
    options: ["Nile", "Amazon", "Danube", "Mekong"],
    correctAnswer: "Nile"
  },
  {
    question: "Which country was formerly known as 'Ceylon'?",
    options: ["Myanmar", "Sri Lanka", "Bangladesh", "Cambodia"],
    correctAnswer: "Sri Lanka"
  },
  {
    question: "What is the largest species of shark?",
    options: ["Great White Shark", "Tiger Shark", "Whale Shark", "Hammerhead Shark"],
    correctAnswer: "Whale Shark"
  },
  {
    question: "What is the rarest naturally occurring element on Earth?",
    options: ["Francium", "Astatine", "Promethium", "Technetium"],
    correctAnswer: "Astatine"
  },
  {
    question: "Which country has the highest number of time zones?",
    options: ["Russia", "USA", "France", "China"],
    correctAnswer: "France"
  },
  {
    question : "Which is the largest desert in the world?",
   options : ["Sahara", "Kalahari", "Antarctica", "Russia"],
    correctAnswer : "Antarctica"
  },
  {
  question: "Which creature is known for surviving extreme conditions like space, boiling, and freezing?",
  options: ["Tardigrade", "Cockroach", "Ant", "Octopus"],
  correctAnswer: "Tardigrade"
},

]
let currentIndex = 0;
let scoreCount = 0;

function loadQuestion() {
const currentQuestion =   questions[currentIndex];
  question.textContent = 
currentQuestion.question;  
  options.innerHTML = "";
  
    for(let i = 0; i < currentQuestion.options.length; i = i + 1) {
      const button = document.createElement("button");
      button.textContent = currentQuestion.options[i];
      button.classList.add("making-option");
      options.appendChild(button);
      
     button.addEventListener("click", function() {
   const checkingAnswer = button.textContent;
       let disablebutton = document.querySelectorAll(".making-option");
       disablebutton.forEach(jayajlovekc => jayajlovekc.disabled = true);

     if (checkingAnswer === currentQuestion.correctAnswer) {
       button.style.color = "green";
       scoreCount++;
       scoreDisplay.textContent = "Score : " + scoreCount;
     }
   else {
     button.style.color = "red";
      const glowAnswer = document.querySelectorAll(".making-option");
     glowAnswer.forEach(btn => {
       if (btn.textContent === currentQuestion.correctAnswer){
         btn.style.color = "green";
       }
     });
   }
   currentIndex = currentIndex + 1;
   
       setTimeout(() => {
   if (currentIndex < questions.length) {
     loadQuestion();
   }
   else {
question.textContent = `Quiz completed! Your Final Score: ${scoreCount}/${questions.length}`;

     options.innerHTML = "";
     
       let restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
     restartBtn.classList.add("restart-button");
     
     
      restartBtn.addEventListener("click", function(){
        currentIndex = 0;
        scoreCount = 0;
        scoreDisplay.textContent = "Score : 0";
        loadQuestion();
      });
     options.appendChild(restartBtn);
     
   }
       }, 500);
      
 });
   
    }
}
loadQuestion();