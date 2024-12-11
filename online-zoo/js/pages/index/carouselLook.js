const sliderRight = document.querySelector('.look__slider_right');
const sliderLeft = document.querySelector('.look__slider_left');
const lookCarouselOuter = document.querySelector('.look__carousel_outer');
const lookCarouselInner = document.querySelector('.look__carousel_inner');
const carouselClone = lookCarouselInner.cloneNode(true);

sliderLeft.addEventListener('click', () => {
  if (lookCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  lookCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_left');
  lookCarouselInner.classList.add('carousel_base');
  lookCarouselInner.classList.add('carousel_active');

  lookCarouselOuter.prepend(carouselClone);

  setTimeout(() => {
    lookCarouselInner.classList.remove('carousel_base');
    lookCarouselInner.classList.add('carousel_right');
    carouselClone.classList.remove('carousel_left');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    lookCarouselInner.classList.add('carousel_replace');
    lookCarouselInner.classList.remove('carousel_right');
    lookCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    lookCarouselInner.classList.remove('carousel_active');
  }, 500);
});

sliderRight.addEventListener('click', () => {
  if (lookCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  lookCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_right');
  lookCarouselInner.classList.add('carousel_base');
  lookCarouselInner.classList.add('carousel_active');

  lookCarouselOuter.append(carouselClone);

  setTimeout(() => {
    lookCarouselInner.classList.remove('carousel_base');
    lookCarouselInner.classList.add('carousel_left');
    carouselClone.classList.remove('carousel_right');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    lookCarouselInner.classList.add('carousel_replace');
    lookCarouselInner.classList.remove('carousel_left');
    lookCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    lookCarouselInner.classList.remove('carousel_active');
  }, 500);
});