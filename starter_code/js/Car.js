// Car constructor function
function Car(x, y) {
    this.x = x ? x : 275;
    this.y = y ? y : 490;
    this.scale = (158/319);
    this.height = 100;
    this.width = this.height * this.scale;
}

Car.prototype.setCarImage = function(board) {
    var img = new Image();
    img.src = "./images/car.png";
    img.onload = function() {
      board.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }.bind(this);
};

Car.prototype.move = function(keyCode) {
    switch (keyCode) {
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
    if (this.x > 40) {
        this.x -= 10;
    }
};

Car.prototype.moveRight = function() {
    if (this.x < 560) {
        this.x += 10;
    }
};
