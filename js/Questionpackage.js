import Question from "./Question.js"
export default class QuestionPackage {
  static getQuestions(anzahl) {
    let q1 = new Question(
      "In order to create a string, we need to put the text inside...",
      ["Quotation marks", "/ symbols", "<string></string> tag"],
      0
    );
    let q2 = new Question(
      "A floating point number:",
      ["is allowed to have a decimal place","is always positive", "is always smaller than 0"],
      0
    );
    let q3 = new Question(
      "An object's properties are similar to variables; methods are similar to:",
      ["functions", "properties", "conditionals", "operators"],
      0
    );
    let q4 = new Question(
      "Whic of the following is not one of the new ES6 features?",
      ["Hoisting", "Modules", "Object destructuring", "Template Literals"],
      0
    );
    let q5 = new Question(
      `What sit the output of the following code?
      const arr1 = [1,2,3,4,5];
      const arr2 = [...arr1, 6];
      const func = (...rest) => {
        console.log(rest.length);
        func(...arr1);
        func(...arr2);
      }`,
      ["56", "rest", "65", "1"],
      0
    );
    let q6 = new Question(
      `Waht is the output of this code?
      function letItBe(){
        if(true){
          let v = 4;
          console.log(v);
        }
        console.log(v);
      }
      letItBe()`,
      ["4 2", "2 2", "2 4", "4 4"],
      0
    );
    let q7 = new Question(
      `What is the output of this code?
      const map = new Map();
      map.set("one",1);
      map.set("2","two");
      if(map.has("two")){
        console.log("two")
      }else{
        console.log(map.get("one"));
      }`,
      ["1", "Invalid Syntax", "true", "undefined"],
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

