const canvas = document.querySelector('#canvas');
const roadCtx = canvas.getContext('2d');
const carCtx = canvas.getContext('2d');

class Car {
  constructor() {
    this.x = 212;
    this.y = 550;
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = './images/car.png';
  }
  moveLeft() {
    this.x -= 15;
  }
  moveRight() {
    this.x += 15;
  }
  draw() {
    carCtx.drawImage(this.img, this.x, this.y, 80, 130);
  }
}

class Road {
  constructor() {
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = './images/road.png';
  }

  draw() {
    roadCtx.drawImage(this.img, 0, 0, 500, 700);
  }
}

let myRoad
let myCar

function startGame() {
  myRoad = new Road();
  myCar = new Car();
};

function updateCanvas() {
  carCtx.clearRect(myCar.x, myCar.y, 80, 130); 
  roadCtx.clearRect(0, 0, 500, 700);
  myRoad.draw();
  myCar.draw();
  requestAnimationFrame(updateCanvas);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
      myCar.moveLeft();
      break;
    case 39: // right arrow
      myCar.moveRight();
      break;
  }
  updateCanvas();
});