import BaseComponent from "../base-component";
import Nav from "../header-nav/header-nav";
import RegisterBtn from "../register/register-btn";
import StartButton from "../start-button/start-button";
import "./header.scss";

const logoSrc = require("../../assets/logo.svg");

export default class Header extends BaseComponent {
  logo: HTMLImageElement = document.createElement("img");

  nav: Nav;

  regBtn: RegisterBtn;

  startBtn: StartButton;

  constructor(private readonly appendElement: HTMLElement) {
    super("header");
    this.logo.src = logoSrc;
    this.logo.className = "logo";
    this.element.appendChild(this.logo);
    this.nav = new Nav(this.element);
    this.regBtn = new RegisterBtn(this.element);
    this.startBtn = new StartButton(this.element);
    this.appendElement.appendChild(this.element);
  }
}
