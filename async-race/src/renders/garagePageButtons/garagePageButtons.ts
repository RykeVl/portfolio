import _ from '../../shared/helpers';
import addNextPageClick from './eventListeners/nextPageClick';
import addPreviousPageClick from './eventListeners/previousPageClick';

const renderPageButton = (direction: string) => {
  const button = _.createDOM('button', ['page-button', `${direction}-garage-page-button`]);
  button.innerText = direction === 'previous' ? 'prev' : 'next';

  return button;
};

const renderGaragePageButtons = () => {
  const garagePageButtons = _.createDOM('div', ['garage-page-buttons', 'page-buttons']);
  const previousPage = <HTMLButtonElement>renderPageButton('previous');
  addPreviousPageClick(previousPage);

  const nextPage = <HTMLButtonElement>renderPageButton('next');
  addNextPageClick(nextPage);

  _.appendChildren(garagePageButtons, [previousPage, nextPage]);

  return garagePageButtons;
};

export default renderGaragePageButtons;
