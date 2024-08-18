import { Module } from "../core/module";

export class CountdownTimer extends Module {
  constructor(type, text) {
    super(type, text);
    this.isActive = false;
  }

  setTimer(timeInSeconds) {
    this.isActive = true;

    //  Объясню почему я так сделал:
    // Дело в том, что если во время таймера запустить, к примеру, счётчик кликов, то когда счётчик кликов закончится и вылезет алерт - **новый** интервал не вызовется пока пользователь не примет модалку (а таймаут продолжит тикать даже при открытой модалке)
    // + по логике счётчиков не может быть одновременно больше одного, а тогда лучше привязать счётчик к самому инстансу этого класса, а не к его методу trigger()
    setTimeout(() => {
      clearInterval(interval);
      alert("Время истекло!");
      document.body.removeChild(this.timerBlock);
      this.isActive = false;
    }, timeInSeconds * 1000 + 16);

    this.timerBlock.textContent = `Осталось: ${timeInSeconds--} сек.`;
    const interval = setInterval(() => {
      this.timerBlock.textContent = `Осталось: ${timeInSeconds--} сек.`;
    }, 1000);
  }

  trigger() {
    if (this.isActive) {
      console.log(`Не шали`);
      return;
    }

    const userTime = prompt("Введите время в секундах для таймера:");
    const timeInSeconds = parseInt(userTime);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert("Пожалуйста, введите корректное количество секунд.");
      return;
    }

    this.timerBlock = document.createElement("div");
    this.timerBlock.style.position = "fixed";
    this.timerBlock.style.bottom = "40px";
    this.timerBlock.style.right = "40px";
    this.timerBlock.style.padding = "10px";
    this.timerBlock.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    this.timerBlock.style.color = "#fff";
    this.timerBlock.style.fontSize = "16px";
    this.timerBlock.style.borderRadius = "5px";
    this.timerBlock.style.zIndex = "1000";
    document.body.appendChild(this.timerBlock);

    this.setTimer(timeInSeconds);
  }
}
