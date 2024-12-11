import api from '../../../api';
import refreshGarage from '../../../shared/refreshGarage';
import refreshWinners from '../../../shared/refreshWinners';

const addUpdateClick = (form: HTMLFormElement) => {
  const name = form.children[0] as HTMLInputElement;
  const color = form.children[1] as HTMLInputElement;
  const button = form.children[2] as HTMLButtonElement;

  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (name.value.length === 0) {
      return;
    }
    api.garage.updateCar(Number(button.dataset.id!), name.value, color.value)
      .then(() => {
        refreshGarage();
        refreshWinners();
      });
  });
};

export default addUpdateClick;
