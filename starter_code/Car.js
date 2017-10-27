// Car constructor function
function Car(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.carImage = new Image();
}

Car.prototype.setCarImage = function(board) {
    this.carImage.src = './images/car.png';
    console.log(this.carImage.src);
    this.carImage.onload = function() {
        board.ctx.drawImage(this.carImage, 275, 500, 50, 80);
    };
};

Car.prototype.move = function(keyCode) {
    switch (keycode) {
        case 37:
            this.moveLeft();
            break;
        case 39:
            this.moveRight();
            break;
        default:
            console.warn('Use only the arrow keys to control the car.');
    }
};

Car.prototype.moveLeft = function() {
    if (this.xCoordinate > 40) {
        this.xCoordinate -= 10;
    }
};

Car.prototype.moveRight = function() {
    if (this.xCoordinate < 560) {
        this.xCoordinate += 10;
    }
};
