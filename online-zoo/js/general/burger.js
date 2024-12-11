const HookBurgerClick = () => {
  const burger = document.querySelector('.header__features-button_burger');
  const navMobile = document.querySelector('.header__container_mobile');

  burger.addEventListener('click', () => {
    if (navMobile.classList.contains('header__container_mobile_active')) {
      navMobile.classList.remove('header__container_mobile_active');
    } else {
      navMobile.classList.add('header__container_mobile_active');
    }
  });
}

export default HookBurgerClick;