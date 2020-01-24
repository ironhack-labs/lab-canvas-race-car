const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.w = 600;
        this.h = 520;
        this.intervalID;
        this.counter = 0;
        this.leftLimit = 60;
        this.rightLimit = 400;
        this.obstaclesRateOutput = 200;
        this.endGame = false;
        this.car = {
            image: new Image(),
            carW: 40,
            carH: 80,
            carPosX: 170,
            carPosY: 390
        }
        this.speed = 50;
        this.obstaclesArr = [];
    }



    startGame() {
        this.canvas.setAttribute("width", `${this.w}px`);
        this.canvas.setAttribute("height", `${this.h}px`);
        this.intervalID = setInterval(() => {
            // todas las funciones que tienen que repetirse todo el tiempo
            this.ctx.clearRect(0, 0, this.w, this.h);
            this.drawBackground();
            this.createLine();
            this.drawCar();
            this.obstacleCal()
            this.moveCar();
            this.counter+=1.5;
            this.createObst()
            this.drawObstacles();
            this.eraseObstacle();
            if (this.endGame === true) {
                
            }
        }, 1000 / 60);
    }

    drawBackground() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(30, 112, 0)";
        this.ctx.fillRect(0, 0, 400, 600);
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(98, 98, 98)"
        this.ctx.fillRect(25, 0, 350, 600);
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillRect(35, 0, 10, 600);
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillRect(355, 0, 10, 600);
        this.ctx.closePath();
    }

    createLine() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.setLineDash([15, 15]);
        this.ctx.moveTo(197, 2500);
        this.ctx.lineTo(197, 0);
        this.ctx.strokeStyle = `white`;
        this.ctx.lineWidth = 6;
        this.ctx.lineDashOffset = this.counter;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawCar() {
        this.car.image.src = 'images/car.png';
        this.ctx.drawImage(this.car.image, this.car.carPosX, this.car.carPosY, this.car.carW, this.car.carH);
    }

    moveCar() {
        window.onkeydown = e => {
            if (e.keyCode === 39) {
                this.car.carPosX += 10;
            }

            if (this.car.carPosX > 310) this.car.carPosX = 310;

            if (e.keyCode === 37) {
                this.car.carPosX -= 10;
            }
            if (this.car.carPosX < 30) this.car.carPosX = 30;
        }
    }

    moveRight() {

    }

    createObst() {
        if (this.counter % 300 === 0) {
            this.obstaclesArr.push(new Obst(randomInt(50, 220), 60, randomInt(100, 220), 0));            
        }


    }

    drawObstacles() {
        this.obstaclesArr.forEach((obstacle,idx) => {
            obstacle.posY++
            this.ctx.fillStyle = 'brown';
            this.ctx.fillRect(obstacle.posX, obstacle.posY, obstacle.width, obstacle.height,);

        });
    }

    eraseObstacle() {
        if(this.obstaclesArr.length > 4){
            this.obstaclesArr.shift();
        }
    }

    obstacleCal() {
        this.obstaclesArr.forEach(obstacle => {
            if (this.car.carPosX < obstacle.posX + obstacle.width &&
                this.car.carPosX + this.car.carW > obstacle.posX &&
                this.car.carPosY < obstacle.posY + obstacle.height &&
                this.car.carPosY + this.car.carH > obstacle.posY) {
                    alert("perdiste")
                clearInterval(this.intervalID);
            }
        });
    }

}
    

class Obst {
    constructor(width, height, posX, posY) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
    }
}