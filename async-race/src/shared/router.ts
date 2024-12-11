import pagesRender from '../renders/pagesRender';

export default function router(container: HTMLDivElement) {
  const layout = container;

  const routing = [
    {
      name: 'garage',
      render: () => {
        pagesRender.showGarage();
      },
    },
    {
      name: 'winners',
      render: () => {
        pagesRender.showWinners();
      },
    },
  ];

  const defaultRoute = {
    name: 'default',
    render: () => {
      pagesRender.startRender(layout);
    },
  };

  window.onpopstate = () => {
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = routing.find((p) => p.name === currentRouteName);

    (currentRoute || defaultRoute).render();
  };

  window.onload = () => defaultRoute.render();
}
