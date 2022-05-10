const sliderS2ListItem = document.querySelectorAll('.s2__item');
const video = document.querySelector('.s2__video-item');
const thumbnailVideo = document.querySelector('.s2__video-thumbnail');
let thumbnailActive = 1;
// JS VIDEO SLIDER
const handleActiveThumbnail = id => {
  sliderS2ListItem.forEach(item => {
    item.classList.remove('active');
    console.log('binh');
  });
  sliderS2ListItem.forEach(i => {
    if (id == i.dataset.id) {
      i.classList.add('active');
      thumbnailActive = i.dataset.id;
    }
  });
};
handleActiveThumbnail(thumbnailActive);
function chanceVideo(id) {
  video.setAttribute('src', `./assets/videos/video_${id}.mp4`);
  video.play();
}
function handleClickSelectItemSlider() {
  const id = this.dataset.id;
  handleActiveThumbnail(id);
  chanceVideo(id);
  console.log(id);
}

sliderS2ListItem.forEach(i =>
  i.addEventListener('click', handleClickSelectItemSlider)
);

// carousel
$('.owl-carousel').owlCarousel({
  // loop: true,
  margin: 20,
  dots: false,
  nav: true,

  responsive: {
    0: {
      items: 2.5,
      nav: false,
    },
    768: {
      items: 3,
      navText: [
        '<img src="./assets/img/Assetss/arrow_left.png" alt="arrow_left">',
        '<img src="./assets/img/Assetss/arrow_right.png" alt="arrow_right">',
      ],
    },
  },
});
