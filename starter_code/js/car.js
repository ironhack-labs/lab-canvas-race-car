class Car {
  constructor(game){
    this.game = game;
    this.position = CENTER;
    this.direction;
  }

  //Paint
  paintCar() {
    const ctx = game.ctx;
    const carImg = new Image;
    carImg.src = 'images/car.png';
    const CAR_OFFSET = 25;

    carImg.addEventListener('load', event => {
      ctx.drawImage(carImg, this.position - CAR_OFFSET, 460, 50, 100);
    });
  }


  //Logic
  move() {
    // Track width: 310
    const CAR_MOVEMENT_SIZE = 14;
    const TRACK_LEFT = 30;
    const TRACK_RIGHT = 340;

    switch (this.direction) {
      case 'left':
        // check if on track
        if (this.position > TRACK_LEFT + CAR_MOVEMENT_SIZE + 16 && this.position <= TRACK_RIGHT) {
          this.position -= 14;
        }
        console.log(this.position);
        this.direction = null;
        break;
      case 'right':
        // check if on track
        if (this.position >= TRACK_LEFT && this.position <= TRACK_RIGHT - CAR_MOVEMENT_SIZE) {
          this.position += 14;
        }
        console.log(this.position);
        this.direction = null;
        break;
      }
  }


  // Logic
  changeDirection (direction) {
    this.direction = direction;
  }

}