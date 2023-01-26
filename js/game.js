/** @type{HTMLCanvasElement} */

class Game{
  constructor(ctx, width, height, player){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [] 
  }

  start (){
      this.intervalId = setInterval(this.update, 1000/60)
    /*   this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height)  */
  }

  update = () => {
  this.frames++; 
  this.clear();
  this.player.newPos();
  this.player.draw();
  this.updateEnemies();
  this.checkGameOver();
  }

  stop (){
      clearInterval(this.intervalId);
  }

  clear(){
      this.ctx.drawImage(roadImg, 0, 0, this.width, this.height)
  }

  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].y += 1;
      this.enemies[i].draw();
    }
    if (this.frames % 240 === 0) {
      let y = canvas.height;
    
      let minWidth = 20;
      let maxWidth = 50;
      let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

      let minGap = 30;
      let maxGap = 100;
  
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      
    this.enemies.push(new Component(0, 0, 50, width, 40, 'green', this.ctx));
      //bottom obstacle
    this.enemies.push(new Component(width, 0, y + width - gap, 40, 'blue', this.ctx));
    }
 }

    checkGameOver () {
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        });
        
        if (crashed) {
            this.stop();
        }
    
  }
}
