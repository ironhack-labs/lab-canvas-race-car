class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.intervalId = null;

        this.board = new Board(this.ctx)
        this.car = new Car(this.ctx)
        this.obstacles = []
        this.tick = 0
    }

    //clean draw move
    run() {
        this.intervalId = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
            this._checkCollisions()
        }, 1000 / 60)
     }

    _clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    
    _draw(){
        this.board.draw();
        this.car.draw();
        this.obstacles.forEach(o => {
            o.draw()
        })

        this.tick++

        if (this.tick > Math.random() * 300 + 200) {
            this.tick = 0
            this._createObstacle()
        }
    }

    _move(){
        this.board.move();
        this.car.move();
        this.obstacles.forEach(o => {
            o.move()
        })
    }

    _createObstacle() {
        this.obstacles.push(
            new Obstacle(this.ctx)
        );
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
		clearInterval(this.intervalId)
		this.ctx.font = "40px Comic Sans MS";
		this.ctx.textAlign = "center";
		this.ctx.fillText(
			"GAME OVER",
			this.ctx.canvas.width / 2,
			this.ctx.canvas.height / 2
		);
	}


}