// Declaring variables
const questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];

  question.addEventListener("click", (e) => {
    const currentQuestion = e.currentTarget;
    const currentAnswer = currentQuestion.nextElementSibling;

    if (currentAnswer.classList.contains("answer-active")) {
      currentAnswer.classList.remove("answer-active");
      currentQuestion.classList.remove("question-active");
    } else {
      currentAnswer.classList.add("answer-active");
      currentQuestion.classList.add("question-active");
    }
  });
}
