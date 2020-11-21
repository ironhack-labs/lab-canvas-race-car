  const obstaclesArray = [];
  class Obstacles {
    constructor(x,size){
        this.x = x;
        this.y = 0;
        this.size = size;
    }

    left() {
      return this.x;
    }
    right() {
      return this.x + this.size;
    }

    top() {
      return this.y;
    }
    bottom() {
      return this.y + 50;
    }
update() {
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, this.size, 50);
}

newPos() {
  this.y +=1

}
  }

