function Car(ctx){
    this.sprite = './images/car.png';
    this.x = ctx.canvas.clientWidth/2-158/4;
    this.y = 300;
}

Car.prototype.drawCar = function(ctx){
    var img = new Image();
    var x  = this.x;
    var y  = this.y;
    img.onload = function() { 
       ctx.drawImage(img,x,y, img.width/2, img.height/2); 
    };
    img.src = this.sprite;
}

Car.prototype.move = function(key,ctx){
    //Right
    if( key === 'ArrowRight' && this.x < ctx.canvas.clientWidth-5){
        this.x += 5;
    }
    //Left
    if( key === 'ArrowLeft' && this.x > 5){
        this.x -= 5;
    }
}