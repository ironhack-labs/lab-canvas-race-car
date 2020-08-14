window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();

    };
};

const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')
let $imagenRoad = document.createElement("img");
let $imagenCarrito = document.createElement("img");

let carrito
let intervalId,
    frames = 0,
    frameObstaculeActivation = 150,
    score = 0,
    obstacles = []
let obstaculo

class Carrito {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = $imagenCarrito.width / 3
        this.height = $imagenCarrito.height / 3
        this.speedX = 0
    }
    draw() {
        ctx.drawImage($imagenCarrito, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
    newPos() {
        let limiteX = 90
        let limiteX2 = 415
        this.x += this.speedX
        if (this.x < limiteX) {
            this.x = limiteX
        }
        if (this.x > limiteX2) {
            this.x = limiteX2
        }
    }
    isTouching(obstacle) {
        return (
            (this.x - this.width / 2) < obstacle.x + obstacle.width &&
            (this.x - this.width / 2) + this.width > obstacle.x &&
            (this.y - this.height / 2) < obstacle.y + obstacle.height &&
            (this.y - this.height / 2) + this.height > obstacle.y
        )

    }
}

class Obstacle {
    constructor(x, width) {
        this.width = width
        this.height = 20
        this.x = x
        this.y = -this.height
        this.color = "#8B0000"
        this.speed = 2
    }
    draw() {
        ctx.fillStyle = this.color
        this.y += this.speed
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}



document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case 37: // left arrow
            carrito.speedX -= 2
            break
        case 39: // right arrow
            carrito.speedX += 2
            break
    }
})

document.addEventListener("keyup", e => {
    carrito.speedX = 0
    carrito.speedY = 0
})


function startGame() {
    $imagenRoad.setAttribute("src", "./images/road.png")
    $imagenCarrito.setAttribute("src", "./images/car.png")
    carrito = new Carrito($canvas.width / 2, $canvas.height * 0.85)
    obstaculo = new Obstacle(90, 100)

    intervalId = setInterval(update, 1000 / 60)
}

function update() {
    frames++;
    clearCanvas()
    drawCamino()
    generateObstacles()
    drawObstacles()
    carrito.draw()
    printScore();
    checkCollitions()
    carrito.newPos()
}

function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function drawCamino() {
    ctx.drawImage($imagenRoad, 0, 0, 500, 700)
}

function generateObstacles() {
    if (frames % frameObstaculeActivation === 0) {
        let randOneorTwo = Math.floor(Math.random() * 2) + 1
        let minGap = 80
        let maxGap = 100
        let minWidth = 50
        let maxWidth = 250
        let randomGap;
        if (randOneorTwo % 2 == 0) {
            //max width 415 - 90 ||   |   || de la carretera
            maxWidth = 325 - minGap * 1.5;
            let randomWidth = Math.floor(Math.random() * (maxWidth - 100) + 100)
            let minPosX = Math.floor((Math.random() * randomWidth) + 90)

            obstacles.push(new Obstacle(minPosX, randomWidth))
        } else {
            let randomWidth = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth)
            randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap)
            obstacles.push(new Obstacle(90, randomWidth))
            obstacles.push(new Obstacle((90 + randomWidth + randomGap), (415 - (90 + randomWidth + randomGap))))
        }
    }
}


function drawObstacles() {
    obstacles.forEach((obstacle, i) => {
        obstacle.draw()
        if (obstacle.y + obstacle.height > $canvas.height) {
            obstacles.splice(i, 1)
            score++;
        }
    })
}


function checkCollitions() {
    obstacles.forEach(obstacle => {
        if (carrito.isTouching(obstacle)) {
            clearInterval(intervalId)
            gameOver()
        }
    })
}

function gameOver() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
    ctx.fillStyle = "crimson"
    ctx.font = "40px Sans-serif"
    ctx.fillText("Game Over", $canvas.width / 2 - 110, $canvas.height / 2 - 100)
    ctx.font = "30px Sans-serif"
    ctx.fillStyle = "white"
    ctx.fillText(`Your final score`, $canvas.width / 2 - 110, $canvas.height / 2 - 40)
    ctx.fillText(`${score}`, $canvas.width / 2, $canvas.height / 2)
}


function printScore() {
    ctx.font = "20px Sans-serif"
    ctx.fillStyle = "blue"
    ctx.fillText(`Score: ${score}`, $canvas.width - 150, 50)
}