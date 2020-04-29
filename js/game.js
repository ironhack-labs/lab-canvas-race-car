const game = {

    name: 'Canvas Race Car',
    author: 'Gerard',
    version: '1.0.0',
    license: undefined,
    canvasElement: undefined,
    ctx: undefined,
    canvasSize: {
        width: document.querySelector("#canvas").width, //Lo hago asi porque ya viene declarado en el HTML su valor
        height: document.querySelector("#canvas").height,
    },

    car: undefined,
    obstacles: [],
    counter: 0, //Lo usamos como variable contadora (generar obstaculos) + score

    userActions: {
        righPressed: false,
        leftPressed: false
    },

    gamePlaying: false,

    gameInterval: undefined,

    startGame() {

        this.gamePlaying = true
        this.canvasElement = document.querySelector("#canvas")
        this.canvasElement.width = this.canvasSize.width
        this.canvasElement.height = this.canvasSize.height
        this.ctx = this.canvasElement.getContext("2d")
        this.drawBoard()
        this.drawCarStart()
        this.setEventListeners()


        this.refreshGame()

    },

    refreshGame() {

        this.gameInterval = setInterval(() => {
            this.drawBoard()
            this.car.drawCar()

            this.counter % 200 === 0 && this.obstacles.push(new Obstacle(this.ctx, this.car, this.canvasSize))


            this.obstacles.forEach((obstacle, index) => {
                obstacle.drawObstacle()
                obstacle.moveObstacle()
                obstacle.isRemovable() && this.obstacles.splice(index, 1)
                this.car.hasCrashed(obstacle) ? this.gamePlaying = false : null
            })


            this.drawScore()
            this.counter++

            if (!this.gamePlaying) {

                clearInterval(this.gameInterval)
                alert("Game Over! - Your final score: " + this.counter)
            }

        }, 10)

    },

    // Car Drawing    
    drawCarStart() {

        this.car = new Car(this.ctx, this.canvasSize)
        this.car.init()
    },


    drawBoard() {

        this.drawGrass()
        this.drawRoad()
        this.drawSideLine(70)
        this.drawSideLine(430)
        this.drawMiddleLines()

    },

    drawGrass() {

        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    drawRoad() {

        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(50, 0, this.canvasSize.width - 100, this.canvasSize.height)
    },

    drawSideLine(posX) {

        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.moveTo(posX, 0)
        this.ctx.lineTo(posX, this.canvasSize.height)
        this.ctx.stroke()
    },

    drawMiddleLines() {

        this.ctx.beginPath()
        this.ctx.lineWidth = 8
        for (let posY = 5; posY < this.canvasSize.height; posY += 80) {

            this.ctx.moveTo((this.canvasSize.width / 2) - 4, posY)
            this.ctx.lineTo((this.canvasSize.width / 2) - 4, posY + 50)

        }
        this.ctx.stroke()
    },


    clearScreen() {

        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },


    setEventListeners() {

        document.onkeydown = event => {

            if (event.keyCode === 37) {
                this.car.move("left")
            };

            if (event.keyCode === 39) {
                this.car.move("right")
            }
        }

    },

    /*
    	// Draw Score
    	drawScore() {

    		this.ctx.font = "bold 20px sans-serif"
    		this.ctx.fillStyle = "white"
    		this.ctx.fillText("Score: " + this.counter, 80, 50)

    	}
     */
}