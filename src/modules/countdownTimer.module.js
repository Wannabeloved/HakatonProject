import { Module } from "../core/module";

export class CountdownTimer extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const userTime = prompt("Введите время в секундах для таймера:");
    const timeInSeconds = parseInt(userTime);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert("Пожалуйста, введите корректное количество секунд.");
      return;
    }

    const timerBlock = document.createElement("div");
    timerBlock.style.position = "fixed";
    timerBlock.style.bottom = "20px";
    timerBlock.style.right = "20px";
    timerBlock.style.padding = "10px";
    timerBlock.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    timerBlock.style.color = "#fff";
    timerBlock.style.fontSize = "16px";
    timerBlock.style.borderRadius = "5px";
    timerBlock.style.zIndex = "1000";
    document.body.appendChild(timerBlock);

    let remainingTime = timeInSeconds;

    const updateTimer = () => {
      if (remainingTime > 0) {
        timerBlock.textContent = `Осталось: ${remainingTime} сек.`;
        remainingTime -= 1;
      } else {
        alert("Время истекло!");
        document.body.removeChild(timerBlock);
        clearInterval(timerInterval);
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  }
}
