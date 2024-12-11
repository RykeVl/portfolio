import startCar from '../../../../shared/carDrive';

const addStartCarClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', async (e) => {
    const target = <HTMLButtonElement>e.currentTarget;
    const id = Number(target.dataset.id);

    startCar(id);
  });
};

export default addStartCarClick;
