const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

function toggleMoreBtn() {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
}
