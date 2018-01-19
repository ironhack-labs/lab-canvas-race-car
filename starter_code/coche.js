function CarToGo(){
    this.posX= 225;
    this.posY= 625;
    this.moveLeft = function(){
        if(this.posX > 50)
        this.posX -= 15;
    };
    this.moveRight = function(){
        if(this.posX < 245)
        thisposX += 15;
    };
}

CarToGo.prototype.moving = function(canvas){
    var img = new Image();
    img.src = 'images/car.png';
    img.onload = function() {
    canvas.ctx.drawImage(img,this.posX,this.posY,40,80);
    };bind(this);
    
}


// CarToGo.prototype.draw = function(){
//     var img = new Image();
//     imgScale = 300/600;
//     img.onload = function() {
//     ctx.drawImage(img, 215, 600,150*imgScale,150);
//     };
//     img.src = 'images/car.png';
//     }
