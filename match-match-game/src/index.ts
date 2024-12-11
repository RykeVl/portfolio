import "./styles/reset.css";
import "./styles/styles.scss";
import App from "./app";

window.onload = () => {
  const app: App = new App(document.body);

  if (!app) throw Error("no app");
};
