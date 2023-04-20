console.log('full js')

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.carImage = carImage;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
    }
    start(){
        this.intervalId = setInterval(this.update, 10);
    }

    update =()=>{
        this.frames++;
        this.clear();
        carImage.newPos();
        carImage.draw();
        this.updateEnemies();
        this.checkGameOver();
    }
    //stops the game
    stop(){
        clearInterval(this.intervalId);
    }
    //clears canvas
    clear(){
        this.ctx.clearRect(0,0,this.width, this.height);

    }

    updateEnemies(){
        for (let i=0; i< this.enemies.length; i++){
            this.enemies[i].y -=1 //enemy goes more to the right
            this.enemies[i].draw(); //continue to draw enemies
        }

        if(this.frames%200 ===0){
            let y = -50;
            let minWidth= 20; 
            let maxWidth = 400;

            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

            let minGap = 95;
            let maxGap = 200;

            let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
            let x = Math.floor(Math.random() * (this.ctx.canvas.width - width - gap));

            //left
            this.enemies.push(new Component(width, 0, width , 50, 'green', this.ctx));
            
            //right
            this.enemies.push(new Component(width + gap, y, y-width-gap,50 , 'blue', this.ctx));

        }
    }
    checkGameOver(){
        const crashed = this.enemies.some((enemy) => {
            return this.carImage.crashWith(enemy);
        });

        if (crashed){
            this.stop();
            ctx.fillStyle = "red";
            this.ctx.font = "72px Arial";
            this.ctx.fillText ("Game Over", 0 , this.height/2);
        }
    }
}