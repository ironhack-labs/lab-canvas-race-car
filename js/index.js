const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let requestID;
let frames = 0;
let score = 0;
class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.imageBck = new Image();
        this.imageBck.src = './images/road.png';
    }

    draw() {
        this.y++;
        //console.log(this.y)
        if (this.y > +canvas.height) {
            console.log(this.y, +canvas.height);
            this.y = 0;
        }
        ctx.drawImage(this.imageBck, this.x, this.y, this.width, this.height);
        ctx.drawImage(
            this.imageBck,
            this.x,
            this.y - this.height,
            this.width,
            this.height);
    }

    gameOver() {

        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, 500, this.width, 250);

        ctx.fillStyle = "white";
        ctx.font = "45px Arial"
        ctx.fillText('GAME OVER', 120, 580);

        ctx.fillStyle = "white";
        ctx.font = "45px Arial"
        ctx.fillText('Your final score', 100, 630);

        ctx.fillStyle = "white";
        ctx.font = "45px Arial"
        console.log(score.toString())
        ctx.fillText(score.toString(), 230, 675);
    }
}
class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageCar = new Image();
        this.imageCar.src = './images/car.png';
    }

    draw() {
        ctx.drawImage(this.imageCar, this.x, this.y, this.width, this.height);
    }
    collision(obstacle) {
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
        this.x = x;
        this.y = 300;
        this.width = width;
        this.height = 25;
    }
    draw() {
        if (frames % 10 === 0) this.y += 5;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }


}


let obstacles = [];

function generateObstacle() {

    if (frames % 250 === 0) {

        let x = Math.floor(Math.random() * (200 - 65) + 65);
        let w = Math.floor(Math.random() * (190 - 100) + 100);
        //console.log(x, w)
        const obstacle = new Obstacle(x, w);
        obstacles.push(obstacle);

    }

}

function drawObstacle() {
    obstacles.forEach((obstacle, index) => {

        obstacle.draw();

        if (car.collision(obstacle)) {
            endGame();
        }

        if (obstacle.y + obstacle.height >= 700) {
            obstacles.splice(index, 1);
            score += 100;
        }
    });
}


const fondo = new Background();
const car = new Car(225, 620, 50, 75);

//const obstacle = new Obstacle(65, 190);

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo.draw();
    car.draw();
    //obstacle.draw();
    generateObstacle();
    drawObstacle();



    if (requestID) {
        requestAnimationFrame(update);
    }


}

update();

window.onload = () => {

    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        requestID = requestAnimationFrame(update);
    }
};


function endGame() {
    fondo.gameOver();
    requestID = undefined;
}
addEventListener("keydown", (event) => {
    //console.log(canvas.width)
    if (event.keyCode === 39) {
        //derecha
        if (car.x < 395) {
            //console.log(car.x)
            car.x += 20;
        }

    } else if (event.keyCode === 37) {
        if (car.x > 45) {
            //console.log(car.x)
            car.x -= 20;
        }

    }
})