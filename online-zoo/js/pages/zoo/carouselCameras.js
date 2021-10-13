const sliderRight = document.querySelector('.side-cameras__slider_right');
const sliderLeft = document.querySelector('.side-cameras__slider_left');
const sideCamerasCarouselOuter = document.querySelector('.side-cameras__carousel_outer');
const sideCamerasCarouselInner = document.querySelector('.side-cameras__carousel_inner');
const carouselClone = sideCamerasCarouselInner.cloneNode(true);

sliderLeft.addEventListener('click', () => {
  if (sideCamerasCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  sideCamerasCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_left');
  sideCamerasCarouselInner.classList.add('carousel_base');
  sideCamerasCarouselInner.classList.add('carousel_active');

  sideCamerasCarouselOuter.prepend(carouselClone);

  setTimeout(() => {
    sideCamerasCarouselInner.classList.remove('carousel_base');
    sideCamerasCarouselInner.classList.add('carousel_right');
    carouselClone.classList.remove('carousel_left');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    sideCamerasCarouselInner.classList.add('carousel_replace');
    sideCamerasCarouselInner.classList.remove('carousel_right');
    sideCamerasCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    sideCamerasCarouselInner.classList.remove('carousel_active');
  }, 500);
});

sliderRight.addEventListener('click', () => {
  if (sideCamerasCarouselInner.classList.contains('carousel_active')) {
    return;
  }

  sideCamerasCarouselInner.classList.remove('carousel_replace');
  carouselClone.classList.add('carousel_right');
  sideCamerasCarouselInner.classList.add('carousel_base');
  sideCamerasCarouselInner.classList.add('carousel_active');

  sideCamerasCarouselOuter.append(carouselClone);

  setTimeout(() => {
    sideCamerasCarouselInner.classList.remove('carousel_base');
    sideCamerasCarouselInner.classList.add('carousel_left');
    carouselClone.classList.remove('carousel_right');
    carouselClone.classList.add('carousel_base');
  }, 0);

  setTimeout(() => {
    sideCamerasCarouselInner.classList.add('carousel_replace');
    sideCamerasCarouselInner.classList.remove('carousel_left');
    sideCamerasCarouselInner.classList.add('carousel_base');
    carouselClone.remove();
    carouselClone.classList.remove('carousel_base');
    sideCamerasCarouselInner.classList.remove('carousel_active');
  }, 500);
});