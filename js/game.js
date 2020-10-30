"use strict";

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.enemies = [];
        this.isGameOver = false;
    }

    startLoop(){
        //console.log("startLoop")
        this.player = new Player(this.canvas, 1); 
        this.road = new Road(this.canvas);

        const loop = () => {
            if (Math.random() >= 0.99){
                const x = Math.random() * this.canvas.width;
                this.enemies.push(new Enemy(this.canvas, x))
            }

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            if(!this.isGameOver){
                window.requestAnimationFrame(loop);
            }
        };
        window.requestAnimationFrame(loop);
    }

    updateCanvas(){
        this.player.update();
        this.enemies.forEach((enemy)=> {
            enemy.update();
        })
    }
    
    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    
    drawCanvas(){
        this.road.draw()
        this.player.draw();
        this.enemies.forEach((enemy)=>{
            enemy.draw();
        });
    }

    checkAllCollisions(){
        this.player.checkScreen();
        this.enemies.forEach((enemy,index)=> {
            if(this.player.checkCollisionEnemy(enemy)){
                this.player.loseLive();
                this.enemies.splice(index, 1);
                if(this.player.lives===0){
                    this.isGameOver = true;
                    this.onGameOver();
                }
            }
        });
    }
    gameOverCallback(callback){
       this.onGameOver = callback;
    }
}