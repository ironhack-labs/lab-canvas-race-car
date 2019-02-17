class Road{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 500;
    this.movement = 0;
  }

  draw(ctx){

    //Create static road background
    ctx.fillStyle='green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle='grey';
    ctx.fillRect(40, this.y, 420, this.height);
    ctx.fillStyle='white';
    ctx.fillRect(55, this.y, 15, this.height);
    ctx.fillRect(430, this.y, 15, this.height); 
    
    //Create moving center lines
    for(let i = -1; i < 10; i++){
      ctx.fillRect(245, i * 50 + this.movement, 10, 25);
    }
    if(this.movement < 50){
      this.movement += 5;
    } else{
      this.movement = 0;
    }

  }
}