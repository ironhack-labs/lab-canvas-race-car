class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = '550px';
        this.height = '750px';
        this.car = {
            image: new Image(),
            width: 60,
            height: 120
        }
        this.carX = 250;
        this.carY = 550;
        this.obstacles = [];
        this.counter = 0;
    }

    startGame() {
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        this.moveCar()
        this.intervalId = setInterval(() => {
            // this.clearCanvas();
            this.counter -= 3;
            this.drawBackground();
            this.drawCar();
            
            if(this.counter % 500 === 0) {
                this.generateObs();
            }
            this.drawObstacles();
            this.deleteObstacles();
            this.obstaclesCollision();
        }, 1000 / 60);
    }

    drawBackground() {
        // Green background
        this.ctx.fillStyle = 'rgb(0, 170, 0)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Road
        this.ctx.fillStyle = 'rgb(60, 60, 60)';
        this.ctx.fillRect(50, 0, this.canvas.width - 100, this.canvas.height);
        // Road's left border
        this.ctx.fillStyle = 'rgb(240, 240, 240)';
        this.ctx.fillRect(70, 0, 20, this.canvas.height);
        // Road's right border
        this.ctx.fillStyle = 'rgb(240, 240, 240)';
        this.ctx.fillRect(460, 0, 20, this.canvas.height);
        // Central line
        this.ctx.beginPath();
        this.ctx.setLineDash([60, 40]);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = '20';
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, 800);
        this.ctx.lineDashOffset = this.counter;
        this.ctx.stroke();
    }

    drawCar() {
        this.car.image.src= './images/car.png';
        this.ctx.drawImage(this.car.image, this.carX, this.carY, this.car.width, this.car.height);
    }

    moveCar() {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
                if(this.carX === 420) {
                    this.carX = 420;
                } else {
                    this.carX += 10;
                }
            }
            if(e.keyCode === 37) {
                if(this.carX === 70) {
                    this.carX = 70;
                } else {
                    this.carX -= 10;
                }
            }
        });
    }

    generateObs(){
        class Obstacle {
            constructor(x, y, width, height){
                this.x = x,
                this.y = y,
                this.width = width,
                this.height = height
            }
        }

        this.obstacles.push(new Obstacle(Math.floor(Math.random() * (400 - 0 + 1) + 0), -50, Math.floor(Math.random() * (400 - 150 + 1) + 150), 40));
    }


    drawObstacles() {
        this.obstacles.forEach((obstacle) => {
            obstacle.y++;
            this.ctx.fillStyle = 'rgb(125, 20, 11)';
            this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });
    }

    deleteObstacles() {
        this.obstacles.forEach((obstacle) => {
            if(obstacle.y > 750) {
                this.obstacles.shift();
            }
        });
    }

    obstaclesCollision() {
        this.obstacles.forEach((obstacle) => {
            if (obstacle.y + obstacle.height > this.carY &&
                obstacle.y < this.carY + this.car.height &&
                obstacle.x + obstacle.width > this.carX &&
                obstacle.x < this.carX + this.car.width) 
                {
                    clearInterval(this.intervalId);
                    window.alert('Ohhh, you have destroyed your beautiful car!!!');
                }
        });   
    }
}

