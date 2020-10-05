// window.onbeforeunload = function () {
//   alert('?');
//   window.scrollTo(0, 0);
// };

// history.scrollRestoration = 'manual';

window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
};

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
