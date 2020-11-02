class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
    }
    startGame() {
        this.ctx.drawImage(road.roadImage, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(car.carImage, car.x, car.y, car.width, car.height);
        this.showScore();
    }
    updateCanvas() {
        canvasUpdate = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.startGame();
            obstacleArr.forEach(obstacle => {
                obstacle.draw();
                obstacle.move();
            })
        }, 50);
        pointCounter = setInterval(() => {
            this.countPoints();
        }, 1000);
    }
    countPoints() {
        for (let i = 0; i < obstacleArr.length; i++) {
            if(obstacleArr[i].y > car.y + car.height) {
                this.score += 1;
            }
        }
    }
    startObstacles() {
        obstacleGenerator = setInterval(() => {
            obstacleArr.push(new Obstacle());
        }, 3000);
    }
    showScore() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Score: ${this.score}`, 70, 30);
    }
    gameOver() {
        descriptionText.innerHTML = "";
        descriptionText.innerHTML = `Game over! Your final score: ${this.score}.`;
        button.innerText = "Play Again";

        button.addEventListener('click', () => {
            location.reload();
        })
    }
}


class Road {
    constructor() {
        this.x;
        this.y;
        this.roadImage = new Image();
        this.roadImage.src = "./images/road.png";
    }
}

class Car {
    constructor() {
        this.x = 350;
        this.y = 500;
        this.width = 50;
        this.height = 100;
        this.carImage = new Image();
        this.carImage.src = "./images/car.png";
    }
}

class Obstacle {
    constructor() {
        this.x = this.getRandomX();
        this.y = 0;
        this.width = this.getRandomWidth();
        this.height = 20;
        this.dy = 5;
        this.draw();
    }
    getRandomX() {
        return Math.floor(Math.random() * (300 - 50 + 1) + 50);
    }
    getRandomWidth() {
        return Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    }
    draw() {
        game.ctx.fillStyle = 'red';
        game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.y += this.dy;
        if (this.x < car.x + car.width && this.x + this.width > car.x && this.y < car.y + car.height && this.y + this.height > car.y) {
            clearInterval(canvasUpdate);
            clearInterval(obstacleGenerator);
            clearInterval(pointCounter);
            game.gameOver();
        }
        obstacleArr = obstacleArr.filter((obstacle) => {
            return obstacle.y < game.canvas.height;
        })
    }
}