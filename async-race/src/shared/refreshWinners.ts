const refreshWinners = () => {
  const winnersPanel = document.querySelector('.winners-panel');
  const refresh = new CustomEvent('refresh');
  winnersPanel!.dispatchEvent(refresh);
};

export default refreshWinners;
