class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');

    //Put canvas dimensions here!
    // ---

    this.controls = new Controls(this);
    // When new game instance is created keyboard bindings are initiated
    this.controls.setKeyBindings();

    this.previousScore = 0;
    this.score = 0;

    this.GRID_X = 30;
    this.GRID_SQUARE = 40;
    this.COLS = WIDTH_OF_ROAD / 40;

    this.timer;
  }

  // Control & logic
  triggerControl (direction) {
    this.car.changeDirection(direction);
  }

  startGame() {
    this.obstacles = new Obstacles(this);
    this.obstacles.generateObstacle();
    this.track = new Track(this);
    this.car = new Car(this);
    this.speed = 500;
    this.loop();
  }

  // object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x
  collision(car, obstacle) {
    const carX = this.car.position;
    const obstacleX = this.obstacles.obstaclesArray[0].xSqs * this.GRID_SQUARE + 30;
    //bottom of lowest obstacle
    const obstacleY = this.obstacles.obstaclesArray[0].ySqs * this.GRID_SQUARE;
    const obstacleWidth = this.obstacles.obstaclesArray[0].widthSqs * this.GRID_SQUARE;
    const CAR_WIDTH = this.CAR_WIDTH = 50;
    const CAR_HEIGHT = this.CAR_HEIGHT = 100;

    return (obstacleY >= HEIGHT - CAR_HEIGHT && 
            carX < obstacleX + obstacleWidth &&
            carX + CAR_WIDTH > obstacleX)
  }

  runGameLogic () {
    switch (this.collision()) {
      case false:
        this.car.move();
        break;
      case true:
        this.loose();
        break;
    }
    this.obstacles.generateObstacle();
    this.obstacles.moveObstacle();
    this.collision();
    this.gameSpeed();
  }

  paint () {
    this.track.paintTrack();
    this.car.paintCar();
    this.obstacles.paintObstacles();
    // this.printScore();
  }
  
  gameSpeed() {
    if (this.score > 10 && this.score % 10 === 0) {
      this.speed *= 0.95;
    }
  }
  
  printScore() {
    // put some logic here to only print when score increments
    if (this.score > this.previousScore) {
      console.log(`Score: ${this.score}`);
    }
  }

  loose() {
    // clearTimout() doesn't work...
    this.speed = 600000;
    console.log('You loose!!!');
    printLoose();
  }

  // Get some animation!
  loop () {
    this.timer = setTimeout(() => {
      this.runGameLogic();
      this.paint();
      this.loop();
    }, this.speed);
  }

}