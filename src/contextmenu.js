import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector, modules) {
    super(selector);
    this.selector = selector;
  }

  open(coordinates) {
    let width = this.el.offsetWidth;
    this.el.classList.remove("open");
    this.el.style.opacity = "0";

    let { x: currentX, y: currentY } = coordinates;
    const maximalX = window.innerWidth - width; // Так как я всё-равно не могу отображать меню поверх чего-то вроде девтулзов, то отслеживаем не ширину окна а ширину документа

    console.log(this.el.offsetWidth);

    if (currentX > maximalX) {
      currentX = maximalX;
    }
    if (currentY < window.innerHeight / 2) {
      this.el.style.top = `${currentY}px`;
      this.el.style.bottom = "auto";
      console.log("clg");
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
    let menuItem = document.createElement("li");
    menuItem.textContent = item.text;
    menuItem.classList.add("menu-item");
    menuItem.addEventListener("click", () => {
      item.module.trigger();
    });
    this.el.appendChild(menuItem);
  }
}
