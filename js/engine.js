const gameEngine = {

    name: 'Island Racer',
    author: 'Jon Arechalde',
    version: '1.0.0',
    license: undefined,
    description: 'A game to prove your ability',

    canvas: {
        id: undefined,
        canvasSize: {
            width: undefined,
            height: undefined
        },
        itemInDOM: undefined
    },

    ctx: undefined,
    player: undefined,
    movingIteration: undefined,
    frames: 0,

    colliders: {
        sideLines: {

            xLeft: undefined,
            xRight: undefined,
            isLeftColliding: false,
            isRightColliding: false

        },

        walls: []
    },

    wallsFrecuency: 1200,   // ==> Goes down every 10 points (Gets harder!!!)

    score: {

        position: {

            x: 0,
            y: 0

        },

        value: 0

    },

    roadOffset: 0,   // ==> For animating the road

    renderInterval: undefined,

    wallsCreatorInterval: undefined,

    init(canvasId) {

        this.canvas.id = canvasId

        this.canvas.itemInDOM = document.getElementById(this.canvas.id)

        // We store the Canvas Rendering Context 2d for using its methods later
        this.ctx = this.canvas.itemInDOM.getContext('2d')

        this.storeCanvasDimensions()

        // We instantiate the player
        this.player = new Car(this.ctx, this.canvas)

        this.createWalls()

        // We draw the element in the canvas
        this.renderImage()

        this.setEventHandlers()
    },

    storeCanvasDimensions() {

        this.canvas.canvasSize = {

            width: this.canvas.itemInDOM.getAttribute('width'),
            height: this.canvas.itemInDOM.getAttribute('height')

        }

    },


    //----- RENDERING METHODS -----

    renderImage() {

        this.renderInterval = setInterval(() => {

            this.movePlayer()

            // Clear screen
            this.ctx.clearRect(0, 0, this.canvas.canvasSize.width, this.canvas.canvasSize.height)

            // We draw the road
            this.drawRoad()
            this.ctx.lineDashOffset -= 4.7

            // We draw the car
            this.drawPlayer()

            // We draw the obstacles
            this.drawWalls()

            // We check collision with walls
            if (this.colliders.walls.length > 0 && this.checkWallsCollision()) {

                this.finishGame()

            }

            // We delete obstacles out of boundaries
            this.deleteOutsiderWalls()

            // We draw the score
            this.drawScore()

        }, 20);

    },

    drawRoad() {

        // The green background
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvas.canvasSize.width, this.canvas.canvasSize.height)

        // The grey rectangle
        const sideMargin = 40

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(sideMargin, 0, this.canvas.canvasSize.width - sideMargin * 2, this.canvas.canvasSize.height)

        // The side lines
        const linesMargin = 20
        const sideLineWidth = 10
        this.ctx.setLineDash([])

        // Left line
        this.ctx.lineWidth = sideLineWidth
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(sideMargin + linesMargin, 0)
        this.ctx.lineTo(sideMargin + linesMargin, this.canvas.canvasSize.height)
        this.ctx.stroke()

        // Right line
        this.ctx.lineWidth = sideLineWidth
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvas.canvasSize.width - (sideMargin + linesMargin), 0)
        this.ctx.lineTo(this.canvas.canvasSize.width - (sideMargin + linesMargin), this.canvas.canvasSize.height)
        this.ctx.stroke()

        // Center dashed line
        const linesAmount = 15

        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([this.canvas.canvasSize.height / (linesAmount * 2 - 1), this.canvas.canvasSize.height / (linesAmount * 2 - 1)])
        this.ctx.moveTo(this.canvas.canvasSize.width / 2, 0)
        this.ctx.lineTo(this.canvas.canvasSize.width / 2, this.canvas.canvasSize.height)
        this.ctx.stroke()

        // We store the road's collision limits in x
        const totalMargin = sideMargin + linesMargin + sideLineWidth / 2
        this.setRoadLimits(totalMargin)

    },

    setRoadLimits(margin) {

        this.colliders.sideLines.xLeft = margin
        this.colliders.sideLines.xRight = this.canvas.canvasSize.width - margin

    },

    drawPlayer() {

        this.player.drawCar()

    },

    drawGameOver() {

    },

    drawWalls() {

        this.colliders.walls.forEach(elm => elm.drawWall())

    },

    drawScore() {

        // We draw the 'Score'
        this.ctx.fillStyle = 'white'
        this.ctx.font = '30px sans-serif'
        this.ctx.fillText(`Score: ${this.score.value}`, 80, 60)

    },


    //----- MOTION METHODS -----

    movePlayer() {

        // If we don't have to move the player
        if (!this.player.isMoving.left && !this.player.isMoving.right) {

            return

        }

        if (this.player.isMoving.left) {

            if (this.colliders.sideLines.isLeftColliding) {

                this.player.isMoving.left = false

                return

            }

            this.player.moveCar('left')

        } else {

            if (this.colliders.sideLines.isRightColliding) {

                this.player.isMoving.right = false

                return

            }

            this.player.moveCar('right')

        }

        // We chech collisions
        this.checkSidesCollisions()

        // // First we set car's new position
        // this.player.moveCar(direction)

    },

    stopPlayer() {

        this.player.isMoving.left = false
        this.player.isMoving.right = false

    },


    //----- WALLS CREATORS -----

    createWalls() {

        this.wallsCreatorInterval = setTimeout(() => {

            this.colliders.walls.push(new Wall(this.ctx, this.canvas))

            this.createWalls()

        }, this.wallsFrecuency);

    },

    deleteOutsiderWalls() {

        const firstWall = this.colliders.walls[0]

        // If theres a first item into the array
        if (firstWall && firstWall.position.y >= this.canvas.canvasSize.height) {

            this.colliders.walls.shift(0)

            this.addPoints()

        }

    },


    //----- OBSTACLE HANDLING -----

    checkSidesCollisions() {

        const collisionMargin = 10

        // Collisions with the sides
        if (this.player.position.x - collisionMargin < this.colliders.sideLines.xLeft) {


            this.colliders.sideLines.isLeftColliding = true


        } else if (this.player.position.x + this.player.size.width + collisionMargin > this.colliders.sideLines.xRight) {


            this.colliders.sideLines.isRightColliding = true

        }

    },

    checkWallsCollision() {

        const rect1 = this.colliders.walls[0]
        const rect2 = this.player

        // Collisions with the walls
        if (rect1.position.x < this.player.position.x + this.player.size.width &&
            rect1.position.x + rect1.size.width > this.player.position.x &&
            rect1.position.y < this.player.position.y + this.player.size.height &&
            rect1.position.y + rect1.size.height > this.player.position.y) {
            // collision detected!

            return true

        }

    },


    //----- SCORE -----

    addPoints() {

        this.score.value += 1

        if (this.score.value % 5 === 0) {

            // The creation frecuency goes down so the game gets harder
            this.wallsFrecuency -= 200

        }

    },


    //----- GAME OVER -----

    finishGame() {

        this.drawGameOver()
        clearInterval(this.renderInterval)
        clearInterval(this.wallsCreatorInterval)

    },

    drawGameOver() {

        // We draw the black background
        const sideMargin = 75
        const topMargin = 250

        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(sideMargin, topMargin, this.canvas.canvasSize.width - sideMargin * 2, this.canvas.canvasSize.height - topMargin * 2)

        // We draw the 'Game Over!' text
        this.ctx.fillStyle = 'red'
        this.ctx.font = '40px sans-serif'
        this.ctx.fillText('Game Over!', (this.canvas.canvasSize.width / 2) - 110, (this.canvas.canvasSize.height / 2) - 40)

        // We draw the 'Your final score' text
        this.ctx.fillStyle = 'white'
        this.ctx.fillText('Your final score', (this.canvas.canvasSize.width / 2) - 140, (this.canvas.canvasSize.height / 2) + 20)

        // We draw the score value
        let correction = 10

        if (this.score.value > 9) {

            correction = 25

        }


        this.ctx.fillText(this.score.value, (this.canvas.canvasSize.width / 2) - correction, (this.canvas.canvasSize.height / 2) + 70)

    },


    //----- EVENT HANDLERS -----

    setEventHandlers() {

        window.onkeydown = (e) => {

            if (!this.player.isMoving.left && !this.player.isMoving.right) {

                // We activate the isMovingLeft boolean of the object
                if (e.keyCode === 37) {

                    if (this.colliders.sideLines.isLeftColliding) {

                        return

                    }

                    this.colliders.sideLines.isRightColliding = false

                    this.player.isMoving.left = true

                } else if (e.keyCode === 39) {  // We activate the isMovingRight boolean of the object


                    if (this.colliders.sideLines.isRightColliding) {

                        return

                    }

                    this.colliders.sideLines.isLeftColliding = false

                    this.player.isMoving.right = true

                }

            }

        }

        window.onkeyup = () => {

            this.stopPlayer()

        }

    }
}