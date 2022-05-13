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

// ******************Video***********************************
const video = document.querySelector('.s2__video-item');
const videoS1 = document.querySelector('.s1-bottom__video-item');
const iconReplayS2 = document.querySelector('.s2__video-icon-replay');
const iconPlayS2 = document.querySelector('.s2__video-icon-play');
const iconReplayS1 = document.querySelector('.s1-bottom__video-icon-replay');
const iconPlayS1 = document.querySelector('.s1-bottom__video-icon-play');

// ENDED VIDEO
videoS1.addEventListener('ended', function () {
  iconReplayS1.classList.remove('hiden');
  iconPlayS1.classList.add('hiden');
});

video.addEventListener('ended', function () {
  iconReplayS2.classList.remove('hiden');
  iconPlayS2.classList.add('hiden');
});

iconReplayS1.addEventListener('click', function () {
  this.classList.add('hiden');
  videoS1.play();
});

iconReplayS2.addEventListener('click', function () {
  this.classList.add('hiden');
  video.play();
});

// PAUSE VIDEO
videoS1.addEventListener('pause', function () {
  iconPlayS1.classList.remove('hiden');
});

video.addEventListener('pause', function () {
  iconPlayS2.classList.remove('hiden');
});

iconPlayS1.addEventListener('click', function () {
  this.classList.add('hiden');
  videoS1.play();
});

videoS1.addEventListener('play', function () {
  iconPlayS1.classList.add('hiden');
  iconReplayS1.classList.add('hiden');
});
iconPlayS2.addEventListener('click', function () {
  this.classList.add('hiden');
  video.play();
});

video.addEventListener('play', function () {
  iconPlayS2.classList.add('hiden');
  iconReplayS2.classList.add('hiden');
});

video.addEventListener('touchend', function () {
  this.pause();
});
videoS1.addEventListener('touchend', function () {
  this.pause();
});
// seclect item active
const handleActiveThumbnail = id => {
  const sliderS2ListItem = document.querySelectorAll('.s2__item');
  sliderS2ListItem.forEach(item => {
    item.classList.remove('active');
  });
  sliderS2ListItem.forEach(i => {
    if (id == i.dataset.id) {
      i.classList.add('active');
    }
  });
};

// play video
function chanceVideo(id) {
  video.setAttribute('src', `./assets/videos/video_${id}.mp4`);
  video.play();
}

// ********handle section venomized racing**************
const bgDestop = './assets/img/Assetss/section-play-game-banner.png';
const bgMobile = './assets/img/Assetss/play-game-banner-mobile.png';
const s5Banner = document.querySelector('.s5__banner');
window.addEventListener('resize', function () {
  let windowWidth = window.innerWidth;
  if (windowWidth < 765) {
    s5Banner.setAttribute('src', bgMobile);
  } else {
    s5Banner.setAttribute('src', bgDestop);
  }
});

// ***************s1 car*****************
const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');
let scrolling = false;

window.scroll = () => {
  scrolling = true;
  car1.style.animation = null;
  car2.style.animation = null;
};

setInterval(() => {
  if (scrolling) {
    scrolling = false;
  }
}, 100);

if (!scrolling) {
  car1.style.animation = 'showCar 1s linear,car 0.3s 2s infinite';
  car2.style.animation = 'showCar 1s linear,car 0.3s 2s infinite';
}
