var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Car(canvasId, image, ctx){

    this.canvas = canvasId;
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = image;

    this.x = 250;
    this.y = 400;


    document.onkeydown = function(event) {
        console.log(event.keyCode);
        var d = 5;
        switch(event.keyCode){
            case RIGHT_KEY:
            if(this.x >= 480){
                alert("Out of track!");
            }else{
                this.x += d;
            }
             break;
             case LEFT_KEY:
             if(this.x < 50){
                alert("Out of track!");
            }else{
             this.x -= d;
            }
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
    this.ctx.drawImage(this.image, this.x, this.y, 80, 120);
};