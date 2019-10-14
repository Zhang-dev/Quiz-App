import Question from "./Question.js";
import Quiz from "./Quiz.js";
import Questionpackage from "./Questionpackage.js";

const App = (function() {
  const quizEl = document.querySelector(".jabquiz");
  const quizQuestionEl = document.querySelector(".jabquiz__question");
  const trackerEl = document.querySelector(".jabquiz__tracker");
  const taglineEl = document.querySelector(".jabquiz__tagline");
  const progressEl = document.querySelector(".progress__inner");
  const choicesEl = document.querySelector(".jabquiz__choices");
  const nextButtonEl = document.querySelector(".next");
  const restartButtonEl = document.querySelector(".restart");

  let quetionArr = Questionpackage.getQuestions(3);
  let quiz = new Quiz(quetionArr);

  const getPercentage = (num1, num2) => Math.round(num1 / num2 * 100);
  const shuffle = a=> {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  const lauch = (current, max) => {
    let loadingBar = setInterval(function() {
      if (current > max) {
        clearInterval(loadingBar);
      } else {
        progressEl.style.width = `${current}%`;
        current++;
      }
    }, 3);
  };

  const eventListener = (_ => {
    let next = _ => {
      {
        let userChoice = document.querySelector(".jabquiz__input:checked");
        if (userChoice) {
          {
            let guessKey = Number(userChoice.getAttribute("id").slice(6));
            if (quiz.getCurrentQuestion().isCorrect(guessKey)) {
              quiz.score++;
            }
            quiz.currentIndex++;
            fillAll();
            if (quiz.currentIndex === quiz.questions.length) {
              nextButtonEl.removeEventListener("click", next);
              let options = document.querySelectorAll("input[name=choice]");
              for (let el of options) {
                el.disabled = true;
              }
            }
          }
        } else {
          alert("Please pick one option");
        }
      }
    };
    nextButtonEl.addEventListener("click", next);

    restartButtonEl.addEventListener("click", function() {
      if(quiz.currentIndex===quiz.questions.length){
        let quetionArr = Questionpackage.getQuestions(3);
        quiz = new Quiz(quetionArr);
          }
      quiz.restart();
      fillAll();
      nextButtonEl.style.opacity = 1;
      nextButtonEl.addEventListener("click", next);
    });
  })();

  const fillEnd = _ => {
    quizQuestionEl.innerHTML = `You got ${Math.floor(
      quiz.score / quiz.questions.length * 100
    )}%`;
    fillTracker();
    fillProgress();
    taglineEl.innerHTML = "Completed";
    nextButtonEl.style.opacity = 0;
  };

  const fillTagline = _ => {
    taglineEl.innerHTML = "Pick one option below";
  };
  const fillQuestion = _ => {
    quizQuestionEl.innerHTML = quiz.getCurrentQuestion().question;
  };
  const fillTracker = _ => {
    trackerEl.innerHTML = `${quiz.currentIndex} of ${quiz.questions.length}`;
  };
  const fillProgress = _ => {
    let currentPercentage = getPercentage(
      quiz.currentIndex,
      quiz.questions.length
    );
    lauch(0, currentPercentage);
  };

  const fillChoices = _ => {
    let html = [];
    quiz.getCurrentQuestion().choices.forEach((el, index) => {
      html[index] = `<li class="jabquiz__choice">
          <input type="radio" name="choice" class="jabquiz__input" id="choice${index}">
          <label for="choice${index}" class="jabquiz__label">
              <i></i>
              <span>${el}</span>
          </label>
      </li>
          `;
    });
    shuffle(html)
    choicesEl.innerHTML = html.join("");
  };

  const fillAll = _ => {
    if (quiz.hasEnd()) {
      fillEnd();
    } else {
      fillChoices();
      fillQuestion();
      fillTracker();
      fillProgress();
      fillTagline();
    }
  };

  let count = b => {
    let a = setInterval(function() {
      if (b > 10) {
        clearInterval(a);
      } else {
        console.log(b);
        b++;
      }
    }, 3000);
  };
  return {
    fill123: fillAll,
    count123: count
  };
})();
App.fill123();
