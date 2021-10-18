import BaseComponent from "../base-component";
import "./about.scss";

const page = require("../../assets/about.png");

export default class About extends BaseComponent {
  img: HTMLImageElement;

  constructor() {
    super("div", ["about-layout"]);
    this.img = document.createElement("img");
    this.img.src = page;
    this.element.appendChild(this.img);
  }
}
