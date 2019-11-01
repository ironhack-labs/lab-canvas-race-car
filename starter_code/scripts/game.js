const HEIGHT = 600
//const obstacles = new Obstacles() 

class Game {
  constructor($canvas) {
    this.$canvas = $canvas
    this.context = this.$canvas.getContext('2d');
    this.fastCar = new Car(this);
    this.controls = new Controls(this);
    this.controls.setKeyBindings();
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.background = new Background(this);
    //this.obstables = new Obstacles(this);
    this.obstacles = [];
    this.speed= 3000;
    this.obstacleTimer = 0
  }

  animation(timestamp) {
    this.drawEverything()
    this.updateEverything(timestamp)
    window.requestAnimationFrame((timestamp) => this.animation(timestamp));
  }

  drawEverything() {
    this.clearAll () 
    this.background.paintRoad();
    //this.fastCar.drawCar();
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }  
    this.fastCar.drawCar();

  }

  updateEverything(timestamp) {
    this.background.update();
    //this.fastCar.update();

    if(this.obstacleTimer < timestamp - this.speed){
      this.obstacles.push(new Obstacles(this))
      this.obstacleTimer = timestamp
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].update();
    }  
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      if (this.obstacles[i].y > 610) {
      this.obstacles.splice(i, 1);
      }
    }
/*     for (let i = this.obstacles.length - 1; i >= 0; i--) {
      if (this.obstacles.checkCollision(this.fastCar.y, this.obstacles[i].y)) {
    //this.obstacles.splice(i, 1);
    alert('BOOM')
  }
}   */
}

  startGame() {
    this.animation();
  }

  clearAll () {
    this.context.clearRect(0, 0, this.width, this.height);
  }

}