class Car {
  constructor(carX, carY) {
    this.carX = carX;
    this.carY = carY;
    this.carImage = new Image();
    this.carImage.src = "images/car.png";
  }
  draw() {
    context.drawImage(this.carImage, this.carX, this.carY, 40, 70);
  }

  moveRight() {
    this.carX = this.carX + 15;
  }

  moveLeft() {
    this.carX = this.carX - 15;
  }
  controls() {
    window.addEventListener("keydown", event => {
      event.preventDefault();

      switch (event.keyCode) {
        case 37:
          this.moveLeft();
          console.log(this.carX);

          break;
        case 39:
          this.moveRight();
          console.log(this.carX);

          break;
      }
    });
  }

  checkCollision() {
    
    if (obstacle.obstX === this.carX && this.obstacle.obstY === this.carY) {
      game.stopGame();
    }

}
}