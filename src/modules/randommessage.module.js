import { Module } from "../core/module";
const randomSentence = require("random-sentence");

export class RandomMessage extends Module {
  #timer = 0;

  constructor(type, text) {
    super(type, text);

    this.block = document.createElement("div");
    this.paragraph = document.createElement("p");
  }

  createMessage(message) {
    document.body.append(this.block);

    this.block.style.cssText = `
		position: fixed;
		top: 40px;
		left: 40px;
		padding: 10px;
		font-size: 16px;
		background-color: rgba(0, 0, 0, 0.7);
		color: #fff;
		border-radius: 5px`;

    this.paragraph.textContent = `${message}`;
    this.block.appendChild(this.paragraph);
  }

  removeBlock() {
    this.block.remove();
  }

  get timer() {
    return this.#timer;
  }

  set timer(time) {
    this.#timer = time;
  }

  trigger() {
    const removeTime = prompt("Через сколько секунд удалить сообщение?", "");

    if (isNaN(+removeTime) || +removeTime < 1) {
      alert("Введите число больше нуля и повторите попытку.");
    } else if (this.timer === 1) {
      alert("Подождите, предыдущее сообщение удаляется...");
    } else {
      const milliseconds = `${removeTime}000`;

      setTimeout(() => {
        this.removeBlock();
        this.timer = 0;
      }, +milliseconds);

      this.timer = 1;
      this.createMessage(randomSentence());
    }
  }
}
