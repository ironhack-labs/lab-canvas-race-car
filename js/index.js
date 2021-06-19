window.onload = () => {
    document
        .getElementById("start-button")
        .addEventListener("click", startGame);
};

// The Canvas
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// The Road
const roadCanvas = document.getElementById("road");
let roadCtx = roadCanvas.getContext("2d");
class Road {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = "../images/road.png";
        this.gameFrames = 0;
        this.speed = -1;
    }

    drawRoad() {
        ctx.drawImage(this.img, this.x, this.y);
        if (this.speed < 0) {
            ctx.drawImage(this.img, this.x, this.y + this.img.height);
        } else {
            ctx.drawImage(this.img, this.x, this.y - roadCanvas.height);
        }
        
    }

    move() {
        this.y += this.speed;
        this.y %= canvas.height;
    }
}

let road = new Road(0, 0);

// The Car

class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = "../images/car.png";
    }

    drawCar() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

let car = new Car(50, 450, 75, 125);

// Obstacles

let obstacles = [];
class Obstacle {
    constructor() {
        this.x = Math.floor(Math.random() * 300);
        this.y = 0;
        this.vy = 5;
        this.width = Math.floor(Math.random() * 80);
        this.height = Math.floor(Math.random() * 100);
        this.color = "#000";
    }

    drawObstacle() {
        ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
    }
    createObstacle() {
        if (road.gameFrames % 200 === 0) {
            road.gameFrames = 0;
            obstacles.push(new Obstacle());
        }
    }
}

// Arrow Keys

document.onkeydown = function (e) {
    console.log("it moves", e);
    if (e.keyCode === 37) {
        if (car.x >= 25) {
            car.x -= 20;
        }
    }
    if (e.keyCode === 39) {
        if (car.x <= 200) {
            car.x += 20;
        }
    }
};

// Start Game

function startGame() {
    console.log("Game has started!");

    setInterval(() => {
        ctx.clearRect(0, 0, 500, 700);

        // Road Image
        road.move();
        road.drawRoad();

        // Car Image
        car.drawCar();

        // Create Obstacle
        let newObs = new Obstacle();
        newObs.createObstacle();

        // Update Obstacles
        for (let i = 0; i <= obstacles.length; i++) {
            obstacles[i].y += obstacles[i].vy;
            obstacles[i].drawObstacle();
        }

        road.gameFrames++;
    }, 20);
}
