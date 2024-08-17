import "./styles.css";
import { ContextMenu } from "./contextmenu";
import { CountdownTimer } from "./modules/countdownTimer.module";

console.log("Hello World!");

let menu = new ContextMenu("#menu"); // сюда будем передавать в качестве параметров инстансы наших модулей


window.addEventListener("contextmenu", event => {
  event.preventDefault();
  if (event.target.offsetParent !== menu.el) {
    menu.open({ x: event.x, y: event.y });
  }

});
// test
