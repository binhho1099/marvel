// btn wave
const wave1Active = document.querySelector('.wave-1-active');
const wave1MiniActive = document.querySelector('.wave-1-mini-active');
const wave2Active = document.querySelector('.wave-2-active');
const wave2MiniActive = document.querySelector('.wave-2-mini-active');

// list product
const racingVenomized = document.querySelector('.s3__racing-venomized');
const racingOriginal = document.querySelector('.s3__racing-original');
const miniVenomized = document.querySelector('.s3__mini-venomized');
const miniOriginal = document.querySelector('.s3__mini-original');

// ********************* handle action ******************************
function handleChanceListProductRacing() {
  racingOriginal.classList.toggle('hiden');
  racingVenomized.classList.toggle('hiden');
}

wave1Active.addEventListener('click', handleChanceListProductRacing);
wave2Active.addEventListener('click', handleChanceListProductRacing);

function handleChanceListProductMini() {
  miniOriginal.classList.toggle('hiden');
  miniVenomized.classList.toggle('hiden');
}

wave1MiniActive.addEventListener('click', handleChanceListProductMini);
wave2MiniActive.addEventListener('click', handleChanceListProductMini);
