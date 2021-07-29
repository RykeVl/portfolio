import refreshGarage from '../../../shared/refreshGarage';

const addPreviousPageClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const garagePanel = document.querySelector('.garage-panel')! as HTMLElement;
    garagePanel.dataset.page = (Number(garagePanel.dataset.page) - 1).toString();
    refreshGarage();
  });
};

export default addPreviousPageClick;
