const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const boardGame = new Board
    const car = new Car
  }
};

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;

    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = "/images/road.png"
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 500, 700);
  }
}

class Car {
  constructor() {
    this.x = 0;
    this.y = 0;
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = "/images/car.png";
  }
  
  moveRight() {
    return this.x += 25;
  }
  moveLeft() {
    return this.x -= 25;
  }
  draw() {
    ctx.drawImage(this.img, 230, 600, 40, 80);
  }
}

  const newCar = new Car();

  document.onkeyright = function(e) {
    switch (e.keyCode) {
      case 37: newCar.moveLeft(); console.log('left', newCar); break;
      case 39: newCar.moveRight(); console.log('right', newCar); break;
    }
    updateCanvas();
  }
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
    ctx.fillText('Car_x: ' + newCar.x , 580, 40);
    ctx.fillText('Car_y: ' + newCar.y, 580, 60);

    newCar.draw()
  }
