import { Menu } from "./core/menu";

import { ClicksModule } from "./modules/clicks.module";
import { CountdownTimer } from "./modules/countdownTimer.module";
import { BackgroundModule } from "./modules/background.module";
import { AudioModule } from "./modules/audio.module";

const modules = [
  {
    type: "clicks-module",
    text: "Считать клики (за 3 секунды)",
    module: ClicksModule,
  },
  {
    type: "timer-module",
    text: "Таймер",
    module: CountdownTimer,
  },
  {
    type: "background-module",
    text: "Случайный фон",
    module: BackgroundModule,
  },
  {
    type: "audio-module",
    text: "Воспроизвести аудио",
    module: AudioModule,
  },
];

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.selector = selector;

    modules.forEach(item => {
      this.add(item);
    });

    this.el.addEventListener("click", event => {
      this[event.target.dataset.type].trigger();
    });
  }

  open(coordinates) {
    let width = this.el.offsetWidth;
    this.el.classList.remove("open");

    let { x: currentX, y: currentY } = coordinates;
    const maximalX = window.innerWidth - width; // Так как я всё-равно не могу отображать меню поверх чего-то вроде девтулзов, то отслеживаем не ширину окна а ширину документа

    this.el.offsetWidth;

    if (currentX > maximalX) {
      currentX = maximalX;
    }
    if (currentY < window.innerHeight / 2) {
      this.el.style.top = `${currentY}px`;
      this.el.style.bottom = "auto";
    } else {
      this.el.style.bottom = `${window.innerHeight - coordinates.y}px`;
      this.el.style.top = "auto";
    }

    this.el.style.left = `${currentX}px`;
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(item) {
    this[item.type] = new item.module(item.type, item.text);
    this.el.insertAdjacentHTML("beforeend", this[item.type].toHTML());
  }
}
