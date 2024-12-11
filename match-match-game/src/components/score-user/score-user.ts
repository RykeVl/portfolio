import BaseComponent from "../base-component";
import User from "../userInterface";

export default class ScoreUser extends BaseComponent {
  constructor(private readonly rootElement: HTMLElement, user: User) {
    super("li");
    this.element.innerHTML = `
      <div class="user-data">
        <span class="user-name">
          ${user.name} ${user.surname}
        </span>

				<span class="user-email">
          ${user.email}
        </span>
      </div>

      <div class="user-score">
        <span class="score-span">
          Score: 
        </span>

        <span class="score-points">
          ${user.score}
        </span>
      </div>
    `;
    this.rootElement.appendChild(this.element);
  }
}
