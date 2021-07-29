import api from '../../api/index';
import _ from '../../shared/helpers';
import { CarType } from '../../types/carType';
import setGaragePageButtonsState from '../garagePageButtons/garagePageButtonsState';
import addGarageRefresh from './eventListeners/refreshgarage';
import './garagePanel.scss';
import RenderTrack from './track/track';

const renderCarCount = (count: string) => {
  const title = _.createDOM('h2', ['h2', 'garage-car-count']);
  title.innerText = `Garage (${count})`;

  return title;
};

const renderGaragePage = (number: number) => {
  const page = _.createDOM('h3', ['h3', 'garage-page-number']);
  page.innerText = `Page #${number}`;

  return page;
};

const renderCarTracks = (cars: CarType[]) => {
  const carTracksBlock = _.createDOM('div', ['car-tracks']);

  cars.forEach((car: CarType) => {
    carTracksBlock.appendChild(RenderTrack(car));
  });

  return carTracksBlock;
};

const renderWinnerAnnouncement = () => {
  const announcement = _.createDOM('h2', ['winner-announcement', 'h2']);

  return announcement;
};

const renderGaragePanel = async (page = 1) => {
  const cars = await api.garage.getCars(page);

  const panel = <HTMLDivElement>_.createDOM('div', ['garage-panel']);
  panel.dataset.page = page.toString();
  const carCount = renderCarCount(cars.count || '0');
  const garagePage = renderGaragePage(page);
  const carTracks = renderCarTracks(cars.items);
  const announcement = renderWinnerAnnouncement();

  addGarageRefresh(panel, renderGaragePanel);
  setGaragePageButtonsState(Number(panel.dataset.page), Number(cars.count));

  _.appendChildren(panel, [carCount, garagePage, carTracks, announcement]);

  return panel;
};

export default renderGaragePanel;
