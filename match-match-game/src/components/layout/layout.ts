import About from "../about/about";
import BaseComponent from "../base-component";
import Score from "../score/score";
import Settings from "../settings/settings";
import "./layout.scss";
import router from "../../services/router";
import { startDB } from "../../services/dbService";
import Game from "../game/game";

export default class Layout extends BaseComponent {
  about: About;

  score: Score;

  settings: Settings;

  game: Game;

  // users: Array<User>;

  constructor(private readonly rootElement: HTMLElement) {
    super("div", ["layout"]);
    this.about = new About();
    this.score = new Score();
    this.settings = new Settings();
    this.game = new Game();
    this.rootElement.appendChild(this.element);
    this.renderAbout();
    router(this.element, this.about, this.score, this.settings, this.game);
    startDB();
    // this.renderScore();
    // this.users = [];
  }

  renderAbout() {
    this.element.appendChild(this.about.element); //! start page
  }

  renderSettings() {
    this.element.appendChild(this.settings.element);
  }

  // getUserAwait() {
  //   this.users = getUsers();
  //   return this.users;
  // }
}
