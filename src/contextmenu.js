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

  close() {
    throw new Error(`"close" method should be implemented in Menu"`);
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`);
  }
}
