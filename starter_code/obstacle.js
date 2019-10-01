class Obstacle {
  constructor(ctx){
    this.ctx = ctx;

    this.w = Math.random() * this.ctx.canvas.width;
    this.h = 20;

    this.x = Math.random() * 700;
    this.y = 0;

    this.vy = 5
    
  }

  draw(){
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move(){
    this.y += this.vy
  }

  collide(el){
    const collideX = el.x + el.w > this.x && el.x < this.x + this.w 
    const collideY = el.y + el.h > this.y && el.y < this.y + this.h
    
    return collideX && collideY
  }

  //should return true if it outside
  sumObstacle(){
    return this.y > this.ctx.canvas.height
  }
}