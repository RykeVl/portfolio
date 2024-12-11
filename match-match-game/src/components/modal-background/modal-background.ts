import BaseComponent from "../base-component";
import Auth from "./auth/auth";
import "./modal-background.scss";

export default class ModalBackground extends BaseComponent {
  auth: Auth;

  constructor(private readonly rootElement: HTMLElement) {
    super("div", ["modal-background", "closed"], "modal-background");
    this.auth = new Auth(this.element);
    this.rootElement.appendChild(this.element);
    this.overlayClick();
  }

  private overlayClick() {
    const background = document.getElementById("modal-background")!;
    if (background === null) {
      setTimeout(() => {
        this.overlayClick();
      }, 1000);
    } else {
      background.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.className === "modal-background") {
          background.classList.add("closed");
        }
      });
    }
  }
}
