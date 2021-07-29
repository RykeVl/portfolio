const addWinnersRefresh = (table: HTMLElement, render: Function) => {
  table.addEventListener('refresh', async () => {
    const oldPanel = table;
    const { page } = oldPanel.dataset || '';
    const { sort } = oldPanel.dataset || '';
    const { order } = oldPanel.dataset || '';
    const newPanel = await render(page, sort, order);
    const layout = document.querySelector('.winners-layout');
    layout?.insertBefore(newPanel, oldPanel);
    oldPanel.remove();
  });
};

export default addWinnersRefresh;
