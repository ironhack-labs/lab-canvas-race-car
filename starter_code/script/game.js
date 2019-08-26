class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.road = new Road (this);
        this.car = new Car (this);
    
    }
    paint () {
        this.road.paint();
        this.car.paint();
    
      }

}