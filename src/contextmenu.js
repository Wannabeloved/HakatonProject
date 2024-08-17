import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector, modules) {
    super(selector);
    this.selector = selector;
  }

  open() {
    console.log(this.selector);
    this.el.classList.add("open");
    console.log(this.el);
  }

  // close() {
  //   throw new Error(`"close" method should be implemented in Menu"`);
  // }

  add(item) {
    let menuItem = document.createElement("li");
    menuItem.textContent = item.module.text;
    menuItem.classList.add("menu-item");
    menuItem.addEventListener("click", () => {
      item.module.trigger();
    });
    this.el.appendChild(menuItem);
  }
}
