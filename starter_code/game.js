function Game(canvas) {
    this.road = new Road(canvas);
    this.car = new Car(canvas, "images/car.png");
    document.onkeydown = this.onKeyDown.bind(this);
    document.onkeyup = this.onKeyUp.bind(this);
}

Game.prototype.draw = function() {
    this.road.draw();
    this.car.draw();
    window.requestAnimationFrame(this.draw.bind(this));
}

Game.prototype.onKeyDown = function(event) {
    this.car.onKeyDown(event);
}

Game.prototype.onKeyUp = function(event) {
    this.car.onKeyUp(event);
}