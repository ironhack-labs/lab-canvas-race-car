class Car {
    constructor(game, height, width) {
      this.context = game.context;
      this.game = game;
      this.direction = 'up';
      this.height = 70;
      this.width = 150; 
      this.carImage = new Image();
      this.posX = 215;
      this.posY = 625;
      this.vx = 0;
      this.vy = 0;

    }       
    moveRight() {
      this.height = this.height + 50;
    }
    moveLeft() {
      this.height = this.height - 50;
    }
    drawCar () {
      this.carImage.src = './images/car.png';
      this.carImage.addEventListener("load", () => {
      this.context.drawImage(this.carImage, this.posX, this.posY, this.height, this.width);
        });
    }
}