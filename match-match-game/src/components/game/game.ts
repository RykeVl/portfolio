/* eslint-disable class-methods-use-this */

import BaseComponent from "../base-component";
import Card from "./card/card";
import Timer from "./timer/timer";
import "./game.scss";
import { addRecord } from "../../services/dbService";

function pad2(number: number): string {
  return (number < 10 ? "0" : "") + number;
}
export default class Game extends BaseComponent {
  cardgameElement = new BaseComponent();

  previousElement: HTMLElement = document.createElement("div");

  timer: Timer;

  currentCardNumber = "0";

  wrongMatches = 0;

  correctMatches = 0;

  done = false;

  constructor() {
    super("div", ["cardgame-wrapper"]);
    this.timer = new Timer(this.cardgameElement);
    this.cardgameElement.classList.add("cardgame", "animation");
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardgameElement);
    this.addEventListeners();
    this.startGame();
  }

  generateCards(type: string, difficulty: string) {
    function shuffleArray(arr: HTMLElement[]) {
      const copyArr = arr;
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copyArr[i], copyArr[j]] = [arr[j], arr[i]];
      }

      return arr;
    }

    const cards: HTMLElement[] = [];
    const size = Number(difficulty) ? 18 : 8;

    for (let i = 1; i <= size; i += 1) {
      const card = new Card(i, 1, type);
      const card2 = new Card(i, 2, type);

      cards.push(card.element);
      cards.push(card2.element);
    }

    shuffleArray(cards);

    cards.forEach((a) => {
      this.cardgameElement.appendChild(a);
    });
  }

  addEventListeners() {
    this.cardgameElement.addEventListener("click", (e) => {
      if (this.cardgameElement.classList.contains("animation")) {
        return;
      }

      function wrong(elements: HTMLElement[]) {
        elements.forEach((a) => {
          const wrongDiv = a.previousSibling as HTMLElement;
          wrongDiv.classList.toggle("show");
        });
      }

      const target = e.target as HTMLElement;
      const targetParent = target.parentElement!;
      if (targetParent.dataset.closed !== "false") {
        return;
      }

      if (
        this.previousElement.dataset.pair === targetParent.dataset.pair &&
        this.previousElement.dataset.number === targetParent.dataset.number
      ) {
        return;
      }

      if (
        target.classList.contains("card__back") ||
        target.classList.contains("card__front")
      ) {
        target.parentElement!.classList.toggle("flipped");
      }

      if (targetParent.dataset.number === this.currentCardNumber) {
        //* if correct
        this.cardgameElement.classList.add("animation");
        this.currentCardNumber = "0";
        setTimeout(() => {
          this.correct([targetParent, this.previousElement]);
        }, 500);
        setTimeout(() => {
          this.correct([targetParent, this.previousElement]);
          this.cardgameElement.classList.remove("animation");
        }, 1200);
        this.correctMatches += 1;
        if (this.correctMatches === 8) {
          const timer = document.getElementById("gameTimer") as HTMLElement;
          const [minutes, seconds] = timer.innerText.split(":");
          this.done = true;
          const score =
            (this.correctMatches - this.wrongMatches) * 100 -
              (Number(minutes) * 60 + Number(seconds) * 10) || 0;
          localStorage.setItem("score", score.toString());
          addRecord();
        }
      } else if (this.currentCardNumber === "0") {
        //* if one pressed
        this.currentCardNumber = targetParent.dataset.number!;
        this.previousElement = targetParent;
      } else {
        //* if wrong
        this.currentCardNumber = "0";
        this.cardgameElement.classList.add("animation");
        setTimeout(() => {
          setTimeout(() => {
            wrong([targetParent, this.previousElement]);
          }, 500);
          setTimeout(() => {
            wrong([targetParent, this.previousElement]);
            this.previousElement.classList.toggle("flipped");
            targetParent.classList.toggle("flipped");
            this.cardgameElement.classList.remove("animation");
          }, 2000);
        }, 100);
        this.wrongMatches += 1;
      }
    });
  }

  private correct(elements: HTMLElement[]) {
    if (elements) {
      elements.forEach((a) => {
        const correctDiv = a.previousSibling?.previousSibling as HTMLElement;
        correctDiv.classList.toggle("show");
        const { dataset } = a;
        dataset.closed = "true";
      });
    }
  }

  startGame() {
    setTimeout(() => {
      if (document.querySelector(".cardgame") === null) {
        this.startGame();
      } else {
        switch (localStorage.getItem("gameDifficulty")) {
          case "0":
            this.cardgameElement.classList.add("four-x-four");
            break;
          case "1":
            this.cardgameElement.classList.add("six-x-six");
            break;
          default:
            this.cardgameElement.classList.add("four-x-four");
            break;
        }
        this.generateCards(
          localStorage.getItem("cardsType") || "0",
          localStorage.getItem("gameDifficulty") || "0"
        );
        const timer = document.getElementById("gameTimer");
        let seconds = 14;

        const i = setInterval(() => {
          timer!.innerText = `00:${pad2(seconds)}`;
          seconds -= 1;
        }, 1000);

        if (this.cardgameElement) {
          setTimeout(() => {
            const cards = document.querySelectorAll(".card");
            cards.forEach((a) => {
              a.classList.remove("flipped");
              this.cardgameElement.classList.remove("animation");
            });
            clearInterval(i);
            const date = new Date();
            setInterval(() => {
              if (this.done) {
                clearInterval();
              } else {
                const newDate = new Date();
                timer!.innerText = `${pad2(
                  Math.floor((newDate.getTime() - date.getTime()) / 1000 / 60)
                )}:${pad2(
                  Math.floor(((newDate.getTime() - date.getTime()) / 1000) % 60)
                )}`;
              }
            }, 1000);
          }, 15000);
        }
      }
    }, 1000);
  }
}
