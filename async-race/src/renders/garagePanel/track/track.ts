import { CarType } from '../../../types/carType';
import FlagRender from './flag/flag';
import CarRender from './car/car';
import _ from '../../../shared/helpers';
import './track.scss';
import addUpdateClick from './eventListeners/selectClick';
import addRemoveClick from './eventListeners/removeClick';
import addStartCarClick from './eventListeners/startCarClick';
import addResetCarClick from './eventListeners/resetCarClick';

const renderLabel = (id: number, name: string) => {
  const label = _.createDOM('h2', ['car-label', `car-label-${id}`]);
  label.innerText = `${name}`;

  return label;
};

const renderCarControlPanel = (id: string) => {
  const carControlPanel = _.createDOM('div', ['car-control-panel']);
  const startButton = <HTMLButtonElement>_.createDOM('button', ['car-control-button', 'car-start-button', 'button', `start-car-${id}`]);
  addStartCarClick(startButton);
  const resetButton = <HTMLButtonElement>_.createDOM('button', ['car-control-button', 'car-reset-button', 'button', `reset-car-${id}`], { disabled: 'true' });
  addResetCarClick(resetButton);
  _.appendChildren(carControlPanel, [startButton, resetButton]);
  startButton.dataset.id = id;
  resetButton.dataset.id = id;

  return carControlPanel;
};

const renderCarEditPanel = (id: string) => {
  const carEditPanel = _.createDOM('div', ['car-edit-panel']);
  const selectButton = <HTMLButtonElement>_.createDOM('button', ['car-edit-button', 'car-select-button', 'button']);
  selectButton.innerText = 'select';
  addUpdateClick(selectButton);

  const removeButton = <HTMLButtonElement>_.createDOM('button', ['car-edit-button', 'car-remove-button', 'button']);
  addRemoveClick(removeButton);
  _.appendChildren(carEditPanel, [selectButton, removeButton]);
  removeButton.innerText = 'remove';

  selectButton.dataset.id = id;
  removeButton.dataset.id = id;

  return carEditPanel;
};

const renderTrack = (car: CarType) => {
  const trackBlock = <HTMLDivElement>_.createDOM('div', ['track', `track-${car.id}`]);
  trackBlock.dataset.id = car.id.toString();
  const label = renderLabel(car.id, car.name);
  const carEdit = renderCarEditPanel(car.id.toString());
  const controlPanel = renderCarControlPanel(car.id.toString());
  const carSvg = CarRender.drawCar(car);
  const flagImg = FlagRender.drawFlag();

  _.appendChildren(trackBlock, [label, carEdit, controlPanel, carSvg, flagImg]);
  return trackBlock;
};

export default renderTrack;
