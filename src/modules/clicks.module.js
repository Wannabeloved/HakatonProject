import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let counter = -1;

    document.addEventListener("click", increment);

    function increment() {
      counter += 1;
    }

    setTimeout(() => {
      document.removeEventListener("click", increment);
      alert(`Вы кликнули ${counter} раз(а)!`);
    }, 3000);
  }
}
