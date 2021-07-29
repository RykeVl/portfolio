const filters = document.querySelectorAll('.filter-block');

filters.forEach((e) => {
  const formBlock = e.children[1];
  const filterVar = getComputedStyle(document.documentElement).getPropertyValue(`--${formBlock.id}`).trim();
  formBlock.children[0].setAttribute('value', filterVar);
  formBlock.children[1].setAttribute('value', filterVar);
  formBlock.addEventListener('input', () => {
    const filterRange = formBlock.children[0];
    formBlock.children[1].value = filterRange.value;
  });
});

const targetImg = document.getElementById("targetImg");
const filtersBlock = document.querySelector('.filters');
let filtersObject = {
  'blur': '0px',
  'invert': '0%',
  'sepia': '0%',
  'saturate': '100%',
  'hue-rotate': '0deg',
};

filtersBlock.addEventListener('input', (e) => {
  if (e.target.name === undefined) {
    targetImg.style.filter = '';
    filters.forEach((e) => {
      const formBlock = e.children[1];
      if (formBlock.children[0].name !== 'saturate-range') {
        formBlock.children[0].value = 0;
        formBlock.children[1].value = 0;
      } else {
        formBlock.children[0].value = 100;
        formBlock.children[1].value = 100;
      }
    });
    return;
  }
  const type = e.target.name.split('-')[0];
  switch (type) {
    case 'blur':
      filtersObject.blur = `${e.target.value + e.target.dataset.sizing}`;
      break;
    case 'invert':
      filtersObject.invert = `${e.target.value + e.target.dataset.sizing}`;
      break;
    case 'sepia':
      filtersObject.sepia = `${e.target.value + e.target.dataset.sizing}`;
      break;
    case 'saturate':
      filtersObject.saturate = `${e.target.value + e.target.dataset.sizing}`;
      break;
    case 'hue':
      filtersObject['hue-rotate'] = `${e.target.value + e.target.dataset.sizing}`;
      break;

    default:
      break;
  }

  let style = '';
  for (const key in filtersObject) {
    style += `${key}(${filtersObject[key]}) `
  }
  style = style.trim();
  targetImg.style.filter = style;
});

document.getElementById('reset').addEventListener('click', () => {
  filtersObject = {
    'blur': '0px',
    'invert': '0%',
    'sepia': '0%',
    'saturate': '100%',
    'hue-rotate': '0deg',
  }
  filtersBlock.dispatchEvent(new Event('input'));
});


//https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/01.jpg

let imageSrc = "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const fileUpload = document.querySelector('input[type="file"]');

window.onload = () => {
  date = new Date();
  if (date.getHours() < 6) {
    imageSrc += "night/01.jpg";
  } else if (date.getHours() < 12) {
    imageSrc += "morning/01.jpg";
  } else if (date.getHours() < 18) {
    imageSrc += "day/01.jpg";
  } else {
    imageSrc += "evening/01.jpg";
  };
  targetImg.src = imageSrc;
};

let imgCounter = 1;
document.getElementById('next-pic').addEventListener('click', () => {
  targetImg.src = imageSrc;
  if (imgCounter < 20) {
    imgCounter++;
  } else {
    imgCounter = 1;
  }
  if (imgCounter < 10) {
    targetImg.src = targetImg.src.slice(0, -6) + '0' + imgCounter + '.jpg';
  } else {
    targetImg.src = targetImg.src.slice(0, -6) + imgCounter + '.jpg';
  }
  fileUpload.value = '';
  console.log(imgCounter);
});

fileUpload.addEventListener('change', (e) => {
  const file = fileUpload.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    targetImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});

const download = document.getElementById('download');
const canvas = document.querySelector('canvas');

download.addEventListener('click', (e) => {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = targetImg.src;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    let style = '';
    for (const key in filtersObject) {
      if (key === 'blur') {
        const multiplier = filtersObject[key].slice(0, -2) * (canvas.width / targetImg.width) + 'px';
        style += `${key}(${multiplier}) `
      } else {
        style += `${key}(${filtersObject[key]}) `;
      }

    }
    style = style.trim();
    ctx.filter = style;
    ctx.drawImage(img, 0, 0);
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  };
});


const fullscreen = document.querySelector('.fullscreen');
fullscreen.addEventListener('click', (e) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }

  fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-exit.svg)';
});
document.onfullscreenchange = () => {
  if (document.fullscreenElement) {
    fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-exit.svg)';
  } else {
    fullscreen.style.backgroundImage = 'url(assets/svg/fullscreen-open.svg)';
  }
};

window.addEventListener('keydown', (e) => {
  if (e.code === 'F11') {
    e.preventDefault();
    fullscreen.dispatchEvent(new Event('click'));
  }
});