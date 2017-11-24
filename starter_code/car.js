var DOWN_KEY = 40;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;

function Car(canvas, sprite) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    // Initial position
    this.x = 125;
    this.y = 450;
    this.scale = 0.3;
    this.speed = 10;

    this.sprite = new Image();
    this.sprite.src = sprite;
    this.sprite.onload = (function() {
        this.sprite.isReady = true;
        this.width = Math.floor(this.sprite.width * this.scale);
        this.height = Math.floor(this.sprite.height * this.scale);
      }).bind(this);
}

Car.prototype.draw = function() {
    if (this.isReady()) {
        this.ctx.save();
        this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        this.ctx.save();
    }
}

Car.prototype.isReady = function() {
    return this.sprite.isReady;
  }

Car.prototype.onKeyDown = function(event) {
    console.log(event.keyCode);
    switch(event.keyCode) {
        case DOWN_KEY:
            this.moveDown();
            break;
        case LEFT_KEY:
            this.moveLeft();
            break;
        case RIGHT_KEY:
            this.moveRight();
            break;
        case UP_KEY:
            this.moveUp();
            break;
        default:
    }
}

Car.prototype.onKeyUp = function(event) {

}

Car.prototype.moveLeft = function() {
    // car 50x100
    // green road x = 0 - 20
    // green road right x = 280 - 300
    //if()
    this.x -= this.speed;
}

Car.prototype.moveRight = function() {
    this.x += this.speed;
}

Car.prototype.moveUp = function() {
    this.y -= this.speed;
}

Car.prototype.moveDown = function() {
    this.y += this.speed;
}