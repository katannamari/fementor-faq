// Declaring variables
const questions = document.querySelectorAll(".question");

const toggleQuestion = () => {
  console.log("kysymystä painettu.");
};

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  question.addEventListener("click", toggleQuestion);
}
