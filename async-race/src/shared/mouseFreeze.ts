const prevent = (e: Event) => {
  e.preventDefault();
};

const freezeMouse = () => {
  window.addEventListener('click', prevent);
};

const unfreezeMouse = () => {
  window.removeEventListener('click', prevent);
};

export default { freezeMouse, unfreezeMouse };
