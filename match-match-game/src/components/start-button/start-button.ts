import BaseComponent from "../base-component";
import "./start-button.scss";

export default class StartButton extends BaseComponent {
  link: HTMLLinkElement;

  constructor(private readonly appendElement: HTMLElement) {
    super("a", ["button"], "startBtn");
    this.link = this.element as HTMLLinkElement;
    this.link.href = "#game";
    this.element.innerText = "start game";
    // this.element.onclick = () => this.startGame();
    this.appendElement.appendChild(this.element);
  }

  // startGame() {
  //   if (this.element) {
  //     const start = document.getElementById("startBtn");
  //     modal?.classList.remove("closed");
  //   }
  // }
}
