import mouseFreeze from './mouseFreeze';

let carsPerPage = 7;
let carFinished = 0;

const setCarsNumber = (carsNumber: number) => {
  carsPerPage = carsNumber;
};

const checkRaceStatus = () => {
  if (carFinished === carsPerPage) {
    const resetButton = document.querySelector('.reset-button');
    mouseFreeze.unfreezeMouse();
    resetButton?.removeAttribute('disabled');
    carFinished = 0;
  }
};

const updateRaceStatus = () => {
  carFinished += 1;
  checkRaceStatus();
};

const resetRaceStatus = () => {
  carFinished = 0;
};

export default {
  setCarsNumber, checkRaceStatus, updateRaceStatus, resetRaceStatus,
};
