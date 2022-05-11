const sliderS2ListItem = document.querySelectorAll('.s2__item');
const video = document.querySelector('.s2__video-item');
const thumbnailVideo = document.querySelector('.s2__video-thumbnail');
// JS VIDEO SLIDER
const handleActiveThumbnail = id => {
  sliderS2ListItem.forEach(item => {
    item.classList.remove('active');
  });
  sliderS2ListItem.forEach(i => {
    if (id == i.dataset.id) {
      i.classList.add('active');
    }
  });
};

// handleActiveThumbnail(1);
function chanceVideo(id) {
  video.setAttribute('src', `./assets/videos/video_${id}.mp4`);
  video.play();
}

function handleClickSelectItemSlider() {
  const id = this.dataset.id;
}
$(document).ready(function () {
  // carousel modal
  $('.owl-modal').owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      '<img src="./assets/img/Assetss/arrow_left.png" alt="arrow_left">',
      '<img src="./assets/img/Assetss/arrow_right.png" alt="arrow_right">',
    ],
  });
  // corousel video s2
  $('.owl-video').owlCarousel({
    loop: true,
    // rewind: true,
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
  handleActiveThumbnail(1);
  $('.owl-video').on('click', '.item', function (e) {
    const id = e.target.parentElement.dataset.id;
    handleActiveThumbnail(id);
    // handleActiveThumbnail();
    // e.target.parentElement.classList.add('active');
    chanceVideo(id);
  });

  const products = document.querySelectorAll('.s3-bottom__product');
  products.forEach(product =>
    product.addEventListener('click', function (e) {
      const itemModalName = e.target.dataset.modalName;
      const index = e.target.dataset.indexModal;
      const modals = document.querySelectorAll('.owl-modal');
      $(`#owl-modal-${itemModalName}`).trigger('to.owl.carousel', [
        index,
        1,
        true,
      ]);
      modals.forEach(modal =>
        modal.dataset.modalName === itemModalName
          ? modal.classList.remove('hiden')
          : modal.classList.add('hiden')
      );
      $('#myModal').modal('show');
    })
  );
});
