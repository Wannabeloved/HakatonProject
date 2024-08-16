import "./styles.css";
import { ContextMenu } from "./contextmenu";

console.log("Hello World!");

let menu = new ContextMenu("#menu");

const cm = document.querySelector(".custom-cm");

window.addEventListener("contextmenu", e => {
  e.preventDefault();

  menu.open();
});
