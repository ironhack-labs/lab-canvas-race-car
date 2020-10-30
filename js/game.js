class Game {
    constructor(playerCar,imageRoad,canvas,ctx){
        this.playerCar = playerCar;
        this.imageRoad = imageRoad;
        this.roadPosition = 0;
        this.speedX = 0;
        this.speedY = 1;
        this.animationId =  0;
        this.leftLimit = 0;
        this.rightLimit = 0;
        this.obstacles = [];
        this.frames = 0;
        this.score = 0;
        this.canvas = canvas;
        this.ctx = ctx;
        this.backgroundY = 0;
    }
    

    background() {
        this.backgroundY += this.speedY;
        this.backgroundY %= this.canvas.height;
        this.ctx.drawImage(this.imageRoad, 0, this.backgroundY,this.canvas.width,this.canvas.height);
        if (this.speedY < 0) {
            this.ctx.drawImage(this.imageRoad, 0, this.backgroundY + this.canvas.height,this.canvas.width,this.canvas.height);
        } else {
            this.ctx.drawImage(this.imageRoad, 0, this.backgroundY - this.canvas.height,this.canvas.width,this.canvas.height);
        }
    };

    updateObstacles() { 
        this.frames++;
        this.obstacles.map((obstacle) => {
            obstacle.y++;
            obstacle.update(this.ctx);
        });

          if (this.frames % 180 === 0) {
            let minWidth = 50;
            let maxWidth = 400;
            let x = Math.floor(Math.random() * (maxWidth - minWidth +1) + minWidth);
            let evenOdd = Math.floor(Math.random()*2);
            let image = imageBarril;
            if(evenOdd === 1){ 
                image = imagePlaca   
            }
                const obj = new Obstacle(x,0,100,100,image);   
                this.obstacles.push(obj);
        }
    }


    updateScore(){
        if (this.frames % 30 === 0) {
            this.score++;
        }
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(10,20,140,50);    
        this.ctx.fillStyle = "red";
        this.ctx.font = "20px Georgia";
        this.ctx.fillText(`Score: ${this.score}`, 30, 50);
    }


    checkGameOver(){
        const crashed = game.obstacles.some((obstacle) => {
            return game.playerCar.isCrashedWith(obstacle);
        });
        if (crashed) {
            cancelAnimationFrame(this.animationId);         
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
            this.ctx.fillStyle = 'red';
            this.ctx.font = "80px Georgia";
            this.ctx.fillText(`Game Over`, 50, 250);
            this.ctx.font = "20px Georgia";            
            this.ctx.fillText(`Your Score: ${this.score}`, 180, 300);
            //this.ctx.font = "14px Georgia";            
            //this.ctx.fillText(`Press "Enter" to play again`, 180, 330);
            
        }
    }
        
} 