class Game {
  constructor() {
    this.frameCount = 0;
    this.canvas = null;
    this.ctx = null;
    this.road = null;
    this.car = null;
    this.obstacles = [];
    this.moveSpeed = 5;
    this.init();
    this.intervalId = null;
  }
  init() {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.getElementById("start-button").addEventListener("click", () => {
      this.startGame();
    });
  }
  startGame() {
    this.createEventListeners();
		this.road = new Road(this.canvas, this.ctx, this.moveSpeed)
		this.car = new Car(this.canvas, this.ctx)
    this.drawAll()
    // this.oneObstacle = new Obstacles(this.canvas, this.ctx, this.moveSpeed)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawAll() {
    if (this.frameCount === 60) {
      this.obstacles.push(new Obstacles(this.canvas, this.ctx, this.moveSpeed));
      this.frameCount = 0;
    }
		this.clear()
		this.road.draw()
		this.road.move()
		this.car.draw()

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
      this.obstacles[i].move();
      if (this.checkCollision(this.obstacles[i])) {
        cancelAnimationFrame(this.intervalId);
        return;
      }
    }
    this.frameCount++;
    // this.oneObstacle.draw()
    // this.oneObstacle.move()

		this.frameCount++
		this.intervalId = requestAnimationFrame(() => this.drawAll())
	}
  

	createEventListeners() {
		window.addEventListener("keydown", (e) => {
			if (e.code === "ArrowLeft") {
				this.car.moveLeft()
			}
			if (e.code === "ArrowRight") {
				this.car.moveRight()
			}
		})
	}

	checkCollision(obstacle) {
		const carFrontEdge = this.car.y
		const carRearEdge = carFrontEdge + this.car.height
		const carLeftEdge = this.car.x
		const carRightEdge = carLeftEdge + this.car.width
		// console.log(obstacle.x, obstacle.y)
		const withinX =
			obstacle.x + obstacle.width > carLeftEdge && obstacle.x < carRightEdge
		const withinY = obstacle.y > carFrontEdge && obstacle.y < carRearEdge
		// console.log(withinX)
		console.log(withinX && withinY)
		return withinX && withinY
	}
}
