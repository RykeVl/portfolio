import refreshWinners from '../../../shared/refreshWinners';

const addPreviousPageClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const winnersPanel = document.querySelector('.winners-panel')! as HTMLElement;
    winnersPanel.dataset.page = (Number(winnersPanel.dataset.page) - 1).toString();
    refreshWinners();
  });
};

export default addPreviousPageClick;
