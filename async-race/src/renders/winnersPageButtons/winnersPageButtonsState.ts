const setWinnersPageButtonsState = (pageNumber: number, carCount: number) => {
  const CARS_PER_PAGE = 10;
  const prev = document.querySelector('.previous-winners-page-button');
  const next = document.querySelector('.next-winners-page-button');
  if (prev === null || next === null) {
    setTimeout(() => { setWinnersPageButtonsState(pageNumber, carCount); }, 100);
  }

  if (pageNumber === 1) {
    prev?.setAttribute('disabled', 'true');
  } else {
    prev?.removeAttribute('disabled');
  }
  if (carCount / CARS_PER_PAGE <= pageNumber) {
    next?.setAttribute('disabled', 'true');
  } else {
    next?.removeAttribute('disabled');
  }
};

export default setWinnersPageButtonsState;
