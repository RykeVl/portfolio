import About from "../components/about/about";
import Game from "../components/game/game";
import Score from "../components/score/score";
import Settings from "../components/settings/settings";

export default function router(
  container: HTMLElement,
  about: About,
  score: Score,
  settings: Settings,
  game: Game
) {
  const layout = container;

  const routing = [
    {
      name: "about",
      component: () => {
        layout.innerHTML = "";
        layout.appendChild(about.element); //! start page
      },
    },
    {
      name: "score",
      component: () => {
        layout.innerHTML = "";
        layout.appendChild(score.element);
        score.renderScore();
      },
    },
    {
      name: "settings",
      component: () => {
        layout.innerHTML = "";
        layout.appendChild(settings.element);
      },
    },
    {
      name: "game",
      component: () => {
        layout.innerHTML = "";
        layout.appendChild(game.element);
      },
    },
  ];

  const defaultRoute = {
    name: "default",
    component: () => {
      layout.appendChild(about.element);
    },
  };

  window.onpopstate = () => {
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = routing.find((p) => p.name === currentRouteName);

    (currentRoute || defaultRoute).component();
  };
}
