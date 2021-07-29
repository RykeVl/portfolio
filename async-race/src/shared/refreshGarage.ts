const refreshGarage = () => {
  const garagePanel = document.querySelector('.garage-panel');
  const refresh = new CustomEvent('refresh');
  garagePanel!.dispatchEvent(refresh);
};

export default refreshGarage;
