class Component {
  constructor(x, y, width, height, carImg) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.carImg = carImg;
 
    this.speedX = 0;
    this.speedY = 0;
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  drawCar() {
    const ctx = myGame.context;
    ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
  }
  

}
