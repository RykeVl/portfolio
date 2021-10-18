import BaseComponent from "../base-component";
import "./header-nav.scss";

const aboutIcon = require("../../assets/about.svg");
const scoreIcon = require("../../assets/score.svg");
const settingsIcon = require("../../assets/settings.svg");

export default class Nav extends BaseComponent {
  ul: HTMLUListElement = document.createElement("ul");

  constructor(private readonly appendElement: HTMLElement) {
    super("nav");
    this.ul.innerHTML = `
    <li id="about-game">
      <a href="#about">
			  <img src="${aboutIcon}" alt="about icon">			
				<h2>About Game</h2>
			</a>
		</li>

		<li id="best-score">
      <a href="#score">
			  <img src="${scoreIcon}" alt="score icon">
				<h2>Best Score</h2>
			</a>
		</li>

		<li id="game-settings">
      <a href="#settings">
			  <img src="${settingsIcon}" alt="settings icon">
				<h2>Game Settings</h2>
			</a>
		</li>
    `;
    this.element.appendChild(this.ul);
    this.appendElement.appendChild(this.element);
  }
}
