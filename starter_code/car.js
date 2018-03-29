var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Car(canvasId, image, ctx){

    this.canvas = canvasId;
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = image;

    this.w = 100;
    this.h = 250;

    this.x = this.canvas.w - this.w;
    this.y = this.canvas.h * 0,75;
    document.onkeydown = function(event) {
        var d = 5;
        switch(event.keyCode){
            case RIGHT_KEY:
             this.x +=d;
             break;
             case LEFT_KEY:
             this.x -= d;
             break;
             case TOP_KEY:
             this.y -= d;
             break;
             case BOTTOM_KEY:
             this.y += d;
             break;
        }
    }.bind(this);
}

Car.prototype.draw = function(){
    this.ctx.drawImage(this.image, 0,0, 80, 120);
};