import BaseComponent from "../../base-component";
import "./card.scss";

export default class Card extends BaseComponent {
  constructor(cardBackground: number, pairNumber: number, type: string) {
    super("div", ["card-wrapper"]);
    this.renderCardElement(cardBackground, pairNumber, type);
  }

  renderCardElement(backgroundNumber: number, pair: number, type: string) {
    function create(tagName: string, className: string[]): HTMLElement {
      const element = document.createElement(tagName);
      element.classList.add(...className);

      return element;
    }

    let folderName: string;

    switch (type) {
      case "0":
        folderName = "birds";
        break;
      case "1":
        folderName = "dinos";
        break;
      case "2":
        folderName = "wildlife";
        break;
      case "3":
        folderName = "farm";
        break;

      default:
        folderName = "birds";
        break;
    }

    const card = create("div", ["card", "flipped"]);
    const cardFront = create("div", ["card__front"]);
    const cardBack = create("div", ["card__back"]);
    const correct = create("div", ["correct"]);
    const wrong = create("div", ["wrong"]);
    cardFront.style.backgroundImage = `url("../../../../${folderName}/pic (${backgroundNumber}).svg")`;
    card.dataset.number = backgroundNumber.toString();
    card.dataset.pair = pair.toString();
    card.dataset.closed = "false";
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    this.element.appendChild(correct);
    this.element.appendChild(wrong);
    this.element.appendChild(card);
  }
}
