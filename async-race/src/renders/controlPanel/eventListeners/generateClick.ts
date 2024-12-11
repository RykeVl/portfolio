import api from '../../../api';
import refreshGarage from '../../../shared/refreshGarage';

const generateRandomName = () => {
  const brandArrays = [
    'Audi',
    'BMW',
    'Mercedes',
    'Ferrari',
    'Tesla',
    'Geely',
    'Ford',
    'Mitsubishi',
    'Honda',
    'Nissan',
  ];
  const modelArrays = [
    'X10',
    'Super',
    'FURIOUS',
    'Fast',
    'Sedan',
    '2020',
    'S100',
    'Model X',
    '8',
    'mini',
  ];

  const randomBrand = brandArrays[Math.floor(Math.random() * 10)];
  const randomModel = modelArrays[Math.floor(Math.random() * 10)];

  const randomName = `${randomBrand} ${randomModel}`;

  return randomName;
};

const generateChannel = () => {
  const number = Math.floor(Math.random() * 256).toString(16);
  return number.length < 2 ? `0${number}` : number;
};

const generateRandomColor = () => {
  const redChannel = generateChannel();
  const greenChannel = generateChannel();
  const blueChannel = generateChannel();

  return `#${redChannel + greenChannel + blueChannel}`;
};

const addGenerateClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    const generateCount = 100;
    for (let i = 0; i < generateCount; i += 1) {
      const name = generateRandomName();
      const color = generateRandomColor();
      api.garage.createCar(name, color).then(() => {
        if (i === generateCount - 1) refreshGarage();
      });
    }
  });
};

export default addGenerateClick;
