const miniHeader = document.getElementById('miniHeader');
const mainHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerHeight = mainHeader.offsetHeight;

  if (scrollY > triggerHeight) {
    miniHeader.classList.add('show');
  } else {
    miniHeader.classList.remove('show');
  }
});