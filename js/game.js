console.log('game rules')

class Game {
    constructor(ctx, width, height, car) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.car = car;
      this.points = 0;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [];
    }
  
    start() {
      this.intervalId = setInterval(this.update, 10);
    }
    update =() => {
      this.frames++;
      
      enemies.drawE();
      this.updateEnemies();
      this.getPoints();
      //this.checkGameOver();
    }
    getPoints () {
        this.points ++ 
        console.log(this.points)
        let score= Math.floor(this.points/100)
        this.ctx.fillStyle='blue';
        this.ctx.font='14px Arial';
        this.ctx.fillText(`score:${score}`,0,0)
        console.log(score)
    }
    // Stops the Game
    stop(){
        clearInterval(this.intervalId)
    }

    // Clears Canvas
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      backg.drawB();
    }
  
    // Updates Enemies
    updateEnemies () {
        
        for (let i=0;i<this.enemies.length;i++){
            this.enemies[i].y += 1; // Enemy goes down
            this.enemies[i].drawE(); // Contiune to draw enemy
        }
        if(this.frames % 200 === 0){
            let x = 50;
            let minWidth = 20; // at least 20px of min Width
            let maxWidth = 200; // max Width of 400px
        
            let width = Math.floor(Math.random() * (maxWidth - minWidth +1)+minWidth);

            let minGap = 0;
            let maxGap = 350;

            let gap = Math.floor(Math.random()*(maxGap - minGap + 1) + minGap)

            //Top Obstacle
            this.enemies.push(new Enemy(x+gap,0 ,width, 40, 'green'));

           
        }
        console.log('updateenemy')
    }
/*
    checkGameOver(){
        const crashed = this.enemies.some((enemy) =>{
        return this.car.crashWith(enemy);}
        );
    
        if (crashed) {
            this.stop ();
            ctx.fillStyle='red';
            ctx.font='72px Arial';
            ctx.fillText('Game Over',this.width/2,this.height/2)
        }
    }*/
}
const game = new Game(ctx, canvas.width, canvas.height, car)
