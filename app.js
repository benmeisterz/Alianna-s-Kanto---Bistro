const navEl = document.querySelector('.navbar');
const background = document.querySelector('.back');
const height = background.clientHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= height) {
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY < height) {
    navEl.classList.remove('navbar-scrolled');
  }
});

function hideMobileMenu() {
  var mobileMenu = document.getElementById('navbarNav');
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
  }
}
