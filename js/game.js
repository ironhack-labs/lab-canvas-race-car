
class Game {
    constructor (ctx, width, height, player) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.player = player;
  this.intervalId = null;
  this.frames = 0;

  }
    start() {
  
  this.intervalId = setInterval(this.update, 1000 / 60)
    }
  
    update = () => {
  
   this.frames++;
   this.clear();
   this.player.newPos();
   this.player.draw();
   this.updateEnemies();
   this.checkGameOver();
    }
  
    stop () {
      clearInterval(this.intervalId);
    }
  
    clear () {
     this.ctx.clearRect(0,0,this.width,this.height);
    }

    updateEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
          this.enemies[i].x -= 1;
          this.enemies[i].draw();
        }
        if (this.frames % 180 === 0) {
          let x = 1200;
          //calculate the height of the columns/enemies
          let minWidth = 10;
          let maxWidth = 200;
          let height = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minHeight);
          //these variables control the size of the gap between obstacles
          let minGap = 75;
          let maxGap = 200;
          //this creates the gap
          let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          //add the obstacles to the array
          //top obstacle
          this.obstacles.push(new Component(y, 0, 50, this.width, 'green', this.ctx));
          //bottom obstacle
          this.obstacles.push(new Component(y, this.width + gap, 50, x - height - gap, 'blue', this.ctx));
        }
      }
    }