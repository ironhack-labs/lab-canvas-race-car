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
