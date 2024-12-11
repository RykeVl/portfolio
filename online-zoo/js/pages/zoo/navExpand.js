const expandButton = document.querySelector('.zoo__nav-expand');
const asideMobile = document.querySelector('.aside_mobile');

expandButton.addEventListener('click', (e) => {
  if (asideMobile.classList.contains('aside_expanded')) {
    asideMobile.classList.remove('aside_expanded');
  } else {
    asideMobile.classList.add('aside_expanded');
  }
});