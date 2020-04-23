const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  init: function () {
    this.img = new Image();
    this.img.src = '/images/road.png';
    this.width = canvas.width;
    this.height = canvas.height;
    this.show();
  },
  show: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const car = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  init: function (_x, _y) {
    this.x = (canvas.width / 2);
    this.y = canvas.height - 100 - 319;
    this.img = new Image();
    this.img.src = '/images/car.png';
    this.width = 80;
    this.height = (319 / 158) * this.width;
    this.show();
  },
  show: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log('Start Game');
    startGame();
  };

  function startGame() {
    road.init();
    car.init(canvas.width / 2, canvas.height - 100);
  }
};