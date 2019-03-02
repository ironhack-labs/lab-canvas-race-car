class RoadBlock{
  constructor(x, width){
    this.x = x;
    this.y = 0;
    this.yVel = 5;
    this.height = 25;
    this.width = width;
  }

  draw(ctx){
    //Draw roadblock
    ctx.fillStyle='red';
    ctx.fillRect(this.x, this.y, this.width, this.height);

    //Increment roadblock Y position so that it moves "down" the screen (in reality, Y coordinate is increasing in value)
    this.y += this.yVel;
  }    
}