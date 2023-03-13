class Obstacle {
    constructor(ctx) {
      //constructor(ctx, gameWidth, playerPosY0, playerWe)
      // this.ctx = ctx;
      // this.width = 14;
      // this.height = this.width * 5;
  
      this.ctx = ctx;

      this.width = Math.floor(Math.random()*(270-50) + 50);
      this.height = 20;
  
      this.posX = Math.floor(Math.random()*(270-50) + 50);
      this.posY = 0
  
      this.velY = 4;
    }
  
    draw() {
      // .fillRect(posX, posY, w, h);
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
      // .move
      this.move();
    }
  
    move() {
       // Change this.posX (Move horizontally)
       this.posY += this.velY;
    }
  }