const addSelectClick = (button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    const { id } = button.dataset;
    const carLabel = document.querySelector(`.car-label-${id}`)!.innerHTML;
    const carImage = document.querySelector(`.car-image-${id}`)!.children[0];
    const color = carImage.getAttribute('fill')!;

    const inputText = <HTMLInputElement>document.querySelector('.update-input-text');
    const inputColor = <HTMLInputElement>document.querySelector('.update-input-color');
    const updateButton = <HTMLButtonElement>document.querySelector('.update-button');
    inputText.value = carLabel;
    inputColor.value = color;
    updateButton.dataset.id = id;
  });
};

export default addSelectClick;
