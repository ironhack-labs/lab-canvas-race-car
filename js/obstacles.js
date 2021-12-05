//jshint esversion:6
class Obstacles {
    constructor(x, rw){
        this.x = x;
        this.y = -25;
        this.speed = 2;
        this.rectWidth = rw;
    }
    drawObstacles(){

        context.fillStyle = "#F00";
        context.fillRect(this.x, this.y, this.rectWidth, 25);
        this.y += this.speed; 
        this.loopObstacle();
    }
    loopObstacle(){
        if(this.y > canvas.height) {
            this.y = -25;
            this.rectWidth = Math.floor((Math.random() * canvas.width / 2 ) + 50);
            this.x = Math.floor((Math.random() * canvas.width) + 50);
        }
    }
}

const obstacle = new Obstacles(Math.floor(Math.random() * canvas.width - 125) + 50, Math.floor((Math.random() * canvas.width / 2 ) + 50));