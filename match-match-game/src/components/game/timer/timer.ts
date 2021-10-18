import BaseComponent from "../../base-component";
import "./timer.scss";

export default class Timer extends BaseComponent {
  constructor(private readonly appendElement: HTMLElement) {
    super("div", ["game-timer"], "gameTimer");
    this.element.innerText = "00:15";
  }
}
