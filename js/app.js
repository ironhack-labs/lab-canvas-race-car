const app = {
  startButton: document.getElementById("start-button"),
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
  over: false,
  intervalId: null,

  startGame() {
    this.startButton.setAttribute("disabled", true);

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

    this.intervalId = setInterval(() => {
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

    const obstacleLeft = obstacle.x + 2;
    const obstacleRight = obstacle.x + obstacle.width - 2;
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
    return this.gameOver(crash);
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
    if (this.checkCollision()) {
      this.startButton.removeAttribute("disabled");
      clearInterval(this.intervalId);
      this.score = 0;
      return;
    }

    this.road.update();
    this.car.update();
    this.obstacles.arrObstacles.forEach((obstacle) => {
      obstacle.update();
    });
    this.obstacles.delete();
    this.updateScore();

    requestAnimationFrame(() => this.updateAllCanvas());
  },

  gameOver(over) {
    if (over) {
      const context = this.carCanvas.getContext("2d");
      context.fillStyle = "#000000";
      context.fillRect(0, 0, this.carCanvas.width, this.carCanvas.height);
      context.font = "30px serif";
      context.fillStyle = "#b70009";
      context.fillText(`GAME OVER`, 167, 250);
      context.fillStyle = "#FFFFFF";
      context.fillText(`Your final score:`, 143, 350);
      context.fillStyle = "#2064bd";
      context.fillText(`${this.score}`, 240, 400);
    }
    return over;
  },
};
