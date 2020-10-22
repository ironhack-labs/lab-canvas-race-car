window.onload = () => {

    class Board {
        constructor() {
            this.x = 0
            this.y = 0
        }
        draw() {
            if (this.y > $canvas.height) this.y = 0
            const image = new Image()
            const image2 = new Image()
            image.src = '../images/road.png'
            image2.src = '../images/road.png'
            ctx.drawImage(image, this.x, this.y, $canvas.width, $canvas.height)
            ctx.drawImage(image2, this.x, this.y - $canvas.height, $canvas.width, $canvas.height)
            this.y++
        }
    }

    class Player {
        constructor() {
            this.x = 225
            this.y = 570
            this.height = 80
            this.width = 50
        }
        draw() {
            const image = new Image()
            image.src = '../images/car.png'
            ctx.drawImage(image, this.x, this.y, this.width, this.height)
        }
        moveRight() {
            if (this.x >= $canvas.width - this.width) return
            this.x += 10
        }
        moveLeft() {
            if (this.x < 0) return
            this.x -= 10
        }
        isTouching(obstacle) {
            return (
                this.x < obstacle.x + obstacle.width &&
                this.x + this.width > obstacle.x &&
                this.y < obstacle.y + obstacle.height &&
                this.y + this.height > obstacle.y
            )
        }
    }

    class Obstacle {
        constructor(x, width) {
            this.x = x
            this.y = 0
            this.width = width
            this.height = 30
        }
        draw() {
            ctx.fillStyle = 'purple'
            ctx.fillRect(this.x, this.y, this.width, this.height)
            this.y++
        }
    }

    const $canvas = document.querySelector('#canvas')
    const ctx = $canvas.getContext('2d')
    let interval
    let board = new Board()
    let p1 = new Player()
    let obstacles = []
    let frames = 0
    const keys = []
    let score = 0

    function startGame() {
        interval = setInterval(update, 1000 / 60)
    }

    function clearCanvas() {
        ctx.fillRect(0, 0, $canvas.width, $canvas.height)
    }

    function generateObstacles() {
        if (frames % 200 === 0) {
            let width = Math.floor(50 * Math.random()) + 250
            let x = Math.floor(90 * Math.random()) + 70
            obstacles.push(new Obstacle(x, width))
        }
    }

    function drawObstacles() {
        obstacles.forEach(obs => obs.draw())
    }

    function clearObstacles() {
        obstacles = obstacles.filter(obsta => obsta.y < $canvas.height)
    }

    function printScore() {
        if (frames % 200 === 0 && frames > 600) score += 20
        ctx.font = "20px Sans-serif"
        ctx.fillStyle = "white"
        ctx.fillText(`Score: ${score}`, 100, 30)
    }

    function stop() {
        clearInterval(interval)
    }

    function checkCollitions() {
        obstacles.forEach(obs => {
            if (p1.isTouching(obs)) {
                ctx.font = "80px Sans-serif"
                ctx.fillStyle = "red"
                ctx.fillText(`You lost! Your score is: ${score}`, 100, 300)
                stop()
            }
        })
    }

    function update() {
        frames += 1
        checkKeys()
        clearObstacles()
        generateObstacles()
        clearCanvas()
        checkCollitions()
        board.draw()
        drawObstacles()
        p1.draw()
        printScore()
    }

    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function checkKeys() {
        if (keys["ArrowLeft"]) {
            return p1.moveLeft()
        }
        if (keys["ArrowRight"]) {
            return p1.moveRight()
        }
    }

    document.onkeydown = e => {
        keys[e.key] = true
    }

    document.onkeyup = e => {
        keys[e.key] = false
    }
};