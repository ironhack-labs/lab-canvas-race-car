class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.height = this.$canvas.height;
    this.width = this.$canvas.width;
    this.controls = new Controls(this);
    this.controls.setKeyBindings();
    this.car = new Car(this);
    this.road = new Road(this);
    this.obstacle = new Obstacle (this);
  }

  clear () {
    this.context.clearRect(0, 0, this.width, this.height);
  }
   
  paintEverything () {
    this.clear();
    this.road.paint();
    this.car.paint();
    this.obstacle.paint();
  }

  start () {
    this.paintEverything();
  }

  animation (timestamp) {
    this.paintEverything();
    this.updateEverything(timestamp);
    window.requestAnimationFrame(timestamp => this.animation(timestamp));
  }

  updateEverything (timestamp) {
    this.road.update();
    this.car.update();
    if (this.obstacleTimer < timestamp - 2000) {
      this.obstacle.push(new Obstacle (this));
      this.obstacleTimer = timestamp;
    }
  }

}
