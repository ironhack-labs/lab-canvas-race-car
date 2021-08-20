const app = {
  carCanvas: document.getElementById("car-canvas"),
  roadCanvas: document.getElementById("road-canvas"),
  obstacleCanvas: document.getElementById("car-canvas"),
  obstacleImgPath: "../images/obstacle.png",
  carImgPath: "../images/car.png",
  roadImgPath: "../images/road.jpg",
  car: null,
  road: null,
  obstacles: null,
  speed: 3,
  score: 0,

  startGame() {
    this.car = new Car(
      60,
      120,
      this.speed * 10,
      this.carCanvas,
      this.carImgPath
    );
    this.road = new Road(
      510,
      700,
      this.speed,
      this.roadCanvas,
      this.roadImgPath
    );
    this.obstacles = new Obstacles(
      180,
      40,
      this.speed,
      this.obstacleCanvas,
      this.obstacleImgPath
    );
    document.addEventListener("keydown", (e) => this.keyAction(e));

    this.createObstacles();
    this.updateAllCanvas();
  },

  keyAction(event) {
    if (event.key === "ArrowLeft") this.car.moveLeft();
    if (event.key === "ArrowRight") this.car.moveRight();
  },

  createObstacles() {
    this.obstacles.arrObstacles.push(
      new Obstacles(
        180,
        40,
        this.speed,
        this.obstacleCanvas,
        this.obstacleImgPath
      )
    );
    setInterval(() => {
      this.obstacles.add(
        new Obstacles(
          180,
          40,
          this.speed,
          this.obstacleCanvas,
          this.obstacleImgPath
        )
      );
    }, 1000);
  },
  checkCollision() {
    const car = this.car;
    const obstacle = this.obstacles.arrObstacles[0];

    const carLeft = car.x;
    const carRight = car.x + car.width;
    const carTop = car.y;
    const carBottom = car.y + car.height;

    const obstacleLeft = obstacle.x;
    const obstacleRight = obstacle.x + obstacle.width;
    const obstacleTop = obstacle.y;
    const obstacleBottom = obstacle.y + obstacle.height;

    let crash = true;

    if (
      carBottom < obstacleTop ||
      carTop > obstacleBottom ||
      carRight < obstacleLeft ||
      carLeft > obstacleRight
    ) {
      crash = false;
    }
    this.gameOver(crash);
  },
  updateScore() {
    this.score = Math.floor(this.score + 1);
    const context = this.carCanvas.getContext("2d");
    context.font = "30px serif";
    
    context.fillStyle = "#b70009";
    context.strokeStyle = "#ffe800";
    context.fillText(`Score: ${this.score}`, 20, 50);

    context.strokeText(`Score: ${this.score}`, 20, 50);
  },

  updateAllCanvas() {
    this.road.update();
    this.car.update();
    this.checkCollision();
    this.obstacles.arrObstacles.forEach((obstacle) => {
      obstacle.update();
    });
    this.obstacles.delete();
    this.updateScore();

    requestAnimationFrame(() => this.updateAllCanvas());
  },

  gameOver(over) {
    if (over) {
      alert("Game over");
      location.reload();
    }
  },
};
