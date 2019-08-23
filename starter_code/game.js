
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.roadWidth = this.width
        this.roadStripe = 0;
        this.height = this.canvas.height;
        this.context = this.canvas.getContext("2d");
        this.score = 0;
        this.callbacks = {
          left: () => this.car.turn("left"),
          right: () => this.car.turn("right")
        };
        this.controls = new Controls(this.callbacks);
        this.controls.setKeyBindings();
        this.obstacles = [];
        this.startTime = new Date();
        this.frameTimer = 0;
        this.reset();
      }



start() {
    this.loop(0);
}

clear () {
    this.car = new Car(this);

}

draw(dy) {
    this.drawRoad(dy);
    this.car.draw();
    
  }

loop(timestamp) {
let elapsed = (timestamp - this.framerTime) / 1000;
this.update(elapsed);
this.frameTimer = timestamp;
windows.requestAnimationFrame (this.loop(time))
}

update() {

    let dx = this.car.xvelocity;
    let dy = this.car.yvelocity;
    this.car.Xposition +=dx;
    this.roadstripe +=dy


}

reset() {
    this.car = new Car(this);
}

clear(){
    this.context.clearRect(0, 0, this.width, this.height);
}
}
