const sliderRight = document.querySelector('.pets__slider_right');
const sliderLeft = document.querySelector('.pets__slider_left');
const petsCarouselOuter = document.querySelector('.pets__carousel_outer');
const petsCarouselInner = document.querySelector('.pets__carousel_inner');
const carouselClone = petsCarouselInner.cloneNode(true);

sliderLeft.addEventListener('click', () => {
  if (petsCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  petsCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_left');
  petsCarouselInner.classList.add('carousel_base');
  petsCarouselInner.classList.add('carousel_active');

  petsCarouselOuter.prepend(carouselClone);

  setTimeout(() => {
    petsCarouselInner.classList.remove('carousel_base');
    petsCarouselInner.classList.add('carousel_right');
    carouselClone.classList.remove('carousel_left');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    petsCarouselInner.classList.add('carousel_replace');
    petsCarouselInner.classList.remove('carousel_right');
    petsCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    petsCarouselInner.classList.remove('carousel_active');
  }, 500);
});

sliderRight.addEventListener('click', () => {
  if (petsCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  petsCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_right');
  petsCarouselInner.classList.add('carousel_base');
  petsCarouselInner.classList.add('carousel_active');

  petsCarouselOuter.append(carouselClone);

  setTimeout(() => {
    petsCarouselInner.classList.remove('carousel_base');
    petsCarouselInner.classList.add('carousel_left');
    carouselClone.classList.remove('carousel_right');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    petsCarouselInner.classList.add('carousel_replace');
    petsCarouselInner.classList.remove('carousel_left');
    petsCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    petsCarouselInner.classList.remove('carousel_active');
  }, 500);
});