import _ from '../shared/helpers';
import renderControlPanel from './controlPanel/controlPanel';
import renderGaragePanel from './garagePanel/garagePanel';
import renderWinnersTable from './winnersPage/winnersPanel';
import renderGaragePageButtons from './garagePageButtons/garagePageButtons';
import renderWinnersPageButtons from './winnersPageButtons/winnersPageButtons';

const renderGarage = async (appendix: HTMLDivElement) => {
  const garagePage = _.createDOM('div', ['garage-layout', 'current-page']);
  const controlPanel = renderControlPanel();
  const garagePanel = await renderGaragePanel(1);
  const pageButtons = renderGaragePageButtons();

  _.appendChildren(garagePage, [controlPanel, garagePanel, pageButtons]);

  appendix.appendChild(garagePage);
};

const renderWinners = async (appendix: HTMLDivElement) => {
  const winnersPage = _.createDOM('div', ['winners-layout']);
  const winnersTable = await renderWinnersTable(1);
  const pageButtons = renderWinnersPageButtons();

  _.appendChildren(winnersPage, [winnersTable, pageButtons]);

  appendix.appendChild(winnersPage);
};

const hideGarage = () => {
  const garage = document.querySelector('.garage-layout');
  garage?.classList.remove('current-page');
};

const hideWinners = () => {
  const winners = document.querySelector('.winners-layout');
  winners?.classList.remove('current-page');
};

const showGarage = () => {
  const garage = document.querySelector('.garage-layout');
  if (garage?.classList.contains('current-page')) {
    return;
  }
  garage?.classList.add('current-page');
  hideWinners();
};

const showWinners = () => {
  const winners = document.querySelector('.winners-layout');
  if (winners?.classList.contains('current-page')) {
    return;
  }
  winners?.classList.add('current-page');
  hideGarage();
};

const startRender = (layout: HTMLDivElement) => {
  renderGarage(layout);
  renderWinners(layout);
};

export default {
  startRender, showGarage, showWinners,
};
