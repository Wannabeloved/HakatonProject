import "./styles.css";
import { ContextMenu } from "./contextmenu";
import { CountdownTimer } from "./modules/countdownTimer.module";
import { BackgroundModule } from "./modules/background.module";

console.log("Hello World!");

let menu = new ContextMenu("#menu");

const cm = document.querySelector(".custom-cm");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  menu.open();

  menu.add({
    module: new CountdownTimer("countdown", "Запустить таймер отсчета"),
  });

  menu.add({
    module: new BackgroundModule("background", "Сменить цвет фона"),
  });
});
// test
