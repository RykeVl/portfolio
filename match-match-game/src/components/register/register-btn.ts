import BaseComponent from "../base-component";
import "./register-btn.scss";

export default class RegisterBtn extends BaseComponent {
  constructor(private readonly appendElement: HTMLElement) {
    super("button", ["button", "show"], "registerBtn");
    this.element.innerText = "register new player";
    this.element.onclick = () => this.openModalWindow();
    this.appendElement.appendChild(this.element);
  }

  openModalWindow() {
    if (this.element) {
      const modal = document.getElementById("modal-background");
      modal?.classList.remove("closed");
    }
  }
}
