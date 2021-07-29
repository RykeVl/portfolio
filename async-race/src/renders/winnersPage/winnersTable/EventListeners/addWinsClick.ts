import refreshWinners from '../../../../shared/refreshWinners';

const addWinsClick = (cell: HTMLTableCellElement) => {
  cell.addEventListener('click', () => {
    const winnersPanel = <HTMLElement>document.querySelector('.winners-panel');
    if (winnersPanel.dataset.sort !== 'wins') {
      winnersPanel.dataset.sort = 'wins';
      winnersPanel.dataset.order = 'DESC';
    } else if (winnersPanel.dataset.order === 'DESC') {
      winnersPanel.dataset.order = 'ASC';
    } else {
      winnersPanel.dataset.order = 'DESC';
    }

    refreshWinners();
  });
};

export default addWinsClick;
