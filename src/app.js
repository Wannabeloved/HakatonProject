import "./styles.css";
import { ContextMenu } from "./contextmenu";
import { CountdownTimer } from "./modules/countdownTimer.module";

console.log("Hello World!");

let menu = new ContextMenu("#menu");

const cm = document.querySelector(".custom-cm");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  menu.open();

  menu.add({
    type: "countdown",
    text: "Запустить таймер отсчета",
    module: new CountdownTimer("countdown", "Запустить таймер отсчета"),
  });
});
