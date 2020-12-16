class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx)

        this.img = new Image()
        this.img.src = '/images/car.png'

        this.car = new Car(this.ctx, 210, 500, 70, 150, this.img)
        this.interval = undefined

        this.isStart = false

        this.obstacles = []
        this.obstaclesDrawCount = 0
        this.score = 0
    }
    start() {

        this.setListeners()
        if (!this.isStart) {


            this.interval = setInterval(() => {
                this.clear()

                this.drawBackground()

                this.move()

                this.drawCar()

                this.drawObstacles()

                this.checkCollitions()

                this.drawScore()

                this.obstaclesDrawCount++

                if (this.obstaclesDrawCount % 200 === 0) {
                    this.moreNewObs()
                    this.obstaclesDrawCount = 0
                }

            }, 1000 / 60)
            this.isStart = true
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.ctx.canvas.height)
    }

    drawBackground() {
        this.background.draw()
        this.car.draw()
        
    }

    drawObstacles() {
        this.obstacles.forEach(obstacle => {
            obstacle.draw()
        });

    }

    moreNewObs() {
        let maxW = this.ctx.canvas.width - 150
        let minW = 270
        let obstacleW = Math.floor(Math.random() * (maxW - minW) + minW)
        let maxX = this.ctx.canvas.width - minW
        let minX = -minW
        let obstaclePosition = Math.floor(Math.random() * (maxX - minX) + minX)

        this.obstacles.push(new Obstacle(
            this.ctx,
            obstaclePosition,
            0,
            obstacleW
        ))
        this.score++
    }

    drawCar() {
        
    }

    move() {
        this.background.move()
        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })
    }

    stop() {
        clearInterval(this.interval)
        this.isStart = false

        this.ctx.save()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.ctx.font = '35px Arial'
        this.ctx.fillStyle = 'red'
        this.ctx.textAlign = 'center'
        this.ctx.fillText('Game Over!',
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 - 50)
        this.ctx.font = '24px Arial'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`Your final score: ${this.score} points`,
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 + 50)

        this.ctx.restore()
    }

    checkCollitions() {
        if (this.obstacles.some(obstacle => this.car.collides(obstacle))) {
            this.stop()
        }
    }

    drawScore() {
        ctx.save()
        this.ctx.font = '20px Arial'
        this.ctx.fillStyle = 'black'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(`Score: ${this.score}`,
            this.ctx.canvas.width - 125,
            this.ctx.canvas.height - 50)

        ctx.restore()
    }

    setListeners() {
        document.onkeydown = event => {
            switch (event.keyCode) {
                case RIGHT:
                    this.car.move(boost)
                    break;
                case LEFT:
                    this.car.move(-boost)
                    break;
            }
        }
    }
}

const RIGHT = 39
const LEFT = 37
const boost = 8