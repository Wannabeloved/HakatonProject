import { Module } from "../core/module";
import { random } from "../utils";

export class Custom extends Module {
  constructor(type, text) {
    super(type, text);
    this.questions = [
      {
        question:
          "Вы видите черепаху, лежащую на спине, но она не может перевернуться. Что вы сделаете?",
        options: ["Помогу перевернуться", "Проигнорирую", "Оставлю на месте"],
        correctAnswer: "Помогу перевернуться",
      },
      {
        question:
          "На улице идет дождь, и вы видите бездомного человека, сидящего под мостом. Что вы чувствуете?",
        options: ["Сострадание", "Безразличие", "Раздражение"],
        correctAnswer: "Сострадание",
      },
      {
        question:
          "Вы видите маленькую девочку, которая теряет свою куклу и начинает плакать. Что вы сделаете?",
        options: [
          "Попробую утешить ее",
          "Проигнорирую",
          "Скажу, что это просто игрушка",
        ],
        correctAnswer: "Попробую утешить ее",
      },
      {
        question: "Ваш сосед по дому умирает от голода. Каковы ваши действия?",
        options: [
          "Поделюсь с ним едой",
          "Предложу обратиться за помощью",
          "Ничего не сделаю",
        ],
        correctAnswer: "Поделюсь с ним едой",
      },
      {
        question: "Вы случайно разбили вазу в доме друга. Ваши действия?",
        options: [
          "Извинюсь и предложу оплатить ущерб",
          "Попробую скрыть случившееся",
          "Проигнорирую",
        ],
        correctAnswer: "Извинюсь и предложу оплатить ущерб",
      },
      {
        question:
          "Вы видите, как кто-то жестоко обращается с животным. Что вы сделаете?",
        options: [
          "Вмешаюсь и попытаюсь остановить",
          "Проигнорирую",
          "Постараюсь уйти, чтобы не видеть",
        ],
        correctAnswer: "Вмешаюсь и попытаюсь остановить",
      },
      {
        question: "Ваш друг плачет из-за потерянной работы. Что вы сделаете?",
        options: [
          "Попробую поддержать и утешить",
          "Предложу ему двигаться дальше",
          "Проигнорирую",
        ],
        correctAnswer: "Попробую поддержать и утешить",
      },
      {
        question:
          "Вы видите, как кто-то крадет у старика кошелек. Что вы сделаете?",
        options: [
          "Попробую остановить вора",
          "Позову на помощь",
          "Проигнорирую",
        ],
        correctAnswer: "Попробую остановить вора",
      },
      {
        question:
          "Вы находитесь в лесу и видите раненое животное. Что вы сделаете?",
        options: [
          "Попробую помочь животному",
          "Оставлю его в покое",
          "Позову кого-то на помощь",
        ],
        correctAnswer: "Попробую помочь животному",
      },
      {
        question:
          "Вы случайно узнаете, что ваш друг тяжело болен. Как вы поступите?",
        options: [
          "Поддержу его и помогу чем смогу",
          "Попробую держаться на расстоянии",
          "Проигнорирую",
        ],
        correctAnswer: "Поддержу его и помогу чем смогу",
      },
    ];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  trigger() {
    document.body.style.backgroundColor = "red";

    const $gameContainer = document.createElement("div");
    $gameContainer.classList.add("game-container");
    $gameContainer.style.height = "500px";
    $gameContainer.style.width = "500px";
    $gameContainer.style.backgroundColor = "black";
    $gameContainer.style.color = "white";
    $gameContainer.style.display = "flex";
    $gameContainer.style.flexDirection = "column";
    $gameContainer.style.justifyContent = "center";
    $gameContainer.style.alignItems = "center";
    $gameContainer.style.padding = "20px";
    $gameContainer.style.boxSizing = "border-box";
    $gameContainer.style.fontSize = "18px";
    $gameContainer.style.textAlign = "center";

    document.body.appendChild($gameContainer);

    this.showQuestion($gameContainer);
  }

  showQuestion(container) {
    container.innerHTML = "";

    if (this.currentQuestionIndex < this.questions.length) {
      const currentQuestion = this.questions[this.currentQuestionIndex];

      const $question = document.createElement("div");
      $question.innerText = currentQuestion.question;
      container.appendChild($question);

      currentQuestion.options.forEach((option, index) => {
        const $button = document.createElement("button");
        $button.innerText = option;
        $button.style.marginTop = "10px";
        $button.style.padding = "10px";
        $button.style.fontSize = "16px";
        $button.style.cursor = "pointer";
        $button.style.border = "none";
        $button.style.borderRadius = "5px";
        $button.style.backgroundColor = "#555";
        $button.style.color = "white";

        $button.addEventListener("click", () => {
          if (option === currentQuestion.correctAnswer) {
            this.score++;
          }
          this.currentQuestionIndex++;
          this.showQuestion(container);
        });

        container.appendChild($button);
      });
    } else {
      this.showResult(container);
    }
  }

  showResult(container) {
    container.innerHTML = "";

    const $result = document.createElement("div");
    $result.innerText = `Вы - ${this.getResult()}`;
    container.appendChild($result);

    const $exitButton = document.createElement("button");
    $exitButton.innerText = "Завершить игру";
    $exitButton.style.marginTop = "20px";
    $exitButton.style.padding = "10px";
    $exitButton.style.fontSize = "16px";
    $exitButton.style.cursor = "pointer";
    $exitButton.style.border = "none";
    $exitButton.style.borderRadius = "5px";
    $exitButton.style.backgroundColor = "#f00";
    $exitButton.style.color = "white";

    $exitButton.addEventListener("click", () => {
      this.currentQuestionIndex = 0;
      this.score = 0;
      container.remove();
      document.body.style.backgroundColor = "";
    });

    container.appendChild($exitButton);
  }

  getResult() {
    if (this.score >= 7) {
      return "человек, хорошего вам дня!";
    } else {
      return "репликант. \n Вы не будете казнены, вы будете отправленны в ОТСТАВКУ!";
    }
  }
}
