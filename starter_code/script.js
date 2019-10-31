const carImage = new Image();
carImage.src = "./images/car.png";


// GAME CLASS

class Game {
  constructor() {
    this.car = new Car(this);
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    const CANVAS_HEIGHT = this.context.height;
    const CANVAS_WIDTH = this.context.height;
  }

  drawBackground() {
    const context = this.context;
    context.fillStyle = 'green';
    context.fillRect(0, 0, 500, 500);
    context.fillStyle = 'grey';
    context.fillRect(50, 0, 400, 500);
    context.fillStyle = 'white';
    context.fillRect(60, 0, 10, 500);
    context.fillRect(430, 0, 10, 500);
    for (let i = 0; i < 20; i++) {
      context.fillRect(240, 10 + i * 50, 5, 30);
    }
  }

  startGame() {
    document.querySelector('.game-intro').classList.add('none');
    document.getElementById('game-board').classList.remove('none');
    this.drawBackground();
    this.car.drawCar();
  }

}

// CAR CLASS

class Car {
  constructor(game) {
    this.game = game;
    this.posX = 217;
  }

  moveLeft() {
    if (this.posX > 50) {
      this.posX -= 10;
      console.log(this.posX);
    }
  }

  moveRight() {
    if (this.posX < 400) {
      this.posX += 10;
      console.log(this.posX);
    }
  }

  drawCar() {
      const RATIO = carImage.height / carImage.width;
      const SIZE = 50;
      this.game.context.drawImage(carImage, this.posX, 350, SIZE, SIZE * RATIO);
  }
}





window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    const game = new Game();
    game.startGame();


    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          console.log('left');
          event.preventDefault();
          game.drawBackground();
          game.car.moveLeft();
          game.car.drawCar();
          break;
        case 39:
          console.log('right');
          event.preventDefault();
          game.drawBackground();
          game.car.moveRight();
          game.car.drawCar();
          break;
      }
    });
  };
};