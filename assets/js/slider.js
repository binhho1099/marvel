$(document).ready(function () {
  // corousel video s2
  $('.owl-video').owlCarousel({
    loop: true,
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

  // handle click item slider
  handleActiveThumbnail(1);
  $('.owl-video').on('click', '.item', function (e) {
    const id = e.target.parentElement.dataset.id;
    handleActiveThumbnail(id);
    chanceVideo(id);
  });

  var itemModalName;
  var index;

  // Modal list popup
  const products = document.querySelectorAll('.s3-bottom__product');
  products.forEach(product =>
    product.addEventListener('click', function (e) {
      itemModalName = e.target.dataset.modalName;
      index = e.target.dataset.indexModal;

      $('#myModal').modal('show');
    })
  );
  const modals = document.querySelectorAll('.owl-modal');
  $('#myModal').on('shown.bs.modal', function () {
    modals.forEach(modal => {
      return modal.dataset.modalName === itemModalName
        ? modal.classList.remove('hiden')
        : modal.classList.add('hiden');
    });
    $('.owl-modal').owlCarousel({
      loop: true,
      items: 1,
      margin: 10,
      dots: false,
      nav: true,
      singleItem: true,
      navText: [
        '<img src="./assets/img/Assetss/arrow_left.png" alt="arrow_left">',
        '<img src="./assets/img/Assetss/arrow_right.png" alt="arrow_right">',
      ],
    });
    $('.owl-modal').trigger('to.owl.carousel', [index, 0]);
  });
  $('#myModal').on('hide.bs.modal', function () {
    $(`#owl-modal-${itemModalName}`).owlCarousel('destroy');
  });
});

const modalBtn = document.querySelector('.modal-btn-close');
modalBtn.addEventListener('click', function () {
  $('#myModal').modal('hide');
});
