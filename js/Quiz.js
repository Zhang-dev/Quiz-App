export default class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  hasEnd(){
    return this.currentIndex ===this.questions.length;
  }

  restart(){
    this.currentIndex = 0;
    this.score = 0;
  }
}
