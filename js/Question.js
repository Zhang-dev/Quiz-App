export default class Question {
  constructor(question, choices, key) {
    this.question = question;
    this.choices = choices;
    this.key = key;
  }

  isCorrect(input) {
    return input === this.key;
  }
}
