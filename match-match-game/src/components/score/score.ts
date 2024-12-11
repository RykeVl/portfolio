import BaseComponent from "../base-component";
import "./score.scss";
import { getUsers } from "../../services/dbService";
import ScoreUser from "../score-user/score-user";
import User from "../userInterface";

export default class Score extends BaseComponent {
  h2: HTMLHeadingElement;

  constructor() {
    super("div", ["score-layout"]);
    this.h2 = document.createElement("h2");
    this.h2.innerText = "Best players";
    this.element.appendChild(this.h2);
    this.element.addEventListener("onload", () => {});
  }

  renderScore() {
    const ulExist = document.querySelector(".score-list") as HTMLUListElement;
    let ul: HTMLUListElement;
    if (ulExist === null) {
      console.log(1);
      ul = document.createElement("ul");
      ul.classList.add("score-list");
    } else {
      console.log(2);
      ulExist.innerHTML = "";
      ul = ulExist;
      ul.innerHTML = "";
    }

    function continueRender(users: Array<User>): void {
      if (users.length === 0) {
        return;
      }
      users.forEach((a) => {
        const li = new ScoreUser(ul, a);
        ul.appendChild(li.element);
      });
    }
    getUsers(continueRender);

    this.element.appendChild(ul);
  }
}
