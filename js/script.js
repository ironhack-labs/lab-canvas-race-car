// Declare variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
let timerId;
let obstacles = [];

// Build classes
class Vehicle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 160;
        this.img = new Image();
        this.img.src = 'images/car.png';
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    detectCollision(obstacle) {
        if (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y) {
            return true
        }
    }
}

class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.img = new Image();
        this.img.src = 'images/road.png';
    }

    draw() {
        this.y += 3;

        if (this.y > canvas.height) this.y = 0;

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x, this.y - canvas.height, this.width, this.height);
    }

    gameOver() {
        clearInterval(timerId);

        ctx.font = "30px Avenir";
        ctx.fillText("Game Over", 180, 320);
        timerId = undefined;

        return true
    }
}

class Obstacle {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 24;
    }

    draw() {
        this.y += 3
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// New instances of classes
const road = new Background();
const car = new Vehicle((canvas.width / 2) - 40, canvas.height - 160 - 40);

//Utilities
function generateObstacles() {
    if (frames % 100 === 0) {
        const minWidth = canvas.width / 3
        const maxWidth = canvas.width - 250
        const randomWidth = minWidth + Math.random() * (maxWidth - minWidth)
        const randomX = 55 + Math.random() * ((canvas.width - randomWidth) - 55)
        const obstacle = new Obstacle(randomX, 0, randomWidth)
        obstacles = [...obstacles, obstacle]
    }
}

function drawObstacles() {
    obstacles.forEach((obstacle) => {
        obstacle.draw()

        if (car.detectCollision(obstacle)) {
            road.gameOver();
        }
    })
}

// Update function
function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    road.draw();
    car.draw();

    generateObstacles();
    drawObstacles()

    if (timerId) {
        timerId = requestAnimationFrame(update);
    }
}

// Event listener
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        addEventListener('keydown', event => {
            const keyLeft = 37;
            const keyRight = 39;

            if (event.keyCode === keyLeft && car.x > 0 + car.width) {
                car.x -= car.width / 2
            }

            if (event.keyCode === keyRight && car.x < canvas.width - car.width * 2) {
                car.x += car.width / 2
            }
        })

        timerId = requestAnimationFrame(update);
    }
};