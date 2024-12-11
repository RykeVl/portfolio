const addGarageRefresh = (panel: HTMLElement, render: Function) => {
  panel.addEventListener('refresh', async () => {
    const oldPanel = panel;
    const newPanel = await render(oldPanel.dataset.page);
    const pageButtons = document.querySelector('.page-buttons');
    const layout = document.querySelector('.garage-layout');
    oldPanel.remove();
    layout?.insertBefore(newPanel, pageButtons);
  });
};

export default addGarageRefresh;
