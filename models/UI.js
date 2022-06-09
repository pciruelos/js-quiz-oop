export class UI {
  constructor() {}

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  };

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  };

  showScores(score) {
    const quizEndHtml = ` <h1>Resultado</h1></hr><h2>your score is : ${score}</h2>`;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHtml;
  };

  showProgress(currentIndex, total) {
      const element = document.getElementById('progress');
      element.innerHTML = `question ${currentIndex} of ${total}`
  };
}
