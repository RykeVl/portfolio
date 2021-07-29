import refreshWinners from '../../../../shared/refreshWinners';

const addTimeClick = (cell: HTMLTableCellElement) => {
  cell.addEventListener('click', () => {
    const winnersPanel = <HTMLElement>document.querySelector('.winners-panel');
    if (winnersPanel.dataset.sort !== 'time') {
      winnersPanel.dataset.sort = 'time';
      winnersPanel.dataset.order = 'ASC';
    } else if (winnersPanel.dataset.order === 'DESC') {
      winnersPanel.dataset.order = 'ASC';
    } else {
      winnersPanel.dataset.order = 'DESC';
    }

    refreshWinners();
  });
};

export default addTimeClick;
