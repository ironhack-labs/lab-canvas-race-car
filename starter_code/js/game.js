class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = this.$canvas.getContext('2d');

    this.controls = new Controls(this);
    // When new game instance is created keyboard bindings are initiated
    this.controls.setKeyBindings();
  }

  // Control & logic
  triggerControl (direction) {
    this.car.changeDirection(direction);
  }

  startGame() {
    this.track = new Track(this);
    this.car = new Car(this);
    this.speed = 500;
    this.loop();
  }

  runGameLogic () {
    this.car.move();
  }

  paint () {
    // this.clear();
    this.track.paintTrack();
    this.car.paintCar();
  }

  // Get some animation!
  loop () {
    setTimeout(() => {
      this.runGameLogic();
      this.paint();
      this.loop();
    }, this.speed);
  }

}