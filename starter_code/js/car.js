class Car {
  constructor(game){
    this.game = game;
    this.position = CENTER;
    this.direction;
    this.obstacles = this.game.obstacles;

    this.CAR_WIDTH = 50;
    this.CAR_HEIGHT = 100;
    this.CAR_MOVEMENT_SIZE = 28;
  }

  //Paint
  paintCar() {
    const ctx = this.game.ctx;
    const carImg = new Image;
    carImg.src = 'images/car.png';
    const CAR_OFFSET = 25;

    carImg.addEventListener('load', event => {
      ctx.drawImage(carImg, this.position - CAR_OFFSET, 460, 50, 100);
    });
  }


  //Logic
  move() {
    // const CAR_MOVEMENT_SIZE = 28;
    switch (this.direction) {
      case 'left':
        // check if on track
        if (this.position > TRACK_LEFT + this.CAR_MOVEMENT_SIZE + 16 && this.position <= TRACK_RIGHT) {
          this.position -= this.CAR_MOVEMENT_SIZE;
        }
        this.direction = null;
        break;
      case 'right':
        // check if on track
        if (this.position >= TRACK_LEFT && this.position <= TRACK_RIGHT - this.CAR_MOVEMENT_SIZE) {
          this.position += this.CAR_MOVEMENT_SIZE;
        }
        // console.log(this.position);
        this.direction = null;
        break;
      }
  }


  // Logic
  changeDirection (direction) {
    this.direction = direction;
  }

}