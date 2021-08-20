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

  startGame() {
    this.car = new Car(60, 120, 30, this.carCanvas, this.carImgPath);
    this.road = new Road(510, 700, 3, this.roadCanvas, this.roadImgPath);
    this.obstacles = new Obstacles(
      180,
      40,
      3,
      this.obstacleCanvas,
      this.obstacleImgPath
    );
    document.addEventListener("keydown", (e) => this.keyAction(e));

    this.createObstacles();
    this.updateAllCanvas();
  },

  keyAction(event) {
    if (event.key === "ArrowLeft")
      this.car.moveLeft(-this.roadCanvas.width + this.car.width);
    if (event.key === "ArrowRight")
      this.car.moveRight(this.roadCanvas.width - this.car.width);
  },

  createObstacles() {
    this.obstacles.arrObstacles.push(
      new Obstacles(180, 40, 3, this.obstacleCanvas, this.obstacleImgPath)
    );
    setInterval(() => {
      this.obstacles.add(
        new Obstacles(180, 40, 3, this.obstacleCanvas, this.obstacleImgPath)
      );
    }, 1000);
  },

  updateAllCanvas() {
    this.road.update();
    this.car.update();
    this.obstacles.arrObstacles.forEach((obstacle) => {
      obstacle.update();
    });
    this.obstacles.delete();

    requestAnimationFrame(() => this.updateAllCanvas());
  },
};
