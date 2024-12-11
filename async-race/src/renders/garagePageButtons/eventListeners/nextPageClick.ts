import refreshGarage from '../../../shared/refreshGarage';

const addNextPageClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const garagePanel = document.querySelector('.garage-panel')! as HTMLElement;
    garagePanel.dataset.page = (Number(garagePanel.dataset.page) + 1).toString();
    refreshGarage();
  });
};

export default addNextPageClick;
