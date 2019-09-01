const C_GRASS = '#008100'
const C_ROAD = '#20201f'
const C_ROADLINE = '#FFFFFF'
const C_LEVEL = '#f5543b'
const C_UI = '#a5b1c4'
var C_OBSTACLE = '#974E4E'
const I_CAR = `images/car${Math.floor(Math.random()*4+1)}.png`
var CAR_SPEED = 7


var interval = undefined
var canvas = document.getElementById('canvas');
canvas.style.width = '100%'
canvas.style.height = '100%'
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

var ctx = canvas.getContext('2d');
var world = undefined

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function randBetween(x1, x2) {
    return Math.random() * (x2 - x1) + x1
}

class Rect {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    get bbox() {
        return {
            left: this.x,
            top: this.y,
            right: this.x + this.width,
            bottom: this.y + this.height
        }
    }

    draw() {
        let prevStyle = ctx.fillStyle
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = prevStyle
    }

    update(speed) {
        null
    }

    checkCollision(rect) {
        let self = this.bbox,
            other = rect.bbox
        return !(self.left > other.right || self.right < other.left || self.bottom < other.top || self.top > other.bottom)
    }
}

class RoadLines extends Rect {
    constructor(x, y, width, height, color, numLines) {
        super(x, y, width, height, color)
        this.lineHeight = 25
        this.lineSpacing = 35
        this.offset = 0
        this.lines = []

        let j = 0
        for (let i = 0; i < canvas.height; i += this.lineHeight + this.lineSpacing) {
            this.lines.push(new Rect(this.x, i, this.width, this.lineHeight, this.color))
            j++;
        }
    }

    update(speed) {
        if (this.offset < canvas.height) {
            this.lines.map(line => {
                line.y += speed
                line.y %= (canvas.height + this.lineSpacing)
                this.offset = 1
            })
        }
    }

    draw() {
        this.lines.map(line => line.draw())
    }
}

class Car extends Rect {
    constructor(x, y, width, height, color, imageSource) {
        super(x, y, width, height, color)
        this.scaleDivider = 4
        this.image = new Image()
        this.image.src = imageSource
        this.image.onload = function() {
            this.width = this.image.naturalWidth / this.scaleDivider
            this.height = this.image.naturalHeight / this.scaleDivider
            this.x -= this.width / 2
            this.y -= this.height + this.height / 3
        }.bind(this)
        this.speedX = 0
        this.speedY = 0
    }

    draw() {
        ctx.save()
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 15;
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.width, this.height);
        ctx.restore()
    }

    update(road) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < road.bbox.left) {
            this.x += this.width / 2
            this.speedX = 0
        } else if (this.bbox.right > road.bbox.right) {
            this.x -= this.width / 2
            this.speedX = 0
        }

        if (this.y < 0) {
            this.y += this.height / 4
            this.speedY = 0
        } else if (this.bbox.bottom > canvas.height) {
            this.y -= this.height / 4
            this.speedY = 0
        }
    }
}

class Obstacle extends Rect {
    constructor(road, car) {
        let randomWidth = Math.max(randBetween(road.bbox.left, road.bbox.right - car.width * 4), road.width / 3)
        let randomX = randBetween(road.bbox.left, road.bbox.right - randomWidth)
        super(randomX, 0, randomWidth, 30, C_OBSTACLE)
    }

    update(speed) {
        this.y += speed
    }
}

class World {
    constructor() {
        interval = window.setInterval(this.increaseDifficulty.bind(this), 8000)
        this.distance = 0
        this.lastLevel = 0
        this.level = 1
        this.speed = 4
        this.obstacleInterval = 700
        this.obstacleCounter = 0
        this.gameOver = false

        this.roadMargin = 25
        this.roadLineMargin = 5
        this.roadLineWidth = 5

        this.grass = new Rect(0, 0, canvas.width, canvas.height, C_GRASS)
        this.road = new Rect(this.roadMargin, 0, canvas.width - this.roadMargin * 2, canvas.height, C_ROAD)
        this.roadLineL = new Rect(this.road.x + this.roadLineMargin, 0, this.roadLineWidth, canvas.height, C_ROADLINE)
        this.roadLineR = new Rect(this.road.bbox.right - this.roadLineWidth - this.roadLineMargin, 0, this.roadLineWidth, canvas.height, C_ROADLINE)
        this.roadLines = new RoadLines(canvas.width / 2 - this.roadLineWidth / 2, 0, this.roadLineWidth, canvas.height, C_ROADLINE, this.numLines)

        this.car = new Car(canvas.width / 2, canvas.height, 0, 0, C_GRASS, I_CAR)

        this.gameObjects = {
            background: [this.grass, this.road, this.roadLineL, this.roadLineR, this.roadLines],
            obstacles: [],
            player: this.car
        }
        this.update()
    }

    draw() {
        this.gameObjects.background.concat(this.gameObjects.obstacles).map(sprite => sprite.draw())
        this.gameObjects.player.draw()
        this.score()
    }

    increaseDifficulty() {
        this.obstacleInterval -= 75;
        this.speed++;
        this.level++;
        CAR_SPEED += .25
    }

    update() {
        if (!this.gameOver) {
            this.distance += .1
            this.gameObjects.player.update(this.road)
            this.gameObjects.background.concat(this.gameObjects.obstacles).map(gameObject => gameObject.update(this.speed))

            this.gameOver = this.gameObjects.obstacles.some(obstacle => this.car.checkCollision(obstacle))

            this.obstacleCounter += 5
            if (this.lastLevel !== this.level) {
                C_OBSTACLE = '#' + Math.floor(Math.random() * 16777215).toString(16);
                this.lastLevel = this.level
            }

            if (!(this.obstacleCounter % this.obstacleInterval)) {
                this.gameObjects.obstacles.push(new Obstacle(this.road, this.gameObjects.player))
            }
            this.draw()
            window.requestAnimationFrame(this.update.bind(this))
        } else {
            this.gameIsOver()
        }
    }

    gameIsOver() {
        window.clearInterval(interval)
        new Rect(0, 0, canvas.width, canvas.height, '#000000').draw()
        ctx.font = '14px "Press Start 2P"'
        ctx.fillStyle = C_LEVEL
        ctx.textAlign = "center"
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 + 25)
        ctx.fillStyle = C_UI
        ctx.fillText(`You completed ${this.level} levels`, canvas.width / 2, canvas.height / 2 + 75)
        ctx.fillText(`and went ${Math.floor(this.distance)} feet!`, canvas.width / 2, canvas.height / 2 + 100)
    }

    score() {
        ctx.font = '14px "Press Start 2P"'
        ctx.fillStyle = C_UI
        ctx.textAlign = "center"
        ctx.fillText(`Distance: ${Math.floor(this.distance)}`, canvas.width / 2, 50)
        ctx.fillText("Level", canvas.width / 2, 75)
        ctx.font = '30px "Press Start 2P"'
        ctx.fillStyle = C_OBSTACLE
        ctx.fillText(this.level, canvas.width / 2, 125)
    }
}

function main() {
    if (!world) {
        world = new World()
    } else {
        window.clearInterval(interval)
        delete world
        world = new World()
    }
}