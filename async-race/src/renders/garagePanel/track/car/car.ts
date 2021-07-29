import _ from '../../../../shared/helpers';
import './car.scss';
import { CarType } from '../../../../types/carType';
import api from '../../../../api';
import getCarSvg from '../../../../shared/carSvg';

const CAR_WIDTH = 150;
const MS_IN_SECONDS = 1000;

const getDistance = (element: HTMLElement) => {
  const trackWidth = element.parentElement!.offsetWidth;
  return trackWidth - CAR_WIDTH;
};

const drawCar = (car: CarType) => {
  const carWrapper = _.createDOM('div', ['car-wrapper']);
  const carImg = <SVGElement>getCarSvg();
  carImg.classList.add('car-image', `car-image-${car.id}`);
  carImg.children[0].setAttribute('fill', car.color);
  carWrapper.dataset.id = car.id.toString();

  carWrapper.appendChild(carImg);
  return carWrapper;
};

const addMoveAnimation = async (e: Event) => {
  const carElement = <HTMLElement>e.currentTarget;
  const moveDistance = getDistance(carElement);

  const carID = Number(carElement.dataset.id);
  const engineProps = await api.engine.startEngine(carID);
  const moveTime = (engineProps.distance / engineProps.velocity / MS_IN_SECONDS).toFixed(2);

  carElement.style.transition = `linear ${moveTime}s`;
  carElement.style.left = `${moveDistance}px`;

  api.engine.drive(carID)
    .then(() => {
    })
    .catch(() => {
      carElement.style.transition = '0';
      carElement.style.left = `${carElement.offsetLeft}px`;
    });
};

export default { drawCar, addMoveAnimation };
