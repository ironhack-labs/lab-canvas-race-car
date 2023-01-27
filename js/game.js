/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [];
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60)
      }
    
    update = () => {
        //Game logic here
        this.frames ++;
        this.clear();
        this.player.draw();
        this.player.newPos();
        this.player.boundaries();
        this.updateEnemies();
        this.checkGameOver();
    }

    stop() {
      clearInterval(this.intervalId);
    }

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }

    updateEnemies() {
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].y += 1;
        this.enemies[i].draw();
      }
      if (this.frames % 180 === 0) {
        let x = Math.floor((Math.random() * 250 - 100) + 100);
        //calculate the height of the columns/enemies
        let minWidth = 150;
        let maxWidth = 250;
        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        //these variables control the size of the gap between obstacles
        let minGap = 75;
        let maxGap = 200;
        //this creates the gap
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        //add the obstacles to the array
        //top obstacle
        this.enemies.push(new Component(x, 0, width, 20, this.ctx));
        //bottom obstacle
        this.enemies.push(new Component(width + gap, y, y - width - gap, 20, this.ctx));
      }
      this.player.boundaries();
    }
    checkGameOver(){
      const crashed = this.enemies.some( (enemy) =>{
          return this.player.crashWith(enemy);
      })
      if (crashed) {
          alert('GAME OVER');
          document.location.reload();
          this.stop();
      }
  }
}