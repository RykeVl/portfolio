import BaseComponent from "./components/base-component";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import ModalWindow from "./components/modal-background/modal-background";

export default class App extends BaseComponent {
  header: Header;

  layout: Layout;

  modalWindow: ModalWindow;

  constructor(private readonly rootElement: HTMLElement) {
    super("div", ["root"], "root");
    this.header = new Header(this.element);
    this.layout = new Layout(this.element);
    this.modalWindow = new ModalWindow(this.element);
    this.rootElement.appendChild(this.element);
    localStorage.name = "";
    localStorage.surname = "";
    localStorage.email = "";
    localStorage.score = "0";
    localStorage.cardsType = "0";
    localStorage.gameDifficulty = "0";
  }
}
