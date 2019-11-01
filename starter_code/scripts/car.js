class Car {
  constructor(game) {
      this.game = game;
      this.posX = 250;
      this.context = game.context;
      this.direction;
}

/*   move() {
    switch (this.direction) {
      case 'right':
        context.clearRect(fastCar.posX, 500, 39.5, 79.75);
        game.paintRoad();
        fastCar.moveRight(fastCar.posX)
        drawCar(fastCar.posX, 500); 
        console.log('right');
        break;
        case 'left':
          console.log('MOVE LEFT')
        break;
    }
} */

  drawCar() {
    let imageCar = new Image();
    imageCar.src = "./images/car.png"
    const imageHeight = imageCar.height;
    const imageWidth = imageCar.width;
    const size = 0.25;
    this.context.drawImage(imageCar, this.posX, 500, imageWidth * size, imageHeight * size )
}

/* update() {

} */

}