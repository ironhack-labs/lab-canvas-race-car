class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId)
		this.ctx = this.canvas.getContext("2d")
		this.bg = new Background(this.ctx)
		this.car = new Car(this.ctx, 230, 600)
		this.intervalId = null
		this.obstacles = []
		this.tick = 0
    this.yourScore = 0
	}

	start() {
		this.intervalId = setInterval(() => {
			this.clear()
			this.move()
			this.draw()
			this.checkCollisions()
      this.score()
			this.tick++
			if (this.tick % 55 === 0) {
				this.sound;
				this.addObstacle()
        this.yourScore++;
			}
		}, 1000 / 60)
	}

	draw() {
		this.bg.draw()
		this.car.draw()
		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
		})
	}

	move() {
		this.car.move()
		this.obstacles.forEach((obstacle) => {
			obstacle.move()
		})
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.obstacles = this.obstacles.filter(
			(obstacle) => obstacle.y < this.canvas.height
		)
	}

	addObstacle() {
		const randomWidth = Math.random() * 100 + 50
		const randomX = Math.random() * (this.canvas.width - randomWidth)
		const obstacle = new Obstacle(
			this.ctx,
			randomX,
			-this.car.height,
			randomWidth
		)
		this.obstacles.push(obstacle)
	}

	checkCollisions() {
		if (this.obstacles.some((obstacle) => this.car.isColliding(obstacle))) {
			alert("GAME OVER COMPADRE")
			clearInterval(this.intervalId)
			document.location.reload()
		}
	}

	score() {
		this.ctx.fillText("Old saves " + `${this.yourScore}`, 20, 30)
	}
}
