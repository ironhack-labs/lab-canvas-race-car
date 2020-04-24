const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};

function startGame() {
  road.inicialize();
  road.show();
  car.inicialize();
  car.show();
}


const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,

  inicialize: function () {
    this.img = new Image();
    this.img.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  show: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const car = {
    img: null,
    x: 330,
    y: 550,
    width: 0,
    height: 0,

    inicialize: function () {
      this.imgCar = new Image();
      this.imgCar.src = "/images/car.png";
      this.width = (158 / 319) * this.height;
      this.height = 80*1.7;
    },

    show: function(){
      ctx.drawImage(this.imgCar, this.x, this.y, this.width, this.height);
    }


  }


