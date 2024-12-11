import api from '../../../api';
import refreshGarage from '../../../shared/refreshGarage';

const addCreateClick = (form: HTMLFormElement) => {
  const name = form.children[0] as HTMLInputElement;
  const color = form.children[1] as HTMLInputElement;
  const button = form.children[2] as HTMLButtonElement;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value.length === 0) {
      return;
    }
    api.garage.createCar(name.value, color.value)
      .then(() => {
        refreshGarage();
        name.value = '';
        color.value = '#000000';
      });
  });
};

export default addCreateClick;
