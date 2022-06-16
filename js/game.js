class Game {
    constructor(ctx){
        this.ctx= ctx;
        this.background= new Background(this.ctx);
        this.intervalId=null;
        this.car= new Car(this.ctx);


    }


    start(){
        
        this.intervalId = setInterval(()=>{
            this.clear();
            this.draw();
            this.move()

        },1000/60)
        
    }
    move(){
        this.background.move()
        this.car.move()
        
    }
    clear(){
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }
    draw(){
        this.background.draw();
        this.car.draw()

    }
    gameOver(){
        clearInterval(this.intervalId);
        this.intervalId=null;
        this.ctx.font="40px Arial";
        this.fillStyel="black";
        this.ctx.textAlign="center";
        this.ctx.fillText("Game Over",this.ctx.canvas.width/2,this.ctx.canvas.height/2)
        }
        

    
    
}