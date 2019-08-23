class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.road = new Road(this);
    this.timer=0;
    this.SPEED=300;
    this.control = new Control(this.callbacks);
    this.control.setKeyBindings();
    this.callbacks = {
      // right: () => this.snake.changeDirection('right'),
      // left: () => this.snake.changeDirection('left')
    };
  }
    start () {
      this.loop(0);
    }
    loop (timestamp) {
      if (this.timer < timestamp - this.SPEED) {
        this.update();
        this.timer = timestamp;
      }
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
    update(){
      this.paint();
    }
    paint(){
      this.road.paint();
      this.car.paint();
    }
 }