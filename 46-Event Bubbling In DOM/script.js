
const navigationBar = document.querySelector('.navbar');

let previousScrollPosition = 0;
document.addEventListener('scroll', function() {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition) {
    navigationBar.classList.add('hidden');
  } else {
    navigationBar.classList.remove('hidden');
  }

  previousScrollPosition = currentScrollPosition;
});