"use strict"

const roadImg = new Image();
roadImg.src = "./images/road.png";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.car;
        this.obstacles = [];
        this.isGameOver = false;
    }

    startLoop() {
        this.car = new Car(this.canvas, 0);

        const loop = () => {

            if(Math.random() > 0.97) {
                const x = Math.random() * this.canvas.width;
                this.obstacles.push(new Obstacle(this.canvas, x));
            }

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();


            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };

        window.requestAnimationFrame(loop);
    }

    updateCanvas() {
        this.car.update();
        this.obstacles.forEach((obstacle) => {
            obstacle.update();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCanvas() {
        this.ctx.drawImage(roadImg, 0, 0, this.canvas.width, this.canvas.height);

        this.car.drawCar();
        this.obstacles.forEach((obstacle) => {
           obstacle.draw();
        });
        
    }

    checkAllCollisions() {
        this.car.checkScreen();
        this.obstacles.forEach((obstacle, index) => {

            if(!this.car.checkCollisionObst(obstacle)) {
                this.car.addScore();
                this.obstacles.splice(index, 1);
            } else {
                this.isGameOver = true;
                this.onGameOver(); 
            }
        });
    }

    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
}