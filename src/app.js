import "./styles.css";
import { ContextMenu } from "./contextmenu";

let menu = new ContextMenu("#menu"); // сюда будем передавать в качестве параметров инстансы наших модулей

window.addEventListener("contextmenu", event => {
  event.preventDefault();
  if (event.target.offsetParent !== menu.el) {
    menu.open({ x: event.x, y: event.y });
  }
});
