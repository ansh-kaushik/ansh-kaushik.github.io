const mainNav = document.querySelector('.main-nav');
const mailForm = document.querySelector('.mail-form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

// for side nav bar
document.addEventListener('click', (e) => {
  if (e.target.matches('.main-nav')) {
  } else if (e.target.matches('.toggle-button')) {
    mainNav.classList.toggle('active');
  } else {
    mainNav.classList.remove('active');
  }
});
