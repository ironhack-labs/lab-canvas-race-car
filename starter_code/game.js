const game = {
    name: 'Race Car',
    description: 'Race Car game',
    author: 'Sergio & Carol',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wSize: {
        width: undefined,
        height: undefined
    },
    obstacles: [],
    maple: 45,
    score: 0,

    init() {
        this.canvasDom = document.getElementById("car-race")
        this.canvasDom.style.background = "#008100"
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        car.position = {
            x: this.wSize.width / 2 - 39.5,
            y: this.wSize.height - 200
        }
        car.size = {
            x: 79,
            y: 159.5
        }
    },
    setDimensions() {
        this.wSize.width = this.canvasDom.width
        this.wSize.height = this.canvasDom.height
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
    },

    generateObstacles() {
        let obstacle = new Obstacles()
        this.obstacles.push(obstacle)
    },
    drawObstacles() {
        this.obstacles.forEach((elem) => {
            elem.init()
        })
    },
    checkCollision(elem) {
        if ((car.position.x + car.size.x) >= elem._position.x &&
            (elem._position.y) >= car.position.y &&
            car.position.x <= (elem._position.x + elem._size.x) &&
            (car.position.y + car.size.y) >= elem._position.y) {
            return true
        }
    },
    gameOver() {
        if (confirm(`PERDISTE! Tu score ha sido ${this.score}. Jugar otra vez?`)) {
            window.location.reload()
        } else {
            window.location = "http://google.es"
        }

    },
    scoreAdd(elem) {
        console.log("llamada")
        if ((elem._position.y) > (car.position.y + car.size.y)) {
            this.score += 1
            this.obstacles.shift()
            console.log(this.score)
            console.log(this.obstacles)
        }
    },
    printScore() {
        document.querySelector('#score').innerHTML = this.score
    }
}