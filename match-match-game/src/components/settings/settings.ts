import BaseComponent from "../base-component";
import "./settings.scss";

export default class Settings extends BaseComponent {
  constructor() {
    super("div", ["settings-layout"]);
    this.element.innerHTML = `
    <div class="settings-type">
		  <h2>Game cards</h2>
		  <select name="" id="cardsType">
        <option value="1">Birds</option>
			  <option value="2">Dinosaurs</option>
			  <option value="3">Wildlife</option>
			  <option value="4">Farm</option>
		  </select>
	  </div>
	  <div class="settings-difficulty">
		  <h2>Difficulty</h2>
		  <select name="" id="gameDifficulty">
        <option value="1">4x4</option>
			  <option value="2">6x6</option>
		  </select>
	  </div>
    `;
    this.addEventListeners(this.element);
  }

  addEventListeners(el: HTMLElement) {
    if (this.element) {
      el.addEventListener("mouseup", (e) => {
        const target = e.target as HTMLElement;
        if (target.id === "cardsType") {
          const select = target as HTMLSelectElement;
          localStorage.cardsType = select.selectedIndex;
        }
        if (target.id === "gameDifficulty") {
          const select = target as HTMLSelectElement;
          localStorage.gameDifficulty = select.selectedIndex;
        }
      });
    }
  }
}
