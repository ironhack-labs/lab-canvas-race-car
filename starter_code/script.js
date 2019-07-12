window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		startGame.init('canvas')
	}

	let startGame = {
		canvas: undefined,
		ctx: undefined,
		obstacles: [],
		framesCounter: 0,

		init: function(id) {
			this.canvas = document.getElementById(id)
			this.ctx = this.canvas.getContext('2d')
			this.canvas.width = window.innerWidth * 0.4
			this.canvas.height = window.innerHeight * 0.96
			this.start()
		},

		start: function() {
			this.restart()
			this.interval = setInterval(() => {
				this.clear()
				this.framesCounter++
				if (this.framesCounter > 10000) {
					this.framesCounter = 0
				}
				if (this.framesCounter % 330 == 0) {
					this.generateObstacles()
					console.log(this.obstacles)
				}
				this.drawBackground()
				this.drawLine()
				if (this.isCollision()) this.gameOver()
				this.car.draw(this.ctx)
				this.obstacles.forEach(obstacle => obstacle.draw(this.ctx))
				this.obstacles.forEach(obstacle => obstacle.moveObstacle())
				this.clearObstacles()
				this.car.moveCar()
			}, 10)
		},

		restart: function() {
			this.car = new Car(this.canvas.width / 2, 500)
			this.obstacles = []
		},

		clearObstacles: function() {
			this.obstacles.forEach((obs, idx) => {
				if (obs.y > this.canvas.height) {
					this.obstacles.splice(idx, 1)
				}
			})
		},

		drawBackground: function() {
			this.ctx.fillStyle = 'green'
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
			this.ctx.fillStyle = 'grey'
			this.ctx.fillRect(35, 0, this.canvas.width - 70, this.canvas.height)
			this.ctx.fillStyle = 'white'
			this.ctx.fillRect(45, 0, this.canvas.width - 90, this.canvas.height)
			this.ctx.fillStyle = 'grey'
			this.ctx.fillRect(55, 0, this.canvas.width - 110, this.canvas.height)
		},

		clear: function() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		},

		generateObstacles: function() {
			this.obstacles.push(new Obstacle(Math.random() * 200, 0, this.canvas.width / 2))
			console.log('obstacle x', this.obstacles[0].x)
			console.log('obstacle length', this.obstacles[0].length)
			console.log('car x', this.car.x)
		},

		drawLine: function() {
			this.ctx.strokeStyle = 'white'
			this.ctx.lineWidth = 8
			this.ctx.setLineDash([40, 20])
			this.ctx.beginPath()
			this.ctx.moveTo(this.canvas.width / 2, 0)
			this.ctx.lineTo(this.canvas.width / 2, this.canvas.height)
			this.ctx.stroke()
		},
		isCollision: function() {
			return this.obstacles.some(obstacle => {
				return (
					this.car.y < obstacle.y + obstacle.height &&
					this.car.y + this.car.height > obstacle.y &&
					this.car.x + this.car.width > obstacle.x &&
					this.car.x < obstacle.x + obstacle.length
				)
			})
		},

		gameOver: function() {
			clearInterval(this.interval)
		}
	}
}
