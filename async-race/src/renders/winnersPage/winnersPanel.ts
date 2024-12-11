import api from '../../api';
import _ from '../../shared/helpers';
import setWinnersPageButtonsState from '../winnersPageButtons/winnersPageButtonsState';
import './winnersPanel.scss';
import addWinnersRefresh from './winnersTable/EventListeners/refreshWinners';
import renderWinnersTable from './winnersTable/winnersTable';

const renderWinnersCount = (winnerCounter: string) => {
  const count = _.createDOM('h2', ['h2', 'winners-count']);
  count.innerText = `Winners (${winnerCounter})`;

  return count;
};

const renderTablePage = (page: number) => {
  const pageNumber = _.createDOM('h3', ['h3', 'page-number']);
  pageNumber.innerText = `Page #${page}`;

  return pageNumber;
};

const renderWinnersPanel = async (page = 1, sort?: string, order?: string) => {
  const winners = await api.winners.getWinners(page, sort, order);

  const panel = _.createDOM('div', ['winners-panel']);
  panel.dataset.page = page ? page.toString() : '';
  panel.dataset.sort = sort || '';
  panel.dataset.order = order || '';
  const winnersCount = renderWinnersCount(winners.count || '0');
  const tablePage = renderTablePage(page);
  const table = renderWinnersTable(winners.items, page);

  addWinnersRefresh(panel, renderWinnersPanel);
  setWinnersPageButtonsState(Number(panel.dataset.page), Number(winners.count));

  _.appendChildren(panel, [winnersCount, tablePage, table]);

  return panel;
};

export default renderWinnersPanel;
