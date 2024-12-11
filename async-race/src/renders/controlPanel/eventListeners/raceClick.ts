import api from '../../../api';
import startCar from '../../../shared/carDrive';
import mouseFreeze from '../../../shared/mouseFreeze';
import raceStatus from '../../../shared/raceStatus';
import { CarType } from '../../../types/carType';

const addRaceClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async () => {
    const garagePanel = document.querySelector('.garage-panel') as HTMLElement;
    const pageNumber = Number(garagePanel.dataset.page);
    const cars = await api.garage.getCars(pageNumber);
    button.setAttribute('disabled', 'true');
    mouseFreeze.freezeMouse();

    raceStatus.setCarsNumber(cars.items.length);

    cars.items.forEach(async (car: CarType) => {
      startCar(car.id, true);
    });
  });
};

export default addRaceClick;
