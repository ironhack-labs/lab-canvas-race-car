class Car {
  constructor (game) {
    this.game = game;
    this.context = game.context;
    this.carX = 100;
    this.carY = 450;
  }

  paint () {
    const image = new Image();
    image.src = "images/car.png";
    image.addEventListener('load', () => {
      const imageHeight = image.height;
      const imageWidth = image.width;
      const size = 0.2;
      this.context.drawImage(image, this.carX, this.carY, imageWidth * size, imageHeight * size);
    }); 
  }

  clear () {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  moveLeft () {
    if (this.carX === 50) {
      this.carX = this.carX;
    } else {
      this.carX -= 25;
    }
  }
  
  moveRight () {
    if (this.carX === 275) {
      this.carX = this.carX;
    } else {
      this.carX += 25;
    }
  }
}