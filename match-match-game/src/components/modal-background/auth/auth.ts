import BaseComponent from "../../base-component";
import "./auth.scss";

export default class ModalBackground extends BaseComponent {
  constructor(private readonly rootElement: HTMLElement) {
    super("div", ["auth"]);
    this.element.innerHTML = `
    <form id="regForm" action="">
		<input id="name" class="reg-form-input" type="text" required placeholder="Name">
		<span id="name-error" class="error hidden">Error</span>
		<input id="surname" class="reg-form-input" type="text" required placeholder="Surname">
		<span id="surname-error" class="error hidden">Error</span>
		<input id="email" class="reg-form-input" type="email" required placeholder="Email">
		<div class="buttons">
			<button id="submit" type="button">Submit</button>
			<button id="cancel" type="reset">Cancel</button>
		</div>
	  </form>`;
    this.addInputEventListeners("name");
    this.addInputEventListeners("surname");
    this.addSubmitEventListener();
    this.addCancelEventListener();
    this.rootElement.appendChild(this.element);
  }

  addInputEventListeners(id: string) {
    const inputID = document.getElementById(id)!;
    if (inputID === null) {
      setTimeout(() => {
        this.addInputEventListeners(id);
      }, 1000);
    } else {
      const errorElement: HTMLElement = document.getElementById(`${id}-error`)!;
      inputID.addEventListener("input", (e) => {
        const input = e.target as HTMLInputElement;
        if (input.value.length < 3) {
          inputID.classList.remove("correct-input");
          errorElement.classList.remove("hidden");
          errorElement.innerText = "Minimum length is 3 characters.";
        } else if (input.value.length > 30) {
          inputID.classList.remove("correct-input");
          errorElement.classList.remove("hidden");
          errorElement.innerText = "Maximum length is 30 characters.";
        } else if (input.value.match(/^\d+$/)) {
          inputID.classList.remove("correct-input");
          errorElement.classList.remove("hidden");
          errorElement.innerText = "Name cannot be from numbers only.";
        } else if (input.value.search(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/) !== -1) {
          inputID.classList.remove("correct-input");
          errorElement.classList.remove("hidden");
          errorElement.innerText = "No special characters.";
        } else {
          errorElement.classList.add("hidden");
          inputID.classList.add("correct-input");
        }
      });
    }
  }

  addSubmitEventListener() {
    const inputID = document.getElementById("submit")!;
    if (inputID === null) {
      setTimeout(() => {
        this.addSubmitEventListener();
      }, 1000);
    } else {
      inputID.addEventListener("click", () => {
        const name = document.getElementById("name") as HTMLInputElement;
        const surname = document.getElementById("surname") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const background = document.getElementById("modal-background");
        const emailFormat =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9])\])/;
        if (
          email.value.match(emailFormat) !== null &&
          name.classList.contains("correct-input") &&
          surname.classList.contains("correct-input")
        ) {
          localStorage.setItem("name", name.value);
          localStorage.setItem("surname", surname.value);
          localStorage.setItem("email", email.value);
          background?.dispatchEvent(new Event("click"));
          const start = document.getElementById("startBtn");
          start?.classList.add("show");
          const register = document.getElementById("registerBtn");
          register?.classList.remove("show");
        }
      });
    }
  }

  addCancelEventListener() {
    const inputID = document.getElementById("cancel")!;
    if (inputID === null) {
      setTimeout(() => {
        this.addCancelEventListener();
      }, 1000);
    } else {
      inputID.addEventListener("click", () => {
        const errors = document.querySelectorAll(".error");
        errors.forEach((a) => a.classList.add("hidden"));
        const inputs = document.querySelectorAll(".reg-form-input");
        inputs.forEach((a) => a.classList.remove("correct-input"));
      });
    }
  }
}
