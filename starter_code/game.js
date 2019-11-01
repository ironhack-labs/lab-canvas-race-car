class Game {
    constructor($canvas){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.car = new Car();
    this.obstacle = [];
    this.controls = new Controls()
    this.controls.setControls();
    this.speed = 2500
    this.obstacleTimer= 0
    this.lines = []
    this.lineSpeed = 700
    this.lineTimer= 0
    this.scoreboard = new Scoreboard()
    this.score = this.scoreboard.score
    this.reseting = false
 }

 reset(){
  this.obstacle = []
  this.lines = []
  this.car.col = 152
  this.score = 0
  this.obstacleTimer= 0
  this.lineTimer= 0
  this.speed = 2500
  this.lineSpeed = 700
  this.reseting = false
}

  start () {
    this.animation();
  }

  drawEverything(){
    this.context.clearRect(0, 0, 350, 550);
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].drawLines();
    } 

    this.drawGrid()
    for (let i = 0; i < this.obstacle.length; i++) {
      this.obstacle[i].draw();
    } 
    this.car.drawCar();
  }

  drawGrid() {
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 30, 550);
    this.context.fillRect(320, 0, 30, 550);
    this.context.fillStyle = 'white';
    this.context.fillRect(40, 0, 10, 550);
    this.context.fillRect(300, 0, 10, 550);
}

  animation (timestamp) {
    // console.log(this.reseting);
    // if (this.reseting === true){
    //   this.reset();
    //   return
    // } else {
    this.drawEverything();
    this.updateEverything(timestamp);
    window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }
    //}

  updateEverything(timestamp){
    for (let obs of this.obstacle){
      obs.update()
    }

    for (let line of this.lines){
      line.update()
    }
    
    if(this.obstacleTimer < timestamp - this.speed){
      this.obstacle.push(new Obstacle(this))
      this.obstacleTimer = timestamp
    }

    if (this.obstacle.length){
      for (let i = this.obstacle.length - 1; i >= 0; i--) {
        console.log(this.collision(this.car, this.obstacle[i]));
        if (this.collision(this.car, this.obstacle[i])) {
          this.reset()
        }
    }

    if(this.lineTimer < timestamp - this.lineSpeed){
      this.lines.push(new Line(this))
      this.lineTimer = timestamp
    }
}
}

  collision(car, obj) {
    console.log(obj.vx, obj.vy , obj.height, car.width)
  if (car.col < obj.vx + obj.width  && car.col + car.width  > obj.vx &&
		car.row < obj.vy + obj.height && car.row + car.height > obj.vy) {
      return true;
    }
  }

//   if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
// 		object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
// // The objects are touching

}
