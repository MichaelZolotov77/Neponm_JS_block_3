var riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["это несъедобное", "это не фрукт"],
  tries: 3,
  checkAnswer(guessedAnswer, hint) {
    // TODO: написать логику проверки правильного ответа
    // alert для пользователя, console.log()

    if (guessedAnswer.toLowerCase() === this.correctAnswer) {
      alert("Правильный ответ");
      console.log("Правильный ответ");
      this.tries = 0;
    } else {
      alert(`Неправильный ответ. Посказка: ${this.hints[hint]}`);
      console.log("Неправильный ответ");
      this.tries--;
    }
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

let hint = 0;
function check() {
  var input = document.getElementsByTagName("input")[0];

  var guessedAnswer = input.value;
  console.log(guessedAnswer);
  if (guessedAnswer && riddle.tries > 0) {
    // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
    riddle.checkAnswer(guessedAnswer, hint);
    hint++;
  }
}
