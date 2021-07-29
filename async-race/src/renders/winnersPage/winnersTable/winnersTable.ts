import api from '../../../api';
import _ from '../../../shared/helpers';
import './winnersTable.scss';
import { WinnerType } from '../../../types/winnerType';
import { CarType } from '../../../types/carType';
import getCarSvg from '../../../shared/carSvg';
import addWinnersRefresh from './EventListeners/refreshWinners';
import addWinsClick from './EventListeners/addWinsClick';
import addTimeClick from './EventListeners/addTimeClick';

const WINNERS_PER_PAGE = 10;

const renderThArray = (headers: string[]) => {
  const cells: HTMLTableCellElement[] = [];

  headers.forEach((a) => {
    const cell = <HTMLTableCellElement>_.createDOM('th', ['th', 'table-header']);
    cell.innerText = a;

    if (a === 'wins') {
      addWinsClick(cell);
      cell.classList.add('clickable');
      setTimeout(() => {
        const panel = <HTMLElement>document.querySelector('.winners-panel');
        if (panel.dataset.sort === 'wins') {
          cell.innerText += panel.dataset.order === 'DESC' ? ' ↓' : ' ↑';
        }
      }, 100);
    }

    if (a === 'best time (seconds)') {
      addTimeClick(cell);
      cell.classList.add('clickable');
      setTimeout(() => {
        const panel = <HTMLElement>document.querySelector('.winners-panel');
        if (panel.dataset.sort === 'time') {
          cell.innerText += panel.dataset.order === 'DESC' ? ' ↓' : ' ↑';
        }
      }, 100);
    }

    cells.push(cell);
  });

  return cells!;
};

const renderTableHeaders = () => {
  const tr = _.createDOM('tr', ['tr', 'headers-tr']);
  const headers = renderThArray(['number', 'car', 'name', 'wins', 'best time (seconds)']);

  _.appendChildren(tr, headers);

  return tr;
};

const renderTdCell = (data: string) => {
  const cell = <HTMLTableCellElement>_.createDOM('td', ['td', 'table-cell']);
  cell.innerText = data;
  return cell;
};

const renderCarCell = (color: string) => {
  const td = _.createDOM('td', ['td', 'table-cell', 'car-cell']);
  const svg = <SVGElement>getCarSvg();
  svg.children[0].setAttribute('fill', color);
  td.appendChild(svg);

  return td;
};

const renderTableRow = async (winnerData: WinnerType, page: number, index: number) => {
  const place = ((page - 1) * WINNERS_PER_PAGE) + index + 1;
  const carData: CarType = await api.garage.getCar(winnerData.id);
  const tr = <HTMLTableCellElement>_.createDOM('tr', ['tr']);
  const rowData = {
    number: renderTdCell(place.toString()),
    car: renderCarCell(carData.color),
    name: renderTdCell(carData.name),
    wins: renderTdCell(winnerData.wins.toString()),
    time: renderTdCell(winnerData.time.toString()),
  };

  const cells = Object.values(rowData);
  _.appendChildren(tr, cells);

  return tr;
};

const renderTableData = async (appendix: HTMLTableElement, winners: WinnerType[], page: number) => {
  winners.forEach(async (winner: WinnerType, index: number) => {
    const row = await renderTableRow(winner, page, index);
    appendix.appendChild(row);
  });
};

const renderWinnersTable = (winners: WinnerType[], page: number) => {
  const table = <HTMLTableElement>_.createDOM('table', ['winners-table', 'table']);

  const tableHeaders = renderTableHeaders();
  renderTableData(table, winners, page);

  _.appendChildren(table, [tableHeaders]);
  table.appendChild(tableHeaders);

  addWinnersRefresh(table, renderWinnersTable);

  return table;
};

export default renderWinnersTable;
