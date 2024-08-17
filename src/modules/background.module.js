import { Module } from "../core/module";
import { random } from "../utils"; // Подключение функции random

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    // Генерация случайных значений для RGB
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);

    // Создание строки цвета в формате RGB
    const color = `rgb(${r}, ${g}, ${b})`;

    // Изменение цвета фона страницы
    document.body.style.backgroundColor = color;

    // Вывод в консоль для проверки
    console.log(`Цвет фона изменен на: ${color}`);
  }
}
