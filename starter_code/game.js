class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.car = new Car(this,215, 650);
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.road = new Road(this);
        this.controls = new Controls(this);
        this.obstacles = new Obstacles(this);
    }

//when press start game
    start() {
        this.animation();
}

//method to call all my "drawing" methods
    drawEverything() {
        this.road.drawRoad();
        this.controls.setControls();
        this.car.drawCar();
        //draw all obstacles
    }
}


// Start the animation loop
//animation(timestamp) {
//    //   console.log(timestamp)
//    this.drawEverything()
//    this.updateEverything(timestamp)
//

//console.log(context);