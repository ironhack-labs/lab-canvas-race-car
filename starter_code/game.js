class Game {
	constructor(ctx) {
		this.ctx = ctx
		this.board = new Board(ctx)
		this.car = new Car(ctx)
		this.intervalId = null
		this.tick = 0
		this.obstacles = [
			new Obstacle(ctx)
		]

		this.audio = new Audio("http://sonidosmp3gratis.com/sounds/street-fighter")
		this.audio.loop = true;

		this.gameOverAudio = new Audio("http://sonidosmp3gratis.com/sounds/street-fighter-lose")
	}

	run() {

		this.audio.play()

		this.intervalId = setInterval(() => {
			this._clear()
			this._draw()
			this._move()
			this._checkCollisions()
			this._clearObstacles()
		}, FPS)
	}

	_clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
	}

	_draw() {
		this.board.draw()
		this.car.draw()
		this.obstacles.forEach(o => o.draw())

		this.tick += 1

		if (this.tick % 150 === 0) {
			this.tick = 0;
			this._addObstacle()
		}

	}

	_move() {
		this.board.move()
		this.car.move()
		this.obstacles.forEach(o => o.move())
	}

	_addObstacle() {
		this.obstacles.push(
			new Obstacle(this.ctx)
		)
	}

	_clearObstacles() {
		this.obstacles = this.obstacles.filter(o => {
			return o.y + o.h <= this.ctx.canvas.height
		})
	}

	_checkCollisions() {
		const col = this.obstacles.some(o => {
			return o.collide(this.car)
		})

		if (col) {
			this._gameOver()
		}
	}

	_gameOver() {
		this.audio.pause()
		clearInterval(this.intervalId)

		this.gameOverAudio.play()
		this.ctx.font = "40px Comic Sans MS";
		this.ctx.textAlign = "center";
		this.ctx.fillText(
			"GAME OVER",
			this.ctx.canvas.width / 2,
			this.ctx.canvas.height / 2
		);
	}

}