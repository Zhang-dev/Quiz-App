import Question from "./Question.js"
export default class QuestionPackage {
  static getQuestions(anzahl) {
    let q1 = new Question(
      "Wer ist der President1?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q2 = new Question(
      "Wer ist der President2?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q3 = new Question(
      "Wer ist der President3?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q4 = new Question(
      "Wer ist der President4?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q5 = new Question(
      "Wer ist der President5?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q6 = new Question(
      "Wer ist der President6?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let q7 = new Question(
      "Wer ist der President7?",
      ["Ich", "Du", "Keiner", "Jeder"],
      0
    );
    let question_arr = [q1, q2, q3, q4, q5, q6, q7];

    //Zahlenaray
    //[0,1,2,3....]
    let new_arr = question_arr.map((el, k) => k);

    if (anzahl > question_arr.length) return null;

    let new_question_arr = [];

    //generieren der Zahlen für das Array

    //ZahelnArray shufflen
    for (let i = new_arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
    }
    for (let i = new_arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
    }

    //[3,6,2,1,0,4]

    // Pick Questions
    for (let i = 0; i < anzahl; i++) {
      new_question_arr.push(question_arr[new_arr[i]]);
    }
    return new_question_arr;
  }
}

