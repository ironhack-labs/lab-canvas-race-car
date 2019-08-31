const C_GRASS = '#008100'
const C_ROAD = '#808080'
const C_ROADLINE = '#FFFFFF'
const C_OBSTACLE = '#974E4E'
const I_CAR = 'images/car.png'

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var world = undefined

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
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
        return { x: this.x, y: this.y, x2: this.x + this.width, y2: this.y + this.height }
    }

    draw() {
        let prevStyle = ctx.fillStyle
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = prevStyle
    }

    update(speed) {
        // console.log('NotImplemented', speed)
    }

    checkCollision(other) {
        let tbb = this.bbox
        let obb = other.bbox
        return (tbb.x > obb.x2 && tbb.x2 < obb.x) && (tbb.y2 < obb.y && tbb.y > obb.y2)
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
        this.scaleDivider = 3
        this.image = new Image()
        this.image.src = imageSource
        this.image.onload = this.setup.bind(this)
        this.speedX = 0
        this.speedY = 0
    }

    setup() {
        this.width = this.image.naturalWidth / this.scaleDivider
        this.height = this.image.naturalHeight / this.scaleDivider
        this.x -= this.width / 2
        this.y -= this.height + this.height / 3
    }

    draw() {
        ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    update() {
        if (this.inBounds()) {
            this.x += this.speedX
            this.y += this.speedY
        }
    }

    inBounds() {
        return this.x >= 30 && this.bbox.x2 <= canvas.width - 30 && this.bbox.y2 <= canvas.height - 30 && this.bbox.y >= 30
    }
}

class Obstacle extends Rect {
    constructor(road, car) {
        let randomWidth = Math.max(randBetween(road.bbox.x, road.bbox.x2 - car.width * 2), road.width / 2)
        super(
            choose([road.bbox.x, road.bbox.x2 - randomWidth]),
            0,
            randomWidth,
            30,
            C_OBSTACLE
        )
    }

    update(speed) {
        this.y += speed
    }
}

class World {
    constructor() {
        this.distance = 0
        this.speed = 10
        this.obstacleInterval = 200
        this.obstacleCounter = 0
        this.gameOver = false

        this.roadMargin = 25
        this.roadLineMargin = 5
        this.roadLineWidth = 5

        this.grass = new Rect(0, 0, canvas.width, canvas.height, C_GRASS)
        this.road = new Rect(this.roadMargin, 0, canvas.width - this.roadMargin * 2, canvas.height, C_ROAD)

        this.roadLineL = new Rect(this.road.x + this.roadLineMargin, 0, this.roadLineWidth, canvas.height, C_ROADLINE)
        this.roadLineR = new Rect(this.road.bbox.x2 - this.roadLineWidth - this.roadLineMargin, 0, this.roadLineWidth, canvas.height, C_ROADLINE)
        this.roadLines = new RoadLines(canvas.width / 2 - this.roadLineWidth / 2, 0, this.roadLineWidth, canvas.height, C_ROADLINE, this.numLines)
        this.car = new Car(canvas.width / 2, canvas.height, 0, 0, C_GRASS, I_CAR)

        this.gameObjects = {
            background: [this.grass, this.road, this.roadLineL, this.roadLineR, this.roadLines],
            obstacles: [],
            player: this.car
        }
    }

    draw() {
        this.gameObjects.background.concat(this.gameObjects.obstacles).map(sprite => sprite.draw())
        this.gameObjects.player.draw()
    }

    update() {
        this.distance += this.speed
        this.gameObjects.player.update()
        this.gameObjects.background.concat(this.gameObjects.obstacles).map(gameObject => {
            gameObject.update(this.speed)
            if (gameObject instanceof Obstacle && gameObject.checkCollision(this.car)) this.gameOver = true
        })


        this.obstacleCounter += 5

        if (!(this.obstacleCounter % this.obstacleInterval)) {
            this.gameObjects.obstacles.push(new Obstacle(this.road, this.gameObjects.player))
        }
    }
}

function main() {
    world = (world) ? world : new World()
    if (!world.gameOver) {
        world.update()
        world.draw()
        window.requestAnimationFrame(main)
    }
}