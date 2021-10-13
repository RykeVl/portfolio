const mapContainer = document.querySelector('.map');
const mapWrapper = document.querySelector('.map__container');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const title = document.querySelector('.map__title-container');
const zoomIn = document.querySelector('.zoom__in');
const zoomOut = document.querySelector('.zoom__out');

let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
  const box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top + scrollY;
  leftIndent = e.pageX - box.left + scrollX;
}

const checkCoords = () => {
  const box = mapContainer.getBoundingClientRect();
  const wrapper = mapWrapper.getBoundingClientRect();

  let defaultPadding = 75;

  if (window.screen.width < 1000) {
    defaultPadding = 75;
  } else if (window.screen.width < 1500) {
    defaultPadding = 200;
  } else {
    defaultPadding = 300;
  }

  if (box.bottom < wrapper.top + defaultPadding || box.top > wrapper.bottom - defaultPadding) {
    mapContainer.style.top = '0px';
  }

  if (box.right < wrapper.left + defaultPadding || box.left > wrapper.right - defaultPadding) {
    mapContainer.style.left = `${window.screen.width / 2 - mapContainer.offsetWidth / 2}px`;
  }
}

const moveAt = (e) => {
  mapContainer.style.left = e.pageX - leftIndent + 'px';
  if (e.pageX >= mapWrapper.offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }

  mapContainer.style.top = e.pageY - (header.offsetHeight - scrollY * 2) - title.offsetHeight - topIndent + 'px';
}

const stopDrag = (e) => {
  document.removeEventListener('pointermove', moveAt);
  mapContainer.removeEventListener('pointerup', stopDrag);
  checkCoords();
}

mapContainer.addEventListener('pointerdown', (e) => {
  if (mapContainer.offsetWidth <= mapWrapper.offsetWidth && mapContainer.offsetHeight <= mapWrapper.offsetHeight) {
    return;
  }

  calculateCoords(e, mapContainer);
  moveAt(e);

  document.addEventListener('pointermove', moveAt);
  mapContainer.addEventListener('pointerup', stopDrag);
});

mapContainer.ondragstart = function () {
  return false;
};

header.addEventListener('pointerenter', stopDrag);
footer.addEventListener('pointerenter', stopDrag);
title.addEventListener('pointerenter', stopDrag);

zoomIn.addEventListener('click', () => {
  if (mapContainer.offsetHeight <= mapWrapper.offsetHeight * 2) {
    const prevWidth = mapContainer.offsetWidth;
    const prevHeight = mapContainer.offsetHeight;
    const left = mapContainer.offsetLeft;
    const top = mapContainer.offsetTop;

    mapContainer.style.width = `${mapContainer.offsetWidth * 1.25}px`;
    mapContainer.style.height = "auto";
    mapContainer.style.left = `${left}px`;
    mapContainer.style.top = `${top}px`;

    const nextWidth = mapContainer.offsetWidth;
    const nextHeight = mapContainer.offsetHeight;
    const topPos = mapContainer.offsetTop || 0;
    const leftPos = mapContainer.offsetLeft || 0;

    mapContainer.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
    mapContainer.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
  }
});

zoomOut.addEventListener('click', () => {
  if (mapContainer.offsetWidth >= mapWrapper.offsetWidth || mapContainer.offsetHeight >= mapWrapper.offsetHeight) {
    const prevWidth = mapContainer.offsetWidth;
    const prevHeight = mapContainer.offsetHeight;
    const left = mapContainer.offsetLeft;
    const top = mapContainer.offsetTop;

    mapContainer.style.width = `${mapContainer.offsetWidth / 1.25}px`;
    mapContainer.style.height = "auto";
    mapContainer.style.left = `${left}px`;
    mapContainer.style.top = `${top}px`;

    const nextWidth = mapContainer.offsetWidth;
    const nextHeight = mapContainer.offsetHeight;
    const topPos = mapContainer.offsetTop || 0;
    const leftPos = mapContainer.offsetLeft || 0;

    mapContainer.style.left = `${leftPos + ((prevWidth - nextWidth) / 2)}px`;
    mapContainer.style.top = `${topPos + ((prevHeight - nextHeight) / 2)}px`;

    if (mapContainer.offsetWidth <= mapWrapper.offsetWidth && mapContainer.offsetHeight <= mapWrapper.offsetHeight) {
      mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
      mapContainer.style.height = "auto";
      mapContainer.style.top = `${(mapWrapper.offsetHeight - mapContainer.offsetHeight) / 2}px`;
      mapContainer.style.left = '0px';
      if (mapContainer.offsetHeight >= mapWrapper.offsetHeight) {
        mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
        mapContainer.style.width = 'auto';
        mapContainer.style.top = '0px';
        mapContainer.style.left = `${(mapWrapper.offsetWidth - mapContainer.offsetWidth) / 2}px`;
      }
    }
  }
});