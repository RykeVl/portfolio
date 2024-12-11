const resetCarPosition = (carElement: HTMLElement) => {
  const car = carElement;
  car.removeAttribute('style');
};

const activateStartButton = (id: number) => {
  const startButton = document.querySelector(`.start-car-${id}`);
  startButton?.removeAttribute('disabled');
};

const addResetCarClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', (e) => {
    const target = <HTMLButtonElement>e.currentTarget;
    const id = Number(target.dataset.id);
    const carElement = <HTMLElement>document.querySelector(`.car-image-${id}`)!.parentElement;
    resetCarPosition(carElement);
    target.setAttribute('disabled', 'true');
    activateStartButton(id);
  });
};

export default addResetCarClick;
