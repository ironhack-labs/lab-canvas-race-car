class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');
    // Canvas dimensions
    this.HEIGHT = $canvas.height;
    this.WIDTH = $canvas.width;
    // Road dimensions
    this.WIDTH_OF_ROAD = 320;
    this.TRACK_LEFT = 30;
    this.TRACK_RIGHT = 340;
    // When new game instance is created keyboard bindings are initiated
    this.controls = new Controls(this);
    this.controls.setKeyBindings();

    this.timer;

    this.previousScore = 0;
    this.score = 0;

    this.GRID_X = 30;
    this.GRID_SQUARE = 40;
    this.COLS = this.WIDTH_OF_ROAD / 40;
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
    this.speed = 1000/3;
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

    return (obstacleY >= this.HEIGHT - CAR_HEIGHT && 
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
    printLoose();
    document.clearTimeout(this.timer);
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