export class Question {
  /**
   *
   * @param {string} text text question
   * @param {string[]} question choices
   * @param {string} answer text answer
   */
  constructor(text, question, answer) {
    this.text = text;
    this.question = question;
    this.answer = answer;
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

// const question = new Question('chose white', ['white', 'black'], 'white');

// console.log(question.correctAnswer('black'))
