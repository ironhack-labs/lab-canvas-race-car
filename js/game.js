console.log('game rules')

class Game {
    constructor(ctx, width, height, car) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.car = car;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [];
    }
  
    start() {
      this.intervalId = setInterval(this.update, 10);
    }
    update = () => {
      this.frames++;
      this.car.newPos();
      this.car.draw();
      this.updateEnemies();
      this.checkGameOver();
    }

    // Stops the Game
    stop(){
        clearInterval(this.intervalId)
    }

    // Clears Canvas
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  
    // Updates Enemies
    updateEnemies () {
        
        for (let i=0;i<this.enemies.length;i++){
            this.enemies[i].x -= 1; // Enemy goes more to the right
            this.enemies[i].draw(); // Contiune to draw enemy
        }
        if(this.frames % 200 === 0){
            let x = 1200;
            let minHeight = 20; // at least 20px of min Height
            let maxHeight = 400; // max height of 400px
        
            let height = Math.floor(Math.random() * (maxHeight - minHeight +1)+minHeight);

            let minGap = 95;
            let maxGap = 200;

            let gap = Math.floor(Math.random()*(maxGap - minGap + 1) + minGap)

            //Top Obstacle
            this.enemies.push(new Component(x,0,50, height, 'green', this.ctx));

           
        }
        console.log('updateenemy')
    }

    checkGameOver(){
        const crashed = this.enemies.some((enemy) =>{
        return this.player.crashWith(enemy);}
        );
    
        if (crashed) {
            this.stop ();
            this.ctx.fillStyle='red';
            this.ctx.font='72px Arial';
            this.ctx.fillText('Game Over',0,this.height/2)
        }
    }
}
