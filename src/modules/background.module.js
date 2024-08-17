import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);

    const color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = color;

    console.log(`Цвет фона изменен на: ${color}`);
  }
}
