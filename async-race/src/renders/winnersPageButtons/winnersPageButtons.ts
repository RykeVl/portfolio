import _ from '../../shared/helpers';
import addNextPageClick from './eventListeners/nextPageClick';
import addPreviousPageClick from './eventListeners/previousPageClick';

const renderPageButton = (direction: string) => {
  const button = _.createDOM('button', ['page-button', `${direction}-winners-page-button`]);
  button.innerText = direction === 'previous' ? 'prev' : 'next';

  return button;
};

const renderWinnersPageButtons = () => {
  const winnersPageButtons = _.createDOM('div', ['winners-page-buttons', 'page-buttons']);
  const previousPage = <HTMLButtonElement>renderPageButton('previous');
  addPreviousPageClick(previousPage);

  const nextPage = <HTMLButtonElement>renderPageButton('next');
  addNextPageClick(nextPage);

  _.appendChildren(winnersPageButtons, [previousPage, nextPage]);

  return winnersPageButtons;
};

export default renderWinnersPageButtons;
