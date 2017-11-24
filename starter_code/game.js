function Game(canvas) {
    this.road = new Road(canvas);
    this.car = new Car(canvas, "images/car.png");
}

Game.prototype.draw = function() {
    this.road.draw();
    this.car.draw();
    window.requestAnimationFrame(this.draw.bind(this));
}