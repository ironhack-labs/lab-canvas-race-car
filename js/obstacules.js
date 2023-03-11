class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;

    // para que el width sea Random
    this.minWidth = 70;
    this.maxWidth = 200;
    this.width = Math.floor(
      Math.random() * (this.maxWidth - this.minWidth + 1) + this.minWidth
    );
    this.height = 10;

   // para que la posición en el eje x sea Random 
    this.minPosX = 80
    this.maxPosX = gameWidth - 80;
    this.posX = Math.floor (
        Math.random() * (maxPosX - this.minPosX + 1) + this.minPosX
    );
    this.posY = 0;

    this.velY = 10;
  }
  draw() {

    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    // falta definir aquí el color de los obstáculos
    this.move();
    }
    
    move() {
        this.posY -= this.velY
    }
    
}

