class Component {
    constructor(width, height, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 0;
    }
    draw() {
      this.ctx = myGameArea.ctx;
      this.ctx.drawImage(imgCar, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      this.speed -= 1;
    }
    moveRight() {
      this.speed += 1;
    }
    stopMove() {
      this.speed = 0;
    }
    update() {
      this.x += this.speed;
    }
    crashWith(obstacle) {
      if((this.y + this.height < obstacle.y) ||
        (this.y > obstacle.y + obstacle.height) ||
        (this.x + this.width < obstacle.x) ||
        (this.x > obstacle.x + obstacle.width))
           {return false;}
      else {return true;}
    }
  }
  
class Obstacle extends Component {
    constructor(width, height, x, y, color){
      super(width, height, x, y);
      this.color = "red"
    }
    update(){
      this.ctx = myGameArea.ctx;
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
}