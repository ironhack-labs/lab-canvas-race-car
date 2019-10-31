class Car {
  constructor (game) {
    this.game = game;
    this.direction = 'right';
  }

  paint () {
    const image = new Image();
    image.src = "images/car.png";
    image.addEventListener('load', () => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    const size = 0.25;
    context.drawImage(image, 225, 500, imageWidth * size, imageHeight * size);
    }); 
  }

  move () {
    switch (this.direction) {
      case 'up':
        nextX = lastCell[0];
        nextY = lastCell[1] - 1;
        break;
      case 'right':
        nextX = lastCell[0] + 1;
        nextY = lastCell[1];
        break;
      case 'down':
        nextX = lastCell[0];
        nextY = lastCell[1] + 1;
        break;
      case 'left':
        nextX = lastCell[0] - 1;
        nextY = lastCell[1];
        break;
    }
  }
}