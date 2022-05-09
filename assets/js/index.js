const btnWave2S3 = document.querySelector('.btn-wave2-s3');
const btnWave1S3 = document.querySelector('.btn-wave1-s3');
const btnWave2S32 = document.querySelector('.btn-wave2-s3-2');
const btnWave1S32 = document.querySelector('.btn-wave1-s3-2');
const character = document.querySelector('.s3-bottom__product');
const character2 = document.querySelector('.s3-bottom__product-2');
const listProduct1 = document.querySelector('.js-list-product-1');
const listProduct2 = document.querySelector('.js-list-product-2');
const modalContent = document.querySelector('#modal-content');
const app = {
  data: {
    racing: [
      'Racing_1',
      'Racing_2',
      'Racing_3',
      'Racing_4',
      'Racing_5',
      'Racing_6',
      'Racing_7',
      'Racing_8',
      'Racing_9',
      'Racing_10',
      'Racing_11',
      'Racing_12',
      'Racing_13',
      'Racing_14',
      'Racing_15',
    ],
    mini: ['Mini_1', 'Mini_2', 'Mini_3', 'Mini_4', 'Mini_5', 'Mini_6'],
    racing_w2: [
      'Racing_W2_1',
      'Racing_W2_2',
      'Racing_W2_3',
      'Racing_W2_4',
      'Racing_W2_5',
      'Racing_W2_6',
      'Racing_W2_7',
      'Racing_W2_8',
      'Racing_W2_9',
      'Racing_W2_10',
      'Racing_W2_11',
      'Racing_W2_12',
      'Racing_W2_13',
      'Racing_W2_14',
      'Racing_W2_15',
    ],
    mini_w2: [
      'Mini_W2_1',
      'Mini_W2_2',
      'Mini_W2_3',
      'Mini_W2_4',
      'Mini_W2_5',
      'Mini_W2_6',
    ],
  },
  img: `<div class="col-12 text-center">
  <img
    class="s3-bottom__product-headline"
    src="./assets/img/Assetss/tap-to-learn-red.png"
    alt=""
  />
</div>`,
  dataListProduct1: function (data) {
    return `<div class="s3-bottom__card col-6 col-sm-4 col-lg-12d5">
    <img
      onclick="app.showModal('Popup_${data}')"
      src="./assets/img/Assetss/Character Cards/${data}.png"
      alt=""
    />
  </div>`;
  },
  dataListProduct2: function (data) {
    return `<div class="col-6 col-md-4">
    <img
      onclick="app.showModal('Popup_${data}')"
      src="./assets/img/Assetss/Character Cards/${data}.png"
      alt=""
    />
  </div>`;
  },
  handleEvent: function () {
    btnWave1S3.onclick = function () {
      btnWave1S3.classList.remove('disable');
      btnWave2S3.classList.add('disable');
      character.style.borderColor = '#44FFFF';
      const htmls = app.data.racing
        .map(item => {
          return app.dataListProduct1(item);
        })
        .join('');
      const string = app.img.concat(htmls);
      listProduct1.innerHTML = string;
    };
    btnWave2S3.onclick = function () {
      btnWave2S3.classList.remove('disable');
      btnWave1S3.classList.add('disable');
      character.style.borderColor = '#fc486b';
      const htmls = app.data.racing_w2
        .map(item => {
          return app.dataListProduct1(item);
        })
        .join('');
      const string = app.img.concat(htmls);
      listProduct1.innerHTML = string;
    };

    btnWave2S32.onclick = function () {
      btnWave2S32.classList.remove('disable');
      btnWave1S32.classList.add('disable');
      character2.style.borderColor = '#fc486b';
      const htmls = app.data.mini_w2
        .map(item => {
          return app.dataListProduct2(item);
        })
        .join('');
      listProduct2.innerHTML = htmls;
    };
    btnWave1S32.onclick = function () {
      btnWave1S32.classList.remove('disable');
      btnWave2S32.classList.add('disable');
      character2.style.borderColor = '#44FFFF';
      const htmls = app.data.mini
        .map(item => {
          return app.dataListProduct2(item);
        })
        .join('');
      listProduct2.innerHTML = htmls;
    };
  },
  showModal: function (data) {
    modalContent.innerHTML = `<img
    src="./assets/img/Assetss/Popup/${data}.png"
    alt=""
  />`;
    $('#myModal').modal('show');
  },
  run: function () {
    this.handleEvent();
  },
};
app.run();
