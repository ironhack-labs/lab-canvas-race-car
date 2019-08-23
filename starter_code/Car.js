class Car {
  constructor(game) {
    this.game = game;
    this.xPosition = 0;
    this.yPosition = this.game.height*0.8;
    this.yVelocity = 400; // Measured in pixels per second
    this.xVelocity = 0; // Measured in pixels per second
    this.image = new Image();
    this.image.src = 'images/car.png';
    this.image.addEventListener('load', event => {this.draw()}) 
    this.scale = 1/3;
    this.xSpeedMult = 100; // X speed multiplier
    this.ySpeedMult = 1;
  }

  draw() {
    this.game.context.drawImage(this.image,
      -this.image.width*this.scale/2 + this.xPosition,
      this.yPosition,
      this.image.width*this.scale,
      this.image.height*this.scale);
  }

  turn(direction) {
    if (direction === 'left') {
      console.log('turning left');
      this.xVelocity -= this.xSpeedMult;
    } else if (direction === 'right') {
      console.log('turning right');
      this.xVelocity += this.xSpeedMult;
    }
  }
}