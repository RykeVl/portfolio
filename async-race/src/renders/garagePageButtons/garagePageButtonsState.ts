const setGaragePageButtonsState = (pageNumber: number, carCount: number) => {
  const CARS_PER_PAGE = 7;
  const prev = document.querySelector('.previous-garage-page-button');
  const next = document.querySelector('.next-garage-page-button');
  if (prev === null || next === null) {
    setTimeout(() => { setGaragePageButtonsState(pageNumber, carCount); }, 100);
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

export default setGaragePageButtonsState;
