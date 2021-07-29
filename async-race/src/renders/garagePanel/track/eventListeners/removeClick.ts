import api from '../../../../api';
import refreshGarage from '../../../../shared/refreshGarage';
import refreshWinners from '../../../../shared/refreshWinners';

const addRemoveClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const id = Number(button.dataset.id);
    const winner = await api.winners.getWinner(id);

    if (winner.status === 200) {
      api.winners.deleteWinner(id).then(() => {
        refreshWinners();
      });
    }

    api.garage.deleteCar(Number(button.dataset.id))
      .then(() => {
        refreshGarage();
      });
  });
};

export default addRemoveClick;
