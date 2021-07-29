import api from '../api';
import { WinnerType } from '../types/winnerType';
import race from './raceStatus';
import refreshWinners from './refreshWinners';

const CAR_START_POSITION = 150;
const MS_IN_SECONDS = 1000;

const getDistance = (element: HTMLElement) => {
  const trackWidth = element.parentElement!.offsetWidth;
  return trackWidth - CAR_START_POSITION;
};

const stopCarAnimation = (carElement: HTMLElement, distance: number) => {
  const car = carElement;
  car.removeAttribute('style');
  car.style.left = `${distance}px`;
};

const activateResetButton = (id: number) => {
  const resetButton = document.querySelector(`.reset-car-${id}`);
  resetButton?.removeAttribute('disabled');
};

const handleWinner = async (id: number, time: number) => {
  const winner = await api.winners.getWinner(id);

  if (winner.status === 200) {
    const winnerData: WinnerType = await winner.json();
    if (time < winnerData.time) {
      api.winners.updateWinner(id, winnerData.wins, time);
    } else {
      api.winners.updateWinner(id, winnerData.wins + 1, winnerData.time);
    }
  } else {
    api.winners.createWinner(id, 1, time);
  }
  setTimeout(refreshWinners, 1000);
};

const startDrive = (carElement: HTMLElement, moveTime:string, id: number, raceMode: boolean) => {
  api.engine.drive(id)
    .then(() => {
      if (raceMode) {
        race.updateRaceStatus();
        const winnerAnnouncement = <HTMLElement>document.querySelector('.winner-announcement');
        if (winnerAnnouncement.innerText === '') {
          const carName = <HTMLElement>document.querySelector(`.car-label-${id}`);
          winnerAnnouncement.innerText = `${carName.innerText} finished in ${moveTime}!`;
          handleWinner(id, Number(moveTime));
        }
      }
      activateResetButton(id);
    })
    .catch(() => {
      race.updateRaceStatus();
      stopCarAnimation(carElement, carElement.offsetLeft);
      activateResetButton(id);
    });
};

const addCarAnimation = async (car:HTMLElement, id: number) => {
  const carElement = car;
  const moveDistance = getDistance(car);
  const engineProps = await api.engine.startEngine(id);
  const moveTime = (engineProps.distance / engineProps.velocity / MS_IN_SECONDS).toFixed(2);
  carElement.style.transition = `linear ${moveTime}s`;
  carElement.style.left = `${moveDistance}px`;

  return moveTime;
};

const disableStartButton = (id: number) => {
  const button = <HTMLButtonElement>document.querySelector(`.start-car-${id}`);
  button.setAttribute('disabled', 'true');
};

const startCar = async (id: number, raceMode: boolean = false) => {
  const carElement = <HTMLElement>document.querySelector(`.car-image-${id}`)!.parentElement;
  const moveTime = await addCarAnimation(carElement, id);
  disableStartButton(id);

  startDrive(carElement, moveTime, id, raceMode);
};

export default startCar;
