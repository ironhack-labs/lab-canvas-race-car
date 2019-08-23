class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.c = this.canvas.getContext('2d');
        this.car = new Car(this)
        this.road = new Road(this)
        this.timer=0
        this.SPEED=0.05
    }


startGame() {
this.loop(0)
    //window.requestAnimationFrame(this.startGame)

  }

loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.update();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp))
}

update() {
    this.c.clearRect(0,0,500,500)
    this.road.drawRoad();
    this.car.drawCar()
}
}
