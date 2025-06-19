const question = document.getElementById("questions");
let options = document.getElementById("options");
let scoreDisplay = document.getElementById("scoring");

const questions = [
  {
    question: "What is the Capital City of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra"
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
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Kalahari", "Antarctica", "Russia"],
    correctAnswer: "Antarctica"
  },
  {
    question: "Which creature is known for surviving extreme conditions like space, boiling, and freezing?",
    options: ["Tardigrade", "Cockroach", "Ant", "Octopus"],
    correctAnswer: "Tardigrade"
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: "Saturn"
  },
  {
    question: "Which organ can regenerate itself?",
    options: ["Liver", "Heart", "Kidney", "Lung"],
    correctAnswer: "Liver"
  },
  {
    question: "Which country invented paper?",
    options: ["India", "China", "Egypt", "Greece"],
    correctAnswer: "China"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    correctAnswer: "Michelangelo"
  },
  {
    question: "Which gas makes up most of the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "Which island nation lies southeast of India?",
    options: ["Maldives", "Sri Lanka", "Madagascar", "Indonesia"],
    correctAnswer: "Sri Lanka"
  },
  {
    question: "What’s the only mammal capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Sugar Glider", "Colugo"],
    correctAnswer: "Bat"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Graphene", "Quartz", "Obsidian"],
    correctAnswer: "Diamond"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Lead", "Aluminum", "Zinc"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which is the longest river in South America?",
    options: ["Amazon", "Paraná", "Orinoco", "São Francisco"],
    correctAnswer: "Amazon"
  },
  {
    question: "Who was the first person in space?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    correctAnswer: "Yuri Gagarin"
  },
  {
    question: "What is the tallest type of grass?",
    options: ["Bamboo", "Wheat", "Reed", "Sugarcane"],
    correctAnswer: "Bamboo"
  },
  {
    question: "Which language has the most native speakers?",
    options: ["English", "Spanish", "Hindi", "Mandarin"],
    correctAnswer: "Mandarin"
  },
  {
    question: "Which vitamin do we get from sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D"
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2"
  }
];

let currentIndex = 0;
let scoreCount = 0;

function loadQuestion() {
  const currentQuestion = questions[currentIndex];
  question.textContent = currentQuestion.question;
  options.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentQuestion.options[i];
    button.classList.add("making-option");
    options.appendChild(button);

    button.addEventListener("click", function () {
      const checkingAnswer = button.textContent;
      let disablebutton = document.querySelectorAll(".making-option");
      disablebutton.forEach(btn => btn.disabled = true);

      if (checkingAnswer === currentQuestion.correctAnswer) {
        button.style.color = "green";
        scoreCount++;
        scoreDisplay.textContent = "Score : " + scoreCount;
      } else {
        button.style.color = "red";
        const allButtons = document.querySelectorAll(".making-option");
        allButtons.forEach(btn => {
          if (btn.textContent === currentQuestion.correctAnswer) {
            btn.style.color = "green";
          }
        });
      }

      currentIndex++;

      setTimeout(() => {
        if (currentIndex < questions.length) {
          loadQuestion();
        } else {
          question.textContent = `Quiz completed! Your Final Score: ${scoreCount}/${questions.length}`;
          options.innerHTML = "";

          let restartBtn = document.createElement("button");
          restartBtn.textContent = "Restart Quiz";
          restartBtn.classList.add("restart-button");

          restartBtn.addEventListener("click", function () {
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
