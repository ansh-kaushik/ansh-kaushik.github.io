const mainNav = document.querySelector('.main-nav');

// for side nav bar
document.addEventListener('click', (e) => {
  if (e.target.matches('.main-nav')) {
  } else if (e.target.matches('.toggle-button')) {
    mainNav.classList.toggle('active');
  } else {
    mainNav.classList.remove('active');
  }
});
