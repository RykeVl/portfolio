import api from '../../../api';
import { CarType } from '../../../types/carType';

const enableStartButton = (id: number) => {
  const button = <HTMLButtonElement>document.querySelector(`.start-car-${id}`);
  button.removeAttribute('disabled');
};

const disableResetButton = (id: number) => {
  const button = <HTMLButtonElement>document.querySelector(`.reset-car-${id}`);
  button.setAttribute('disabled', 'true');
};

const resetCar = (id: number) => {
  const carElement = <HTMLElement>document.querySelector(`.car-image-${id}`)!.parentElement;
  carElement.removeAttribute('style');
  disableResetButton(id);
  enableStartButton(id);
};

const clearAnnouncement = () => {
  const winnerAnnouncement = <HTMLElement>document.querySelector('.winner-announcement');
  winnerAnnouncement.innerText = '';
};

const addResetClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const garagePanel = document.querySelector('.garage-panel') as HTMLElement;
    const pageNumber = Number(garagePanel.dataset.page);
    const raceButton = document.querySelector('.race-button');
    const cars = await api.garage.getCars(pageNumber);

    clearAnnouncement();
    button.setAttribute('disabled', 'true');
    raceButton?.removeAttribute('disabled');

    cars.items.forEach((car: CarType) => {
      resetCar(car.id);
    });
  });
};

export default addResetClick;
