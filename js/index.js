const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
this.imgRoad = new Image();
this.imgRoad.src = '/images/road.png';
this.imgCar = new Image();
this.imgCar.src = '/images/car.png';

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  init: function (_img) {
    this.img = _img;
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
  init: function (_img) {
    this.img = _img;
    this.width = 80;
    this.height = (319 / 158) * this.width;
    this.x = (canvas.width / 2) - (this.width/2);
    this.y = canvas.height - 25 - this.height;
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
    road.init(this.imgRoad);
    car.init(this.imgCar);
  }
};