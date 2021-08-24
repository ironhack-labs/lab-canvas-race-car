let canvas = document.getElementById("canvas");

ctx = canvas.getContext("2d");

class Sprite {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImg(callback) {
    const image = new Image();
    image.src = this.img;
    image.addEventListener("load", () => {
      this.img = image;
      this.draw();
      if (callback) {
        callback();
      }
    });
  }
}

class Road extends Sprite {
  constructor() {
    super(0, 0, 400, 600, "./images/road.png");
  }
}

class Car extends Sprite {
  constructor() {
    super(170, 470, 55, 110, "./images/car.png");
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Road();
    road.loadImg(() => {
      const car = new Car();
      car.loadImg();
    });
  }
};
