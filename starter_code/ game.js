

/** @type HTMLCanvasElement */

/** @type CanvasRenderingContext2D */

class Game{
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.w = 450;
        this.h = 650;
        this.intervalId;
        this.carW;
        this.carH;
        this.carX=195;
        this.carY=500;
        this.offset = 0;
        this.obstaclesArr = [];
        this.gameOver === false;
        this.counter = 0;
        

    }

    start(){
        this.intervalId = setInterval(() => {

            this.board();
            this.drawCar();
            this.pushObstacle();
            this.drawObstacles();
            this.offset -= 7;
            this.moveCar();
            if(this.gameOver === true){
                clearInterval(this.intervalId);
            }
            this.counter++;
          
            // this.gameOver();
        }, 1000/60);
    }

    board(){
        this.canvas.setAttribute("height", this.h);
        this.canvas.setAttribute("width", this.w);
        this.ctx.fillStyle = "rgb(0, 129, 0)";
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.fillStyle = "rgb(128, 128, 128)";
        this.ctx.fillRect(30, 0, this.w -60, this.h);
        this.ctx.fillStyle = "rgb(255,255, 255)";
        this.ctx.fillRect(40, 0, 17, this.h);
        this.ctx.fillStyle = "rgb(255,255, 255)";
        this.ctx.setLineDash([25, 15]);
        this.ctx.moveTo(this.w/2, 0);
        this.ctx.lineTo(this.w/2, this.h);
        this.ctx.lineWidth = 6;
        this.ctx.lineDashOffset = this.offset;
        this.ctx.strokeStyle = "white";

        this.ctx.stroke();
        



    }

    drawCar(){

        this.car = new Image();
        this.car.src = "./images/car.png";
        this.carW = 60;
        this.carH = 120;
        this.ctx.drawImage(this.car, this.carX, this.carY, this.carW, this.carH);


    }

    moveCar() {
        window.onkeydown = e => {
          
            if (e.keyCode === 39) {
            console.log("derecha");
            if (this.carX > 360) {
              this.carX = 360;
            } else {
              this.carX += 20;
            }
          }
          if (e.keyCode === 37) {
            console.log("izquierda");
            if (this.carX < 30) {
              this.carX = 30;
            } else {
              this.carX -= 20;
            }
          }
        };


    }


    drawObstacles(){
           
        this.obstaclesArr.forEach((obstacle) => {
            console.log(obstacle);
            this.ctx.fillStyle = "rgb(136, 0, 0)";
            this.ctx.fillRect(obstacle.obstaclesX, obstacle.obstaclesY, obstacle.obstaclesW, obstacle.obstaclesY);
        });
    }
      
pushObstacle(){

    if(this.counter % 30 === 0){
        this.obstaclesArr.push(new Obstacles(this.counter));
    }
}


    

}

class Obstacles{
    constructor(counter){
        this.obstaclesX = 200;
        this.obstaclesY = counter;
        this.obstaclesW = 100;
        this.obstaclesH = 20;

    }
 }





