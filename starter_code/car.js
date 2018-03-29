var RIGHT_KEY = 39;
var LEFT_KEY = 37;

function Car(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;   
    this.x = 10;
};
Car.prototype.drawCar = function() {
    this.img = new Image();
    this.img.src = 'images/car.png';
    this.img.onload = function() {
    this.ctx.drawImage(this.img, this.x, 700, 60, 120);
    }.bind(this);
};


Car.prototype.moveCar = function() {
    document.onkeydown = function(event) {
        var d = 15;
        switch (event.keyCode) {
            case RIGHT_KEY:
                this.x += d;
                break;
            case LEFT_KEY:
                this.x -= d;
                break;
        }
    }.bind(this);
};
